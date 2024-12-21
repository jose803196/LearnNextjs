"use client";  
import React, { useState } from 'react';  
import Link from 'next/link';  

const Navbar: React.FC = () => {  
  const [isOpen, setIsOpen] = useState(false);  

  const toggleMenu = () => {  
    setIsOpen(!isOpen);  
  };  

  return (  
    <nav className="bg-blue-800 fixed w-full z-20 top-0 left-0 px-6 md:px-24 py-4 shadow-lg">  
      <div className="container mx-auto flex justify-between items-center">  
        <h1 className="text-white text-2xl font-bold">LaTeX Services</h1>  
        <div className="hidden md:flex space-x-4">  
          <Link href="/" className="text-white hover:bg-blue-700 px-3 py-2 rounded transition">Home</Link>  
          <Link href="/servicios" className="text-white hover:bg-blue-700 px-3 py-2 rounded transition">Servicios</Link>  
          <Link href="/blog" className="text-white hover:bg-blue-700 px-3 py-2 rounded transition">Blog</Link>  
          <Link href="/contacto" className="text-white hover:bg-blue-700 px-3 py-2 rounded transition">Contacto</Link>  
        </div>  
        <button className="md:hidden text-black" onClick={toggleMenu}>  
          ☰  
        </button>  
      </div>  
      {isOpen && (  
        <div className="md:hidden bg-blue-700 mt-2 rounded">  
          <Link href="/" className="block text-white hover:bg-blue-600 px-3 py-2 rounded transition">Home</Link>  
          <Link href="/servicios" className="block text-white hover:bg-blue-600 px-3 py-2 rounded transition">Servicios</Link>  
          <Link href="/blog" className="block text-white hover:bg-blue-600 px-3 py-2 rounded transition">Blog</Link>  
          <Link href="/contacto" className="block text-white hover:bg-blue-600 px-3 py-2 rounded transition">Contacto</Link>  
        </div>  
      )}  
    </nav>  
  );  
};  

export default Navbar;