"use client"
import React, { useRef, useState } from 'react'
import { Text, useGLTF, PresentationControls, Float, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useSpring, animated } from '@react-spring/three';

export default function Services({ text, active }) {

  const computerRef = useRef();
  const computerModel = useGLTF('/models/computer/scene.gltf');
  const titleFontProps = { font: '/fonts/made_tommy_soft/mt_Soft_Black_PERSONAL_USE.otf', fontSize: 1.1, letterSpacing: 0.04, lineHeight: 1.1, 'material-toneMapped': false }
  const descriptionFontProps = { font: '/fonts/made_tommy_soft/mt_Soft_Thin_PERSONAL_USE.otf', fontSize: 1, letterSpacing: 0.04, lineHeight: 1.2, 'material-toneMapped': false }
  const scroll = useScroll();
  const xOffset = -30;


  const servicesSpring = useSpring({
    position: active ? [0,-1.6,0] : [xOffset,-1,0],
    config : {
      speed: 0.1,
      friction: 80,
      mass: 1
    }
  });

  return (
    <animated.group position={servicesSpring.position} className="flex flex-col">
      <directionalLight color="#305BF3" position={[0, 0, 5]} />
     
      <Text position={[0,8,0]} color={'#305BF3'} anchorX="center" {...titleFontProps} >Servicios</Text>
      
      <group position={[0,-0.8,0]}>
        <Text position={[-8,7,0]} scale={.5} color={'black'} anchorX="left" {...descriptionFontProps} >Desarrollo web</Text>
        <Text position={[-8,6.3,0]} scale={.5} color={'black'} anchorX="left" {...descriptionFontProps} >Desarrollo de software personalizado</Text>
        <Text position={[-8,5.6,0]} scale={.5} color={'black'} anchorX="left" {...descriptionFontProps} >Integración de sistemas</Text>
        <Text position={[-8,4.9,0]} scale={.5} color={'black'} anchorX="left" {...descriptionFontProps} >Diseño UX-UI</Text>
        <Text position={[-8,4.2,0]} scale={.5} color={'black'} anchorX="left" {...descriptionFontProps} >Bots de análisis de datos</Text>
        <Text position={[-8,3.5,0]} scale={.5} color={'black'} anchorX="left" {...descriptionFontProps} >Automatización de marketing</Text>
        <Text position={[-8,2.8,0]} scale={.5} color={'black'} anchorX="left" {...descriptionFontProps} >Bots de servicio al cliente</Text>
        <Text position={[-8,2.1,0]} scale={.5} color={'black'} anchorX="left" {...descriptionFontProps} >Bots basados en LLMs</Text>
      </group>

      <group position={[5.8, 0, -3]} rotation={[0,-0.5,0]}>
        <Float rotationIntensity={0} floatIntensity={2} floatingRange={[0, 0.4]}>
          <PresentationControls polar={[0, 0]} snap={true} speed={1} azimuth={[-45, 45]} config={{ mass: 1, tension: 50, friction: 10 }} >       
              <primitive
                ref={computerRef}
                object={computerModel.scene}
                scale={2}
                  
              />            
          </PresentationControls>
        </Float>
      </group>
    </animated.group>
  )
}

  // const [rotationX, setRotationX] = useState(0);

  // useFrame(({ state, delta }) => {
  //   // Actualiza la rotación en función del delta de tiempo y el estado
  //   const rotationSpeed = 1; // Velocidad de rotación
  //   setRotationX((prevRotationX) => prevRotationX + rotationSpeed * delta);
  //   pearlRef.current.rotation.x = rotationX;
  // });