import React from "react";
import {
  FaHome,
  FaVideo,
  FaMoneyBill,
  FaUsers,
  FaCalendarAlt,
  FaCircle,
} from "react-icons/fa";

const App = () => {
  return (
    <div className="flex h-screen w-full">
      <SideBar />
      <MainContent />
    </div>
  );
};

function SideBar() {
  return (
    <div className="h-screen w-[15%] bg-gray-900 text-white">
      <div className="flex text-2xl font-bold ml-4 mt-6">
        <button className="bg-blue-700 px-4 py-3 rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg">
          Webinar.gg
        </button>
      </div>
      <div className="flex flex-col mt-12 space-y-6">
        {[
          { name: "Home", icon: <FaHome /> },
          { name: "Webinars", icon: <FaVideo /> },
          { name: "Billing", icon: <FaMoneyBill /> },
          { name: "User Management", icon: <FaUsers /> },
          { name: "Settings", icon: <FaUsers /> },
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-6 py-3 text-lg hover:bg-blue-600 rounded-lg hover:scale-90 transition-transform duration-300"
          >
            <span>{item.name}</span>
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
}

function Card({ children, className }) {
  return (
    <div
      className={`bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl max-h-80 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-transform duration-300 p-4 ${className}`}
    >
      {children}
    </div>
  );
}

function MainContent() {
  return (
    <div className="h-screen w-[85%] bg-gray-100">
      {/* Dashboard Header with Background Image */}
      <div
        className="relative h-64 bg-cover bg-center text-white flex flex-col items-center justify-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/panoramic-view-white-office-desk-with-laptop-apple-stationeries_23-2148178597.jpg?semt=ais_hybrid')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-4xl font-extrabold tracking-wide">Dashboard</h1>
        <p className="relative text-lg mt-2">Your daily updates at a glance</p>
      </div>

      {/* Main Content */}
      <div className="grid h-auto gap-6 grid-cols-12 mt-8 px-8">
        {/* User Profile */}
        <Card className="col-span-3">
          <img
            src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg"
            alt="User Profile"
            className="rounded-full w-32 h-32 mx-auto object-cover mb-4"
          />
          <div className="text-center">
            <h2 className="text-xl font-bold text-gray-800">Rakesh Kumar</h2>
            <p className="text-sm text-gray-500">rakesh@gmail.com</p>
            <p className="text-sm text-gray-500">+91 5496644164</p>
            <p className="text-sm text-gray-500">India</p>
          </div>
        </Card>

        {/* Webinars Section */}
        <div className="col-span-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-blue-700">Good Morning, Rakesh!</h2>
            <div className="flex items-center mt-2 text-gray-700">
              <FaCalendarAlt className="mr-2 text-xl" />
              <p className="text-lg">Monday, 14 October 2024</p>
            </div>
          </div>
          {[...Array(4)].map((_, index) => (
            <Card key={index} className="mb-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">11:30 AM</p>
                  <h3 className="text-lg font-semibold text-gray-800">UX Webinar</h3>
                </div>
                <div className="flex items-center">
                  <FaCircle className="text-red-500 mr-2" />
                  <p className="text-sm text-red-500">Live</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Notifications Section */}
        <Card className="col-span-3 bg-gradient-to-br from-yellow-400 to-yellow-300">
          <h3 className="text-lg font-bold mb-4">Notifications</h3>
          <ul className="space-y-2 text-sm text-gray-800">
            <li>✔ Webinar on React starts at 3 PM</li>
            <li>✔ Payment received for Pro subscription</li>
            <li>✔ New user signed up</li>
            <li>✔ Profile updated successfully</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}

export default App;
