import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";

import * as THREE from 'three'

function AboutUsScene(){
  const scroll = useScroll();
  const meshRef = useRef();
  const groupRef = useRef();


  useFrame(
    (state, delta) => {
      const currentScroll = scroll.scroll.current;
      meshRef.current.rotation.y += 0.001;
      meshRef.current.rotation.x += 0.0005;
      if(currentScroll > 0.4){
        meshRef.current.visible = true;
        
      } else {
        meshRef.current.visible = false;
        // groupRef.current.position.set([-7,0,0])
      }
      groupRef.current.position.x = THREE.MathUtils.damp(groupRef.current.position.x, -15 + (scroll.scroll.current - 0.4) * 15, 2, delta)
    }
  );

  

  return(
    <group ref={groupRef} position={[-15,0,0]}>
      <mesh ref={meshRef}
            material={new THREE.MeshNormalMaterial({ flatShading: true })}
            position={[0, 4, 0]}
            visible={false}
            >
        <icosahedronGeometry args={[4, 1]}  />
      </mesh>
    </group>
  );
}




export default AboutUsScene;