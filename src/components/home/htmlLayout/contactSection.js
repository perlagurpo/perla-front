import ContactForm from '@/components/contact/contactForm';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function ContactSection(){

  const scroll = useSelector((state) => state.scroll.value);
  const [visible, setVisible] = useState(false);

  useEffect(
    () => {
      scroll > 0.8 ? setVisible(true) : setVisible(false) 
    }
  ,[scroll]);


  return(
    <div className={`flex flex-col ${visible ? "absolute top-0 right-0" : "hidden"} z-5 justify-center min-h-screen`}>
        <div className='flex flex-col mr-[10vw]'>
          <ContactForm />
        </div>
    </div>
  );

}