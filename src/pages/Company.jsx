import { useState } from "react";
import api from "../api";
import { toast } from "react-toastify";
// Optionally, add react-icons or keep svg icons as-is

function Company() {
  const [company, setCompany] = useState({
    companyName: "",
    HRName: "",
    email: "",
    Contact: "",
    address: "",
  });

  const [roles, setRoles] = useState([
    { roleName: "", openings: "", expectedSalary: "", JobLocation: "", technologyFeild: "" },
  ]);

  const handleChange = (e) => setCompany({ ...company, [e.target.name]: e.target.value });

  const updateRole = (i, e) => {
    const updated = [...roles];
    updated[i][e.target.name] = e.target.value;
    setRoles(updated);
  };

  const addRole = () => {
    setRoles([
      ...roles,
      { roleName: "", openings: "", expectedSalary: "", JobLocation: "", technologyFeild: "" },
    ]);
  };

  const submit = async () => {
    try {
      await api.post("/company/register", { ...company, jobRoles: roles });
      toast.success("Company Registered Successfully!");
      setCompany({
        companyName: "",
        HRName: "",
        email: "",
        Contact: "",
        address: "",
      });
      setRoles([{ roleName: "", openings: "", expectedSalary: "", JobLocation: "", technologyFeild: "" }]);
    } catch (err) {
      toast.error(err.response?.data?.error || "Error registering company");
    }
  };

  return (
    <div
      className="pt-20 min-h-screen flex items-center justify-center px-4 pb-15"
      style={{
        background: `url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat, #181f2c`,
      }}
    >
      <div className="w-full max-w-3xl bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-blue-800 mx-auto">

        <h2 className="text-3xl font-extrabold text-center mb-8 tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 drop-shadow-lg">
          Company Registration
        </h2>

        {/* Company Details */}
        <div className="mb-6">
          <div className="text-lg font-semibold mb-2 flex items-center gap-2 text-blue-300 tracking-wide">
            {/* <HiBuildingOffice /> */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 20h18M9 20V10M15 20V4M12 20v-6m-6 6v-2a2 2 0 012-2h10a2 2 0 012 2v2"></path></svg>
            Company Details
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "companyName", label: "Company Name" },
              { name: "HRName", label: "HR Name" },
              { name: "email", label: "Email", type: "email" },
              { name: "Contact", label: "Contact" },
              { name: "address", label: "Address" },
            ].map(({ name, label, type }) => (
              <div key={name}>
                <label className="block text-gray-200 font-medium mb-1">{label}</label>
                <input
                  type={type || "text"}
                  name={name}
                  value={company[name]}
                  onChange={handleChange}
                  placeholder={label}
                  className="w-full border border-blue-900 bg-gray-800 text-gray-100 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none transition shadow-sm placeholder-gray-400"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Job Roles */}
        <div>
          <div className="text-lg font-semibold mb-2 flex items-center gap-2 text-purple-300 tracking-wide">
            {/* <HiClipboardDocumentList /> */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 17c1.656 0 3-1.343 3-3 0-1.657-1.344-3-3-3s-3 1.343-3 3c0 1.657 1.344 3 3 3z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M21 13.341V11.1A7.924 7.924 0 0012 3.1a7.924 7.924 0 00-9 8v2.24a9.243 9.243 0 00-1 .659V21h22v-6.999c-.33-.245-.654-.464-1-.66z"></path></svg>
            Job Roles
          </div>
          {roles.map((role, i) => (
            <div key={i} className="border border-blue-900 bg-gray-800 rounded-xl p-6 mb-6 shadow-md">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  name="roleName"
                  placeholder="Role Name"
                  value={role.roleName}
                  onChange={(e) => updateRole(i, e)}
                  className="border border-blue-900 bg-gray-900 text-gray-100 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none placeholder-gray-400"
                />
                <input
                  name="openings"
                  placeholder="Number of Openings"
                  value={role.openings}
                  onChange={(e) => updateRole(i, e)}
                  className="border border-blue-900 bg-gray-900 text-gray-100 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none placeholder-gray-400"
                />
                <input
                  name="expectedSalary"
                  placeholder="Expected Salary"
                  value={role.expectedSalary}
                  onChange={(e) => updateRole(i, e)}
                  className="border border-blue-900 bg-gray-900 text-gray-100 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none placeholder-gray-400"
                />
                <input
                  name="JobLocation"
                  placeholder="Job Location/Hybrid/Remote"
                  value={role.JobLocation}
                  onChange={(e) => updateRole(i, e)}
                  className="border border-blue-900 bg-gray-900 text-gray-100 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none placeholder-gray-400"
                />
                <input
                  name="technologyFeild"
                  placeholder="Technology Required"
                  value={role.technologyFeild}
                  onChange={(e) => updateRole(i, e)}
                  className="border border-blue-900 bg-gray-900 text-gray-100 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none placeholder-gray-400"
                />
              </div>
            </div>
          ))}
          <button
            onClick={addRole}
            className="block w-full md:w-auto mx-auto border border-blue-600 text-blue-200 px-6 py-2 rounded-lg hover:bg-blue-700/90 hover:text-white transition font-semibold mt-2 mb-4 shadow "
          >
            + Add Job Role
          </button>
        </div>
        <button
          onClick={submit}
          className="w-full mt-4 cursor-pointer bg-gradient-to-r from-blue-700 via-purple-700 to-emerald-500 hover:opacity-85 text-white py-3 rounded-xl text-lg font-bold shadow-lg tracking-wide transition"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Company;
