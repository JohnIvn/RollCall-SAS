import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFingerprint,
  faIdCard,
  faUser,
  faUserLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Card2 from "../components/Card2";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function CapturePage() {
  const [showCard, setShowCard] = useState(false);
  const [index, setIndex] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [error, setErrors] = useState(null);
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const togglePassword = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setErrors(null)
    const ws = new WebSocket("ws://localhost:3002");

    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          type: "login",
          email: formValues.email,
          password: formValues.password,
        })
      );
    };

    ws.onmessage = (event) => {
      const response = JSON.parse(event.data);

      if (response.type === "success") {
        localStorage.setItem("token", response.token);
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Logging in",
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false,
          willClose: () => {
            navigate("/admin/dashboard");
          }
        });
      } else {
        setErrors(response.message)
        setTimeout(() => setErrors(null), 2000)
      }
    };

    ws.onerror = (error) => {
      Swal.fire({
        icon: "error",
        title: "Server Error",
        text: "Sorry for the inconvenience! :D",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
    };
  };
  const openCard = (index) => {
    setIndex(index);
    setShowCard(true);
  };
  const closeCard = () => {
    setShowCard(false);
  };

  return (
    <section className="flex flex-col justify-center items-center w-4/5 h-screen overflow-x-hidden overflow-y-auto">
      <div
        className="flex flex-col justify-center items-center w-full"
        style={{ minHeight: "75%", height: "auto" }}
      >
        <h1 className="flex text-white p-8 text-6xl font-semibold">
          Welcome!
        </h1>
        <div
          className='flex-col justify-between items-center h-2/3 lg:py-0 lg:h-full w-full lg:w-1/3 bg-white rounded-3xl'
        >
          <h1 className="flex justify-start items-center text-center px-6 w-full h-12 text-[#2D2D2D] text-2xl border-b-gray-400 border-b-1 lg:border-b-2 relative">
            Admin
            {error &&
              <p
                className="flex w-1/2 text-lg h-full p-4 justify-center items-center text-start text-red-600 absolute right-0"
              >
                {error}
              </p>
            }
          </h1>
          <form
            className="flex flex-col justify-center items-center w-full h-full lg:h-auto p-0 lg:py-16"
          >
            <h1 className="flex w-3/4 m-2 text-xl">
              Scan your RFID as a Student, or Login as a Professor!
            </h1>
            <label className="flex w-2/3" htmlFor="email">
              Email:
            </label>
            <div className="flex flex-col justify-center items-center w-2/3 mb-4">
              <input
                name="email"
                id="email"
                type="email"
                className="flex w-full border rounded-md outline-none px-2"
                value={formValues.email}
                onChange={handleInputChange}
              />
            </div>
            <label className="flex w-2/3" htmlFor="password">
              Password:
            </label>
            <div className="flex flex-col justify-center items-center w-full">
              <div className="flex justify-center items-center w-2/3 relative">
                <input
                  name="password"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="flex w-full border rounded-md outline-none px-2"
                  value={formValues.password}
                  onChange={handleInputChange}
                />
                <button
                  className="flex justify-center items-center h-6 w-6 outline-0 absolute right-0"
                  type="button"
                  onClick={togglePassword}
                >
                  <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                </button>
              </div>
            </div>

            <button
              className="flex justify-center items-center text-center text-md text-white px-6 py-1 w-32 mt-8 lg:w-2/3 lg:h-12 rounded-md bg-blue-400 outline-0 hover:bg-[#1d1d1d] transition-all duration-300 cursor-pointer"
              onClick={handleLogin}
            >
              Proceed
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
