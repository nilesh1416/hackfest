import React from 'react';
import DashboardLayout from '../components/layouts/DashboardLayout'; // adjust path if needed

const CampusAmbassador = () => {
  

  return (
    <DashboardLayout className='justify-items-end'>
      
      <div className="max-w-5xl  mx-auto px-4 py-10">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-6 text-center">Campus Ambassador Program</h1>

      {/* What is CA */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Who is a Campus Ambassador?</h2>
        <p className="text-gray-700 dark:text-gray-300">
          A Campus Ambassador is the face and voice of our Hackathon Fest in their respective college.
          You will be responsible for spreading the word, encouraging participation, and connecting us with your peers.
        </p>
      </section>

      {/* Perks and Benefits */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Perks & Benefits</h2>
        <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300">
          <li>Certificate of Appreciation</li>
          <li>Free Hackathon Goodies</li>
          <li>Letter of Recommendation (for top performers)</li>
          <li>Featured on Official Website</li>
        </ul>
      </section>

      {/* Responsibilities */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Responsibilities</h2>
        <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300">
          <li>Promote our hackathon within your college</li>
          <li>Coordinate with organizing team</li>
          <li>Ensure maximum registrations from your campus</li>
        </ul>
      </section>

      {/* Registration Form */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Join Now</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Full Name" className="p-2 rounded border" required />
          <input type="email" placeholder="Email" className="p-2 rounded border" required />
          <input type="text" placeholder="Phone Number" className="p-2 rounded border" required />
          <input type="text" placeholder="College Name" className="p-2 rounded border" required />
          <input type="text" placeholder="Branch & Year" className="p-2 rounded border" required />
          <input type="text" placeholder="City" className="p-2 rounded border" required />
          <textarea placeholder="Why do you want to become CA?" className="p-2 rounded border col-span-1 md:col-span-2" required />
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded col-span-1 md:col-span-2 hover:bg-blue-700">
            Submit
          </button>
        </form>
      </section>

      {/* Contact Info */}
      <section className="text-center">
        <h2 className="text-xl font-semibold mb-2">Have Questions?</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Email us at <a href="mailto:hackfest@mmmut.ac.in" className="text-blue-600">hackfest@mmmut.ac.in</a>
        </p>
      </section>
    </div>
    
    </DashboardLayout>
    
  );
};

export default CampusAmbassador;
