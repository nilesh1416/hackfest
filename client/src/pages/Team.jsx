import React from 'react';

// Sample member data — replace with real data or fetch from backend
const team = [
  {
    name: 'Archana Chaurasiya',
    role: 'President',
    image: '/images/archana.jpg',
    linkedin: 'https://linkedin.com/in/archana',
    github: 'https://github.com/archana'
  },
  {
    name: 'Vishesh Mishra',
    role: 'MERN Developer',
    image: '/images/vishesh.jpg',
    linkedin: '#',
    github: '#'
  },
  {
    name: 'Tanya Singh',
    role: 'Coordinator',
    image: '/images/tanya.jpg',
    linkedin: '#',
  },
  // ... add other members
];

const Team = () => (
  <div className="max-w-6xl mx-auto px-4 py-12">
    <h2 className="text-4xl font-bold text-center mb-8">Meet the Team</h2>
    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {team.map((member, i) => (
        <div key={i} className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-56 object-cover rounded-t-lg"
          />
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{member.role}</p>
            <div className="mt-3 flex justify-center space-x-4">
              {member.linkedin && <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">LinkedIn</a>}
              {member.github && <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-200 hover:text-gray-400">GitHub</a>}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Team;
