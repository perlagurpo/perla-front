'use client';
import { ScrollControls, Scroll } from '@react-three/drei';
import SectionWrapper from './pages/sectionWrapper';
import AboutUsScene from './pages/aboutUsScene';
import PearlScene from './pages/pearlScene';
import Background from './pages/background';
import ScrollHandler from '../../../utils/three/scrollHandler';
import TextLayer from './pages/textLayer';

/**
 * Escena con hero scrolleable
 */
function Scene(){
  return(
    <>
      <color attach="background" args={['linear-gradient(to bottom, #f00 0%,#e0e 51%,#f4f 100%)']} />
      <Lights />
      <Background />
      <ScrollControls pages={5} distance={0.5}>
        <ScrollHandler />
        <SectionWrapper yOffset={-3.5} >          
          <PearlScene />
        </SectionWrapper>
        <SectionWrapper yOffset={-3.5}>
          <AboutUsScene />
        </SectionWrapper>
        <Scroll html style={{ width: '100%' }}>
          <TextLayer />
        </Scroll>
      </ScrollControls>
    </>
  );
}

function Lights() {
  return(
    <>
      <pointLight position={[3,3,3]}  color="#FAFAFA"></pointLight>
      <directionalLight castShadow intensity={2} position={[10, 6, 6]} shadow-mapSize={[1024, 1024]} color='#FAFAFA'></directionalLight>
    </>
  );
}

export default Scene;