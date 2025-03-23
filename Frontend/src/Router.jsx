import { Routes, Route, Navigate } from 'react-router-dom'
import CapturePage from './pages/Capture'
import MainHeader from './partials/MainHeader'
import ContactsPage from './pages/Contacts'
import PolicyPage from './pages/Policy'
import TestPage from './pages/TestPage'

export default function PageRouter() {

	return (
		<section
			className='flex flex-col justify-start items-center w-screen h-screen bg-zinc-900 overflow-hidden'
		>
			<MainHeader />

			<div
				className='flex flex-col justify-start items-center pt-16 w-full h-auto overflow-y-auto'
			>
				<Routes>
					<Route path="/" element={<Navigate to="/home"/>} />
					<Route path="/home" element={<CapturePage />} />
					<Route path="/contacts" element={<ContactsPage />} />
					<Route path="/privacy-policy" element={<PolicyPage />} />
					<Route path="/test" element={<TestPage />} />
				</Routes>
			</div>
		</section>
	)

}