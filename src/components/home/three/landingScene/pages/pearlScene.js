import { useRef, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, PresentationControls, Text, useGLTF, useScroll } from '@react-three/drei';
import { damp } from 'three/src/math/MathUtils';
import { VideoTexto } from '@/components/utils/three/videoText';

function PearlScene({ text, active }) {
  const scroll = useScroll();
  const pearl = useGLTF('/models/pearl/source/pearl3.gltf');
  const pearlRef = useRef();
  const modelGroupRef = useRef();
  const titleRef = useRef();
  const subtitleRef = useRef();
  const [visible, setVisible] = useState(true);
  
  var prevScroll = scroll.scroll.current;

  const { viewport } = useThree();

  useFrame(
    (state, delta) => {
      const currentScroll = scroll.scroll.current;
      const scrollDelta = currentScroll - prevScroll;
      let modelBasePos = - viewport.width / 5
      modelGroupRef.current.position.x = damp(modelGroupRef.current.position.x, -currentScroll * 60 + modelBasePos, 2, delta);

      titleRef.current.position.y = damp(titleRef.current.position.y, currentScroll * 30 + 4.3, 2, delta);
      // subtitleRef.current.position.y = damp(subtitleRef.current.position.y, currentScroll * 20 + 3.5, 2, delta);
      // subtitleRef.current.position.z = damp(subtitleRef.current.position.z, currentScroll * 1 + 5, 2, delta);

      if(scrollDelta > 0 ) {
        const pearlRotationY = pearlRef.current.rotation.y;
        pearlRef.current.rotation.y = damp(pearlRotationY, pearlRotationY + 10, 1, delta);
      }
      prevScroll = currentScroll;
    }
  );
  
  useEffect(
    () => {
      // Pequeño ajuste para poder dejar de renderizar la escena cuando no está en la pantalla
      setTimeout(() => setVisible(active), active ? 50 : 700);
    }
  ,[active]);

  return(
    <group visible={visible}>
      {/* <OrbitControls /> */}
      <group ref={modelGroupRef} scale={ viewport.width / 18 }>
        <directionalLight color="blue" position={[0, 10, 0]} intensity={0.31}/>
        <PresentationControls polar={[0, 0]} speed={10} config={{ mass: 0.1, tension: 170, friction: 26 }} >
          <Float rotationIntensity={0} floatIntensity={1.5} floatingRange={[0, 1]}>
            <primitive
              object={ pearl.scene }
              ref={pearlRef}
              scale={ 2 }
              position={ [ 0, 0, 0 ] }
            />
          </Float>
        </PresentationControls>
      </group>

      <group ref={titleRef} position={[2,4,4]} scale={ viewport.width / 25 }>
        <VideoTexto texto={"Perla software"} videoSource={'/video/naturaleza.mp4'} fontSize={2.6} />
      </group>
      
      {/* <Text position={[3,-4,6]} scale={1} color="black" ref={subtitleRef}>
        {text.subtitle}
      </Text> */}
    </group>
  );
}

export default PearlScene;