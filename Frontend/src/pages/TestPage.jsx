import Card1 from "../components/Card1";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserLock } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function TestPage(){
	const [showCard, setShowCard] = useState(false)
	const [index, setIndex] = useState(0)

	const openCard = (index) => {
		setIndex(index)
		setShowCard(true)
	}
	const closeCard = () => {
		setShowCard(false)
	}

	return (

		<section
			className="flex flex-col justify-center items-center h-full w-3/4"
		>
			{index == 2 ? (

				<Card1 Toggle={openCard} CardStatus={showCard} OnClose={closeCard} Label={"Admin Login"} />
			) :
				(

					<Card1 Toggle={openCard} CardStatus={showCard} OnClose={closeCard} Label={"Student Login"} />
				)
			}
			<h1
				className="text-5xl text-white m-2 font-bold"
			>
				Welcome
			</h1>
			<p
				className="flex text-white text-xl"
			>
				Who's going to use this website?
			</p>
			<div
				className="flex justify-around items-center h-1/4 w-2/3"
			>
				<button
					className="flex justify-center items-center text-center h-3/5 w-3/7 gap-4 outline-0 rounded-2xl text-2xl text-white bg-[#0F4D2A] hover:bg-zinc-950 transition-all duration-300 cursor-pointer"
					onClick={() => openCard(1)}
				>
					<FontAwesomeIcon icon={faUser} />
					Student
				</button>
				<button
					className="flex justify-center items-center text-center h-3/5 w-3/7 gap-4 outline-0 rounded-2xl text-2xl text-white bg-[#0F4D2A] hover:bg-zinc-950 transition-all duration-300 cursor-pointer"
					onClick={() => openCard(2)}
				>
					<FontAwesomeIcon icon={faUserLock} />
					Admin
				</button>
			</div>
		</section>

	)

}