'use client';
import React from 'react';
import { ScrollControls, Scroll } from '@react-three/drei';
import PageOne from './pages/pageOne';
import PageTwo from './pages/pageTwo';
import PageThree from './pages/pageThree';
import SectionWrapper from './pages/sectionWrapper';


function Scene(){
  return(
    <>
      <Lights />
      <ScrollControls pages={3} distance={0.5}>

        <Scroll>
          <SectionWrapper yOffset={0}>
            <PageOne />
          </SectionWrapper>
        </Scroll>

        <Scroll>
          <SectionWrapper yOffset={-6}>
            <PageTwo />
          </SectionWrapper>
        </Scroll>

        <Scroll>
          <SectionWrapper yOffset={-12}>
            <PageThree />
          </SectionWrapper>
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