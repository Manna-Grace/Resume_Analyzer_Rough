// src/pages/UploadPage.jsx
import { useNavigate } from 'react-router-dom';
import UploadForm from '../components/UploadForm';
import { useState } from 'react';

const UploadPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleUpload = (file) => {
    setLoading(true);
    // Simulate backend analysis
    setTimeout(() => {
      setLoading(false);
      navigate('/results');
    }, 2500);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-4xl mb-8 text-center">Upload Your Resume</h2>
      {loading ? (
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-lg">Analyzing your resume...</p>
        </div>
      ) : (
        <UploadForm onUpload={handleUpload} />
      )}
    </div>
  );
};

export default UploadPage;