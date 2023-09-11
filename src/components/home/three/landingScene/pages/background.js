import { useRef } from "react";
import { GradientTexture } from "@react-three/drei";

export default function Background() {
  const sphereRef = useRef();

  return(
    <group>
      <mesh ref={sphereRef} position-z={-7}>
        <planeGeometry args={[100, 100]} attach="geometry" />
        <meshBasicMaterial>
            <GradientTexture
              stops={[0, 1]} // As many stops as you want
              colors={['aquamarine', 'hotpink']} // Colors need to match the number of stops
              size={1024} // Size is optional, default = 1024
            />
        </meshBasicMaterial>
      </mesh>
      {
      /*
      <mesh>
        <planeGeometry args={[100, 100]} position={[0,0,0]} rotation={[1,0,0]}>
          <meshBasicMaterial color={'white'}>
             
          </meshBasicMaterial>
        </planeGeometry>
      </mesh> */
      }
    </group>
    
  );
}