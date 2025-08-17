// src/components/SuggestionsList.jsx
const suggestions = [
  "Use more action verbs like 'Led', 'Managed', 'Optimized'.",
  "Add quantifiable metrics (e.g., 'Increased sales by 30%').",
  "Improve section structure with clear headings and bullet points.",
  "Remove personal pronouns and keep tone professional.",
  "Ensure ATS-friendly formatting (avoid tables, images, columns).",
];

const SuggestionsList = () => {
  return (
    <div className="card">
      <h3 className="text-2xl mb-4">Improvement Suggestions</h3>
      <ul className="space-y-3">
        {suggestions.map((suggestion, i) => (
          <li key={i} className="flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            <span>{suggestion}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuggestionsList;