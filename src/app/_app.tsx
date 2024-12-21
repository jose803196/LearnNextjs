import React from 'react';  
import { LanguageProvider } from '@/app/ui/components/LanguageContext'; // Ajusta la ruta si es necesario  
import '@/app/LaTeXStyles.css'; // Ruta a tus estilos globales  

function MyApp({ Component, pageProps }) {  
  return (  
    <LanguageProvider>  
      <Component {...pageProps} />  
    </LanguageProvider>  
  );  
}  

export default MyApp;