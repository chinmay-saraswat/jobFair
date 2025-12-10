import { useState } from "react";
import api from "../api";
import { toast } from "react-toastify";
// Optional icon import (uncomment if you want icons, or remove lines with <svg> otherwise)
// import { HiUserCircle, HiAcademicCap } from "react-icons/hi2";

function Student() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    Contact: "",
    district: "",
    city: "",
    state: "",
    id: "",
    courseName: "",
    collegeName: "",
    branch: "",
    year: "",
    passoutYear: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    try {
      const payload = { ...form };
      // 💥 IMPORTANT FIX
      if (!payload.id || payload.id.trim() === "") {
        delete payload.id;
      }

      const res = await api.post("/student/register", payload);
      toast.success(
        `🎉 Student Registered Successfully!\nGenerated Code: ${res.data.studentCode}`
      );
      setForm({
        fullName: "",
        email: "",
        Contact: "",
        district: "",
        city: "",
        state: "",
        id: "",
        courseName: "",
        collegeName: "",
        branch: "",
        year: "",
        passoutYear: "",
      });
    } catch (err) {
      toast.error(err.response?.data?.error || "Error registering student");
    }
  };

  return (
    <div
      className="pt-20 min-h-screen flex items-center justify-center px-4 pb-15"
      style={{
        background: `url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat, #181f2c`,
      }}
    >
      <div className="w-full max-w-xl bg-gray-900/70 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-blue-800 mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-8 tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-400 to-emerald-400 drop-shadow-lg">
          Student Registration
        </h2>

        {/* Personal Details */}
        <div className="mb-6">
          <div className="text-lg font-semibold mb-2 flex items-center gap-2 text-cyan-300 tracking-wide">
            {/* <HiUserCircle className="text-2xl" /> */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 17.804A9.004 9.004 0 0012 21a9.004 9.004 0 006.879-3.196A9.004 9.004 0 0021 12a9.004 9.004 0 00-2.585-6.317M12 3a9.004 9.004 0 00-7 9c0 2.21.8 4.225 2.121 5.804"
              ></path>
            </svg>
            Personal Details
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "fullName", label: "Full Name" },
              { name: "email", label: "Email", type: "email" },
              { name: "Contact", label: "Contact Number" },
              { name: "id", label: "PAN/Aadhar/DL (Optional)" },
              { name: "district", label: "District" },
              { name: "city", label: "City" },
              { name: "state", label: "State" },
            ].map(({ name, label, type }) => (
              <div key={name}>
                <label className="block text-gray-200 font-medium mb-1">
                  {label}
                </label>
                <input
                  type={type || "text"}
                  name={name}
                  value={form[name]}
                  onChange={handleChange}
                  placeholder={label}
                  className="w-full border border-blue-900 bg-gray-800 text-gray-100 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none transition shadow-sm placeholder-gray-400"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Education Details */}
        <div className="mb-4">
          <div className="text-lg font-semibold mb-2 flex items-center gap-2 text-purple-300 tracking-wide">
            {/* <HiAcademicCap className="text-2xl" /> */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89-3.26a2 2 0 011.64 0L21 8m-9 0v6m0 6v-6m0 0L3 8m18 0l-7.89 3.26a2 2 0 01-1.64 0L3 8"
              ></path>
            </svg>
            Education Details
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "collegeName", label: "College Name" },
              { name: "courseName", label: "Course Name" },
              { name: "branch", label: "Branch" },
            ].map(({ name, label, type }) => (
              <div key={name}>
                <label className="block text-gray-200 font-medium mb-1">
                  {label}
                </label>
                <input
                  type={type || "text"}
                  name={name}
                  value={form[name]}
                  onChange={handleChange}
                  placeholder={label}
                  className="w-full border border-blue-900 bg-gray-800 text-gray-100 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none transition shadow-sm placeholder-gray-400"
                />
              </div>
            ))}
            <div>
              <label className="block text-gray-200 font-medium mb-1">
                Year
              </label>
              <select
                name="year"
                value={form.year}
                onChange={handleChange}
                className="w-full border border-blue-900 bg-gray-800 text-gray-100 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none transition shadow-sm"
              >
                <option value="">Select Year</option>
                {["1st", "2nd", "3rd", "4th", "Graduate"].map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-200 font-medium mb-1">
                Passout Year
              </label>
              <input
                type="number"
                name="passoutYear"
                value={form.passoutYear}
                onChange={handleChange}
                placeholder="Passout Year"
                className="w-full border border-blue-900 bg-gray-800 text-gray-100 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none transition shadow-sm placeholder-gray-400"
              />
            </div>
          </div>
        </div>
 
        <button
          onClick={handleSubmit}
          className="w-full mt-6  cursor-pointer bg-gradient-to-r from-blue-700 via-purple-700 to-emerald-500 hover:opacity-85 text-white py-3 rounded-lg text-lg font-bold shadow-lg tracking-wider transition"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Student;
