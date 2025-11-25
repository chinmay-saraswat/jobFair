import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Student Registration", path: "/student" },
    { name: "Company Registration", path: "/company" },
  ];

  return (
    <nav className="fixed w-full z-20 top-0 left-0 bg-gray-900/80 backdrop-blur-md shadow-lg border-b border-blue-900">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-2 px-4">
        <span className="text-lg font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 text-transparent bg-clip-text drop-shadow">
          Tech Jobfair 2025
        </span>
        {/* Navigation Links */}
        <div className="flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative px-1 text-base font-semibold transition duration-200
                ${
                  location.pathname === link.path
                    ? "text-emerald-400"
                    : "text-gray-100 hover:text-blue-400"
                }
              `}
            >
              {link.name}
              {/* Active underline animation */}
              {location.pathname === link.path && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 rounded-full animate-in-underline" />
              )}
            </Link>
          ))}
        </div>
      </div>
      <style>{`
        .animate-in-underline {
          animation: underline-grow .45s cubic-bezier(.4,0,.2,1);
        }
        @keyframes underline-grow {
          from { width: 0; }
          to { width: 100%; }
        }
      `}</style>
    </nav>
  );
}
