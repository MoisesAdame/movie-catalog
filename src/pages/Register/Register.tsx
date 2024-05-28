import React, { useState } from 'react';
import { useAppContext } from '../../store/app-context/app-context';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes/constants';

const Register = () => {
    const navigate = useNavigate();
    
    const { signUp } = useAppContext();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  

  const [error, setError] = useState<String>(""); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

    error && setError("");
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
        // Crear usuario con firebase y si se crea navegar al home
        await signUp(user.email, user.password);
        navigate(ROUTES.HOME.path);
    }catch(error: any) {
      setError(error.message);
    }
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="max-w-md w-full mx-auto p-6 bg-white shadow rounded-md">
    <h2 className="text-2xl font-bold mb-4">Register</h2>
    {error && (
    <p className="text-red-500 mb-4 text-sm font-medium">{error}</p>
    )}
    <form onSubmit={handleSubmit}>
    <div className="mb-4">
    <label
    htmlFor="email"
    className="block text-gray-700 font-bold mb-2"
    >
    Email
    </label>
    <input
    type="email"
    name="email"
    id="email"
    placeholder="email@test.com"
    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
    onChange={handleChange}
    />
    </div>

    <div className="mb-4">
    <label
    htmlFor="password"
    className="block text-gray-700 font-bold mb-2"
    >
    Password
    </label>
    <input
    type="password"
    name="password"
    id="password"
    placeholder="******"
    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
    onChange={handleChange}
    />
    </div>

    <button
    type="submit"
    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
    >
    Register
    </button>
    <Link
    to={ROUTES.Login.path}
    className="block text-blue-500 mt-2 text-sm text-center hover:underline"
    >
    You have an account? Login
    </Link>
    </form>
    </div>
    </div>
  )
}

export default Register
