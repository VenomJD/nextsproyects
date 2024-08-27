'use client'

// src/app/components/RegisterForm.jsx
import React, { useState } from 'react';
import {createUser} from '@/utils/apiCall';
import bcrypt from 'bcryptjs';
import Alert from './Alert';






const RegisterForm = () => {
  const [alert, setAlert] = useState('');
  const [userData, setUserData] = useState({
    username: "",
    email:"",
    password:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleAlertClose = () => {
    setAlert('');
};
  
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const saltRounds = 10; // Número de rondas para el hash
      const hashedPassword = await bcrypt.hash(userData.password, saltRounds);

      // Crear el objeto de usuario con la contraseña hasheada
      const userDataWithHashedPassword = {
          ...userData,
          password: hashedPassword, // Reemplaza la contraseña en texto plano con la hasheada
      };

      // Enviar los datos al backend
      const response = await createUser(userDataWithHashedPassword);

      if (response.message == 'Usuario Creado Correctamente') {
          setAlert('Registro exitoso');
      } else {
          setAlert('Registro fallido');
      }
  } catch (error) {
      console.error('Error al crear el usuario:', error);
      setAlert('Error al registrar el usuario');
  }
  };

  return (
    <form onSubmit={handleRegister} className="flex flex-col p-4">
      <h2 className="text-xl font-bold mb-4 text-center">Register</h2>
      <input
        type="text"
        name='username'
        placeholder="Username"
        value={userData.username}
        onChange={handleChange}
        className="mb-2 p-2 border border-gray-300 rounded"
      />
      <input
        type="email"
        placeholder="Email"
        name='email'
        value={userData.email}
        onChange={handleChange}
        className="mb-2 p-2 border border-gray-300 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        name='password'
        value={userData.password}
        onChange={handleChange}
        className="mb-2 p-2 border border-gray-300 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Register</button>
      <Alert message={alert} onClose={handleAlertClose}/>
    </form>
  );
};

export default RegisterForm;
