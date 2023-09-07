import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, useGLTF, useScroll } from '@react-three/drei';
import * as THREE from 'three';
import ControlesRotacion from '@/components/utils/three/controlesRotacion';


function PearlScene(){
  const scroll = useScroll();
  const pearl = useGLTF('/pearl/source/pearl3.gltf');
  const pearlRef = useRef();
  const groupRef = useRef();
  var prevScroll = scroll.scroll.current;

  useFrame(
    (state, delta) => {
      const currentScroll = scroll.scroll.current;
      const scrollDelta = currentScroll - prevScroll;

      groupRef.current.position.x = THREE.MathUtils.damp(groupRef.current.position.x, -currentScroll * 40, 2, delta);
      
      if(scrollDelta > 0 ) {
        const rotationY = pearlRef.current.rotation.y;
        pearlRef.current.rotation.y = THREE.MathUtils.damp(rotationY, rotationY + 10, 1, delta);
      }
      prevScroll = currentScroll;
    }
  );
  
  return(
    <group ref={groupRef}>
      <directionalLight color="blue" position={[0, 10, 0]} intensity={0.31}/>
        <ControlesRotacion>
          <primitive
            object={ pearl.scene }
            ref={pearlRef}
            scale={ 3 }
            position={ [ 0, 0, 0 ] }
          />
        </ControlesRotacion>
      <Text className="font-['made-tommy-regular']" position={[-3,-3,0]}> Grupo Perla Software </Text>
    </group>
  );
}

export default PearlScene;