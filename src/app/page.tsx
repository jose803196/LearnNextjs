import React from 'react';
import Navbar from '@/app/ui/components/Navbar';
import Head from 'next/head';
import Link from 'next/link';
import '@/app/LaTeXStyles.css'; // Asegúrate de proporcionar la ruta correcta a tu archivo de estilos

const Index = () => {
  return (
    <div>
      <Head>
        <title>Tu Sitio Web - Creación de documentos LaTeX</title>
        <meta name="description" content="Ofrecemos servicios de creación de documentos LaTeX de forma profesional y eficiente" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="max-w-5xl mx-auto p-6">
        <h1 className="text-4xl font-semibold leading-tight">Bienvenido a tu Sitio Web</h1>
        <p className="text-lg mt-4">Ofrecemos servicios de creación de documentos LaTeX de alta calidad.</p>
        <div className="mt-8">
          <Link href="/servicios">
            <button>Ver nuestros servicios</button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Index;