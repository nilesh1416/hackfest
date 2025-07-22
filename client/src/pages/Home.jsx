import React from 'react';
import Register from './Register';
import { href } from 'react-router-dom';

function Home() {
  return (
    <>
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to MMMUT Hack Fest 2025</h1>
        <p className="text-lg">24-hour coding marathon. Team up. Build. Compete. Win!</p>
        <button className="mt-6 px-6 py-2 bg-white text-blue-600 font-semibold rounded shadow hover:bg-gray-100 ">
          <a href='./Register'>Register Now</a>
        </button>
      </section>

      {/* Announcement Section */}
      <section className="py-12 px-6">
        <h2 className="text-2xl font-bold mb-4">📢 Announcements</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Last date for registration: 5th August 2025</li>
          <li>Theme release on 6th August 2025</li>
          <li>Mentorship sessions start on 8th August 2025</li>
        </ul>
      </section>

      {/* Album Section */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">📸 Memories from Past Hackathons</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img src="https://via.placeholder.com/300" alt="event1" className="rounded shadow" />
          <img src="https://via.placeholder.com/300" alt="event2" className="rounded shadow" />
          <img src="https://via.placeholder.com/300" alt="event3" className="rounded shadow" />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-6">
        <h2 className="text-2xl font-bold mb-6">❓ Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="border p-4 rounded">
            <summary className="font-semibold cursor-pointer">Who can participate?</summary>
            <p className="mt-2">Any student enrolled in a college/university can register.</p>
          </details>
          <details className="border p-4 rounded">
            <summary className="font-semibold cursor-pointer">Is there any registration fee?</summary>
            <p className="mt-2">No, it's completely free!</p>
          </details>
          <details className="border p-4 rounded">
            <summary className="font-semibold cursor-pointer">Can I participate solo?</summary>
            <p className="mt-2">Yes, both solo and team participation is allowed.</p>
          </details>
        </div>
      </section>
    </div>
    </>
  );
}

export default Home;