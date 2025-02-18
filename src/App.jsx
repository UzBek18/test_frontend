import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { Menu, Bell } from "lucide-react";
import HemisLogo from "./components/HemisLogo";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import StudyPlan from "./pages/StudyPlan";
import Schedule from "./pages/Schedule";
import Groups from "./pages/Groups";
import Subjects from "./pages/Subjects";
import Controls from "./pages/Controls";
import RatingBook from "./pages/RatingBook";
import Attendance from "./pages/Attendance";
import Applications from "./pages/Applications";
import Records from "./pages/Records";
import Contracts from "./pages/Contracts";
import Payments from "./pages/Payments";
import Scholarship from "./pages/Scholarship";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Faculties from "./pages/Faculty"; // Faculties sahifasini import qildik

function Header({ isSidebarOpen, setIsSidebarOpen }) {
  const navigate = useNavigate();

  return (
    <header className="bg-[#2557A7] text-white fixed w-full z-10">
      <div className="px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Menu
              className="h-6 w-6 cursor-pointer"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            />
            <HemisLogo className="h-8" />
          </div>
          <div className="flex items-center space-x-6">
            <Bell className="h-5 w-5 cursor-pointer" />
            <div
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => navigate("/profile")}
            >
              <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-sm font-medium">ET</span>
              </div>
              <div className="hidden md:block">
                <div className="text-sm font-medium">Eshmatov Toshmat</div>
                <div className="text-xs text-gray-300">Student</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Header
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        <div className="flex pt-16">
          <Sidebar isOpen={isSidebarOpen} />

          <main
            className={`flex-1 p-6 transition-all duration-300 ${
              isSidebarOpen ? "ml-64" : "ml-20"
            }`}
          >
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/study-plan" element={<StudyPlan />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/groups" element={<Groups />} />
              <Route path="/subjects" element={<Subjects />} />
              <Route path="/controls" element={<Controls />} />
              <Route path="/rating-book" element={<RatingBook />} />
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/applications" element={<Applications />} />
              <Route path="/records" element={<Records />} />
              <Route path="/contracts" element={<Contracts />} />
              <Route path="/payments" element={<Payments />} />
              <Route path="/scholarship" element={<Scholarship />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/faculties" element={<Faculties />} />{" "}
              {/* Faculties qo'shildi */}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
