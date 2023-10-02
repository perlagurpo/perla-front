import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, PresentationControls, Text, useGLTF, useScroll } from '@react-three/drei';
import { MathUtils } from 'three';
import { VideoTexto } from '@/components/utils/three/videoText';
import RippleShader from '@/components/utils/three/shaderComponent';

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

      groupRef.current.position.x = MathUtils.damp(groupRef.current.position.x, -currentScroll * 60, 2, delta);

      titleRef.current.position.y = MathUtils.damp(titleRef.current.position.y, currentScroll * 30 + 4, 2, delta);
      // subtitleRef.current.position.y = MathUtils.damp(subtitleRef.current.position.y, currentScroll * 20 + 3, 2, delta);
      // subtitleRef.current.position.z = MathUtils.damp(subtitleRef.current.position.z, currentScroll * 1 + 4, 2, delta);

      if(scrollDelta > 0 ) {
        const pearlRotationY = pearlRef.current.rotation.y;
        pearlRef.current.rotation.y = MathUtils.damp(pearlRotationY, pearlRotationY + 10, 1, delta);
      }
      prevScroll = currentScroll;
    }
  );
  

  return(
    <group>
      {/* <OrbitControls /> */}
      <group ref={groupRef}>
        <directionalLight color="blue" position={[0, 10, 0]} intensity={0.31}/>
        <PresentationControls polar={[0, 0]} speed={10} config={{ mass: 0.1, tension: 170, friction: 26 }} >
          <Float rotationIntensity={0} floatIntensity={2} floatingRange={[0, 1]}>
          <primitive
            object={ pearl.scene }
            ref={pearlRef}
            scale={ 2 }
            position={ [ 0, 0, 0 ] }
          />
          </Float>
        </PresentationControls>
      </group>
      {/* <mesh position={[1,1,0]} scale={4} rotation={[-Math.PI/2, 0 , 0 ]} >
        <planeGeometry />
      </mesh> */}

      {/* <Text position={[3,2,4]} scale={1.5} color="black" ref={titleRef}>
        {text.title}
      </Text> */}
      {/* <Text position={[3,-2,5]} scale={1} color="black" ref={subtitleRef}>
        {text.subtitle}
      </Text> */}
      
      <group ref={titleRef} position={[0,0,4]}>
        <VideoTexto texto={"Perla labs"} videoSource={'/video/naturaleza.mp4'} />
      </group>
      <RippleShader />
    </group>
  );
}

export default PearlScene;