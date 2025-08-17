// src/pages/LandingPage.jsx
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <h1 className="text-5xl md:text-7xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
        AI Resume Analyzer
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-10">
        Upload your resume and get instant feedback on structure, skills, and ATS readiness.
      </p>
      <Link to="/upload">
        <button className="btn-primary text-lg py-3 px-8">
          Upload Resume
        </button>
      </Link>
    </div>
  );
};

export default LandingPage;