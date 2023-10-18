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
      scroll >= 0.82 && !visible && toggleVisibility(true);
      scroll < 0.83 && visible && toggleVisibility(false);
    }
  ,[scroll]);

  /**
   * Función para setear los cambios que hacen visible al componente
   * Recible un booleano que indica si el componente será visible o no
   * Utiliza un delay para setear el efecto de transición de opacidad de forma prolija
   * @param {boolean} nextVal 
   */
  function toggleVisibility(nextVal) {
    if (nextVal) {
      setVisible(nextVal);
      setTimeout(() => setOpacity(1), 150);
    } else {
      setOpacity(0);
      setTimeout(() => setVisible(nextVal), 100);
    }
  }

  return(
    <div style={{ 
            opacity: opacity,
            display: visible ? "flex" : "none",
            transition: "all 1s 0.1s",
            position: "absolute",
            top: "25%",
            right: "10%",
            }}>
      <div>
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