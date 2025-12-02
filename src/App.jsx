import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Student from "./pages/Student";
import Company from "./pages/Company";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<Student />} />
        <Route path="/company" element={<Company />} />
        <Route path="/view-data" element={<div className="p-6">Coming Soon...</div>} />
      </Routes>
       {/* Toast Setup */}
      <ToastContainer position="top-right" autoClose={3000} />
    </BrowserRouter>
  );
}
