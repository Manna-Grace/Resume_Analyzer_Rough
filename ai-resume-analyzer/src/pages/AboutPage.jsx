// src/pages/AboutPage.jsx
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const AboutPage = () => {
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
              About Us
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
            We're passionate about helping job seekers stand out in today's competitive market.
          </p>
          <p className="text-gray-300 mb-8">
            Our AI-powered platform analyzes your resume against industry standards, 
            identifies strengths and weaknesses, and provides actionable insights to optimize your application.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">10K+</div>
              <div className="text-gray-400">Resumes Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400">95%</div>
              <div className="text-gray-400">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">24/7</div>
              <div className="text-gray-400">Support Available</div>
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

export default AboutPage;