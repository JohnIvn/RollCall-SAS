import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCheckCircle, faCircle, faSearch } from '@fortawesome/free-solid-svg-icons'
import UccLogo from '/ucc.png'
import { useState } from 'react';

export default function StudentsPage() {

	const [students, setStudents] = useState([
		{ name: "Matthew Gabriel Cania", studentNumber: "20231104-N", status: true },
		{ name: "Lebron James", studentNumber: "20231124-N", status: true },
		{ name: "Ezra Rizzler", studentNumber: "20231124-N", status: true },
		{ name: "JVincent Batumbakal", studentNumber: "20231124-N", status: false },
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
										{index + 1}
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