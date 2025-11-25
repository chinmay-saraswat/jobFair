import { useState } from "react";
import api from "../api";
import { toast } from "react-toastify";

function Student() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    aadhar: "",
    courseName: "",
    collegeName: "",
    branch: "",
    year: "",
    passoutYear: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    try {
      const res = await api.post("/student/register", form);
      toast.success(`🎉 Student Registered Successfully!\nGenerated Code: ${res.data.studentCode}`);
      setForm({
        fullName: "",
        email: "",
        phone: "",
        aadhar: "",
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
    <div className="pt-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-950 to-blue-900 px-4">
      <div className="w-full max-w-lg bg-gray-900/90 backdrop-blur-md rounded-xl shadow-xl p-8 border border-blue-800">
        <h2 className="text-2xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-400 to-emerald-400">
          Student Registration Form
        </h2>
        <div className="space-y-4">
          {[
            { name: "fullName", label: "Full Name" },
            { name: "email", label: "Email", type: "email" },
            { name: "phone", label: "Phone (10 digits)" },
            { name: "aadhar", label: "Aadhar Number (12 digits)" },
            { name: "courseName", label: "Course Name" },
            { name: "collegeName", label: "College Name" },
            { name: "branch", label: "Branch" },
            { name: "passoutYear", label: "Passout Year", type: "number" },
          ].map(({ name, label, type }) => (
            <div key={name}>
              <label className="block text-gray-200 font-medium mb-1">{label}</label>
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
            <label className="block text-gray-200 font-medium mb-1">Year</label>
            <select
              name="year"
              value={form.year}
              onChange={handleChange}
              className="w-full border border-blue-900 bg-gray-800 text-gray-100 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none transition shadow-sm"
            >
              <option value="">Select Year</option>
              {["1st", "2nd", "3rd", "4th", "Graduate"].map((year) => (
                <option key={year} value={year} className="text-blue-600">{year}</option>
              ))}
            </select>
          </div>
          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-blue-700 via-purple-700 to-emerald-500 hover:opacity-80 text-white py-3 rounded-md text-lg font-semibold transition-shadow shadow-md hover:shadow-blue-500/50"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Student;
