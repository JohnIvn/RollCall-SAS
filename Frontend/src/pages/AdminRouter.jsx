import { Routes, Route, Navigate } from 'react-router-dom'
import TestPage from './TestPage'
import AdminPage from './Admin'
import AdminHeader from '../partials/AdminHeader'
import StudentsPage from './Students'

export default function AdminRouter() {

	return (
		<section
			className='flex flex-col justify-start items-center w-screen h-screen bg-zinc-900 overflow-hidden'
		>
			<AdminHeader/>
			<div
				className='flex flex-col justify-start items-center pt-16 w-full h-auto overflow-y-auto'
			>
				<Routes>
					<Route path="dashboard" element={<AdminPage />} />
					<Route path="students" element={<StudentsPage />} />
				</Routes>
			</div>
		</section>
	)

}