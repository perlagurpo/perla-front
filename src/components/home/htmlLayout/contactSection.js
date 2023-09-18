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

  useEffect(
    () => {
      scroll > 0.8 ? setVisible(true) : setVisible(false);
    }
  ,[scroll]);

  return(
    <div className={`flex flex-col ${visible ? "absolute top-[25%] right-[10vw] " : "hidden"} z-0  ${visible ? "opacity-100" : "opacity-0"} transition duration-1000`}>
      <ContactForm />
    </div>
  );
}

{/* <div className={`flex flex-col ${visible ? "absolute top-0 right-0" : "hidden"} z-2 justify-center min-h-screen border border-white`}>
      <div className='flex flex-col mr-[10vw]'>
        <ContactForm />
      </div>
</div> */}


{/* <div className={`flex flex-col ${visible ? "absolute" : "hidden"}`}>
      <ContactForm />
    </div> */}