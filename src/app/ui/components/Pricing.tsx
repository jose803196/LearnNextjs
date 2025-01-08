"use client";
import React from 'react';  
import { motion } from 'framer-motion'; 
import Link from 'next/link';  

const Pricing = () => {  
  const pricingOptions = [  
    {  
      service: 'Development of Complex Figures',  
      estimatedTime: '3-5 days',  
      description: 'Creation of custom figures and graphics in LaTeX.',  
      details: 'It includes diagrams, graphs, and other types of visual representations.'  
    },  
    {  
      service: 'Text Transcription',  
      estimatedTime: '1-2 days',  
      description: 'Transcribe documents and texts to LaTeX format.',  
      details: 'Accuracy in converting complex documents into different formats.'  
    },  
    {  
      service: 'Development of Reports or Reports',  
      estimatedTime: '5-7 days',  
      description: 'Creation of professional reports in LaTeX.',  
      details: 'Includes custom templates and bibliography.'  
    },  
    {  
      service: 'Template Development',  
      estimatedTime: '2-4 days',  
      description: 'Design of custom templates in LaTeX.',  
      details: 'For reports, presentations and more, tailored to your needs.'  
    }  
  ];  

  return (  
    <div className="flex flex-col items-center justify-center p-5">  
      <h2 className="text-2xl font-bold mb-5">Our Services in LaTeX</h2>  
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
                More Information  
              </button>  
            </Link>  
          </motion.div>  
        ))}  
      </div>  
    </div>  
  );  
};  

export default Pricing;