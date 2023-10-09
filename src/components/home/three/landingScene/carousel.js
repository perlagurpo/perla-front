import { Image } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { BoxGeometry, MeshPhongMaterial } from "three"
import { damp } from "three/src/math/MathUtils";

/**
 *  Por ahora, la función espera tres imágenes nada más, luego se hará dinámica la cantidad recibida 
 * 
 */
export default function Carrousel({ imagesSource=[] , yOffset=4 }) {


  return(
    <group position={[0,yOffset,0]}>
      {/* {
        images.map( (imagen, i) => {
            const orden = i / images.length
            console.log(orden)
            return <DisplayImagen position={[-6,0,4]} imgSource={imagen} />
          }
        )
      } */}
      <DisplayImagen position={[-4.5,0,4]} imgSource={imagesSource[0]} scaleY={4} />
      <DisplayImagen position={[0,0,4]} imgSource={imagesSource[1]} scaleY={5} />
      <DisplayImagen position={[4.5,0,4]} imgSource={imagesSource[2]} scaleY={4} />
    </group>
  );
}

function DisplayImagen({ position, imgSource, scaleY=5 }) {
  const imgRef = useRef();
  const scaleX = scaleY * (0.75);
  const [hovered, setHovered] = useState(false);
  
  useFrame(
    (state, delta) => {
      imgRef.current.scale.x = damp(imgRef.current.scale.x, hovered ? scaleX * 1.2 : scaleX, 8, delta);
      imgRef.current.scale.y = damp(imgRef.current.scale.y, hovered ? scaleY * 1.2 : scaleY, 8, delta);
    }
  );

  return(
    <group position={position}>
      {/* Utilizo una mesh invisible para capturar los eventos del mouse */}
      <mesh material={new MeshPhongMaterial({color: "grey"})}
            onPointerEnter={() => setHovered(true)}
            onPointerLeave={() => setHovered(false)}
            visible={false}
            >
        <boxGeometry args={[scaleX,scaleY,0.3]} />
      </mesh>
      {/* Imagen que sufre los cambios y se muestra */}
      <Image    ref={imgRef} 
                url={imgSource}
                scale={[scaleX,scaleY,0]}
                position={[0,0,0.2]}
              />
    </group>
  )
}