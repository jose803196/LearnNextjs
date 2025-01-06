"use client";
import React from 'react';  
import { motion } from 'framer-motion'; 
import Link from 'next/link';  

const Pricing = () => {  
  const pricingOptions = [  
    {  
      service: 'Desarrollo de Figuras Complejas',  
      estimatedTime: '3-5 días',  
      description: 'Creación de figuras y gráficos personalizados en LaTeX.',  
      details: 'Incluye diagramas, gráficos y otros tipos de representaciones visuales.'  
    },  
    {  
      service: 'Transcripción de Textos',  
      estimatedTime: '1-2 días',  
      description: 'Transcribir documentos y textos a formato LaTeX.',  
      details: 'Precisión en la conversión de documentos complejos en diferentes formatos.'  
    },  
    {  
      service: 'Desarrollo de Informes o Reportes',  
      estimatedTime: '5-7 días',  
      description: 'Creación de informes profesionales en LaTeX.',  
      details: 'Incluye plantillas personalizadas y bibliografía.'  
    },  
    {  
      service: 'Desarrollo de Plantillas',  
      estimatedTime: '2-4 días',  
      description: 'Diseño de plantillas personalizadas en LaTeX.',  
      details: 'Para informes, presentaciones y más, adaptadas a tus necesidades.'  
    }  
  ];  

  return (  
    <div className="flex flex-col items-center justify-center p-5">  
      <h2 className="text-2xl font-bold mb-5">Nuestros Servicios en LaTeX</h2>  
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">  
        {pricingOptions.map((option, index) => (  
          <motion.div  
            key={index}  
            className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"  
            whileHover={{ scale: 1.05 }}
          >  
            <h3 className="text-xl font-semibold">{option.service}</h3>  
            <p className="text-lg mt-2">{option.estimatedTime}</p>  
            <p className="mt-2 mb-4 text-gray-600">{option.description}</p>  
            <p className="text-gray-500">{option.details}</p>  
            <Link href="/contactos" passHref>  
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">  
                Más Información  
              </button>  
            </Link>  
          </motion.div>  
        ))}  
      </div>  
    </div>  
  );  
};  

export default Pricing;