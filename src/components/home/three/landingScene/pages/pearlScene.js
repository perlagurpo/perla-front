import { useRef, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, PresentationControls, useGLTF, useScroll } from '@react-three/drei';
import { damp } from 'three/src/math/MathUtils';
import { VideoTexto } from '@/components/utils/three/videoText';
import { useSpring, animated } from '@react-spring/three';

function PearlScene({ text, active }) {
  const scroll = useScroll();
  const pearl = useGLTF('/models/pearl/source/pearl3.gltf');
  const pearlRef = useRef();
  const modelGroupRef = useRef();
  const titleRef = useRef();
  const subtitleRef = useRef();
  const [visible, setVisible] = useState(true);
  const [vertical, setVertical] = useState(false);

  var prevScroll = scroll.scroll.current;
  const { viewport } = useThree();

  // Posiciones responsive
  const titleSpring = useSpring({
    position:  [viewport.width > 13 ? 2 : 0,
                active ? ((viewport.width > 13 ? 4 : 6)): 20,
                4],
    config : {
      friction: 100,
      mass: 20,
    }
  });

  // Vertical para responsive
  useEffect(() => { viewport.width < 11 ? setVertical(true) : setVertical(false) },[viewport.width]);
  
  useEffect(
    () => {
      // Pequeño ajuste para poder dejar de renderizar la escena cuando no está en la pantalla
      setTimeout(() => setVisible(active), active ? 50 : 700);
    }
  ,[active]);

  useFrame(
    (state, delta) => {
      const currentScroll = scroll.scroll.current;
      const scrollDelta = currentScroll - prevScroll;
      let modelBasePos = viewport.width > 9 ? - viewport.width / 5 : 0
      modelGroupRef.current.position.x = damp(modelGroupRef.current.position.x, -currentScroll * 60 + modelBasePos, 2, delta);

      // titleRef.current.position.y = damp(titleRef.current.position.y, currentScroll * 30 + 4.3, 2, delta);
      // subtitleRef.current.position.y = damp(subtitleRef.current.position.y, currentScroll * 20 + 3.5, 2, delta);
      // subtitleRef.current.position.z = damp(subtitleRef.current.position.z, currentScroll * 1 + 5, 2, delta);

      if(scrollDelta > 0 ) {
        const pearlRotationY = pearlRef.current.rotation.y;
        pearlRef.current.rotation.y = damp(pearlRotationY, pearlRotationY + 10, 1, delta);
      }
      prevScroll = currentScroll;
    }
  );

  return(
    <group visible={visible}>
      {/* <OrbitControls /> */}
      <group ref={modelGroupRef} scale={ viewport.width / (viewport.width > 13 ? 18 : 10) } >
        <directionalLight color="blue" position={[0, 10, 0]} intensity={0.31}/>
        <PresentationControls polar={[0, 0]} speed={10} config={{ mass: 0.1, tension: 170, friction: 26 }} >
          <Float rotationIntensity={0} floatIntensity={1.5} floatingRange={[0, 1]}>
            <primitive
              object={ pearl.scene }
              ref={pearlRef}
              scale={ 2 }
              position={ [0, 0, 0 ] }
            />
          </Float>
        </PresentationControls>
      </group>

      <animated.group ref={titleRef}
                      position={titleSpring.position}
                      scale={ viewport.width / (viewport.width > 13 ? 25 : (vertical ? 15 : 18))  }
                      >
        <VideoTexto texto={`Perla${ vertical ? ""  :" software"}`} videoSource={'/video/naturaleza.mp4'} fontSize={viewport.width < 10 ? 4 : 2.6} />
        { vertical && <group position={[2,-2.5,0]}><VideoTexto texto={"software"} videoSource={'/video/naturaleza.mp4'} fontSize={2.6} /></group> }
      </animated.group>
      
      {/* <Text position={[3,-4,6]} scale={1} color="black" ref={subtitleRef}>
        {text.subtitle}
      </Text> */}
    </group>
  );
}

export default PearlScene;