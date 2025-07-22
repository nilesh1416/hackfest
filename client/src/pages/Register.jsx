import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    college: '',
    address: '',
    mobile: '',
    branch: '',
    batch: '',
    email: '',
    teamName: '',
    dob: '',
    password: ''
  });

  const [msg, setMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', formData);
      setMsg(res.data.msg || 'Registered successfully!');
    } catch (error) {
      setMsg(error.response?.data?.msg || 'Registration failed');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Team Leader Registration</h2>
      {msg && <p className="mb-4 text-blue-600">{msg}</p>}
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="text" name="college" placeholder="College" onChange={handleChange} required />
        <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
        <input type="text" name="mobile" placeholder="Mobile" onChange={handleChange} required />
        <input type="text" name="branch" placeholder="Branch" onChange={handleChange} required />
        <input type="text" name="batch" placeholder="Batch" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="text" name="teamName" placeholder="Team Name" onChange={handleChange} required />
        <input type="date" name="dob" placeholder="DOB" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit" className="col-span-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Register</button>
        
      </form>
      <p className="mt-4 text-sm text-center text-black dark:text-gray-300">
  Already registered?{' '}
  <a
    href="/login"
    className="text-blue-600 hover:underline dark:text-blue-400"
  >
    Login here
  </a>
</p>   
    </div>
  );
}

export default Register;
