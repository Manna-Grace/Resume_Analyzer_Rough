// src/pages/SolutionsPage.jsx
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const SolutionsPage = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/40 via-purple-900/20 to-black"></div>
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700"></div>
      </div>

      <Navbar />
      
      <main className="container mx-auto px-6 pt-20 flex flex-col items-center justify-center text-center relative z-10">
        <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-10 max-w-4xl mx-auto shadow-2xl">
          <h1 className="text-5xl md:text-6xl mb-6 font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-blue-400">
              Solutions
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10">
            Tailored resume solutions for different career stages and goals
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition text-center">
              <h3 className="text-2xl font-bold mb-4 text-purple-300">Job Seekers</h3>
              <p className="text-gray-300">Career changers and entry-level professionals</p>
            </div>
            
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition text-center">
              <h3 className="text-2xl font-bold mb-4 text-pink-300">Professionals</h3>
              <p className="text-gray-300">Mid to senior-level career advancement</p>
            </div>
            
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition text-center">
              <h3 className="text-2xl font-bold mb-4 text-blue-300">Students</h3>
              <p className="text-gray-300">Internships, co-ops, and academic projects</p>
            </div>
          </div>

          <div className="mt-12">
            <Link
              to="/"
              className="px-6 py-2 border border-purple-500 text-purple-300 rounded-lg hover:bg-purple-900/30 transition"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SolutionsPage;