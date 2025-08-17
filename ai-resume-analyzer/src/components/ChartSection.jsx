// src/components/ChartSection.jsx
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Structure', score: 12 },
  { name: 'Clarity', score: 16 },
  { name: 'Action Verbs', score: 18 },
  { name: 'Metrics', score: 10 },
  { name: 'ATS Readiness', score: 14 },
];

const ChartSection = () => {
  return (
    <div className="card mb-8 h-80">
      <h3 className="text-2xl mb-4">Category Breakdown</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barSize={60} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="name" stroke="#D1D5DB" />
          <YAxis domain={[0, 20]} stroke="#D1D5DB" />
          <Tooltip
            contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '8px' }}
            labelStyle={{ color: '#D1D5DB' }}
          />
          <Bar dataKey="score" fill="#A855F7" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartSection;