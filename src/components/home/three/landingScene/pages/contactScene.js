import ContactForm from "@/components/contact/contactForm";
import { useRef, useState } from "react";
import { Plane, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { animated, useSpring } from "@react-spring/three";


export default function ContactScene() {
  const scroll = useScroll();
  const [visible, setVisible] = useState(0);
  const planeRef = useRef();

  const planeSpring = useSpring({
      opacity: visible ? 1 : 0,
    }
  );


  useFrame(
    () => {
      const currentScroll = scroll.scroll.current;
      currentScroll > 0.8 ? planeRef.current.visible = true : planeRef.current.visible = false;
    }
  );

  return(
    <animated.group opacity={planeSpring.opacity}>
      <Plane ref={planeRef} args={[30,30,30]} position={[0,0,0]} material-color="black">
        
      </Plane>
    </animated.group>
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