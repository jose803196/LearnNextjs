"use client";  
import React, { useEffect, useRef, useState } from 'react';  
import Link from 'next/link';  
import { motion } from 'framer-motion';  

const Index: React.FC = () => {

  // Función para la sección de Reseñas  
  const ReviewsSection: React.FC = () => {  
    const [inView, setInView] = useState(false);  
    const sectionRef = useRef<HTMLDivElement | null>(null);  

    const handleScroll = () => {  
      if (sectionRef.current) {  
        const { top } = sectionRef.current.getBoundingClientRect();  
        const inView = top <= window.innerHeight && top + sectionRef.current.clientHeight >= 0;  
        setInView(inView);  
      }  
    };  

    useEffect(() => {  
      window.addEventListener('scroll', handleScroll);  
      handleScroll();  

      return () => {  
        window.removeEventListener('scroll', handleScroll);  
      };  
    }, []);  

    // Datos de las reseñas  
    const reviews = [  
      { id: 1, text: "El trabajo fue excepcional!", author: "Cliente Satisfecho" },  
      { id: 2, text: "Una experiencia maravillosa, muy recomendados!", author: "Cliente Feliz" },  
      { id: 3, text: "Cumplieron con todas mis expectativas.", author: "Cliente Contento" },  
    ];  

    return (  
      <div ref={sectionRef} className="bg-black min-h-screen py-48">  
        <h2 className="text-4xl text-center font-semibold text-white mb-12">Reviews from Our Clients</h2>  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10">  
          {reviews.map((review) => (  
            <motion.div   
              key={review.id}  
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300"  
              initial={{ opacity: 0, y: 30 }}   
              animate={inView ? { opacity: 1, y: 0 } : {}}  
              transition={{ duration: 0.5 }}  
            >  
              <p className="text-gray-800 italic">“{review.text}”</p>  
              <p className="mt-6 text-right font-semibold text-black">- {review.author}</p>  
            </motion.div>  
          ))}  
        </div>  
      </div>  
    );  
  };  

  // Función para la sección de Portafolio  
  const PortfolioSection: React.FC = () => {  
    const [inView, setInView] = useState(false);  
    const sectionRef = useRef<HTMLDivElement | null>(null);  

    const handleScroll = () => {  
      if (sectionRef.current) {  
        const { top } = sectionRef.current.getBoundingClientRect();  
        const inView = top <= window.innerHeight && top + sectionRef.current.clientHeight >= 0;  
        setInView(inView);  
      }  
    };  

    useEffect(() => {  
      window.addEventListener('scroll', handleScroll);  
      handleScroll();  

      return () => {  
        window.removeEventListener('scroll', handleScroll);  
      };  
    }, []);  

    return (  
      <div ref={sectionRef} className="bg-white min-h-screen py-48">  
        <h2 className="text-4xl text-center font-semibold mb-8 text-black">Previous Work</h2>  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10">  
          {/* Tarjetas del Portafolio */}  
          {['project1', 'project2', 'project3'].map((project, index) => (  
            <motion.div   
              key={index}  
              className="bg-white rounded-lg p-5 shadow-lg hover:shadow-xl transition-all duration-300"  
              initial={{ opacity: 0, y: 30 }}   
              animate={inView ? { opacity: 1, y: 0 } : {}}  
              transition={{ duration: 0.5, delay: index * 0.1 }}  
            >  
              <img src={`/path/to/${project}.jpg`} alt={`Proyecto ${index + 1}`} className="mb-4 rounded" />  
              <h3 className="text-xl font-semibold">Project Name</h3>  
              <p className="text-black mt-2">Brief description of the project.</p>  
            </motion.div>  
          ))}  
        </div>  
      </div>  
    );  
  };  

  // Función para la sección de Habilidades  
  const SkillsSection: React.FC = () => {  
    const [inView, setInView] = useState(false);  
    const sectionRef = useRef<HTMLDivElement | null>(null);  

    const handleScroll = () => {  
      if (sectionRef.current) {  
        const { top } = sectionRef.current.getBoundingClientRect();  
        const inView = top <= window.innerHeight && top + sectionRef.current.clientHeight >= 0;  
        setInView(inView);  
      }  
    };  

    useEffect(() => {  
      window.addEventListener('scroll', handleScroll);  
      handleScroll(); // Para ejecutar una vez al cargar  

      return () => {  
        window.removeEventListener('scroll', handleScroll);  
      };  
    }, []);  

    return (  
      <div ref={sectionRef} className="bg-black min-h-screen py-48">  
        <h2 className="text-4xl text-center font-semibold mb-8 text-white">Skills</h2>  
        <div className="flex justify-center space-x-5 text-white">  
          {['html-icon', 'css-icon', 'js-icon'].map((icon, index) => (  
            <motion.div   
              key={index}  
              className="text-center"  
              initial={{ opacity: 0, scale: 0.5 }}   
              animate={inView ? { opacity: 1, scale: 1 } : {}}  
              transition={{ duration: 0.5, delay: index * 0.1 }}  
            >  
              <img src={`/path/to/${icon}.png`} alt={icon} className="w-20 h-20" />  
              <p>{icon.replace('-icon', '').toUpperCase()}</p>  
            </motion.div>  
          ))}  
        </div>  
      </div>  
    );  
  };

  // Función para la sección de Contacto  
  const ContactSection: React.FC = () => {  
    const [inView, setInView] = useState(false);  
    const sectionRef = useRef<HTMLDivElement | null>(null);  

    const handleScroll = () => {  
      if (sectionRef.current) {  
        const { top } = sectionRef.current.getBoundingClientRect();  
        const inView = top <= window.innerHeight && top + sectionRef.current.clientHeight >= 0;  
        setInView(inView);  
      }  
    };  

    useEffect(() => {  
      window.addEventListener('scroll', handleScroll);  
      handleScroll(); // Para ejecutar una vez al cargar  

      return () => {  
        window.removeEventListener('scroll', handleScroll);  
      };  
    }, []);  

    return (  
      <div ref={sectionRef} className="bg-white min-h-screen py-40">  
        <h2 className="text-4xl text-center font-semibold mb- text-black">Contact</h2>  
        <motion.form   
          className="max-w-lg mx-auto bg-white p-8 shadow-md rounded"  
          initial={{ opacity: 0, y: 30 }}   
          animate={inView ? { opacity: 1, y: 0 } : {}}   
          transition={{ duration: 0.5 }}  
        >  
          <input   
            type="text"   
            placeholder="Your name"   
            className="w-full p-2 mb-4 border rounded"   
            required   
          />  
          <input   
            type="email"   
            placeholder="Your Email"   
            className="w-full p-2 mb-4 border rounded"   
            required   
          />  
          <textarea   
            placeholder="Your message"   
            className="w-full p-2 mb-4 border rounded"   
            rows={4}   
            required  
          ></textarea>  
          <button   
            type="submit"   
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"  
          >  
            Submit
          </button>  
        </motion.form>  
      </div>  
    );  
  };  

  return (  
    <>  
      {/* Sección Principal con efecto Parallax utilizando Framer Motion */}  
      <motion.div   
        className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center text-white relative overflow-hidden"   
        initial={{ opacity: 0, y: -50 }}   
        animate={{ opacity: 1, y: 0 }}   
        transition={{ duration: 0.7 }}  
      >  
        <div   
          className="absolute inset-0 bg-cover opacity-40"   
          style={{ backgroundImage: 'url(/path/to/your/image.jpg)', backgroundAttachment: 'fixed' }}   
        />  
        <div className="relative z-10 flex flex-col items-center">  
          <h1 className="text-6xl font-bold mb-4">Welcome to Your Website!</h1>  
          <p className="text-xl mb-8">We offer high-quality LaTeX document creation services.</p>  
          <Link href="/servicios">  
            <button className="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-700">  
              See our services
            </button>  
          </Link>  
        </div>  
      </motion.div>  

      {/* Sección Reseñas */}  
      <ReviewsSection />  

      {/* Sección Portafolio */}  
      <PortfolioSection />  

      {/* Sección Habilidades */}  
      <SkillsSection />  

      {/* Sección de Contacto */}  
      <ContactSection />  
    </>  
  );  
};  

export default Index;