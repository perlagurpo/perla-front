'use client';
import React from 'react';
import { ScrollControls, Scroll } from '@react-three/drei';
import PearlHero from './pages/pearlScene';
import SectionWrapper from './pages/sectionWrapper';

/**
 * Escena del Hero con perla animada 
 */
function Scene(){
  return(
    <>
      <Lights />
      <ScrollControls pages={5} distance={0.5}>      
        <SectionWrapper yOffset={-3.5}>
          <PearlHero />
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