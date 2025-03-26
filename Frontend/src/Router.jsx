import { Routes, Route, Navigate, Outlet, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Swal from "sweetalert2";
import CaptureRouter from './pages/CaptureRouter'
import AdminRouter from './pages/AdminRouter'
import TestPage from './pages/TestPage'

const ProtectedRoute = () => {
	const navigate = useNavigate()
	const token = localStorage.getItem("token");
	if (!token) {
		Swal.fire({
			icon: "error",
			title: "Forbidden Access",
			text: "You will be redirected in 3 seconds...",
			timer: 3000,
			timerProgressBar: true,
			showConfirmButton: false,
			willClose: () => {
				navigate("/");
			}
		});
	}

	return token ? <Outlet /> : <div className='w-screen h-screen fixed bg-zinc-900'></div>
};

export default function PageRouter() {

	return (
		<Routes>
			<Route path="" element={<Navigate to="/home/dashboard" />} />
			<Route path="/home" element={<Navigate to="/home/dashboard" />} />
			<Route path='/home/*' element={<CaptureRouter />} />

			<Route element={<ProtectedRoute />}>
				<Route path='/admin' element={<Navigate to="/admin/dashboard" />} />
				<Route path='/admin/*' element={<AdminRouter />} />
				<Route path="/test" element={<TestPage />} />
			</Route>
		</Routes>
	)

}