import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4">
        <div className="p-4">
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 absolute right-4 top-4">
            &times;
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
