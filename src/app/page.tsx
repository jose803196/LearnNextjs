import React from 'react';  
import Link from 'next/link';  

const Index: React.FC = () => {  
  return (  
    <>  
      {/* Sección Principal */}  
      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center text-white">  
        <h1 className="text-6xl font-bold mb-4">¡Bienvenido a Tu Web!</h1>  
        <p className="text-xl mb-8">Ofrecemos servicios de creación de documentos LaTeX de alta calidad.</p>  
        <Link href="/servicios">  
          <button className="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-700">  
            Ver nuestros servicios  
          </button>  
        </Link>  
      </div>  

      {/* Sección Reseñas */}  
      <div className="relative bg-black min-h-screen flex items-center justify-center">  
        <div className="absolute inset-0 opacity-30 bg-cover" style={{ backgroundImage: 'url(/path/to/your/image.jpg)' }} />  
        <div className="relative z-10 text-white p-10 text-center">  
          <h2 className="text-4xl mb-6">Reseñas de Nuestros Clientes</h2>  
          <p className="text-lg">“El trabajo fue excepcional! - Cliente Satisfecho”</p>  
        </div>  
      </div>  

      {/* Sección Portafolio */}  
      <div className="bg-gray-100 py-20">  
        <h2 className="text-4xl text-center font-semibold mb-8">Trabajos Previos</h2>  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10">  
          {/* Tarjeta 1 */}  
          <div className="bg-white rounded-lg p-5 shadow-lg hover:shadow-xl transition-all duration-300">  
            <img src="/path/to/project1.jpg" alt="Proyecto 1" className="mb-4 rounded" />  
            <h3 className="text-xl font-semibold">Nombre del Proyecto</h3>  
            <p className="text-gray-700 mt-2">Descripción breve del proyecto.</p>  
          </div>  
          {/* Añadir más tarjetas según sea necesario */}  
          <div className="bg-white rounded-lg p-5 shadow-lg hover:shadow-xl transition-all duration-300">  
            <img src="/path/to/project2.jpg" alt="Proyecto 2" className="mb-4 rounded" />  
            <h3 className="text-xl font-semibold">Nombre del Proyecto</h3>  
            <p className="text-gray-700 mt-2">Descripción breve del proyecto.</p>  
          </div>  
          <div className="bg-white rounded-lg p-5 shadow-lg hover:shadow-xl transition-all duration-300">  
            <img src="/path/to/project3.jpg" alt="Proyecto 3" className="mb-4 rounded" />  
            <h3 className="text-xl font-semibold">Nombre del Proyecto</h3>  
            <p className="text-gray-700 mt-2">Descripción breve del proyecto.</p>  
          </div>  
        </div>  
      </div>  

      {/* Sección Habilidades */}  
      <div className="bg-white py-20">  
        <h2 className="text-4xl text-center font-semibold mb-8">Habilidades</h2>  
        <div className="flex justify-center space-x-5">  
          <div className="text-center">  
            <img src="/path/to/html-icon.png" alt="HTML" className="w-20 h-20" />  
            <p>HTML</p>  
          </div>  
          <div className="text-center">  
            <img src="/path/to/css-icon.png" alt="CSS" className="w-20 h-20" />  
            <p>CSS</p>  
          </div>  
          <div className="text-center">  
            <img src="/path/to/js-icon.png" alt="JavaScript" className="w-20 h-20" />  
            <p>JavaScript</p>  
          </div>  
        </div>  
      </div>  

      {/* Sección de Contacto */}  
      <div className="bg-gray-200 py-20">  
        <h2 className="text-4xl text-center font-semibold mb-8">Contacto</h2>  
        <form className="max-w-lg mx-auto bg-white p-8 shadow-md rounded">  
          <input type="text" placeholder="Tu Nombre" className="w-full p-2 mb-4 border rounded" />  
          <input type="email" placeholder="Tu Email" className="w-full p-2 mb-4 border rounded" />  
          <textarea placeholder="Tu Mensaje" className="w-full p-2 mb-4 border rounded" rows={4}></textarea>  
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Enviar</button>  
        </form>  
      </div>  
    </>  
  );  
};  

export default Index;