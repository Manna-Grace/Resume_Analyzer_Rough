// src/pages/AdminDashboard.jsx
const mockData = [
  { user: 'john@example.com', score: 84, weak: 'Structure, Metrics' },
  { user: 'sarah@domain.com', score: 72, weak: 'Clarity, ATS Readiness' },
  { user: 'alex@work.com', score: 91, weak: 'Action Verbs' },
];

const AdminDashboard = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-4xl mb-8">Admin Dashboard</h2>
      <div className="card overflow-hidden">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-purple-400">User</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-purple-400">Resume Score</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-purple-400">Weak Areas</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {mockData.map((row, i) => (
              <tr key={i} className="hover:bg-gray-700 transition">
                <td className="px-6 py-4">{row.user}</td>
                <td className="px-6 py-4">{row.score}</td>
                <td className="px-6 py-4 text-red-300">{row.weak}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;