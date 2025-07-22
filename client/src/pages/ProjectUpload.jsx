import React, { useState } from 'react';
import axios from 'axios';

function ProjectUpload() {
  const [formData, setFormData] = useState({
    teamName: '',
    branch: '',
    email: '',
    phone: '',
    college: '',
    problemTrackId: '',
    projectTitle: '',
    pptLink: ''
  });

  const [msg, setMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/project/upload', formData);
      setMsg(res.data.msg || 'Project uploaded successfully!');
      setFormData({
        teamName: '',
        branch: '',
        email: '',
        phone: '',
        college: '',
        problemTrackId: '',
        projectTitle: '',
        pptLink: ''
      });
    } catch (error) {
      setMsg(error.response?.data?.msg || 'Upload failed');
    }
  };

  return (
    <div>
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-4">Upload Project Details</h2>
        {msg && <p className="mb-4 text-green-600">{msg}</p>}
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <input type="text" name="teamName" placeholder="Team Name" value={formData.teamName} onChange={handleChange} required />
          <input type="text" name="branch" placeholder="Branch" value={formData.branch} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
          <input type="text" name="college" placeholder="College" value={formData.college} onChange={handleChange} required />
          <input type="text" name="problemTrackId" placeholder="Problem Track ID" value={formData.problemTrackId} onChange={handleChange} required />
          <input type="text" name="projectTitle" placeholder="Project Title" value={formData.projectTitle} onChange={handleChange} required />
          <input type="url" name="pptLink" placeholder="Google Form PPT Link" value={formData.pptLink} onChange={handleChange} required />
          <button type="submit" className="col-span-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Upload</button>
        </form>
      </div>
    </div>
  );
}

export default ProjectUpload;
