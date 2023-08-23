'use client';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import LandingScene from '@/components/home/three/LandingScene';

export default function Home() {
  return (
    <main className='min-h-screen min-w-screen bg-white'>
      {/*
        Este div es el contenedor del canvas. El canvas abstrae la implementación de la cámara y la escena de base.
        Para ajustar el tamaño del canvas basta con manejar el tamaño del div contenedor.
      */}
      <div className='h-screen w-screen bg-white'>
        {/**
         * Dejo un Suspense de React para mostrar un mensaje mientras se carga el Canvas. Creo que también
         * se puede usar una página de loading de Next.
         */}
        <Suspense fallback={<h2>Cargando</h2>}>
          <Canvas >
            <LandingScene />
          </Canvas>
        </Suspense>
      </div>
    
    </main>
  )
}
