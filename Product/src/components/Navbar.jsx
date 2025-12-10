import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Description", path: "/description" },
    { name: "Documentation", path: "/documentation" },
    { name: "Video Demo", path: "/video" },
    { name: "Team", path: "/team" },
    { name: "Repository", path: "/repository" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-indigo-600 tracking-wide">
          Our Product
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-gray-700 font-medium transition-all duration-200 
                hover:text-indigo-600 hover:underline underline-offset-4
                ${location.pathname === item.path ? "text-indigo-600 font-semibold underline underline-offset-4" : ""}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-white/90 backdrop-blur-md shadow-lg px-6 pb-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`block text-gray-700 font-medium py-2 
                hover:text-indigo-600 transition-all duration-200
                ${location.pathname === item.path ? "text-indigo-600 font-semibold" : ""}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
