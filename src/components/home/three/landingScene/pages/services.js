"use client"
import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { Reflector, Text, useTexture,useGLTF, PresentationControls, Float } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


export default function services() {

  const pearlRef = useRef()
  const pearlRing = useGLTF('/pearlRing/pearlRing.glb');
  // const [rotationX, setRotationX] = useState(0);

  // useFrame(({ state, delta }) => {
  //   // Actualiza la rotación en función del delta de tiempo y el estado
  //   const rotationSpeed = 1; // Velocidad de rotación
  //   setRotationX((prevRotationX) => prevRotationX + rotationSpeed * delta);
  //   pearlRef.current.rotation.x = rotationX;
  // });

  return (
    <group position={[0,-1,0]} className="flex flex-col">
        <directionalLight color="red" position={[0, 0, 5]} />
      <Float speed={0.5} floatIntensity={0.5}>
      <Text position={[0,8,0]} color={'#305BF3'} anchorX="center">Servicios</Text>
      </Float>
      <Text position={[-8,7,0]} scale={.5} color={'black'} anchorX="left" >Desarrollo web</Text>
      <Text position={[-8,6.3,0]} scale={.5} color={'black'} anchorX="left" >Desarrollo de software personalizado</Text>
      <Text position={[-8,5.6,0]} scale={.5} color={'black'} anchorX="left" >Integración de sistemas</Text>
      <Text position={[-8,4.9,0]} scale={.5} color={'black'} anchorX="left" >Diseño UX-UI</Text>
      <Text position={[-8,4.2,0]} scale={.5} color={'black'} anchorX="left" >Bots de análisis de datos</Text>
      <Text position={[-8,3.5,0]} scale={.5} color={'black'} anchorX="left" >Automatización de marketing</Text>
      <Text position={[-8,2.8,0]} scale={.5} color={'black'} anchorX="left" >Bots de servicio al cliente</Text>
      <Text position={[-8,2.1,0]} scale={.5} color={'black'} anchorX="left" >Bots basados en LLMs</Text>
      <PresentationControls polar={[0, 0]} snap={true} speed={1} azimuth={[-45, 45]} config={{ mass: 1, tension: 50, friction: 10 }} >
      <Float rotationIntensity={0} floatIntensity={2} floatingRange={[0, 1]}>
        <primitive
          ref={pearlRef}
          object={pearlRing.scene}
          position={[4, 0, 0]}
          scale={35}          
        />        
        </Float>
      </PresentationControls>
    </group>
  )
}






