import { useState } from 'react';

const EditProfile = () => {
  const [name, setName] = useState('');
  const [college, setCollege] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle save to backend
    console.log("Updated:", { name, college });
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" className="border p-2 w-full" />
        <input value={college} onChange={e => setCollege(e.target.value)} placeholder="College" className="border p-2 w-full" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">Save</button>
      </form>
    </div>
  );
};

export default EditProfile;
