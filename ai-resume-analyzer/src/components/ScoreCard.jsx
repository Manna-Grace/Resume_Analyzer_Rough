// src/components/ScoreCard.jsx
const ScoreCard = () => {
  return (
    <div className="card flex flex-col items-center text-center mb-8">
      <div className="text-6xl font-anton text-purple-400 mb-2">84</div>
      <p className="text-gray-300">Resume Score (0–100)</p>
      <p className="mt-4 text-lg text-gray-200">
        Your resume is strong in skills but weak in structure.
      </p>
    </div>
  );
};

export default ScoreCard;