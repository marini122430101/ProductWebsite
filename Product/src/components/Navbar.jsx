import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png"

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-md shadow-sm border-b border-[#e9e4da]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src= {Logo}  alt="logo" className="w-18 object-contain drop-shadow-sm" />
        </div>

        {/* Menu */}
        <div className="flex items-center gap-8 text-green-700 font-bold">
          <NavLink to="/" className="hover:text-green-900">Home</NavLink>
          <NavLink to="/description" className="hover:text-green-900">Description</NavLink>
          <NavLink to="/documentation" className="hover:text-green-900">Documentation</NavLink>
          <NavLink to="/video" className="hover:text-green-900">Video</NavLink>
          <NavLink to="/repository" className="hover:text-green-900">Repository</NavLink>
        </div>

        {/* Button */}
        <Link
          to="/team"
          className="bg-green-800 text-white px-6 py-2  rounded-full shadow-md hover:bg-green-900 transition"
        >
          About Us
        </Link>
      </div>
    </nav>
  );
}
