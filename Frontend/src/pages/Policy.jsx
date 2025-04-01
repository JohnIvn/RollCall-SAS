
export default function PolicyPage() {

	return (
		<section
			className="flex flex-col justify-center items-center w-4/5 h-screen overflow-x-hidden overflow-y-auto"
		>
			<div
				className="flex flex-col justify-center items-center w-full gap-6"
				style={{ minHeight: "75%", height: 'auto' }}
			>

				<h1
					className="flex text-white text-2xl lg:text-4xl font-semibold"
				>
					Privacy Policy
				</h1>
				<h2
					className="flex justify-center items-center w-full lg:w-5/6 text-white"
				>
					This Student Attendance System collects and processes student attendance data to improve record-keeping and monitoring.
				</h2>

				<div
					className="flex flex-col lg:flex-row justify-center items-center w-full"
				>
					<ul
						className="text-wrap w-full lg:w-2/5 text-white list-disc"

					>
						Information We Collect
						<li>Student name, ID number, and course details</li>
						<li>Attendance records (date, time, and status)</li>
						<li>Device or RFID card data (if applicable)</li>
					</ul>
					<ul
						className="text-wrap w-full lg:w-2/5 text-white list-disc"

					>
						How We Use Your Information
						<li>To track and manage student attendance</li>
						<li>To generate reports for academic and administrative purposes</li>
						<li>To enhance security and prevent fraud</li>
					</ul>

				</div>

				<div
					className="flex flex-col justify-center items-center w-full"
				>
					<h2
						className="flex w-full lg:w-2/3 justify-start items-start text-white font-semibold"
					>
						Data Security
					</h2>
					<p
						className="flex w-full lg:w-2/3 justify-start items-start text-white"
					>
						We implement security measures to protect stored data from unauthorized access, loss, or misuse.
					</p>
				</div>
				<div
					className="flex flex-col justify-center items-center w-full"
				>
					<h2
						className="flex w-full lg:w-2/3 justify-start items-start text-white font-semibold"
					>
						Sharing & Retention
					</h2>
					<p
						className="flex w-full lg:w-2/3 justify-start items-start text-white"
					>
						Your data is only shared with authorized personnel and retained as required for academic and legal purposes.
					</p>
				</div>
				<div
					className="flex flex-col justify-center items-center w-full"
				>
					<h2
						className="flex w-full lg:w-2/3 justify-start items-start text-white font-semibold"
					>
						Your Rights
					</h2>
					<p
						className="flex w-full lg:w-2/3 justify-start items-start text-white"
					>
						You may request access, correction, or deletion of your data by contacting us through our page.
					</p>
				</div>
				<h2
					className="flex justify-start items-center w-5/6 text-white"
				>
					For questions, contact us at +6396-6216-9452.
				</h2>
			</div>
		</section>
	)

}