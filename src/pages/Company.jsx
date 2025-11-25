import { useState } from "react";
import api from "../api";
import { toast } from "react-toastify";

function Company() {
  const [company, setCompany] = useState({
    companyName: "",
    hrName: "",
    email: "",
    phone: "",
    address: "",
  });

  const [roles, setRoles] = useState([{ roleName: "", openings: "", expectedSalary: "" }]);

  const handleChange = (e) => setCompany({ ...company, [e.target.name]: e.target.value });

  const updateRole = (i, e) => {
    const updated = [...roles];
    updated[i][e.target.name] = e.target.value;
    setRoles(updated);
  };

  const addRole = () => {
    setRoles([...roles, { roleName: "", openings: "", expectedSalary: "" }]);
  };

  const submit = async () => {
    try {
      await api.post("/company/register", { ...company, jobRoles: roles });
      toast.success("Company Registered Successfully!");
      setCompany({
        companyName: "",
        hrName: "",
        email: "",
        phone: "",
        address: "",
      });
      setRoles([{ roleName: "", openings: "", expectedSalary: "" }]);
    } catch (err) {
      toast.error(err.response?.data?.error || "Error registering company");
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-blue-900 flex justify-center items-center p-6">
      <div className="w-full max-w-2xl bg-gray-900/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-blue-800">
        <h2 className="text-2xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-400 to-emerald-400">
          Company Registration
        </h2>

        <div className="grid grid-cols-1 gap-4">
          {Object.keys(company).map((key) => (
            <div key={key} className="flex flex-col">
              <label className="capitalize text-sm font-semibold text-gray-200 mb-1">
                {key.replace(/([A-Z])/g, " $1")}
              </label>
              <input
                name={key}
                value={company[key]}
                placeholder={key.replace(/([A-Z])/g, " $1")}
                onChange={handleChange}
                className="border border-blue-900 bg-gray-800 text-gray-100 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none shadow-sm placeholder-gray-400"
              />
            </div>
          ))}
        </div>

        <h3 className="text-lg font-semibold mt-8 mb-2 text-emerald-300">Job Roles</h3>

        {roles.map((role, i) => (
          <div key={i} className="border border-blue-900 bg-gray-800 rounded-lg p-4 mb-4 shadow-sm">
            <div className="grid grid-cols-1 gap-3">
              <input
                name="roleName"
                placeholder="Role Name"
                value={role.roleName}
                className="border border-blue-900 bg-gray-900 text-gray-100 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none placeholder-gray-400"
                onChange={(e) => updateRole(i, e)}
              />
              <input
                name="openings"
                placeholder="Number of Openings"
                value={role.openings}
                className="border border-blue-900 bg-gray-900 text-gray-100 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none placeholder-gray-400"
                onChange={(e) => updateRole(i, e)}
              />
              <input
                name="expectedSalary"
                placeholder="Expected Salary"
                value={role.expectedSalary}
                className="border border-blue-900 bg-gray-900 text-gray-100 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none placeholder-gray-400"
                onChange={(e) => updateRole(i, e)}
              />
            </div>
          </div>
        ))}

        <button
          onClick={addRole}
          className="border border-blue-600 text-blue-300 px-4 py-2 rounded-md hover:bg-blue-800 hover:text-white transition font-semibold mt-1"
        >
          + Add Job Role
        </button>

        <button
          onClick={submit}
          className="w-full mt-6 bg-gradient-to-r from-blue-700 via-purple-700 to-emerald-500 hover:opacity-80 text-white py-3 rounded-lg text-lg font-semibold transition-shadow shadow-md hover:shadow-blue-500/50"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Company;
