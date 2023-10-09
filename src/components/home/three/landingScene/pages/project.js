import { Text } from "@react-three/drei";
import Carrousel from "../carousel";
import { useEffect, useRef } from "react";


export default function Project({ data, active }) {
  const sceneRef = useRef();
  const descriptionFontProps = { font: '/fonts/made_tommy_soft/mt_Soft_Thin_PERSONAL_USE.otf', fontSize: 0.22, letterSpacing: 0.04, lineHeight: 1.1, 'material-toneMapped': false }
  const titleFontProps = { font: '/fonts/made_tommy_soft/mts_Medium.otf', fontSize: 0.5, letterSpacing: 0.04, lineHeight: 1.1, 'material-toneMapped': false }


  useEffect(
    () => {
      sceneRef.current.visible = active ? true : false;
    }
  ,[active]);

  return(
    <group ref={sceneRef}>
      <Carrousel imagesSource={data.images} yOffset={5}/>
      <group position={[0,-0.2,2]}>
        <Text position={[0,0.5,0]} {...titleFontProps}>{ data.title }</Text>
        <Text {...descriptionFontProps}>{ data.description }</Text>
      </group>
    </group>
  );
}