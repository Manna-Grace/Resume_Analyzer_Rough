// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-black text-white relative z-10">
      <div className="text-xl font-bold">AI Resume Analyzer</div>
      <div className="space-x-8">
        <Link to="/" className="hover:text-purple-400 transition">Home</Link>
        <Link to="/services" className="hover:text-purple-400 transition">Services</Link>
        <Link to="/solutions" className="hover:text-purple-400 transition">Solutions</Link>
        <Link to="/about" className="hover:text-purple-400 transition">About Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;