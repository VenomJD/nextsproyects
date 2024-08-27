
// Alert.js
import React, { useEffect } from 'react';

const Alert = ({ message, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 5000); // El mensaje se oculta después de 5 segundos

        return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta antes del tiempo
    }, [onClose]);

    if (!message) return null;
    

    return (
       
      <div className="p-4 my-5 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
      <span className="font-medium">{message}</span>
      </div>
    );
};

export default Alert;
