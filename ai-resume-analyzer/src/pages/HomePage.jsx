// src/pages/HomePage.jsx
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-violet-900/20 to-black"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>
      <div className="bg-purple-500 w-20 h-20 rounded-lg"></div>

      <Navbar />
      
      <main className="container mx-auto px-6 pt-20 flex flex-col items-center justify-center text-center relative z-10">
        <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-10 max-w-4xl mx-auto shadow-2xl">
          <h1 className="text-5xl md:text-7xl mb-6 font-bold leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
              AI Resume Analyzer
            </span>
          </h1>
          <h2 className="text-4xl md:text-5xl mb-8 font-bold text-white">
            Transform Your Career
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200 leading-relaxed mb-10">
            Get instant feedback on structure, skills, and ATS readiness. Boost your chances of landing your dream job.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition shadow-lg"
            >
              Explore Services
            </Link>
            <Link
              to="/about"
              className="px-8 py-3 border border-purple-500 text-purple-300 bg-purple-900/20 rounded-lg hover:bg-purple-900/40 transition backdrop-blur-sm"
            >
              Learn More
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;