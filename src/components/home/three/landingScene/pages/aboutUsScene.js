import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll, Text, Float } from "@react-three/drei";
import { animated, useSpring } from "@react-spring/three";
import * as THREE from 'three';

function AboutUsScene({ text }){
  const scroll = useScroll();
  const meshRef = useRef();
  const groupRef = useRef();
  const sceneRef = useRef();
  const textRef = useRef();
  const descriptionOneRef = useRef();
  const descriptionTwoRef = useRef();
  
  const [visible, setVisible] = useState(false);

  const ballSprings = useSpring({
    position: visible ? [-9,1.8,0] : [-20,1.8,0],
    config : {
      speed: 0.1,
    }
  });

  const springs = useSpring({
    opacity: visible ? 1 : 0,
    position: visible ? [0,0,0] : [15,0,0],
    config : {
      friction: 100,
      mass: 20,
    }
  })

  useFrame(
    (state, delta) => {
      // Hacer un mapeo del scroll
      const activeThreshold = 0.25;
      const currentScroll = scroll.scroll.current;

      // activo sección
      if(currentScroll > activeThreshold && currentScroll < 0.5){
        const localScroll = currentScroll / (1 - activeThreshold);
        setVisible(true);
        meshRef.current.rotation.y += 0.04 * delta;
        meshRef.current.rotation.x += 0.07 * delta ;
      } else {
        setVisible(false);
      }
    }
  );

  return(
    <group ref={sceneRef}>
      <animated.group ref={groupRef} position={ballSprings.position}>
        <Float floatIntensity={0.5}>         
          <mesh ref={meshRef}
                material={new THREE.MeshNormalMaterial({ flatShading: true })}
                position={[0, 0, 0]}
                wireframe
                >
            <icosahedronGeometry args={[4, 1]}  />
          </mesh>
        </Float>
      </animated.group>
      
      <animated.group opacity={springs.opacity} position={springs.position}>
        <group ref={textRef}>
          <Text position={[3,6,4]} scale={1} color="black">
            {text.title}
          </Text>
          
          <Text position={[5,4,4]} fontSize={0.3} maxWidth={5} scale={1} color="black">
            {text.desc1}
          </Text>
          
          <Text position={[-1,2,4]} fontSize={0.2} maxWidth={5} scale={1} color="black">
            {text.desc2}
          </Text>
        </group>
      </animated.group>
    </group>
  );
}

export default AboutUsScene;