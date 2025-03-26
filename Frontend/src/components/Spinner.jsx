import spinner from '/spinnerDefault.gif'

export default function Spinner() {

	return (
		<section 
			className="flex flex-col justify-center items-center w-screen h-screen backdrop-blur-2xl"
		>
			<img src={spinner} alt="" />

		</section>
	)

}