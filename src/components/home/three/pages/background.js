import { useRef } from "react";
import { GradientTexture } from "@react-three/drei";

export default function Background() {
  const sphereRef = useRef();

  return(
    <mesh ref={sphereRef}>
      <planeGeometry args={[100, 100]} attach="geometry" />
      <meshBasicMaterial>
          <GradientTexture
            stops={[0, 1]} // As many stops as you want
            colors={['aquamarine', 'hotpink']} // Colors need to match the number of stops
            size={1024} // Size is optional, default = 1024
          />
      </meshBasicMaterial>
    </mesh>
  );
}