import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import UccLogo from '/ucc.png'


export default function AdminPage(){

	return (
		<section
			className="flex flex-col justify-start items-center w-4/5 h-screen overflow-x-hidden overflow-y-auto"
		>
			<div
				className="flex justify-between items-center w-full gap-10 p-2"
				style={{ minHeight: "100%", height: 'auto' }}
			>|
				<div
					className="flex flex-col w-2/5 h-full bg-white rounded-2xl"
				>

					<div
						className='flex justify-center items-center w-full h-1/4 m-4'
					>

						<div
							className='flex rounded-full h-32 w-32 border-2 border-emerald-800 overflow-hidden'
						>
							<img src={UccLogo} alt="" />
						</div>
						<div
							className='flex flex-col items-start px-2 justify-center h-full w-2/3'
						>
							<h1
								className='text-md font-semibold'
							>
								Matthew Gabriel M. Cania
								</h1>
							<p
								className='text-sm'
							>
								Database Management Professor
							</p>
						</div>

					</div>

					<div
						className='flex flex-col h-full w-full justify-start items-center'
					>
						<div
							className='flex justify-between items-centerbg-blue-950 mx-4 w-9/10 h-18 rounded-2xl'
						>
							<h1
								className='flex justify-start items-center text-xl mx-2'
							>
								Database Management Systems
							</h1>
							<FontAwesomeIcon
								className='flex'
							icon={faCaretDown}/>
						</div>
					</div>

				</div>
				<div
					className="flex flex-col w-3/5 h-full"
				>

					<div>
						<div>
							<h1>Enrolled Students</h1>
						</div>
					</div>
					<div>


					</div>

				</div>


			</div>
		</section>
	)

}