import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Jobseeker", path: "/student" },
    { name: "Employer", path: "/company" },
  ];

  return (
    <nav className="fixed w-full z-20 top-0 left-0 bg-gray-900/85 backdrop-blur-md shadow-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-2.5 px-4">
        <span className="text-sm md:text-base font-semibold tracking-wide text-slate-100">
          <span className="bg-gradient-to-r from-cyan-300 via-emerald-300 to-sky-300 text-transparent bg-clip-text">
            Mega Job Fair 2025
          </span>
        </span>

        {/* Navigation Links */}
        <div className="flex gap-4 md:gap-8 text-xs md:text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative px-1 font-medium transition-colors duration-200 ${
                location.pathname === link.path
                  ? "text-emerald-300"
                  : "text-slate-200 hover:text-cyan-300"
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-300 via-emerald-300 to-sky-300 rounded-full animate-in-underline" />
              )}
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .animate-in-underline {
          animation: underline-grow .35s cubic-bezier(.4,0,.2,1);
        }
        @keyframes underline-grow {
          from { width: 0; }
          to { width: 100%; }
        }
      `}</style>
    </nav>
  );
}
