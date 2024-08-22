import React, { useState, useEffect } from 'react';

function MiddleSection() {
  const [workExperiences, setWorkExperiences] = useState([]);

  useEffect(() => {
    // Simulate fetching random data
    const companies = ['FutureTech Inc.', 'GreenEnergy Co.', 'AICorp', 'SpaceX Solutions', 'BioTech Innovations'];
    const titles = ['AI Engineer', 'Sustainability Analyst', 'Quantum Computing Specialist', 'Space Systems Architect', 'Biotechnology Researcher'];
    const locations = ['Silicon Valley, CA', 'Austin, TX', 'Boston, MA', 'Seattle, WA', 'Houston, TX'];

    const randomExperiences = Array(3).fill().map(() => ({
      organization: companies[Math.floor(Math.random() * companies.length)],
      title: titles[Math.floor(Math.random() * titles.length)],
      status: Math.random() > 0.5 ? 'Current' : 'Past',
      startDate: `${2020 + Math.floor(Math.random() * 4)}`,
      endDate: Math.random() > 0.5 ? 'Present' : `${2022 + Math.floor(Math.random() * 3)}`,
      location: locations[Math.floor(Math.random() * locations.length)],
    }));

    setWorkExperiences(randomExperiences);
  }, []);

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gradient-to-b from-indigo-100 to-purple-200 p-8">
      <h1 className="text-4xl font-bold text-indigo-800 mb-10">Professional Profile</h1>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-2 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Work Experience</h2>
          {workExperiences.map((exp, index) => (
            <div key={index} className="mb-6 bg-indigo-50 p-4 rounded-lg">
              <h3 className="text-xl font-medium text-indigo-900">{exp.title}</h3>
              <p className="text-indigo-700">{exp.organization}</p>
              <p className="text-sm text-indigo-600">{exp.location}</p>
              <p className="text-sm text-indigo-500">{exp.startDate} - {exp.endDate}</p>
              <span className={`inline-block px-2 py-1 text-xs rounded-full mt-2 ${exp.status === 'Current' ? 'bg-green-200 text-green-800' : 'bg-gray-200 text-gray-800'}`}>
                {exp.status}
              </span>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Skills</h2>
            <ul className="list-disc list-inside text-indigo-900">
              <li>Artificial Intelligence</li>
              <li>Quantum Computing</li>
              <li>Sustainable Technologies</li>
              <li>Biotechnology</li>
              <li>Space Systems Engineering</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Achievements</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-yellow-500 mr-2">🏆</span>
                <span className="text-indigo-900">Innovation Award 2023</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">📚</span>
                <span className="text-indigo-900">Published in Nature Journal</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">🌱</span>
                <span className="text-indigo-900">Sustainable Tech Hackathon Winner</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full max-w-5xl mt-8 bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Education</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-indigo-100">
              <tr>
                <th className="py-2 px-4 text-left">Degree</th>
                <th className="py-2 px-4 text-left">Institution</th>
                <th className="py-2 px-4 text-left">Field of Study</th>
                <th className="py-2 px-4 text-left">Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">Ph.D.</td>
                <td className="py-2 px-4 border-b">Future University</td>
                <td className="py-2 px-4 border-b">Quantum AI</td>
                <td className="py-2 px-4 border-b">2025</td>
              </tr>
              <tr>
                <td className="py-2 px-4">M.Sc.</td>
                <td className="py-2 px-4">Tech Institute</td>
                <td className="py-2 px-4">Advanced Computing</td>
                <td className="py-2 px-4">2023</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MiddleSection;