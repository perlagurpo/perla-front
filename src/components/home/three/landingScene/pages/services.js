"use client"
import React, { useRef, useState } from 'react'
import { Text, useGLTF, PresentationControls, Float } from '@react-three/drei'
import { useSpring, animated } from '@react-spring/three';
import { useThree } from '@react-three/fiber';
import { VideoTexto } from '@/components/utils/three/videoText';

export default function Services({ text, active }) {
  // Contenido
  const titleFontProps = { font: '/fonts/made_tommy_soft/mt_Soft_Bold_PERSONAL_USE.otf', fontSize: 1.1, letterSpacing: 0.04, lineHeight: 1.1, 'material-toneMapped': false }
  const descriptionFontProps = { font: '/fonts/made_tommy_soft/mt_Soft_Thin_PERSONAL_USE.otf', fontSize: 1, letterSpacing: 0.04, lineHeight: 1.2, 'material-toneMapped': false }
  const servicesContent = Object.values(text.services);
  const [computerText, setComputerText] = useState("-");
  // Responsive
  const { viewport } = useThree();
  const breakPoint = 19.5;
  // Springs de la página
  const xOffset = -30;
  const servicesSpring = useSpring({
    position: active ? [0, -1.6 * (viewport.width / 20) ,0] : [xOffset,-1,0],
    config : {
      speed: 0.1,
      friction: 80,
      mass: 1
    }
  });

  return (
    <animated.group position={servicesSpring.position} className="flex flex-col" scale={ viewport.width < breakPoint ? viewport.width / breakPoint : 1 }>
      <directionalLight color="#305BF3" position={[0, 0, 5]} />
      <Text position={[0,8,0]} color={'#305BF3'} anchorX="center" {...titleFontProps}>{ text.title } </Text>
      <group position={[0,-0.8,0]}>
        {
          servicesContent && servicesContent.map(
            (data, i) => {
              return <ContentText data={data} position={i} fontProps={descriptionFontProps} hoverFunction={setComputerText} key={i} />
            }
          )
        }
      </group>
      <Computa textDisplay={computerText} />  
    </animated.group>
  )
}

function ContentText({ data, position, fontProps, hoverFunction = null }) {

  const [hovered, setHovered] = useState(false);
  const serviceSpring = useSpring({
    scale: hovered ? 0.53 : .5,
    opacity: hovered ? 0.7 : 1,
    config : {
      speed: 0.1,
      friction: 80,
      mass: 1
    }
  });

  function onHover(val) {
    setHovered(val);
    val && hoverFunction && hoverFunction(data);
  }

  return(
    <animated.group position={[-8,7 - position * 0.7,0]} scale={serviceSpring.scale} >
      <Text color={hovered ? '#758ECD' : '#1E1E1E'}
            anchorX="left" {...fontProps}
            onPointerEnter={() => onHover(true)}
            onPointerLeave={() => onHover(false)}
            >
              { data }
      </Text>
    </animated.group>
  );
}

function Computa({ textDisplay="hola" }) {
  const computerRef = useRef();
  const computerModel = useGLTF('/models/computer/scene.gltf');

  return(
    <group position={[5.8, 0, -3]} rotation={[0,-0.5,0]} castShadow={true}>
      <Float rotationIntensity={0} floatIntensity={1.5} floatingRange={[0, 0.2]}>
        <PresentationControls polar={[0, 0]} snap={true} speed={1} azimuth={[-45, 45]} config={{ mass: 1, tension: 50, friction: 10 }} >       
            <primitive
              ref={computerRef}
              object={computerModel.scene}
              scale={2}
            />
            <group position={[0,3,-0.3]}>
              <VideoTexto texto={textDisplay} videoSource={'/video/informationflow.mp4'} fontSize={0.4} />
            </group>  
        </PresentationControls>
      </Float>
    </group>
  );
}