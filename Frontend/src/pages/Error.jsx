import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function ErrorPage({Status, Prompt}){

	return (
		<section 
			className="flex flex-col justify-center items-center w-screen h-screen backdrop-blur-2xl"
		>
			<h1
				className="flex justify-center items-center text-center w-1/2 text-4xl text-gray-800"
			>
				{Status || "404"}
			</h1>
			<p
				className="flex justify-center items-center text-center w-1/2 text-2xl text-gray-800"
			>
				{Prompt || "Access Forbidden"}
			</p>

		</section>

	)

}