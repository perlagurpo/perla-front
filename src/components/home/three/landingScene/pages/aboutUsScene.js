import { useEffect, useRef, useState } from "react";
import { useThree } from "@react-three/fiber";
import { Text, Float } from "@react-three/drei";
import { animated, useSpring } from "@react-spring/three";
import * as THREE from 'three';

function AboutUsScene({ text, active }){

  const meshRef = useRef();
  const groupRef = useRef();
  const sceneRef = useRef();
  const textRef = useRef();
  
  const descriptionFontProps = { font: '/fonts/made_tommy_soft/mt_Soft_Thin_PERSONAL_USE.otf', fontSize: 0.22, letterSpacing: 0.04, lineHeight: 1.4, 'material-toneMapped': false }
  const titleFontProps = { font: '/fonts/made_tommy_soft/mt_Soft_Bold_PERSONAL_USE.otf', fontSize: 1.2, letterSpacing: 0.02, lineHeight: 1.1, 'material-toneMapped': false }
  const subTitleFontProps = { font: '/fonts/made_tommy_soft/mts_Medium.otf', fontSize: 0.25, letterSpacing: 0.04, lineHeight: 1.1, 'material-toneMapped': false }

  const { viewport } = useThree();
  const [vertical, setVertical] = useState(false);

  const ballSprings = useSpring({
    position: active ? [- viewport.width / 3 ,1.8,0] : [-20,1.8,0],
    config : {
      speed: 0.1,
    }
  });

  const springs = useSpring({
    opacity: active ? 1 : 0,
    position: active ? (viewport.width > 10 ? [0,0,0] : [0,3.3,0]) : [15,0,0],
    scale: vertical ? viewport.width / 14 : (viewport.width < 17 ? viewport.width / 17 : 1),
    config : {
      friction: 100,
      mass: 20,
    }
  })
  
  useEffect(() => { setVertical(viewport.width < 10) },[viewport.width]);

  return(
    <group ref={sceneRef}>
      <animated.group ref={groupRef} position={ballSprings.position} scale={ viewport.width / 20 }>
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
      
      <animated.group opacity={springs.opacity} position={springs.position} scale={ springs.scale }>
        <group ref={textRef}>
          <Text position={vertical ? [0,6.5,4] : [2.1,6.5,4]} {...titleFontProps} scale={1} color="#305BF3">
            {text.title}
          </Text>
          <Text position={vertical ? [0,5.5,4] : [3.1,5.5,4]} {...subTitleFontProps} scale={1} color="black">
            {text.subtitle}
          </Text>
          <Text position={vertical ? [2, 4 - (10 - viewport.width) / 5 , 4] : [4,4,4]} {...descriptionFontProps} textAlign="right" maxWidth={8} scale={1} color="black">
            {text.desc1}
          </Text>
          <Text position={vertical ? [2, 2 - (10 - viewport.width) / 5 , 4] : [4,2,4]} {...descriptionFontProps} textAlign="right" maxWidth={8} scale={1} color="black">
            {text.desc2}
          </Text>
        </group>
      </animated.group>
    </group>
  );
}

export default AboutUsScene;



  // useFrame(
  //   (state, delta) => {
  //     // Hacer un mapeo del scroll
  //     const activeThreshold = 0.25;
  //     const currentScroll = scroll.scroll.current;
  //     // activo sección
  //     // if(currentScroll > activeThreshold && currentScroll < 0.5){
  //     //   const localScroll = currentScroll / (1 - activeThreshold);
  //     //   setVisible(true);
  //     //   meshRef.current.rotation.y += 0.04 * delta;
  //     //   meshRef.current.rotation.x += 0.07 * delta ;
  //     // } else {
  //     //   setVisible(false);
  //     // }
  //   }
  // );