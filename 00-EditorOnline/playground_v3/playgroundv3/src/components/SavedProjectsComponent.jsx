import React, { useState } from 'react';

const SaveProjectForm = ({ onSave, userId }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userId) {
      setError('Debes estar registrado para guardar un proyecto.');
      return;
    }

    if (title.trim() === '') {
      setError('El título del proyecto es obligatorio.');
      return;
    }

    setError('');
    
    const projectData = {
      userId,
      title,
      description,
      createdAt: new Date(),
      updatedAt: new Date(),
      pages: [],
    };

    // Aquí llamas a la función onSave que maneja la lógica de guardado
    onSave(projectData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Título del Proyecto</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 p-2 w-full border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descripción</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 p-2 w-full border border-gray-300 rounded"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        Guardar Proyecto
      </button>
    </form>
  );
};

export default SaveProjectForm;
