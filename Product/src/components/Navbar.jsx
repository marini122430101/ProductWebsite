import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png"

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-xl shadow-lg border-b border-green-100">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src={Logo} 
            alt="Healvire Logo" 
            className="w-35 h-14 object-contain drop-shadow-md transition-transform group-hover:scale-110" 
          />
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-1">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                isActive 
                  ? 'bg-green-700 text-white shadow-md' 
                  : 'text-green-700 hover:bg-green-50 hover:text-green-900'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/description" 
            className={({ isActive }) => 
              `px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                isActive 
                  ? 'bg-green-700 text-white shadow-md' 
                  : 'text-green-700 hover:bg-green-50 hover:text-green-900'
              }`
            }
          >
            Description
          </NavLink>
          <NavLink 
            to="/documentation" 
            className={({ isActive }) => 
              `px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                isActive 
                  ? 'bg-green-700 text-white shadow-md' 
                  : 'text-green-700 hover:bg-green-50 hover:text-green-900'
              }`
            }
          >
            Documentation
          </NavLink>
          <NavLink 
            to="/video" 
            className={({ isActive }) => 
              `px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                isActive 
                  ? 'bg-green-700 text-white shadow-md' 
                  : 'text-green-700 hover:bg-green-50 hover:text-green-900'
              }`
            }
          >
            Video
          </NavLink>
          <NavLink 
            to="/repository" 
            className={({ isActive }) => 
              `px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                isActive 
                  ? 'bg-green-700 text-white shadow-md' 
                  : 'text-green-700 hover:bg-green-50 hover:text-green-900'
              }`
            }
          >
            Repository
          </NavLink>
        </div>

        {/* Button */}
        <Link
          to="/team"
          className="bg-gradient-to-r from-green-700 to-emerald-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
        >
          About Us
        </Link>
      </div>
    </nav>
  );
}
