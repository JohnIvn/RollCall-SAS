import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFingerprint, faIdCard, faUser, faUserLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Card1 from "../components/Card1";

export default function CapturePage() {
	const [showCard, setShowCard] = useState(false)
	const [index, setIndex] = useState(0)
	const [showPassword, setShowPassword] = useState(false)
	const [formValues, setFormValues] = useState({ email: "", password: "" });

	const handleInputChange = (e) => {
		const { name, value } = e.target
		setFormValues((prevValues) => ({
			...prevValues,
			[name]: value,
		}))
	}

	const togglePassword = () => {
		setShowPassword(showPassword => !showPassword)
	}

	const openCard = (index) => {
		setIndex(index)
		setShowCard(true)
	}
	const closeCard = () => {
		setShowCard(false);
		setFormValues({email: "", password: ""})
	};

	const studentContent = () => (
		<div
			className='flex flex-col items-center w-full h-full p-4'
		>
			<h1
				className='flex font-semibold text-xl'
			>
				Put Your Fingerprint or Scan your RFID!</h1>
			<div
				className='flex w-full h-full justify-around items-center text-8xl'
			>
				<FontAwesomeIcon icon={faFingerprint} />
				<FontAwesomeIcon icon={faIdCard} />

			</div>
		</div>
	)

	const adminContent = () => (
		<form className='flex flex-col justify-start items-center w-full h-full'>
			<h1 className='flex w-3/4 m-2'>
				Welcome Teacher! Please input your proper credentials to confirm your login
			</h1>
			<label className='flex w-3/4' htmlFor="email">
				Email:
			</label>
			<div className='flex flex-col justify-center items-center w-full'>
				<input
					name='email'
					id='email'
					type="email"
					className='flex w-3/4 border rounded-md outline-none px-2'
				/>
			</div>
			<label className='flex w-3/4' htmlFor="password">
				Password:
			</label>
			<div className='flex flex-col justify-center items-center w-full'>
				<div className='flex justify-center items-center w-3/4 relative'>
					<input
						name='password'
						id='password'
						type={showPassword ? 'text' : 'password'}
						className='flex w-full border rounded-md outline-none px-2'
					/>
					<button
						className='flex justify-center items-center h-6 w-6 outline-0 absolute right-0'
						type='button'
						onClick={togglePassword}
					>
						<FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
					</button>
				</div>
			</div>
		</form>
	);



	return (
		<section
			className="flex flex-col justify-start items-center w-4/5 h-screen overflow-x-hidden overflow-y-auto"
		>
			<div
				className="flex flex-col justify-center items-center w-full pt-24"
				style={{ minHeight: "75%", height: 'auto' }}
			>
				{index == 2 ? (

					<Card1 Toggle={openCard} Content={adminContent} CardStatus={showCard} Label={"Admin Login"} OnClose={closeCard} FormValues={formValues} TogglePassword={togglePassword} />
				) :
					(

						<Card1 Toggle={openCard} Content={studentContent} CardStatus={showCard} OnClose={closeCard} Label={"Student Login"} />
					)
				}
				<h1
					className="flex text-white text-4xl font-semibold"
				>
					Welcome
				</h1>
				<h2
					className="flex justify-center items-center w-5/6 text-white"
				>
					Who's going to use this website?
				</h2>

				<div
					className="flex justify-center gap-8 w-3/4 h-1/3 my-6"
				>
					<button
						className="flex justify-center items-center h-full w-1/3 bg-emerald-900 text-2xl gap-4 text-white font-semibold outline-none rounded-2xl hover:bg-emerald-950 transition-all duration-300 cursor-pointer"
						onClick={() => openCard(1)}
					>
						<FontAwesomeIcon icon={faUser} />
						Student
					</button>
					<button
						className="flex justify-center items-center h-full w-1/3 bg-emerald-900 text-2xl gap-4 text-white font-semibold outline-none rounded-2xl hover:bg-emerald-950 transition-all duration-300 cursor-pointer"
						onClick={() => openCard(2)}
					>
						<FontAwesomeIcon icon={faUserLock} />
						Admin
					</button>

				</div>


			</div>
		</section>
	)

}