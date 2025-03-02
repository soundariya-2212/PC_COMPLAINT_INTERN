import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import api from '../../services/api.jsx'; // Axios configuration
import Navbar from '../shared/Navbar';
import { GoogleLogin } from '@react-oauth/google';  // Google OAuth

 const Register = () => {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setRegisterData({ ...registerData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post('/reg', registerData); // Send data to backend
      if (res.status === 200 || res.status === 201) {
        toast.success('Signup Success');
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      } else {
        toast.error('Signup failed');
        console.log(registerData.name, registerData.email, registerData.password);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Signup failed');
      console.log("error");
    }
  };

  const handleGoogleSuccess = (response) => {
    // Handle the Google login response here and send it to your server
    const token = response.credential;
    // Example API call to your backend to handle Google login
    api.post('/auth/google', { token })
      .then(res => {
        toast.success('Google login successful!');
        navigate('/dashboard');
      })
      .catch(err => toast.error('Google login failed!'));
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-300">
        <div className="w-[24rem] max-w-lg mx-auto bg-white shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out p-6 rounded-lg">
          <h2 className="text-2xl text-center font-bold mb-4">Create an account</h2>

          <div className="flex flex-col gap-4">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={() => toast.error('Google login failed!')}
              useOneTap
              theme="outline"
              className="flex items-center justify-center gap-2 bg-blue-600 text-white hover:bg-blue-500 py-2 rounded-md transition-colors duration-200 w-full"
            >
              <img
                src="https://ik.imagekit.io/1in7nqs7x/pc%20complaint/google.webp?updatedAt=1735835145372"
                alt="Google"
                className="w-5 h-5"
              />
              Register with Google
            </GoogleLogin>
          </div>

          <h3 className="text-center text-gray-600 mt-4">or register with</h3>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-600 mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="User name"
                className="w-full p-2 bg-gray-100 border border-gray-300 text-gray-900 rounded-md"
                onChange={handleChange}
                value={registerData.name}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-600 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="example@gmail.com"
                className="w-full p-2 bg-gray-100 border border-gray-300 text-gray-900 rounded-md"
                onChange={handleChange}
                value={registerData.email}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-600 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="******"
                className="w-full p-2 bg-gray-100 border border-gray-300 text-gray-900 rounded-md"
                onChange={handleChange}
                value={registerData.password}
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-md transition-colors duration-200"
            >
              Create account
            </button>
          </form>

          <p className="text-center text-gray-500 mt-4">
            Already have an account?{' '}
            <NavLink to="/login" className="text-blue-500 hover:underline">
              Login
            </NavLink>
          </p>
        </div>

        <Toaster />
      </div>
    </>
  );
};
export default Register