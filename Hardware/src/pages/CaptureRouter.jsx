import { Routes, Route, Navigate } from 'react-router-dom'
import CapturePage from './Capture'
import MainHeader from '../partials/MainHeader'
import ContactsPage from './Contacts'
import PolicyPage from './Policy'

export default function CaptureRouter() {

	return (
		<section
			className='flex flex-col justify-start items-center w-screen h-screen bg-zinc-900 overflow-hidden'
		>
			<MainHeader />

			<div
				className='flex flex-col justify-start items-center pt-16 w-full h-auto overflow-y-auto'
			>
				<Routes>
					<Route path="dashboard" element={<CapturePage />} />
					<Route path="contacts" element={<ContactsPage />} />
					<Route path="privacy-policy" element={<PolicyPage />} />
				</Routes>
			</div>
		</section>
	)

}