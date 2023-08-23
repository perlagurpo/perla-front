'use client';
import React from 'react';
import { ScrollControls, Scroll } from '@react-three/drei';
import PageOne from './pages/pageOne';
import PageTwo from './pages/pageTwo';
import PageThree from './pages/pageThree';


function Scene(){
  return(
    <>
      <Lights />
      <ScrollControls pages={3} distance={0.5}>

        <Scroll>
          <PageOne />
        </Scroll>

        <Scroll>
          <PageTwo />
        </Scroll>

        <Scroll>
          <PageThree />
        </Scroll>
        
      </ScrollControls>
    </>
  );
}

function Lights() {
  return(
    <>
      <pointLight position={[3,3,3]}  color="hotpink"></pointLight>
      <directionalLight castShadow intensity={2} position={[10, 6, 6]} shadow-mapSize={[1024, 1024]} color='red'></directionalLight>
    </>
  );
}

export default Scene;