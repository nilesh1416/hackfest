import React, { useState } from "react";

const ProjectUploadForm = () => {
  const [formData, setFormData] = useState({
    teamName: "",
    branch: "",
    email: "",
    phone: "",
    college: "",
    projectTitle: "",
    problemTrackId: "",
    pptLink: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace this URL with your backend endpoint later
      const response = await fetch("http://localhost:5000/api/project/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (response.ok) {
        alert("Project uploaded successfully!");
      } else {
        alert("Upload failed: " + result.message);
      }
    } catch (err) {
      alert("Error submitting form");
      console.error(err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded">
      <h2 className="text-xl font-bold mb-4">Upload Your Project</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { label: "Team Name", name: "teamName" },
          { label: "Branch", name: "branch" },
          { label: "Email", name: "email" },
          { label: "Phone", name: "phone" },
          { label: "College", name: "college" },
          { label: "Project Title", name: "projectTitle" },
          { label: "Problem Track ID", name: "problemTrackId" },
          { label: "PPT Google Drive Link", name: "pptLink" }
        ].map((field) => (
          <div key={field.name}>
            <label className="block text-sm font-medium">{field.label}</label>
            <input
              type="text"
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-1"
              required
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
        >
          Upload Project
        </button>
      </form>
    </div>
  );
};

export default ProjectUploadForm;
