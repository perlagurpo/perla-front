import ContactForm from "@/components/contact/contactForm";
import { useRef, useState } from "react";
import { OrbitControls, Plane, PresentationControls, useScroll, Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { animated, useSpring } from "@react-spring/three";
import * as THREE from 'three';

/**
 * Escena de Contacto, el formmulario no está incluido (ver en htmlLayout)
 */
export default function ContactScene() {
  const scroll = useScroll();
  const [visible, setVisible] = useState(0);
  const planeRef = useRef();
  const meshRef = useRef();
  const luzRef = useRef()

  const planeSpring = useSpring({
      opacity: visible ? 1 : 0,
      position: visible ? [-4, 2, 2] : [-4, -20, 2],
      config : {
        friction: 100,
        mass: 20,
      }
    }
  );


  useFrame(
    () => {
      const currentScroll = scroll.scroll.current;
      if(currentScroll > 0.8) {
        setVisible(true);
      } else {
        setVisible(false);
      }

    }
  );

  return(
    <animated.group ref={planeRef} visible={visible}>
      {/* Background */}
      <Plane args={[30,30,30]} position={[0,0,-4]} material-color="black" />
      {/* Compo esferas */}
      <animated.group position={planeSpring.position} opacity={planeSpring.opacity}>
        <PresentationControls polar={[0, 0]} speed={10} config={{ mass: 0.1, tension: 170, friction: 26 }} >
          <Spheres position={[0,1,0]} />
          <mesh ref={meshRef}
                    material={new THREE.MeshLambertMaterial({ color: "white" })}
                    position={[0,0,0]}
                    rotation={[0.2,0,0]}
                    receiveShadow
                    castShadow
                    >
                <boxGeometry args={[4, 0.2 , 4]}  />
          </mesh>
        </PresentationControls>
      </animated.group>
      <pointLight ref={luzRef} position={[0,2,4]} intensity={10} color={"#305BF3"} />
    </animated.group>
  );
}



function Spheres({ amount = 5, distribution, position }) {

  const spheres = []
  for (let i = 0; i < amount; i++){
    spheres.push({
        "position": [(Math.random() - 0.5) * 3.8, Math.random() * 2, (Math.random() - 0.5) * 3.8],
        "size": Math.random() * 0.6 + 0.1
      }
    )
  } 
  
  return(
    <group position={position} castShadow>
      { spheres.map(
        (sphere) => <Float speed={Math.random() * 2 + 1}>
                      <Esfera position={sphere.position} size={sphere.size} />
                    </Float>
      ) }
      
    </group>
  );
}


function Esfera({ position, size }) {
  
  const ref = useRef();
  

  return(
    <mesh material={ new THREE.MeshLambertMaterial({ color: "grey" })} position={position} ref={ref} >
      <pointLight intensity={5} />
      <sphereGeometry args={[size]} />
    </mesh>
  );


}


// style={{ width: '100vw', display: 'flex', 'flex-direction': 'row', justifyContent: 'right' }}



// <Plane position={[0,2,0]}>
//       <Html rotation-x={0} transform >
//         <div className="">
//           <div className="flex flex-col w-screen items-center border border-black" onPointerDown={(e) => e.stopPropagation()}>
//               <div className="w-[20vw]">
//                 <ContactForm />
//               </div>
//           </div>
//         </div>
//       </Html>
//     </Plane>