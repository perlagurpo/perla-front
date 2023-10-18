import { useRef } from "react";
import { GradientTexture, GradientType } from "@react-three/drei";

export default function Background() {
  const bgRef = useRef();

  return(
    <group>
      <mesh ref={bgRef} position-z={-7}>
        <planeGeometry args={[100, 100]} attach="geometry" />
        <meshBasicMaterial>
            <GradientTexture
              stops={[0, 0.6, 0.8, 1]} // As many stops as you want
              colors={['#FAFAFA', '#888888', '#555555','#232323']} // Colors need to match the number of stops
              size={1024} // Size is optional, default = 1024
              type={GradientType.Radial}
              innerCircleRadius={0}
              outerCircleRadius={100}
            />
        </meshBasicMaterial>
      </mesh>
    </group>  
  );
}