'use client';
import { ScrollControls, Scroll, ContactShadows, OrbitControls } from '@react-three/drei';
import SectionWrapper from './pages/sectionWrapper';
import AboutUsScene from './pages/aboutUsScene';
import PearlScene from './pages/pearlScene';
import Background from './pages/background';
import ScrollHandler from '../../../utils/three/scrollHandler';
import ContactScene from './pages/contactScene';
import Services from './pages/services';

/**
 * Escena con hero scrolleable
 */
function Scene({ textContent={} }){

  return(
    <>
      <color attach="background" args={['linear-gradient(to bottom, #f00 0%,#e0e 51%,#f4f 100%)']} />
      <Lights />
      <Background />
      

      {/* <OrbitControls /> */}
      <ScrollControls pages={8} distance={0.5} enabled={true} >
        <ScrollHandler />
        
        <SectionWrapper yOffset={-4} >          
          <PearlScene text={textContent.hero} />
          <AboutUsScene text={textContent.aboutUs} />
          <ContactScene />
          <Services />
          <ContactShadows opacity={0.4} scale={25}  blur={10} far={20} resolution={512} color="#000000" />
          {/* <ContactScene /> */}
        </SectionWrapper>
        <Scroll html style={{ width: '100%' }}>
          {/*<TextLayer textContent={textContent} />*/}
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