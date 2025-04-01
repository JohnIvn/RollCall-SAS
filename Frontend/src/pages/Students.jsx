import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCheckCircle, faCircle, faSearch } from '@fortawesome/free-solid-svg-icons'
import UccLogo from '/ucc.png'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function StudentsPage() {
	const [students, setStudents] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		const ws = new WebSocket("ws://localhost:3002");

		ws.onopen = () => {
			console.log("WebSocket connection established");
			ws.send(
				JSON.stringify({
					type: "fetch_students",
				})
			);
		};

		ws.onmessage = (event) => {
			const response = JSON.parse(event.data);

			if (response.type === "students_data") {
				const formattedStudents = response.data.map((student) => ({
					userId: student.userId,
					name: `${student.first_name} ${student.middle_name || ""} ${student.last_name
						}`.trim(),
					studentNumber: student.studentNumber,
					status: true,
				}));
				setStudents(formattedStudents);
				setIsLoading(false);
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

	const navigate = useNavigate()
	const navigateStudentProfile = (id) => {
		localStorage.setItem("student_id", id);
		console.log("ID: " + localStorage.getItem("student_id"))
		navigate('/admin/students/profile')
	}


	const filteredStudents = students.filter(
		(student) =>
			student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			student.studentNumber.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<section
			className="flex flex-col justify-start items-center w-4/5 h-screen overflow-x-hidden overflow-y-auto"
		>
			<div
				className="flex justify-between items-center w-full gap-10 p-2 pt-12"
				style={{ minHeight: "100%", height: 'auto' }}
			>
				<div
					className="flex flex-col justify-start items-center w-full h-full rounded-2xl overflow-hidde"
				>

					<div
						className='flex items-center justify-center w-full h-1/5 p-4'
					>
						<div
							className='flex flex-col justify-center items-start w-3/5 h-full'
						>
							<h1
								className='flex w-full h-auto text-white text-xl'
							>
								Enrolled Students
							</h1>
							<p
								className='flex w-full h-auto text-white text-xl'
							>
								University of Caloocan City
							</p>
						</div>
						<div
							className='flex justify-center items-center w-2/5 h-full relative'
						>
							<input
								className='flex h-10 w-full rounded-xl border border-gray-600 text-white placeholder-gray-400 pl-8'
								placeholder='Search...'
								type="text"
                				value={searchTerm}
                				onChange={(e) => setSearchTerm(e.target.value)}
							/>
							<FontAwesomeIcon
								className='flex justify-center items-center text-gray-400 absolute left-0 px-2'
								icon={faSearch} />
						</div>
					</div>

					<div
						className='flex flex-col justify-start items-center w-full h-full overflow-hidden rounded-2xl'
					>
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
									<button
										className="flex justify-center items-center h-10 w-full outline-0 text-black hover:text-white hover:bg-gray-600 transition-all
										duration-300 cursor-pointer"
										key={index}
										onClick={() => navigateStudentProfile(student.userId)}
									>
										<h1 className="w-1/6 text-center">
											{student.studentNumber}
										</h1>
										<h1 className="w-1/2 text-center truncate px-2">
											{student.name}
										</h1>
										<h1 className="w-1/6 text-center">
										<FontAwesomeIcon
                          icon={student.attendance ? faCheckCircle : faCircle}
                          className={`${
                            student.attendance
                              ? "text-green-500"
                              : "text-gray-500"}`
                          }
                        />
										</h1>
									</button>
								))
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	)

}