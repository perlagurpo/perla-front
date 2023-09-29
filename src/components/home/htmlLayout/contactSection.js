import ContactForm from '@/components/contact/contactForm';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

/*
  Componente HTML que se activa con scroll por fuera del Canvas
  Actualmente es conflictiva la convivencia entre HTML posicionado absolutamente y ScrollControlls
*/
export default function ContactSection(){

  const scroll = useSelector((state) => state.scroll.value);
  const [visible, setVisible] = useState(false);
  const [opacity, setOpacity] = useState(0);

  useEffect(
    () => {
      scroll > 0.82 ? setVisible(true) : setVisible(false);
      scroll > 0.82 ? setOpacity(1) : setOpacity(0);
    }
  ,[scroll]);

  return(
    <div style={{ 
            opacity: opacity,
            transition: "all 1.5s 0.1s",
            position: "absolute",
            top: "25%",
            right: "10%",
            transform: visible ? "translateX(0)" : "translateX(100vw)"
            }}>
      <div >
        <ContactForm />
      </div>
    </div>
  );
}

{/* <div className={`flex flex-col ${visible ? "absolute top-0 right-0" : "hidden"} z-2 justify-center min-h-screen border border-white`}>
      <div className='flex flex-col mr-[10vw]'>
        <ContactForm />
      </div>
</div> */}

//{`flex flex-col ${visible ? "absolute top-[25%] right-[10vw] " : "hidden"} z-0`}

{/* <div className={`flex flex-col ${visible ? "absolute" : "hidden"}`}>
      <ContactForm />
    </div> */}