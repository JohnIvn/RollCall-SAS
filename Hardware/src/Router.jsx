import { Routes, Route, Navigate, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import CaptureRouter from "./pages/CaptureRouter";

export default function PageRouter() {
  return (
    <Routes>
      <Route path="" element={<Navigate to="/home/dashboard" />} />
      <Route path="/home" element={<Navigate to="/home/dashboard" />} />
      <Route path="/home/*" element={<CaptureRouter />} />
    </Routes>
  );
}
