import { useState } from "react"

export default function Card1({ Label, Toggle, CardStatus, Content, ButtonType, CurrentTime, OnProceed, OnClose, FormValues, TogglePassword }) {

	
	const Wrapper = ({ children }) => (
		<div
			className="flex flex-col justify-start items-center h-2/3 w-full"
		>
			{children}
		</div>
	);

	return (

		<div
			className={`${CardStatus ? "flex" : "hidden"} flex-col justify-between items-center h-1/2 w-1/3 bg-white rounded-3xl fixed animate-move-down`}
		>
			<h1
				className="flex justify-start items-center text-center px-6 w-full h-12 text-[#2D2D2D] text-2xl border-b-gray-400 border-b-1"
			>

				{Label}
			</h1>
			<Wrapper>{Content && <Content />}</Wrapper>
			<div
				className="flex justify-end items-center h-16 w-full px-4 border-t-1 border-t-gray-400 gap-2 "
			>
				<button
					className="flex justify-center items-center text-center text-md text-white px-6 py-1 w-16 rounded-md bg-[#2D2D2D] outline-0 hover:bg-[#1d1d1d] transition-all duration-300 cursor-pointer"
					onClick={OnClose}
				>
					Close
				</button>
				<button
					className="flex justify-center items-center text-center text-md text-white px-6 py-1 w-32 rounded-md bg-blue-400 outline-0 hover:bg-[#1d1d1d] transition-all duration-300 cursor-pointer"
				>
					Proceed
				</button>
			</div>
		</div>

	)



}