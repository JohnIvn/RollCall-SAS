import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFingerprint,
  faIdCard,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { Navigate, useNavigate } from "react-router-dom";

export default function Card1({ CardStatus, OnClose, Label, Type }) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({ email: "", password: "" });

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

  const handleLogin = () => {
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
        alert("Login successful!");
        navigate("/dashboard");
      } else {
        alert(response.message);
      }
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };
  };

  return (
    <div
      className={`${CardStatus ? "flex" : "hidden"
        } flex-col justify-between items-center h-1/2 w-1/3 bg-white rounded-3xl fixed animate-move-down`}
    >
      <h1 className="flex justify-start items-center text-center px-6 w-full h-12 text-[#2D2D2D] text-2xl border-b-gray-400 border-b-1">
        {Label}
      </h1>
      <div className="flex flex-col justify-start items-center h-2/3 w-full">
        {Type === "Student" && (
          <div className="flex flex-col items-center w-full h-full p-4">
            <h1 className="flex font-semibold text-xl">
              Put Your Fingerprint or Scan your RFID!
            </h1>
            <div className="flex w-full h-full justify-around items-center text-8xl">
              <FontAwesomeIcon icon={faFingerprint} />
              <FontAwesomeIcon icon={faIdCard} />
            </div>
          </div>
        )}

        {Type === "Admin" && (
          <form
            className="flex flex-col justify-start items-center w-full h-full"
            action={(e) => {
              e.preventDefault();
            }}
          >
            <h1 className="flex w-3/4 m-2">
              Welcome Teacher! Please input your proper credentials to confirm
              your login
            </h1>
            <label className="flex w-3/4" htmlFor="email">
              Email:
            </label>
            <div className="flex flex-col justify-center items-center w-full">
              <input
                name="email"
                id="email"
                type="email"
                className="flex w-3/4 border rounded-md outline-none px-2"
                value={formValues.email}
                onChange={handleInputChange}
              />
            </div>
            <label className="flex w-3/4" htmlFor="password">
              Password:
            </label>
            <div className="flex flex-col justify-center items-center w-full">
              <div className="flex justify-center items-center w-3/4 relative">
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
          </form>
        )}
      </div>
      <div className="flex justify-end items-center h-16 w-full px-4 border-t-1 border-t-gray-400 gap-2 ">
        <button
          className="flex justify-center items-center text-center text-md text-white px-6 py-1 w-16 rounded-md bg-[#2D2D2D] outline-0 hover:bg-[#1d1d1d] transition-all duration-300 cursor-pointer"
          onClick={() => {
            setFormValues({ email: "", password: "" });
            setShowPassword(false);
            OnClose();
          }}
        >
          Close
        </button>
        {Type === "Admin" && (
          <button
            className="flex justify-center items-center text-center text-md text-white px-6 py-1 w-32 rounded-md bg-blue-400 outline-0 hover:bg-[#1d1d1d] transition-all duration-300 cursor-pointer"
            onClick={handleLogin}
          >
            Proceed
          </button>
        )
        }
      </div>
    </div>
  );
}
