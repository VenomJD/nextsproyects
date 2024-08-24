'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import LoginForm from './LoginFormComponent';
import RegisterForm from './RegisterFormComponent';
import SaveProjectForm from './SavedProjectsComponent';
const Navbar = () => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSaveProjectModalOpen, setIsSaveProjectModalOpen] = useState(false);

  const openModal = (modalType) => {
    if (modalType === 'register') setIsRegisterModalOpen(true);
    if (modalType === 'login') setIsLoginModalOpen(true);
    if (modalType === 'saveProject') setIsSaveProjectModalOpen(true);
  };

  const closeModal = () => {
    setIsRegisterModalOpen(false);
    setIsLoginModalOpen(false);
    setIsSaveProjectModalOpen(false);
  };

  return (
    <>
      <nav className="bg-gray-800 p-4 text-white flex justify-between">
        <div className="flex items-center">
            <Image 
            className='h-8 w-8 mr-2'
            src="/react-2.svg"
            width={30}
            height={30}
            alt="Picture of the author"
            />
          <span className="text-xl font-bold">Playground App</span>
        </div>
        <div className="space-x-4">
          <button
            onClick={() => openModal('saveProject')}
            className="bg-blue-500 px-3 py-2 rounded"
          >
            Guardar Proyecto
          </button>
          <button
            onClick={() => openModal('register')}
            className="bg-green-500 px-3 py-2 rounded"
          >
            Registrarse
          </button>
          <button
            onClick={() => openModal('login')}
            className="bg-yellow-500 px-3 py-2 rounded"
          >
            Iniciar Sesión
          </button>
        </div>
      </nav>

      {/* Modales */}
      {isRegisterModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded">
            <h2 className="text-xl mb-4 text-center">Playground App</h2>
                <RegisterForm/>
                <div className="text-center">
                <button onClick={closeModal} className="mt-4 bg-red-500 px-3 py-2 rounded">
                    Cerrar
                </button>
                </div>
          </div>
        </div>
      )}

      {isLoginModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded">
            <h2 className="text-xl mb-4 text-center">Playground App</h2>
                <LoginForm/>
                <div className="text-center">
                <button onClick={closeModal} className="mt-4 bg-red-500 px-3 py-2 rounded">
                    Cerrar
                </button>
                </div>
          </div>
        </div>
      )}

      {isSaveProjectModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded">
            <h2 className="text-xl mb-4 text-center">Playground App</h2>
                <SaveProjectForm/>
            <div className="text-center">
            <button onClick={closeModal} className="mt-4 bg-red-500 px-3 py-2 rounded">
                Cerrar
            </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
