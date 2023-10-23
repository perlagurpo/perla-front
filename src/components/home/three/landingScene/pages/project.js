import { Text } from "@react-three/drei";
import Carrousel from "../carousel";
import { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/three";


export default function Project({ data, active }) {
  const sceneRef = useRef();
  const descriptionFontProps = { font: '/fonts/made_tommy_soft/mt_Soft_Thin_PERSONAL_USE.otf', fontSize: 0.22, letterSpacing: 0.04, lineHeight: 1.1, 'material-toneMapped': false }
  const titleFontProps = { font: '/fonts/made_tommy_soft/mts_Medium.otf', fontSize: 0.5, letterSpacing: 0.04, lineHeight: 1.1, 'material-toneMapped': false }
  const [hovered, setHovered] = useState(false);
  const titleSpring = useSpring({
    scale: hovered ? 1.05 : 1
  });

  useEffect(
    () => {
      sceneRef.current.visible = active ? true : false;
    }
  ,[active]);

  function handleLink(){
    console.log(data)
    if (data.link) {
      window.location.assign(data.link);
    }
  }

  return(
    <group ref={sceneRef}>
      <Carrousel imagesSource={data.images} yOffset={5}/>
      <group position={[0,-0.2,2]}>
      
        <animated.group position={[0,0.5,0]} onClick={handleLink} onPointerEnter={() => setHovered(true)} onPointerLeave={() => setHovered(false)} scale={titleSpring.scale}>
          <Text {...titleFontProps}>{ data.title }</Text>
        </animated.group>
        <Text {...descriptionFontProps}>{ data.description }</Text>
      </group>
    </group>
  );
}