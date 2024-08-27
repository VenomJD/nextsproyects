// src/app/components/LoginForm.jsx
import React, { useState } from 'react';
import bcrypt from 'bcryptjs';
import Alert from './Alert';
import { getUserByEmail } from '@/utils/apiCall';

const LoginForm = ({handleClose}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState('')


  const handleAlertClose = () => {
    setAlert('');
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    const user  = await getUserByEmail(email)
    console.log(user)

    // Lógica de inicio de sesión (ejemplo: hacer una llamada a la API para autenticar al usuario)
    console.log('Login:', email);

            const isMatch = await bcrypt.compare(password, user.passwordHash);

            (isMatch) ? handleClose.closeModal() :  console.log('inicio fallido')
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col p-4">
      <h2 className="text-xl font-bold mb-4 text-center	" >Login</h2>
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
      <button type="submit" className="bg-green-500 text-white p-2 rounded">Login</button>
      <Alert message={alert} onClose={handleAlertClose}/> 
    </form>

  );
};

export default LoginForm;
