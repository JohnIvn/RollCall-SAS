	import { Link, NavLink } from 'react-router-dom';
	import uccImg from '/ucc.png';

	export default function MainHeader() {
		const NavUrls = [
			{
				label: "Home", link: "/home/dashboard"
			},
			{
				label: "Contacts", link: "/home/contacts"
			},
			{
				label: "Privacy Policy", link: "/home/privacy-policy"
			}

		]
		return (

			<header
				className="flex justify-center items-center w-full h-10 pt-6 fixed"
			>
				<nav
					className="flex justify-between items-center w-4/5 h-10 bg-zinc-900 shadow-black shadow-sm rounded-xl"
				>
					<Link
						className="flex justify-center items-center text-center text-xl gap-2 outline-none"
						to={'/'}
					>
						<img src={uccImg} alt=""
							className='flex h-10 w-10 p-1'
						/>
						<h1
							className='flex text-white'
						>
							Student Attendance System
						</h1>
					</Link>

					<div
						className='flex justify-between items-center w-1/3 p-8'
					>
						{NavUrls.map((item, index) => (

							<NavLink
								className={({ isActive }) => `${isActive ? 'text-white' : 'text-gray-400'} flex justify-center items-center h-full hover:text-white hover:underline transition-all duration-300`}
								to={item.link}
								key={index}
							>
								{item.label}
							</NavLink>
						))}

					</div>
				</nav>
			</header>

		)

	}