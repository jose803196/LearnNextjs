import React from 'react';  
import Navbar from '@/app/ui/components/Navbar';  
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'; // Asegúrate de instalar react-icons si no lo has hecho  

const Index: React.FC = () => {  
  return (  
    <div> 
      <div className="min-h-[531px] bg-white mx-auto py-10 px-4 mt-16">  
        <h1 className="text-4xl font-bold text-center mb-6">Contact Me</h1>  
        <p className="text-lg text-center mb-8">  
          Hi! I'm a passionate developer with experience in building dynamic and responsive web applications.   
          You can connect with me through the links below.  
        </p>  
        
        <div className="flex justify-center space-x-6 mt-36">  
          <a href="https://github.com/tu-usuario-github" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-150">  
            <FaGithub className="text-5xl text-gray-800" />  
          </a>  
          <a href="https://linkedin.com/in/tu-usuario-linkedin" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-150">  
            <FaLinkedin className="text-5xl text-blue-600" />  
          </a>  
          <a href="https://youtube.com/tu-canal-youtube" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-150">  
            <FaYoutube className="text-5xl text-red-600" />  
          </a>  
          <a href="mailto:tucorreo@ejemplo.com" className="transition-transform transform hover:scale-150">  
            <span className="text-5xl text-gray-800">📧</span>  
          </a>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default Index;