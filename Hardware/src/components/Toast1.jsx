
export default function Toast1 ({Text, OnClose}){

	return(
		<div
			className="flex flex-col justify-start items-center w-1/5 h-1/7 m-2 fixed bg-zinc-900 shadow-black shadow-md top-0"
		>
			<div>
				<button>
					x
				</button>
			</div>

			<h1
				className="text-white"
			>
				{Text || "404 For"}

			</h1>

		</div>
	)

}