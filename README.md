# RollCall Student Assistant System

RFID-Based Attendance Record Keeping System

"RollCall is a smart student assistant system that automates class attendance using RFID technology.
It provides fast, reliable, and accurate attendance tracking while reducing manual effort for instructors."

## ABOUT

RollCall is an RFID-powered attendance system built for schools and universities. It allows students
to check in by tapping their assigned RFID cards, with each entry securely logged and updated in real time.

Designed for ease of use and high reliability, the system includes admin access to view attendance logs,
manage student records, and export reports. With seamless hardware-software integration, RollCall simplifies
attendance tracking and ensures institutional accuracy.

## REQUIREMENTS

To run this project locally, make sure you have:

- Node.js (v14 or higher)
- npm or yarn
- Web server (e.g., Express.js)
- Database (e.g., Firebase, MongoDB, or MySQL)
- RFID Reader (e.g., MFRC522) and microcontroller (e.g., Arduino Uno, ESP32)
- Modern browser for dashboard access

## INSTALLATION

1. Clone the Repository:
   git clone https://github.com/YourUsername/RollCall-System.git
   cd rollcall-system

2. Install Dependencies:
   npm install
   OR
   yarn install

3. Configure Environment:
   Create a `.env` file in the root directory and set your database and API configuration.

4. Set Up Hardware:

   - Connect your RFID reader (e.g., MFRC522) to the Arduino/ESP32 board.
   - Use the Arduino script inside the `ESP32 Websockets/rfid_scanner` directory.
   - Ensure your board is on the same Wi-Fi network as the backend server.

5. Run the Development Server:

   4a. Backend
   npm run backend
   OR
   yarn backend

   4b. Frontend
   npm run frontend
   OR
   yarn frontend

   4c. Hardware
   npm run hardware
   OR
   yarn hardware

6. Access the Dashboard (Locally):
   Open your browser and go to:

## FEATURES

- RFID/NFC card-based student check-in system
- Real-time attendance logging to the database
- Admin dashboard for student and log management
- Automatic timestamping and history tracking
- Exportable attendance reports (CSV or PDF)
- Secure login for administrators and teachers

## TECHNOLOGIES USED

- Frontend: HTML, CSS, JavaScript (or React if applicable)
- Backend: Node.js, Express.js, Websockets
- Database: Sequelize / MySQL
- Hardware: Arduino or ESP32, MFRC522 RFID module

## LICENSE

See the LICENSE file for licensing information.

---

RollCall — Attendance Made Smarter, One Tap at a Time.
