import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFingerprint, faIdCard } from "@fortawesome/free-solid-svg-icons";

export default function Card1({ CardStatus, OnClose, Label }) {
  const wsRef = useRef(null);

  // Set up WebSocket connection when the component mounts
  useEffect(() => {
    wsRef.current = new WebSocket("ws://localhost:3002"); // Replace with your WebSocket URL

    wsRef.current.onopen = () => {
      console.log("WebSocket connected.");
    };

    wsRef.current.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    wsRef.current.onclose = () => {
      console.warn("WebSocket closed.");
    };

    // Close the WebSocket connection when the component unmounts
    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, []);

  // Set up the periodic fetch_scan call
  useEffect(() => {
    const interval = setInterval(() => {
      if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
        wsRef.current.send(JSON.stringify({ type: "fetch_scan" }));
      } else {
        console.warn("WebSocket not open. Unable to send message.");
      }
    }, 1000); // Send the fetch_scan every second

    // Cleanup interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`${
        CardStatus ? "flex" : "hidden"
      } flex-col justify-between items-center h-1/2 w-1/3 bg-white rounded-3xl fixed animate-move-down`}
    >
      <h1 className="flex justify-start items-center text-center px-6 w-full h-24 text-[#2D2D2D] text-3xl border-b-gray-400 border-b-1 lg:border-b-2">
        {Label}
      </h1>
      <div className="flex flex-col justify-start items-center h-2/3 w-full">
        <div className="flex flex-col items-center w-full h-full p-4">
          <h1 className="flex font-semibold text-xl">
            Put Your Fingerprint or Scan your RFID!
          </h1>
          <div className="flex w-full h-full justify-around items-center text-8xl">
            <FontAwesomeIcon icon={faFingerprint} />
            <FontAwesomeIcon icon={faIdCard} />
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center h-24 w-full px-4 border-t-1 border-t-gray-400">
        <button
          className="flex justify-center items-center text-center text-md text-white px-6 py-1 w-16 lg:w-24 lg:h-12 rounded-md bg-[#2D2D2D] outline-0 hover:bg-[#1d1d1d] transition-all duration-300 cursor-pointer"
          onClick={OnClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
