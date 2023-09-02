'use client';
import React from 'react';
import { ScrollControls, Scroll } from '@react-three/drei';
import PearlScene from './pages/pearlScene';
import SectionWrapper from './pages/sectionWrapper';
import AboutUsScene from './pages/aboutUsScene';

/**
 * Escena del Hero con perla animada 
 */
function Scene(){
  return(
    <>
      <Lights />
      <ScrollControls pages={5} distance={0.5}>      
        <SectionWrapper yOffset={-3.5}>
          <PearlScene />
        </SectionWrapper>
        <SectionWrapper yOffset={-3.5}>
          <AboutUsScene />
        </SectionWrapper>
        <Scroll html style={{ width: '100%' }}>
          <h3 style={{ position: 'absolute', top: `60vh`, right: '20vw', fontSize: '8em', color: 'black', transform: `translate3d(0,-100%,0)` }}>Grupo Perla</h3>
          <p style={{ position: 'absolute', top: `70vh`, right: '20vw', fontSize: '4em', color: 'black', transform: `translate3d(0,-120%,0)` }}>surfeando la vida =P</p>
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