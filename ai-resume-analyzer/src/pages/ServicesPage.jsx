// src/pages/ServicesPage.jsx
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-violet-900/20 to-black"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <Navbar />
      
      <main className="container mx-auto px-6 pt-20 flex flex-col items-center justify-center text-center relative z-10">
        <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-10 max-w-4xl mx-auto shadow-2xl">
          <h1 className="text-5xl md:text-6xl mb-6 font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Our Services
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10">
            Comprehensive AI-powered resume analysis tools to boost your career prospects
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition">
              <h3 className="text-2xl font-bold mb-4 text-purple-300">ATS Optimization</h3>
              <p className="text-gray-300">Ensure your resume passes automated screening systems with our advanced optimization tools.</p>
            </div>
            
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition">
              <h3 className="text-2xl font-bold mb-4 text-pink-300">Skills Assessment</h3>
              <p className="text-gray-300">Identify skill gaps and get personalized recommendations to strengthen your profile.</p>
            </div>
            
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition">
              <h3 className="text-2xl font-bold mb-4 text-blue-300">Action Verbs</h3>
              <p className="text-gray-300">Enhance your bullet points with powerful action verbs that make an impact.</p>
            </div>
            
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition">
              <h3 className="text-2xl font-bold mb-4 text-green-300">Metrics & Results</h3>
              <p className="text-gray-300">Quantify your achievements with measurable outcomes that impress employers.</p>
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

export default ServicesPage;