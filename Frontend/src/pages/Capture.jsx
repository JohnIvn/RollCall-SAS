import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFingerprint, faIdCard, faUser, faUserLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Card2 from "../components/Card2";

export default function CapturePage() {
	const [showCard, setShowCard] = useState(false)
	const [index, setIndex] = useState(0)

	const openCard = (index) => {
		setIndex(index)
		setShowCard(true)
	}
	const closeCard = () => {
		setShowCard(false);
	};

	return (
		<section
			className="flex flex-col justify-start items-center w-4/5 h-screen overflow-x-hidden overflow-y-auto"
		>
			<div
				className="flex flex-col justify-center items-center w-full pt-24"
				style={{ minHeight: "75%", height: 'auto' }}
			>
				{index == 2 ? (

					<Card2 Toggle={openCard} CardStatus={showCard} Label={"Admin Login"} OnClose={closeCard} Type={"Admin"}/>
				) :
					(
						<Card2 Toggle={openCard} CardStatus={showCard} OnClose={closeCard} Label={"Student Login"} Type={"Student"} />
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