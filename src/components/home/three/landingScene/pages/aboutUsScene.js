import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll, Text } from "@react-three/drei";
import { clamp, mapLinear } from "three/src/math/MathUtils";
import * as THREE from 'three';

function AboutUsScene({ text }){
  const scroll = useScroll();
  const meshRef = useRef();
  const groupRef = useRef();
  const sceneRef = useRef();
  const titleRef = useRef();
  const subtitleRef = useRef();

  useFrame(
    (state, delta) => {
      // Hacer un mapeo del scroll
      const threshold = 0.4;
      const geometryXOffset= -10;
      const currentScroll = scroll.scroll.current;
      
      if(currentScroll > threshold){
        sceneRef.current.visible = true;
        // (scroll.scroll.current - threshold) * 10 + geometryXOffset, -10)
        let nextPosition = mapLinear(currentScroll, 0.4, 1, -10, 0);
        console.log(nextPosition)
        groupRef.current.position.x = THREE.MathUtils.damp(groupRef.current.position.x, nextPosition, delta);
        meshRef.current.rotation.y += 0.04 * delta;
        meshRef.current.rotation.x += 0.07 * delta ;
      } else {
        sceneRef.current.visible = false;
      }
    }
  );

  return(
    <group ref={sceneRef}>
      <group ref={groupRef} position={[-15,0,0]}>
        <mesh ref={meshRef}
              material={new THREE.MeshNormalMaterial({ flatShading: true })}
              position={[0, 4, 0]}
              wireframe
              >
          <icosahedronGeometry args={[4, 1]}  />
        </mesh>
      </group>
      <Text position={[3,4,4]} scale={1.5} color="black">
        {text.title}
      </Text>
      <Text position={[3,2,4]} scale={1} color="black">
        {text.subtitle}
      </Text>
    </group>
  );
}

export default AboutUsScene;