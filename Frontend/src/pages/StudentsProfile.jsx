import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCheckCircle, faSearch } from '@fortawesome/free-solid-svg-icons'
import UccLogo from '/ucc.png'
import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale } from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);


export default function StudentsProfile() {

	const data = {
		labels: ["January", "February", "March", "April", "May", "June", "July"],
		datasets: [
			{
				label: "Sales",
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
		<section
			className="flex flex-col justify-start items-center w-4/5 h-screen overflow-x-hidden overflow-y-auto"
		>
			<div
				className="flex justify-between items-center w-full gap-10 p-2"
				style={{ minHeight: "100%", height: 'auto' }}
			>
				<div
					className="flex flex-col w-2/5 h-full bg-white rounded-2xl"
				>

					<div
						className='flex justify-center items-center w-auto h-1/4 m-4'
					>

						<div
							className='flex rounded-full h-32 w-32 border-2 border-emerald-800 overflow-hidden'
						>
							<img src={UccLogo} alt="" />
						</div>
						<div
							className='flex flex-col items-center px-2 justify-center h-full w-2/3'
						>
							<h1
								className='w-full text-start text-xl font-semibold'
							>
								Matthew Gabriel M. Cania
							</h1>
							<p
								className='text-md w-full text-start'
							>
								20231104-N
							</p>
						</div>

					</div>

					<div
						className='flex flex-col h-full w-full justify-start items-center'
					>
						<div
							className='flex justify-between items-center bg-blue-950 mx-4 w-9/10 h-1/4 p-4 rounded-2xl m-2'
						>
							<h1
								className='flex justify-start items-center text-xl mx-2 text-white'
							>
								Currently Enrolled in Bachelors Science in Information Technology
							</h1>
						</div>
						<div
							className='flex justify-between items-center bg-blue-950 mx-4 w-9/10 h-1/4 rounded-2xl m-2'
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
						<div
							className='flex justify-between items-center bg-blue-950 mx-4 w-9/10 h-1/4 rounded-2xl m-2'
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
					</div>

				</div>


				<div
					className="flex flex-col justify-start items-center w-3/5 h-full rounded-2xl gap-4"
				>
					<div
						className='flex flex-col justify-start items-center w-full h-4/7 bg-white rounded-2xl'
					>
						<div
							className='flex justify-center items-center h-16 w-full border-b-1'
						>
							<h1
								className='flex justify-start items-center text-3xl w-8/9 text-center text-black'
							>
								Student Attendance
							</h1>
						</div>

						<div
							className='flex flex-col justify-start items-center h-full w-full'
						>

							<h1
								className='flex w-8/9 justify-start items-center text-xl font-semibold'
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
									Mon -  10:00AM to 12:00PM
								</h1>
							</div>
						</div>
					</div>
					<div
						className='flex flex-col justify-start items-center w-full h-3/7 bg-white rounded-2xl'
					>
						<div
							className='flex justify-center items-center h-16 w-full border-b-1'
						>
							<h1
								className='flex justify-start items-center text-3xl w-8/9 text-center text-black'
							>
								Attendance Analytics
							</h1>
						</div>
						<div
							className='flex w-8/9 h-full'
						>
							<Line data={data} options={options} />
						</div>
					</div>

				</div>


			</div>
		</section>
	)

}