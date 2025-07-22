// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="px-6 py-10 max-w-4xl mx-auto text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6 text-center">About HackFest</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">About the Event</h2>
        <p className="text-lg">
          HackFest is a premier inter-collegiate hackathon organized to inspire, connect, and challenge student developers across the country. Participants collaborate on innovative tech solutions under intense timelines to solve real-world problems.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">About MMMUT</h2>
        <p className="text-lg">
          Madan Mohan Malaviya University of Technology (MMMUT), Gorakhpur, is a renowned state technical university offering quality education in engineering and applied sciences. With a legacy of academic excellence, MMMUT fosters innovation and research across disciplines.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Why HackFest @ MMMUT?</h2>
        <ul className="list-disc pl-6 text-lg">
          <li>Dynamic student-led organizing team</li>
          <li>Modern infrastructure and resources</li>
          <li>Supportive academic and technical mentors</li>
          <li>Exposure to industry-standard challenges and tools</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
