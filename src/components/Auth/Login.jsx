import React, { useRef } from 'react';
import { toast } from 'react-toastify';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google'; // Import GoogleLogin component
import Navbar from '../shared/Navbar';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  // Handle Login Logic
  const handleLogin = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    
    if (email === "admin@gmail.com" && password === "admin") {
      toast.success('Welcome Admin');
      setTimeout(() => {
        navigate('/welcome');
      }, 2000);
    } else {
      try {
        const res = await axios.post('http://localhost:8080/user/login', {
          email,
          password,
        });
        if (res.status === 200) {
          const { id, name } = res.data; 
          localStorage.setItem('user', JSON.stringify({ id, name, email, password }));
          toast.success('Login successful');
          setTimeout(() => {
            navigate('/dashboard');
          }, 2000);
        }
      } catch (error) {
        toast.error(error.response?.data || 'Invalid credentials');
      }
    }
  };

  // Handle Google Login
  const handleGoogleLogin = async (response) => {
    try {
      const { credential } = response;
      const res = await axios.post('http://localhost:8080/user/google-login', {
        token: credential,
      });
      if (res.status === 200) {
        const { id, name, email } = res.data; 
        localStorage.setItem('user', JSON.stringify({ id, name, email }));
        toast.success('Google login successful');
        setTimeout(() => {
          navigate('/dashboard');
        }, 2000);
      }
    } catch (error) {
      toast.error('Google login failed');
    }
  };

  return (
    <>
    <Navbar/>
    <div className="flex justify-center items-center bg-gray-300 h-screen">
      <div className="w-1/4 max-w-sm bg-white p-8 rounded-lg shadow-lg">
        <div className="space-y-1">
          <h2 className="text-2xl text-center font-bold">Login</h2>
          <p className="text-center text-gray-500">Enter your email below to login</p>
        </div>

        <div className="grid gap-4">
          {/* Google Login button */}
          <GoogleLogin
            onSuccess={handleGoogleLogin}
            onError={() => toast.error('Google login failed')}
            useOneTap
            shape="pill"
            width="100%"
          />

          <h3 className="text-center text-gray-500">or login with</h3>

          {/* Email and Password Inputs */}
          <div className="grid gap-2">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-600">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md"
              ref={emailRef}
              required
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-600">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full p-2 bg-gray-100 border border-gray-300 rounded-md"
              ref={passwordRef}
              required
            />
          </div>
          <div className="flex items-center gap-2">
            <input id="remember-me" type="checkbox" className="h-4 w-4" />
            <label htmlFor="remember-me" className="cursor-pointer text-sm text-gray-600">
              Remember me
            </label>
          </div>
        </div>

        {/* Card Footer with Login and Register Links */}
        <div className="flex flex-col gap-2 mt-4">
          <button
            className="w-4/5 mx-auto bg-blue-600 text-white py-2 rounded-md hover:bg-blue-400"
            onClick={handleLogin}
          >
            Login
          </button>
          <p className="text-center text-gray-500">
            Don’t have an account?{' '}
            <NavLink to="/register" className="text-blue-500">
              Register
            </NavLink>
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
