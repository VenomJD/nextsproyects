'use client'
// src/app/components/RegisterForm.jsx
import React, { useState } from 'react';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleRegister = (e) => {
    e.preventDefault();
    // Lógica de registro (ejemplo: hacer una llamada a la API para registrar al usuario)
    console.log('Register:', { username, email, password });
  };

  return (
    <form onSubmit={handleRegister} className="flex flex-col p-4">
      <h2 className="text-xl font-bold mb-4 text-center">Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mb-2 p-2 border border-gray-300 rounded"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-2 p-2 border border-gray-300 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-2 p-2 border border-gray-300 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Register</button>
    </form>
  );
};

export default RegisterForm;
