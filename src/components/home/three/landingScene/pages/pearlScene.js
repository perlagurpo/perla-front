import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, useGLTF, useScroll } from '@react-three/drei';
import { MathUtils } from 'three';
import ControlesRotacion from '@/components/utils/three/controlesRotacion';

function PearlScene({ text }) {
  const scroll = useScroll();
  const pearl = useGLTF('/pearl/source/pearl3.gltf');
  const pearlRef = useRef();
  const groupRef = useRef();
  const titleRef = useRef();
  const subtitleRef = useRef();
  var prevScroll = scroll.scroll.current;

  useFrame(
    (state, delta) => {
      const currentScroll = scroll.scroll.current;
      const scrollDelta = currentScroll - prevScroll;

      groupRef.current.position.x = MathUtils.damp(groupRef.current.position.x, -currentScroll * 40, 2, delta);

      titleRef.current.position.y = MathUtils.damp(titleRef.current.position.y, currentScroll * 20 + 4, 2, delta);
      subtitleRef.current.position.y = MathUtils.damp(subtitleRef.current.position.y, currentScroll * 20 + 3, 2, delta);
      subtitleRef.current.position.z = MathUtils.damp(subtitleRef.current.position.z, currentScroll * 1 + 4, 2, delta);

      if(scrollDelta > 0 ) {
        const pearlRotationY = pearlRef.current.rotation.y;
        pearlRef.current.rotation.y = MathUtils.damp(pearlRotationY, pearlRotationY + 10, 1, delta);
      }
      prevScroll = currentScroll;
    }
  );
  

  return(
    <group>
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
      </group>

      <Text position={[3,2,4]} scale={1.5} color="black" ref={titleRef}>
        {text.title}
      </Text>
      <Text position={[3,-2,4]} scale={1} color="black" ref={subtitleRef}>
        {text.subtitle}
      </Text>
    </group>
  );
}

export default PearlScene;