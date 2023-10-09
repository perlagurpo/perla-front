'use client';
import { useState } from 'react';
import { ScrollControls, ContactShadows } from '@react-three/drei';
import Background from './pages/background';
import SectionWrapper from './pages/sectionWrapper';
import ScrollTransmitter from '@/components/utils/three/scrollTransmitter';
import ScrollManager from '@/components/utils/three/scrollManager';
import AboutUsScene from './pages/aboutUsScene';
import PearlScene from './pages/pearlScene';
import ContactScene from './pages/contactScene';
import Services from './pages/services';
import Project from './pages/project';

/**
 * Escena con hero scrolleable
 */
function Scene({ textContent={} }){

  const [pagesState, setPagesState] = useState({ "activePages": [true, false, false, false, false], "currentPage": 0 });


  return(
    <>
      <color attach="background" args={['linear-gradient(to bottom, #f00 0%,#e0e 51%,#f4f 100%)']} />
      {/* Genéricos globales de escena */}
      <Lights />
      <Background />
      {/* Todo lo envuelto por los ScrollControls tienen acceso al state del scroll local en cada momento */}
      <ScrollControls pages={8} distance={0.5} enabled={true} >
        {/* Utilidad propia para enviar el scroll al estado general de Redux de la página por fuera del canvas */}
        <ScrollTransmitter />
        
        
        <SectionWrapper yOffset={-4} >
          <ScrollManager pagesState={pagesState} setPagesState={setPagesState} totalPages={5}>
            {/* Componentes para cada escena de la HomePage */}
            <PearlScene text={textContent.hero} active={pagesState.activePages[0]} />
            <AboutUsScene text={textContent.aboutUs} active={pagesState.activePages[1]} />
            <Services active={pagesState.activePages[2]} />
            <Project data={textContent.projects.Pese} active={pagesState.activePages[3]} />
            <ContactScene active={pagesState.activePages[4]} />
          </ScrollManager>
          <ContactShadows opacity={0.4} scale={25}  blur={10} far={20} resolution={512} color="#000000" />
        </SectionWrapper>
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