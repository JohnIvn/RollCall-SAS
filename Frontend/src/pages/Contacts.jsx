
export default function ContactsPage() {

	return (
		<section
			className="flex flex-col justify-center items-center w-4/5 h-screen overflow-x-hidden overflow-y-auto"
		>
			<div
				className="flex flex-col justify-center items-center w-full gap-6"
				style={{ minHeight: "75%", height: 'auto' }}
			>

				<h1
					className="flex text-white text-4xl font-semibold"
				>
					Contact Us
				</h1>
				<h2
					className="flex text-white"
				>
					Have questions or need assistance? Feel free to reach out!
				</h2>

				<div
					className="flex flex-col lg:flex-row justify-center items-center w-full"
				>
					<ul
						className="text-wrap w-full lg:w-1/3 text-white"
					
					>
						<li
						>📍 Address: Congressional Rd Ext, Caloocan, Metro Manila</li>
						<li>📞 Phone: +6396-6216-9452</li>
						<li>📧 Email: uccmain@gmail.com</li>
					</ul>
					<ul
						className="text-wrap w-full lg:w-1/3 text-white"
					
					>
						<li>🕒 Monday - Friday: 8:00 AM - 5:00 PM</li>
						<li>🕒 Saturday: 9:00 AM - 12:00 PM</li>
						<li>🚫 Sunday & Holidays: Closed</li>
					</ul>

				</div>

				<h2
					className="flex text-white"
				>
					We'd love to hear your feedback!
				</h2>
			</div>
		</section>
	)

}