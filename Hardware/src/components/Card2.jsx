import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdCard,
  faUser,
  faClock,
  faBook,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function Card1({ CardStatus, OnClose, Label }) {
  const wsRef = useRef(null);
  const [scanData, setScanData] = useState([]);
  const [latestScan, setLatestScan] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const latestScanIdRef = useRef(null);

  useEffect(() => {
    wsRef.current = new WebSocket("ws://localhost:3002");

    wsRef.current.onopen = () => console.log("WebSocket connected");

    wsRef.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === "scan_data" && data.data.length > 0) {
        setScanData([...data.data].reverse());

        const currentScan = data.data[data.data.length - 1];
        if (currentScan.temporary_id !== latestScanIdRef.current) {
          setLatestScan(currentScan);
          setShowSuccess(true);
          latestScanIdRef.current = currentScan.temporary_id;

          setTimeout(() => {
            setShowSuccess(false);
          }, 3000);
        }
      }
    };

    return () => wsRef.current?.close();
  }, []);

  useEffect(() => {
    const fetchScanData = () => {
      if (wsRef.current?.readyState === WebSocket.OPEN) {
        wsRef.current.send(JSON.stringify({ type: "fetch_scan" }));
      }
    };

    fetchScanData();

    const interval = setInterval(fetchScanData, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`${
        CardStatus ? "flex" : "hidden"
      } fixed inset-0 bg-black bg-opacity-50 z-50 items-center justify-center p-4`}
    >
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-4xl h-[80vh] flex flex-col overflow-hidden animate-fade-in">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-800">{Label}</h1>
          <button
            onClick={OnClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Scan Area */}
        <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-r from-blue-50 to-purple-50 relative">
          {/* Success overlay */}
          {showSuccess && latestScan && (
            <div className="absolute inset-0 bg-green-100 bg-opacity-90 flex flex-col items-center justify-center z-10 animate-fade-in">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-6xl text-green-500 mb-4 animate-bounce"
              />
              <h3 className="text-xl font-bold text-green-800 mb-1">
                Scan Successful!
              </h3>
              <p className="text-lg text-green-700">
                {latestScan.first_name} {latestScan.last_name}
              </p>
              <p className="text-md text-green-600 mt-2">
                {latestScan.subject} • {latestScan.timein}
              </p>
              <div className="mt-4 px-4 py-2 bg-green-500 text-white rounded-full text-sm">
                This will auto-close in 3 seconds
              </div>
            </div>
          )}

          <div className="mb-6">
            <div className="flex flex-col items-center">
              <div
                className={`p-6 bg-white rounded-full shadow-md mb-2 transition-all duration-300 ${
                  showSuccess ? "scale-90" : "scale-100"
                }`}
              >
                <FontAwesomeIcon
                  icon={faIdCard}
                  className={`text-4xl ${
                    showSuccess ? "text-green-500" : "text-purple-500"
                  } transition-colors`}
                />
              </div>
              <span className="text-sm font-medium text-gray-600">
                RFID Card
              </span>
            </div>
          </div>
          <p className="text-lg text-gray-700 mb-2 text-center">
            {showSuccess
              ? "Scan registered successfully!"
              : "Scan your RFID card"}
          </p>
        </div>

        {/* Scan History */}
        <div className="flex-1 overflow-hidden flex flex-col border-t border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-700">
              Scan History (Newest First)
            </h2>
          </div>
          <div className="flex-1 overflow-y-auto">
            {scanData.length > 0 ? (
              <div className="divide-y divide-gray-200">
                {scanData.map((item) => (
                  <div
                    key={item.temporary_id}
                    className={`p-4 transition-colors ${
                      item.temporary_id === latestScanIdRef.current &&
                      showSuccess
                        ? "bg-green-50"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center">
                      <div
                        className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${
                          item.temporary_id === latestScanIdRef.current &&
                          showSuccess
                            ? "bg-green-100"
                            : "bg-blue-100"
                        }`}
                      >
                        <FontAwesomeIcon
                          icon={faUser}
                          className={
                            item.temporary_id === latestScanIdRef.current &&
                            showSuccess
                              ? "text-green-500"
                              : "text-blue-500"
                          }
                        />
                      </div>
                      <div className="ml-4 flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-gray-900">
                            {item.first_name} {item.last_name}
                            {item.temporary_id === latestScanIdRef.current &&
                              showSuccess && (
                                <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded-full animate-pulse">
                                  New
                                </span>
                              )}
                          </p>
                          <span className="text-xs text-gray-500">
                            ID: {item.userId}
                          </span>
                        </div>
                        <div className="mt-1 flex items-center text-sm text-gray-500">
                          <FontAwesomeIcon icon={faBook} className="mr-1.5" />
                          <span className="mr-4">{item.subject}</span>
                          <FontAwesomeIcon icon={faClock} className="mr-1.5" />
                          <span>{item.timein}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="h-full flex items-center justify-center">
                <div className="text-center py-12">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="mt-2 text-sm font-medium text-gray-900">
                    No scan history
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Scan attempts will appear here
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 flex justify-end">
          <button
            onClick={OnClose}
            className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Close Panel
          </button>
        </div>
      </div>
    </div>
  );
}
