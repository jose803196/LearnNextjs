import React from 'react'; 
import Pricing from '@/app/ui/components/Pricing'; // Ajusta la ruta si es necesario  

const Index = () => {  
  return (  
    <div>  
      <h1 className="text-3xl text-center my-5">Servicios en LaTeX</h1>  
      <p className="text-center mb-5">Ofrecemos diversas soluciones para tus necesidades en LaTeX.</p>  
      <Pricing />  
    </div>  
  );  
};  

export default Index;