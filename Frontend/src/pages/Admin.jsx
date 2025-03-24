import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCheckCircle, faSearch } from '@fortawesome/free-solid-svg-icons'
import UccLogo from '/ucc.png'


export default function AdminPage() {

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
							<img src={UccLogo} alt="" />
						</div>
						<div
							className='flex flex-col items-center px-2 justify-center h-full w-2/3'
						>
							<h1
								className='w-full text-start text-md font-semibold'
							>
								Matthew Gabriel M. Cania
							</h1>
							<p
								className='text-sm w-full text-start'
							>
								Database Management Professor
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
					className="flex flex-col justify-start items-center w-3/5 h-full rounded-2xl overflow-hidde"
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
							className='flex w-full h-full bg-white'
						>

							<div
								className='flex justify-center items-center h-10 w-full'
							>
								<h1
									className='w-6 text-center text-black'
								>
									1
								</h1>
								<h1
									className='w-1/2 text-center text-black'
								>
									Bombardiro Crocodilo
								</h1>
								<h1
									className='w-1/4  text-center text-black'
								>
									2021412-N
								</h1>
								<h1
									className='w-1/6 text-center text-black'
								>
									<FontAwesomeIcon icon={faCheckCircle} />
								</h1>
							</div>
						</div>
					</div>

				</div>


			</div>
		</section>
	)

}