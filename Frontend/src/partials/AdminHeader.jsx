import { Link, NavLink, useNavigate } from 'react-router-dom';
import uccImg from '/ucc.png';
import Swal from 'sweetalert2'

export default function AdminHeader() {
	const navigate = useNavigate();
	const handleLogout = () => {
		localStorage.removeItem("student_id")
		localStorage.removeItem("token")
		Swal.fire({
			icon: "success",
			title: "Goodbye!",
			text: "Logging Off",
			timer: 2000,
			timerProgressBar: true,
			showConfirmButton: false,
			willClose: () => {
				navigate("/home/dashboard");
			}
		});
	};

	const NavUrls = [
		{
			label: "Students", link: "/admin/students"
		},
		{
			label: "Room 303", link: "/admin/dashboard"
		},
	]
	return (

		<header
			className="flex justify-center items-center w-full h-24 pt-6 fixed"
		>
			<nav
				className="flex justify-between items-center w-full lg:w-4/5 h-full bg-zinc-900 shadow-black shadow-sm rounded-xl px-4"
			>
				<Link
					className="flex justify-center items-center text-center text-xl gap-2 outline-none"
					to={'/'}
				>
					<img src={uccImg} alt=""
						className='flex h-10 w-10 p-1'
					/>
					<h1
						className='hidden lg:flex text-white'
					>
						Student Attendance System
					</h1>
				</Link>

				<div
					className='flex justify-evenly items-center w-full lg:w-2/5 p-8'
				>
					{NavUrls.map((item, index) => (

						<NavLink
							className={({ isActive }) => `${isActive ? 'text-white' : 'text-gray-400'} flex justify-center items-center h-full text-md lg:text-xl hover:text-white hover:underline transition-all duration-300`}
							to={item.link}
							key={index}
						>
							{item.label}
						</NavLink>
					))}
					<button
						className='flex justify-center items-center text-gray-400 h-full w-auto px-4 py-2 rounded-2xl text-md lg:text-xl hover:text-white hover:bg-zinc-600 cursor-pointer transition-all duration-300'
						onClick={handleLogout}
					>
						Log Out
					</button>
				</div>
			</nav>
		</header>

	)

}