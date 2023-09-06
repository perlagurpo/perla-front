'use client';
import { useEffect, useState } from 'react';
import Link from "next/link";

export default function Navbar() {
  const [menuOpened, setMenuOpened] = useState(false);
  const [opacityLevel, setOpacityLevel] = useState(1);
  var scrolledAmount = 0;


  const handleWheel = (e) => {
    const newValue = scrolledAmount + e.deltaY;
    if (newValue >= 0) {
      scrolledAmount = newValue;
    }
    if (newValue < 300) {
      setOpacityLevel(1);
    } else {
      setOpacityLevel(0);
    }
  }

  useEffect(() => {
    window.addEventListener("wheel", (e) => handleWheel(e));
  }, []);


  return(
    <nav className={`sticky flex flex-col bg-black font-['made-tommy-regular'] items-center z-10 transition duration-500`} style={{ 'backgroundColor' : `rgba(0, 0, 0, ${opacityLevel}`, transition: 'all 1s ease' }}>
      <div className="min-w-full flex flex-wrap items-center justify-between py-2 md:px-[5em] lg:px-[12em]  ">
        <Link href="/" className="flex items-center">
          <img src="/img/perla.png" className="h-10 px-6" alt="Perla Labs" />
        </Link>
        <button onClick={() => setMenuOpened(!menuOpened)}
                type="button" 
                className="inline-flex items-center bg-transparent p-2 ml-3 rounded-lg md:hidden" aria-controls="navbar-default" aria-expanded="false">
          <svg className="w-6 h-6 fill-perla-primary" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 md:p-0 md:flex-row md:gap-x-[6em] md:mt-0 md:border-0 font-semibold">
            <li>
              <Link href="/" className="block py-2 pl-3 pr-4 rounded md:border-0 md:hover:text-perla-primary md:p-0 transition duration-500">
                ¿Quiénes somos?
              </Link>
            </li>
            <li>
              <Link href="/" className="block py-2 pl-3 pr-4 rounded md:border-0 md:hover:text-perla-primary md:p-0 transition duration-500">
                Proyectos
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block py-2 pl-3 pr-4 rounded md:border-0 md:hover:text-perla-primary md:p-0 transition duration-500">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        <div className={`${ menuOpened ? "block" : "hidden"} w-full md:hidden`} onClick={() => setMenuOpened(false)}>
          <ul className="flex flex-col text-center p-4 text-lg font-medium">
            <li>
              <Link href="/" className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0">
                Eventos
              </Link>
            </li>
            
            <li>
              <Link href="/" className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0">
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}




// const handleWheel = (e) => {
//   var deltaY = - e.deltaY / 3000;
//   const newOpacity = opacity + deltaY;
//   if(newOpacity > 0 && newOpacity < 1) {
//     opacity += deltaY;
//     setOpacityLevel(opacity);
//   }
// }



// const { scrollYProgress } = useScroll({
//   container: containerRef,
//   onChange: ({ value: { scrollYProgress } }) => {
//     if (scrollYProgress > 0.7) {
//       console.log("hola");
//     }
//     console.log(scrollYProgress);
//   },
//   default: {
//     immediate: true,
//   },
// })