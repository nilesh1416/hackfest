import React from 'react';

const Events = () => {
  const schedule = [
    { time: '09:00 AM', title: 'Inauguration & Welcome Note' },
    { time: '10:00 AM', title: 'Problem Statement Reveal' },
    { time: '11:00 AM', title: 'Team Coding Begins' },
    { time: '01:00 PM', title: 'Lunch Break' },
    { time: '02:00 PM', title: 'Mentorship Sessions' },
    { time: '06:00 PM', title: 'Progress Evaluation' },
    { time: '08:00 PM', title: 'Dinner & Networking' },
    { time: '10:00 PM', title: 'Overnight Hacking Continues' },
    { time: '08:00 AM (Next Day)', title: 'Final Submission' },
    { time: '10:00 AM', title: 'Project Presentations' },
    { time: '12:00 PM', title: 'Result Declaration & Prize Distribution' },
  ];

  return (
    <div className="px-6 py-10 max-w-5xl mx-auto text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold text-center mb-8">HackFest 2025 - Event Schedule</h1>

      <section className="mb-10">
        <p className="text-lg text-center">
          Join us for an electrifying 24-hour hackathon filled with coding, innovation, mentorship, and fun.
          From brainstorming sessions to final demos — this schedule keeps you on track!
        </p>
      </section>

      <section>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          {schedule.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-3 border-b border-gray-300 dark:border-gray-600"
            >
              <span className="font-medium">{item.time}</span>
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;
