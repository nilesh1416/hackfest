import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert('Message sent! (Functionality pending backend)');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            required
            onChange={handleChange}
            className="w-full p-3 border rounded"
          ></textarea>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Send Message
          </button>
        </form>

        {/* Contact Info and Map */}
        <div className="space-y-6">
          <div className="bg-gray-100 p-4 rounded shadow">
            <h3 className="font-bold text-lg mb-2">Contact Information</h3>
            <p><strong>Madan Mohan Malviya University of Technology</strong></p>
            <p>Gorakhpur, Uttar Pradesh 273010</p>
            <p><strong>Phone:</strong> +91 9219998403</p>
            <p><strong>Hours:</strong> Mon - Fri, 9:00 AM - 5:00 PM</p>
          </div>

          <div className="overflow-hidden rounded shadow">
            <iframe
              title="MMUT Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14342.091506904777!2d83.20822884712285!3d26.750396496054873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39915bda6c2df281%3A0xe0d88a0c2971bdb9!2sMadan%20Mohan%20Malaviya%20University%20Of%20Technology%2C%20Gorakhpur!5e0!3m2!1sen!2sin!4v1655727687214!5m2!1sen!2sin"
              width="100%"
              height="250"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
