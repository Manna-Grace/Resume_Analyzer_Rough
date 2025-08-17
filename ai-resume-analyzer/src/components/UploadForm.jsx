// src/components/UploadForm.jsx
import { useState } from 'react';

const UploadForm = ({ onUpload }) => {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && (droppedFile.name.endsWith('.pdf') || droppedFile.name.endsWith('.docx'))) {
      setFile(droppedFile);
    }
  };

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && (selectedFile.name.endsWith('.pdf') || selectedFile.name.endsWith('.docx'))) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      onUpload(file);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`border-2 border-dashed rounded-xl p-10 text-center transition-all ${
        isDragging ? 'border-purple-500 bg-purple-900 bg-opacity-20' : 'border-gray-600 hover:border-gray-500'
      }`}
    >
      <p className="text-lg mb-4">
        {file ? `Selected: ${file.name}` : "Drag & drop your resume (PDF or DOCX)"}
      </p>
      <input type="file" accept=".pdf,.docx" onChange={handleChange} className="hidden" id="file-upload" />
      <label htmlFor="file-upload" className="btn-primary inline-block cursor-pointer mb-4">
        Choose File
      </label>
      {file && (
        <button type="submit" className="btn-primary bg-green-600 hover:bg-green-700">
          Analyze Resume
        </button>
      )}
    </form>
  );
};

export default UploadForm;