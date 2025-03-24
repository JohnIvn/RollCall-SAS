import { Routes, Route, Navigate } from 'react-router-dom'
import CaptureRouter from './pages/CaptureRouter'
import AdminRouter from './pages/AdminRouter'
import TestPage from './pages/TestPage'

export default function PageRouter() {

	return (
		<Routes>
			<Route path="" element={<Navigate to="/home/dashboard"/>} />
			<Route path="/home" element={<Navigate to="/home/dashboard"/>} />
			<Route path='/home/*' element={<CaptureRouter />} />
			<Route path='' element={<Navigate to="/admin/dashboard" />} />
			<Route path='/admin' element={<Navigate to="/admin/dashboard" />} />
			<Route path='/admin/*' element={<AdminRouter />} />
			<Route path="/test" element={<TestPage />} />
		</Routes>
	)

}