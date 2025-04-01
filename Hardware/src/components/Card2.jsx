import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFingerprint, faIdCard } from "@fortawesome/free-solid-svg-icons";

export default function Card1({ CardStatus, OnClose, Label }) {
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
