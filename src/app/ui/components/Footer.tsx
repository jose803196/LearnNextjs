// Footer.tsx  
import React from 'react';  

const Footer: React.FC = () => {  
  return (  
    <footer className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-6 bottom-0">  
      <div className="container mx-auto text-center">  
        <p className="text-sm">  
          &copy; {new Date().getFullYear()} BLAKE. All rights reserved.  
        </p>  
        <div className="flex justify-center space-x-4 mt-2">  
          {/*<a href="/privacy" className="hover:underline">Privacy Policy</a>  
          <a href="/terms" className="hover:underline">Terms of Service</a>*/}
          <a href="/contactos" className="hover:underline">Contact</a>  
        </div>  
      </div>  
    </footer>  
  );  
};  

export default Footer;