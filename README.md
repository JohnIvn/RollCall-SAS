# RollCall Student Assistant System

> RFID-Based Attendance Record Keeping System

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)
![ESP32](https://img.shields.io/badge/ESP32-Microcontroller-blue)

---

## About

RollCall is an RFID-powered attendance system built for schools and universities. It allows students
to check in by tapping their assigned RFID cards, with each entry securely logged and updated in real time.

Designed for ease of use and high reliability, the system includes admin access to view attendance logs,
manage student records, and export reports. With seamless hardware-software integration, RollCall simplifies
attendance tracking and ensures institutional accuracy.

---

## Table of Contents

- [Requirements](#requirements)
- [Release](#release)
- [Installation](#installation)
- [Structure](#structure)
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [License](#license)

---

## REQUIREMENTS

To run this project locally, ensure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn
- Web server (e.g., Express.js)
- Database (e.g., Firebase, MongoDB, or MySQL)
- RFID Reader (e.g., MFRC522) and microcontroller (e.g., Arduino Uno, ESP32)
- Modern browser for dashboard access

---

## Features

- RFID/NFC card-based student check-in system
- Real-time attendance logging to the database
- Admin dashboard for student and log management
- Automatic timestamping and history tracking
- Secure login for administrators and teachers

---

## Release

- Alternatively you can download the `.zip` file from the [Releases](https://github.com/JohnIvn/RollCall-SAS/releases) section.

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/YourUsername/RollCall-System.git
```

### 2. Install Dependencies

Backend

```bash
cd backend
npm install
```

Frontend

```bash
cd frontend
npm install
```

Hardware

```bash
cd hardware
npm install
```

### 3. Configure Environment
Create a .env file in the root directory and add your configuration:

Backend

```bash
DATABASE_URI=

DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
PORT=
WS_PORT=
WS_FRONTEND_PORT=
WS_Hardware_PORT=
WS_SWITCH=
DAY=

DB_TIMEZONE=
DEFAULT_CURRENCY=

JWT_SECRET=

DEFAULT_USER_ROLE=
DEFAULT_STAFF_ROLE=
```

### 4. Run the App

npm
```bash
   cd backend
   npm run backend

   cd hardware
   npm run hardware
```
yarn
```bash
   cd backend
   yarn backend

   cd hardware
   yarn hardware
```
---

## Structure

```bash
/
├── Backend/
│   ├── Controllers/
│   ├── Models/
│   ├── Routes/
│   ├── Services/
│   └── Websockets/
└── Frontend/
│   ├── public/
|   └── src/
|       ├── assets/
|       ├── components/
|       ├── pages/
|       └── partials/                              
└── Hardware/
    └── ESP32 Websockets/
    |   └── rfid_basic/
    └── src/
        ├── components/
        ├── pages/
        └── partials/               
```

---

## Technologies-Used

| Category | Tools                      |
| -------- | -------------------------- |
| Frontend | React JS                   |
| Backend  | Node JS                    |
| Database | MYSQL & MSSQL              |
| Hardware | Esp 32 & RC522             |

---

## Testing

Once everything is set up and the server is running, you can test simply by going to the url.

---

## License

See the [LICENSE](LICENSE) file for more information.

---

> Built with ❤️ by JohnIvn
