import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaChevronDown } from "react-icons/fa";
import {
  faCaretDown,
  faCheckCircle,
  faCircle,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import UccLogo from "/ucc.png";
import { useState, useEffect } from "react";

export default function AdminPage() {
  const [professor, setProfessor] = useState([
    { img: null, name: "Jan Ivan Montenegro", course: "Database Management" },
  ]);

  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const [schedule, setSchedules] = useState([
    { day: "Mon", time: "10:00AM to 12:00PM", status: true },
    { day: "Tue", time: "1:00PM to 3:00PM", status: true },
    { day: "Wed", time: "8:00AM to 10:00AM", status: true },
    { day: "Fri", time: "11:00AM to 5:00PM", status: false },
  ]);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:3002");
    const token = localStorage.getItem("token");

    ws.onopen = () => {
      console.log("WebSocket connection established");
      ws.send(JSON.stringify({ type: "fetch_students", token }));
      ws.send(JSON.stringify({ type: "fetch_teacher", token })); 
    };

    ws.onmessage = (event) => {
      const response = JSON.parse(event.data);

      if (response.type === "students_data") {
        const formattedStudents = response.data.map((student) => ({
          name: `${student.first_name} ${student.middle_name || ""} ${
            student.last_name
          }`.trim(),
          studentNumber: student.studentNumber,
          status: true,
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
      } else if (response.type === "error") {
        setError(response.message);
        setIsLoading(false);
      }
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
      setError("Failed to connect to server");
      setIsLoading(false);
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed");
    };

    return () => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.close();
      }
    };
  }, []);

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.studentNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Database Management Systems");
  const options = [
    "Database Management Systems",
    "Web Development",
    "Algorithms",
    "Computer Networks",
  ];

  return (
    <section className="flex flex-col justify-start items-center w-4/5 h-screen overflow-x-hidden overflow-y-auto">
      <div
        className="flex justify-between items-center w-full gap-10 p-2"
        style={{ minHeight: "100%", height: "auto" }}
      >
        <div className="flex flex-col w-2/5 h-full bg-white rounded-2xl">
          <div className="flex justify-center items-center w-auto h-1/4 m-4">
            <div className="flex rounded-full h-26 w-26 border-2 border-emerald-800 overflow-hidden">
              <img
                src={
                  professor.length > 0 && professor[0].img
                    ? professor[0].img
                    : UccLogo
                }
                alt="Professor"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col items-center px-2 justify-center h-full w-2/3">
              <h1 className="w-full text-start text-md font-semibold">
                {professor.length > 0
                  ? professor[0].name
                  : "Jan Ivan Montenegro"}
              </h1>
              <p className="text-sm w-full text-start">
                {professor.length > 0
                  ? professor[0].course
                  : "Database Management"}
              </p>
            </div>
          </div>

          <div className="flex flex-col h-full w-full justify-start items-center">
            <h1 className="flex w-8/9 justify-start items-center font-semibold">
              Registered Subject:
            </h1>
            <div className="flex justify-between items-center bg-blue-950 mx-4 w-9/10 h-16 rounded-2xl m-2 relative cursor-pointer hover:bg-blue-400 transition-all duration-300">
              <button
                className="flex justify-between gap-10 px-4 items-center w-full h-full text-white rounded-lg cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                {selected}
                <FaChevronDown
                  className={`transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <ul className="absolute w-full mt-1 bg-white shadow-md rounded-md overflow-hidden top-15 border">
                  {options.map((option) => (
                    <li
                      key={option}
                      className="px-4 py-2 text-black cursor-pointer hover:bg-gray-400 transition-all duration-200"
                      onClick={() => {
                        setSelected(option);
                        setIsOpen(false);
                      }}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {/* <div className="flex justify-between items-center bg-blue-950 mx-4 w-9/10 h-16 rounded-2xl m-2">
              <h1 className="flex justify-start items-center text-xl mx-2 text-white">
                Database Management Systems
              </h1>
              <FontAwesomeIcon
                className="flex w-10 text-white"
                icon={faCaretDown}
              />
            </div> */}

            <h1 className="flex w-8/9 justify-start items-center font-semibold">
              Schedule:
            </h1>

            {schedule.map((item, index) => (
              <div
                className="flex justify-between items-center bg-blue-300 mx-4 w-9/10 h-14 rounded-2xl m-2"
                key={index}
              >
                <FontAwesomeIcon
                  className="flex w-16 text-2xl text-black"
                  icon={item.status ? faCheckCircle : faCircle}
                />
                <h1 className="flex justify-start items-center w-full text-md mx-2 text-black">
                  {item.day} - {item.time}
                </h1>
              </div>
            ))}
          </div>
        </div>

        {/* Students List Section */}
        <div className="flex flex-col justify-start items-center w-3/5 h-full gap-8 rounded-2xl overflow-hidden">
          <div className="flex items-center justify-center w-full h-1/5 p-4 bg-blue-950 rounded-2xl">
            <div className="flex flex-col justify-center items-start w-3/5 h-full">
              <h1 className="flex w-full h-auto text-white text-xl">
                Enrolled Students
              </h1>
              <p className="flex w-full h-auto text-white text-xl">
                Bachelors In Information and Technology
              </p>
            </div>
            <div className="flex justify-center items-center w-2/5 h-full relative">
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
            <div className="flex justify-center items-center h-16 w-full bg-zinc-800">
              <h1 className="w-1/6 text-center text-white">Student No</h1>
              <h1 className="w-1/2 text-center text-white">Student Name</h1>
              <h1 className="w-1/6 text-center text-white">Attendance</h1>
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
                    className="flex justify-center items-center h-10 w-full even:bg-gray-100"
                  >
                    <h1 className="w-1/6 text-center text-black">
                      {student.studentNumber}
                    </h1>
                    <h1 className="w-1/2 text-center text-black truncate px-2">
                      {student.name}
                    </h1>
                    <h1 className="w-1/6 text-center text-black">
                      <FontAwesomeIcon
                        icon={student.status ? faCheckCircle : faCircle}
                        className={
                          student.status ? "text-green-500" : "text-gray-300"
                        }
                      />
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
