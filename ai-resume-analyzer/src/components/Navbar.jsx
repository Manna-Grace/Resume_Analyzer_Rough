// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 border-b border-gray-700 px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-anton text-purple-400">AI Resume Analyzer</Link>
        <div className="space-x-6">
          <Link to="/" className="hover:text-purple-400 transition">Home</Link>
          <Link to="/upload" className="hover:text-purple-400 transition">Upload</Link>
          <Link to="/results" className="hover:text-purple-400 transition">Results</Link>
          <Link to="/admin" className="hover:text-purple-400 transition">Admin</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;