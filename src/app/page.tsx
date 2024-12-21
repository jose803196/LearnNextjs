import React from 'react';    
import Head from 'next/head';  
import Link from 'next/link';  
import '@/app/LaTeXStyles.css'; // Asegúrate de proporcionar la ruta correcta a tu archivo de estilos  

const Index: React.FC = () => {  
  return (  
    <>
      {/*Primera seccion */}
      <div className="mt-20 min-h-screen max-w-5xl mx-auto p-6">  
        <h1 className="text-4xl font-semibold leading-tight">¡Bienvenido a Tu Web!</h1>  
        <p className="text-lg mt-4">Ofrecemos servicios de creación de documentos LaTeX de alta calidad.</p>  
        <div className="mt-8">  
          <Link href="/servicios">  
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-500">  
              Ver nuestros servicios  
            </button>  
          </Link>  
        </div>  
      </div>  
    </>  
  );  
};  

export default Index;