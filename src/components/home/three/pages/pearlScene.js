import { useRef, useMemo } from 'react';
import { Text, useGLTF, OrbitControls, useScroll, GradientTexture } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber';
import { useDrag } from '@use-gesture/react';
import { animated, useSpring } from '@react-spring/three';
import * as THREE from 'three';

function PearlScene(){
  const scroll = useScroll();
  const pearl = useGLTF('/pearl/source/pearl3.gltf');
  const pearlRef = useRef();
  const groupRef = useRef();
  const sphereRef = useRef();
  var prevScroll = scroll.scroll.current;

  useFrame(
    (state, delta) => {
      groupRef.current.position.x = THREE.MathUtils.damp(groupRef.current.position.x, -scroll.scroll.current * 40, 2, delta);
      const scrollDelta = scroll.scroll.current - prevScroll;
      if(scrollDelta > 0 ) {
        const rotationY = pearlRef.current.rotation.y;
        pearlRef.current.rotation.y = THREE.MathUtils.damp(rotationY, rotationY + 10, 1, delta);
      }
      prevScroll = scroll.scroll.current;
    }
  );
  
  return(
    <group ref={groupRef}>
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
      {/* <OrbitControls makeDefault />  */}
      <directionalLight color="blue" position={[0, 10, 0]} intensity={0.31}/>
      <ControlesRotacion>
        <primitive
          object={ pearl.scene }
          ref={pearlRef}
          scale={ 3 }
          position={ [ 0, 0, 0 ] }
          // rotation-y={ 5 }
        />
      </ControlesRotacion>
      <Text className="font-['made-tommy-regular']" position={[-3,-3,0]}> Grupo Perla Software </Text>
    </group>
  );
}


function ControlesRotacion({ children }){
  const { size } = useThree();
  const responsiveness = 20;
  const euler = useMemo(() => new THREE.Euler(), [])
  const [spring, set] = useSpring(() => ({
    rotation: [0, 0, 0],
  }))

  const bind = useDrag(({ delta: [dx, dy] }) => {
    euler.y += (dx / size.width) * responsiveness;
    // euler.x += (dy / size.width) * responsiveness;
    // euler.x = THREE.MathUtils.clamp(euler.x, -Math.PI / 2, Math.PI / 2);
    set({ rotation: euler.toArray().slice(0, 3) });
  })

  return(
    <animated.group {...bind()} {...spring}>
      { children }
    </animated.group>
  );
}


  
export default PearlScene;