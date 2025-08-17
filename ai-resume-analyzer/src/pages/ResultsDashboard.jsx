// src/pages/ResultsDashboard.jsx
import { Link } from 'react-router-dom';
import ScoreCard from '../components/ScoreCard';
import ChartSection from '../components/ChartSection';
import SuggestionsList from '../components/SuggestionsList';

const ResultsDashboard = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-4xl text-center mb-10">Resume Analysis Results</h2>
      <ScoreCard />
      <ChartSection />
      <SuggestionsList />
      <div className="text-center mt-10">
        <Link to="/upload">
          <button className="btn-primary bg-blue-600 hover:bg-blue-700">
            Upload Another Resume
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ResultsDashboard;