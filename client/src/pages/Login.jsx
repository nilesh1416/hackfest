import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [msg, setMsg] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      
      // Save token or user info if needed
      localStorage.setItem('token', res.data.token);

      setMsg('Login successful!');
      navigate('/dashboard');  // ⬅️ Redirect to dashboard
    } catch (err) {
      setError(true);
      setMsg(err.response?.data?.msg || 'Login failed');
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded shadow">
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600 dark:text-indigo-300">Login</h2>

      {msg && (
        <p className={`mb-4 text-center font-medium ${error ? 'text-red-600' : 'text-green-600'}`}>
          {msg}
        </p>
      )}

      <form onSubmit={handleSubmit} className="grid gap-4">
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white" />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white" />
        <button type="submit" disabled={loading}
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>

      <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-300">
        Don't have an account?{' '}
        <a href="/register" className="text-blue-600 hover:underline dark:text-blue-400">
          Register here
        </a>
      </p>
    </div>
  );
}

export default Login;
