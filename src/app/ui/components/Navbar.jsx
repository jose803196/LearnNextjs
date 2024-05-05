import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="text-gray-800  border border-black font-bold text-lg">Logo de la marca</a>
          <div className="hidden sm:flex sm:items-center sm:space-x-6">
            <a href="/" className="text-gray-900 hover:text-gray-700 transition-colors duration-150 ease-in-out">Home</a>
            <a href="/somos" className="text-gray-900 hover:text-gray-700 transition-colors duration-150 ease-in-out">Somos</a>
            <a href="/productos" className="text-gray-900 hover:text-gray-700 transition-colors duration-150 ease-in-out">Productos</a>
            <a href="/contactos" className="text-gray-900 hover:text-gray-700 transition-colors duration-150 ease-in-out">Contactos</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
