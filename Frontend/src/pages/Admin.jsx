import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCheckCircle, faCircle, faSearch } from '@fortawesome/free-solid-svg-icons'
import UccLogo from '/ucc.png'
import { useState } from 'react'


export default function AdminPage() {

	// All alterable depending on the logic
	const [professor, setProfessor] = useState([
		{ img: null, name: "Jan Ivan Montenegro", course: "Database Management"}
	]);
	const [students, setStudents] = useState([
		{ name: "Matthew Gabriel Cania", studentNumber: "20231104-N", status: true},
		{ name: "Lebron James", studentNumber: "20231124-N", status: true},
		{ name: "Ezra Rizzler", studentNumber: "20231124-N", status: true},
		{ name: "JVincent Batumbakal", studentNumber: "20231124-N", status: false},
	  ]);

	const [schedule, setSchedules] = useState([
		{ day: "Mon", time: "10:00AM to 12:00PM", status: true },
		{ day: "Tue", time: "1:00PM to 3:00PM", status: true },
		{ day: "Wed", time: "8:00AM to 10:00AM", status: true },
		{ day: "Fri", time: "11:00AM to 5:00PM", status: false }
	  ]);



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
							className='flex rounded-full h-26 w-26 border-2 border-emerald-800 overflow-hidden'
						>
							<img src={professor.length > 0 && professor[0].img ? professor[0].img : UccLogo} alt="" />
						</div>
						<div
							className='flex flex-col items-center px-2 justify-center h-full w-2/3'
						>
							<h1
								className='w-full text-start text-md font-semibold'
							>
								{professor.length > 0 ? professor[0].name : "Jan Ivan Montenegro"}
							</h1>
							<p
								className='text-sm w-full text-start'
							>
								{professor.length > 0 ? professor[0].course : "Database Management"}
							</p>
						</div>

					</div>

					<div
						className='flex flex-col h-full w-full justify-start items-center'
					>
						<h1
							className='flex w-8/9 justify-start items-center font-semibold'
						>
							Registered Subject:
						</h1>

						{/* Bound to be changed when datas are properly created (Custom Selection sucks) */}
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

						{schedule.length > 0 && schedule.map((item, index) => (
							<div
								className='flex justify-between items-center bg-blue-300 mx-4 w-9/10 h-14 rounded-2xl m-2'
								key={index}
							>
								<FontAwesomeIcon
									className='flex w-16 text-2xl text-black'
									icon={item.status ? faCheckCircle : faCircle}
								/>
								<h1
									className='flex justify-start items-center w-full text-md mx-2 text-black'
								>
									{item.day} - {item.time}
								</h1>
							</div>
						))}
					</div>
				</div>


				<div
					className="flex flex-col justify-start items-center w-3/5 h-full rounded-2xl overflow-hidden"
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
								Bachelors In Information and Technology
							</p>
						</div>
						<div
							className='flex justify-center items-center w-2/5 h-full relative'
						>
							<input
								className='flex h-10 w-full rounded-xl border border-gray-600 text-white placeholder-gray-400 pl-8'
								placeholder='Search...'
								type="text"
							/>
							<FontAwesomeIcon
								className='flex justify-center items-center text-gray-400 absolute left-0 px-2'
								icon={faSearch} />
						</div>
					</div>

					<div
						className='flex flex-col justify-start items-center w-full h-full overflow-hidden rounded-2xl'
					>
						<div
							className='flex justify-center items-center h-16 w-full bg-zinc-800'
						>
							<h1
								className='w-6 text-center text-white'
							>
								#
							</h1>
							<h1
								className='w-1/2 text-center text-white'
							>
								Student Name
							</h1>
							<h1
								className='w-1/4 text-center text-white'
							>
								Student No
							</h1>
							<h1
								className='w-1/6 text-center text-white'
							>
								Attendance
							</h1>
						</div>
						<div
							className='flex flex-col w-full h-full bg-white'
						>
							{students.map((item, index) => (

								
								<div
								key={index}
								className='flex justify-center items-center h-10 w-full'
								>
								<h1
									className='w-6 text-center text-black'
									>
									{index +1}
								</h1>
								<h1
									className='w-1/2 text-center text-black'
									>
									{item.name}
								</h1>
								<h1
									className='w-1/4  text-center text-black'
									>
									{item.studentNumber}
								</h1>
								<h1
									className='w-1/6 text-center text-black'
								>
									<FontAwesomeIcon icon={item.status ? faCheckCircle : faCircle} />
								</h1>
							</div>
							))}
						</div>
					</div>

				</div>


			</div>
		</section>
	)

}