import React from 'react'; 
import Pricing from '@/app/ui/components/Pricing'; // Ajusta la ruta si es necesario  

const Index = () => {  
  return (  
    <div>  
      <h1 className="text-3xl text-center mt-24">Servicios en LaTeX</h1>  
      <p className="text-center mt-10">We offer various solutions for your LaTeX needs.</p>  
      <Pricing />  
    </div>  
  );  
};  

export default Index;