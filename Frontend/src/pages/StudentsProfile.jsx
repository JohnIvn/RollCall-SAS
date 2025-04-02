import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCheckCircle, faSearch } from '@fortawesome/free-solid-svg-icons'
import Spinner from '../components/Spinner'
import UccLogo from '/ucc.png'
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale } from "chart.js";
import { useNavigate } from 'react-router-dom';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);


export default function StudentsProfile() {
	const [student, setStudents] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [id, setId] = useState(null);
	const navigate = useNavigate()

	useEffect(() => {
		const storedId = localStorage.getItem("student_id");
		if (!storedId) {
			setError("No student ID found in localStorage");
			setIsLoading(false);
			return;
		}
		setId(storedId);
		const ws = new WebSocket("ws://localhost:3002");

		ws.onopen = () => {
			console.log("WebSocket connection established");
			ws.send(
				JSON.stringify({
					type: "fetch_student_by_id",
					data: storedId
				})
			);
		};

		ws.onmessage = (event) => {
			const response = JSON.parse(event.data);
			if (response.type === "student_data") {
				setStudents(response.data);
				console.log(response)
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


	const data = {
		labels: ["January", "February", "March", "April", "May", "June", "July"],
		datasets: [
			{
				label: "Attendance",
				data: [21, 24, 18, 23, 17, 6, 0],
				borderColor: "blue",
				backgroundColor: "rgba(0, 0, 255, 0.2)",
				tension: 0.4,
			},
		],
	};

	const options = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: false,
			},
		},
	};

	return (
		student ? (

			<section
				className="flex flex-col justify-start items-center w-full lg:w-4/5 h-screen overflow-x-hidden overflow-y-auto"
			>
				<div
					className="flex flex-col lg:flex-row justify-between items-center w-full gap-10 p-2 pt-12"
					style={{ minHeight: "100%", height: 'auto' }}
				>
					<div
						className="flex flex-col justify-start items-center w-full lg:w-1/2 h-full rounded-2xl gap-4"
					>
						<div
							className='flex flex-col justify-center items-center w-full h-1/2 bg-white rounded-2xl'
						>
							<div
								className='flex justify-center items-center w-full lg:w-3/4 h-1/2 '
							>
								<div
									className='flex rounded-full h-40 w-40 border-2 border-emerald-800 overflow-hidden'
								>
									<img src={UccLogo} alt="" />
								</div>
								<div
									className='flex flex-col items-center px-2 justify-center p-4 w-1/2 lg:w-auto'
								>
									<h1
										className='w-full text-start text-lg lg:text-2xl font-semibold'
									>
										{student.first_name} {student.middle_name} {student.last_name}
									</h1>

									<p
										className='text-md lg:text-xl w-full text-start'
									>
										{student.studentNumber}
									</p>
								</div>

							</div>

							<div
								className='flex flex-col h-1/3 p-4 w-5/6 lg:w-3/4 justify-start items-center '
							>
								<h1
									className='flex justify-start items-center w-full text-xl mx-2 text-black'
								>
									Year: {student.year} | Section: {student.section}
								</h1>
								
								<h1
									className='flex justify-start items-center w-full text-md mx-2 text-black'
								>
									Currently Enrolled in Bachelors Science in Information Technology
								</h1>
							</div>

						</div>
						<div
							className='flex flex-col justify-start items-center w-full h-1/2 bg-white rounded-2xl'
						>
							<div
								className='flex justify-center items-center h-16 w-full border-b-1'
							>
								<h1
									className='flex justify-start items-center text-xl lg:text-3xl w-8/9 text-center text-black'
								>
									Attendance Analytics
								</h1>
							</div>
							<div
								className='flex w-8/9 h-3/4 lg:h-full'
							>
								<Line data={data} options={options} />
							</div>
						</div>

					</div>

					<div
						className="flex flex-col w-full lg:w-1/2 h-full bg-white rounded-2xl"
					>
						<div
							className='flex justify-center items-center h-16 w-full border-b-1'
						>
							<h1
								className='flex justify-start items-center text-xl lg:text-3xl w-8/9 text-center text-black'
							>
								Student Attendance
							</h1>
						</div>

						<div
							className='flex flex-col justify-start items-center h-full w-full'
						>

							<h1
								className='flex w-8/9 justify-start items-center text-lg lg:text-xl font-semibold'
							>
								Scheduled Course:
							</h1>

							<div
								className='flex justify-between items-center bg-blue-950 mx-4 w-9/10 h-16 rounded-2xl m-2'
							>
								<h1
									className='flex justify-start items-center text-xl mx-2 text-white'
								>
									Database Management Systems
								</h1>
								<FontAwesomeIcon
									className='flex w-10 text-white'
									icon={faCaretDown} />
							</div>

							<h1
								className='flex w-8/9 justify-start items-center font-semibold'
							>
								Schedule:
							</h1>

							<div
								className='flex justify-between items-center bg-blue-300 mx-4 w-9/10 h-14 rounded-2xl m-2'
							>
								<FontAwesomeIcon
									className='flex w-16 text-2xl text-black'
									icon={faCheckCircle}
								/>
								<h1
									className='flex justify-start items-center w-full text-md mx-2 text-black'
								>
									Mon -  10:00AM to 12:00PM
								</h1>
							</div>
							<div
								className='flex justify-between items-center bg-blue-300 mx-4 w-9/10 h-14 rounded-2xl m-2'
							>
								<FontAwesomeIcon
									className='flex w-16 text-2xl text-black'
									icon={faCheckCircle}
								/>
								<h1
									className='flex justify-start items-center w-full text-md mx-2 text-black'
								>
									Tue -  1:00PM to 4:00PM
								</h1>
							</div>
							<div
								className='flex justify-between items-center bg-blue-300 mx-4 w-9/10 h-14 rounded-2xl m-2'
							>
								<FontAwesomeIcon
									className='flex w-16 text-2xl text-black'
									icon={faCheckCircle}
								/>
								<h1
									className='flex justify-start items-center w-full text-md mx-2 text-black'
								>
									Wed -  1:00PM to 5:00PM
								</h1>
							</div>
							<div
								className='flex justify-between items-center bg-blue-300 mx-4 w-9/10 h-14 rounded-2xl m-2'
							>
								<FontAwesomeIcon
									className='flex w-16 text-2xl text-black'
									icon={faCheckCircle}
								/>
								<h1
									className='flex justify-start items-center w-full text-md mx-2 text-black'
								>
									Wed -  5:00PM to 7:00PM
								</h1>
							</div>
							<div
								className='flex justify-between items-center bg-blue-300 mx-4 w-9/10 h-14 rounded-2xl m-2'
							>
								<FontAwesomeIcon
									className='flex w-16 text-2xl text-black'
									icon={faCheckCircle}
								/>
								<h1
									className='flex justify-start items-center w-full text-md mx-2 text-black'
								>
									Sat -  7:00AM to 12:00PM
								</h1>
							</div>
						</div>

					</div>

				</div>
			</section>
		)
			:
			(
				<Spinner />
			)
	)

}