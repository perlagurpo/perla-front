import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const RippleShader = () => {
  const materialRef = useRef();

  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load('/pearl/textures/6b085645-a21f-4a99-8167-055910d3143f.jpeg');

  // Actualiza el material del shader en cada cuadro de animación
  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = clock.elapsedTime;
    }
  });

  return (
    <mesh>
      <boxGeometry args={[5, 5, 32, 32]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={{
          time: { value: 0 },
          texture: { value: texture },
        }}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform float time;
          uniform sampler2D texture;
          varying vec2 vUv;

          void main() {
            vec2 uv = vUv;
            uv.y += sin(uv.x * 10.0 + time * 2.0) * 0.02;
            gl_FragColor = texture2D(texture, uv);
          }
        `}
      />
    </mesh>
  );
};

export default RippleShader;