import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Second = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 flex items-center justify-center p-10">
        <form className="bg-white p-10 shadow-lg rounded-lg w-full max-w-md" onSubmit={handleSubmit}>
          <h1 className="text-blue-500 font-bold text-3xl text-center mb-6">Sign In</h1>
          <input
            type="text"
            name="username"
            className="border border-blue-500 mb-4 p-2 w-full rounded"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
          />
          <input
            type="password"
            name="password"
            className="border border-blue-500 mb-4 p-2 w-full rounded"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
          <div className="flex items-center mb-4">
            <input type="checkbox" className="mr-2" />
            <p>Remember Me</p>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded w-full mb-4"
          >
            Sign In
          </button>
          <div className="flex justify-center">
            <p>New Here?</p>
            <Link to="/signup" className="ml-2 text-blue-500">Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Second;
