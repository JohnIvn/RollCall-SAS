import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faCircle,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import UccLogo from "/ucc.png";

export default function AdminPage() {
  const [professor, setProfessor] = useState([
    { img: null, name: "Jan Ivan Montenegro", course: "Database Management" },
  ]);
  const [students, setStudents] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState(null);
  const wsRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    wsRef.current = new WebSocket("ws://localhost:3002");

    wsRef.current.onopen = () => {
      console.log("WebSocket connection established");
      wsRef.current.send(JSON.stringify({ type: "fetch_students", token }));
      wsRef.current.send(JSON.stringify({ type: "fetch_teacher", token }));
      wsRef.current.send(JSON.stringify({ type: "fetch_schedule", token }));
    };

    wsRef.current.onmessage = (event) => {
      const response = JSON.parse(event.data);

      if (response.type === "students_data") {
        const formattedStudents = response.data.map((student) => ({
          name: `${student.first_name} ${student.middle_name || ""} ${
            student.last_name
          }`.trim(),
          studentNumber: student.studentNumber,
          cardNumber: student.cardNumber,
          attendance: null,
        }));
        setStudents(formattedStudents);
        setIsLoading(false);
      } else if (response.type === "teacher_data") {
        setProfessor([
          {
            img: response.data.img,
            name: response.data.name,
            course: response.data.course,
          },
        ]);
      } else if (response.type === "schedule") {
        setSchedule(response.schedule);
      } else if (response.type === "subjectAttendance") {
        setStudents((prevStudents) =>
          prevStudents.map((student) => ({
            ...student,
            attendance: response.data.attendance.some(
              (record) => record.cardNumber === student.cardNumber
            ),
          }))
        );
      } else if (response.type === "error") {
        setError(response.message);
        setIsLoading(false);
      }
    };

    wsRef.current.onerror = (error) => {
      console.error("WebSocket error:", error);
      setError("Failed to connect to server");
      setIsLoading(false);
    };

    wsRef.current.onclose = () => {
      console.log("WebSocket connection closed");
    };

    return () => {
      if (wsRef.current?.readyState === WebSocket.OPEN) {
        wsRef.current.close();
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleSubjectClick = (subjectItem) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setSelectedSubject(subjectItem);

    fetchAttendance(subjectItem);

    intervalRef.current = setInterval(() => {
      fetchAttendance(subjectItem);
    }, 1000);
  };

  const fetchAttendance = (subjectItem) => {
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      const token = localStorage.getItem("token");
      wsRef.current.send(
        JSON.stringify({
          type: "fetch_attendance",
          subject: subjectItem.subject,
          token,
        })
      );
    }
  };

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.studentNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="flex flex-col justify-start items-center w-full h-screen overflow-x-hidden overflow-y-auto">
      <div
        className="lg:flex lg:flex-row flex-col justify-between items-center w-full lg:w-4/5 gap-10 p-2 pt-12"
        style={{ minHeight: "100%", height: "auto" }}
      >
        {/* Professor Card */}
        <div className="flex flex-col w-full lg:w-2/5 h-2/3 lg:h-full bg-white rounded-2xl p-4">
          <div className="flex flex-col justify-center items-center w-auto h-1/2">
            <div className="flex rounded-full h-40 w-40 border-2 border-emerald-800 overflow-hidden">
              <img
                src={professor[0]?.img || UccLogo}
                alt="Professor"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col items-center px-2 justify-center p-2 lg:p-8 w-3/4">
              <h1 className="w-full text-start text-lg lg:text-2xl font-semibold">
                {professor[0]?.name || "Jan Ivan Montenegro"}
              </h1>
              <p className="text-md lg:text-xl w-full text-start">
                {professor[0]?.course || "Currently Undefined"}
              </p>
            </div>
          </div>

          {/* Schedule Section */}
          <h1 className="flex w-8/9 justify-start lg:ml-4 items-center font-semibold ">
            Schedule:
          </h1>
          {schedule.length === 0 ? (
            <p className="text-center text-gray-500">No schedule available</p>
          ) : (
            schedule.map((item, index) => (
              <div
                className="flex justify-between items-center bg-blue-300 mx-4 w-9/10 h-14 rounded-2xl m-2 cursor-pointer hover:bg-blue-400"
                key={index}
                onClick={() => handleSubjectClick(item)}
              >
                <FontAwesomeIcon
                  className="flex w-16 text-2xl text-black"
                  icon={item.status ? faCheckCircle : faCircle}
                />
                <div className="flex flex-col w-full">
                  <h1 className="text-md mx-2 text-black">
                    {item.day} - {item.time}
                  </h1>
                  <p className="text-sm mx-2 text-black">{item.subject}</p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Students List */}
        <div className="flex flex-col justify-start items-center w-full lg:w-3/5 h-full gap-8 mt-10 lg:m-0 rounded-2xl overflow-hidden">
          <div className="flex items-center justify-center w-full h-1/5 p-4 bg-blue-950 rounded-2xl">
            <div className="flex flex-col justify-center items-start w-1/2 lg:w-3/5 h-full">
              <h1 className="flex w-full h-auto text-white text-lg lg:text-xl">
                Attendance
              </h1>
              <p className="flex w-full h-auto text-white text-sm">
                {selectedSubject
                  ? `${selectedSubject.subject} - ${selectedSubject.day} (${selectedSubject.time})`
                  : "No schedule selected"}
              </p>
            </div>
            <div className="flex justify-center items-center w-1/2 lg:w-2/5 h-full relative">
              <input
                className="flex h-10 w-full rounded-xl border border-gray-600 text-white placeholder-gray-400 pl-8"
                placeholder="Search..."
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FontAwesomeIcon
                className="flex justify-center items-center text-gray-400 absolute left-0 px-2"
                icon={faSearch}
              />
            </div>
          </div>

          <div className="flex flex-col justify-start items-center w-full h-full overflow-hidden rounded-2xl">
            {/* Table Header */}
            <div className="flex justify-center items-center px-2 lg:p-0 h-16 w-full bg-zinc-800">
              <h1 className="w-1/4 lg:w-1/6 text-center text-white text-md lg:text-lg">Student No</h1>
              <h1 className="w-1/2 lg:w-1/2 text-center text-white text-md lg:text-lg">Student Name</h1>
              <h1 className="w-1/4 lg:w-1/6 text-center text-white text-md lg:text-lg">Attendance</h1>
            </div>

            {/* Table Body */}
            <div className="flex flex-col w-full h-full bg-white overflow-y-auto">
              {isLoading ? (
                <div className="flex justify-center items-center h-full">
                  <p>Loading students data...</p>
                </div>
              ) : error ? (
                <div className="flex justify-center items-center h-full text-red-500">
                  <p>{error}</p>
                </div>
              ) : filteredStudents.length === 0 ? (
                <div className="flex justify-center items-center h-full">
                  <p>No students found</p>
                </div>
              ) : (
                filteredStudents.map((student, index) => (
                  <div
                    key={index}
                    className="flex justify-center items-center h-10 px-2 lg:p-0 w-full even:bg-gray-100"
                  >
                    <h1 className="w-1/4 lg:w-1/6 text-center text-sm lg:text-lg text-black">
                      {student.studentNumber}
                    </h1>
                    <h1 className="w-1/2 text-center text-black truncate text-sm lg:text-lg px-2">
                      {student.name}
                    </h1>
                    <h1 className="w-1/4 lg:w-1/6 text-center text-black text-sm">
                      {student.attendance === null ? (
                        "Click a subject"
                      ) : (
                        <FontAwesomeIcon
                          icon={student.attendance ? faCheckCircle : faCircle}
                          className={
                            student.attendance
                              ? "text-green-500"
                              : "text-gray-300"
                          }
                        />
                      )}
                    </h1>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
