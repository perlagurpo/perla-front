'use client';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLang } from '@/app/store/features/langSlice';
import Link from "next/link";

export default function Navbar() {
  const [menuOpened, setMenuOpened] = useState(false);
  const [langMenuOpened, setLangMenuOpened] = useState(false);
  const scroll = useSelector((state) => state.scroll.value);
  const lang = useSelector((state) => state.lang.value);
  const availableLangs = useSelector((state) => state.lang.availableValues);
  const content = useSelector((state) => state.lang.content);
  const dispatch = useDispatch();

  return(
    <nav className={`sticky flex flex-col bg-black font-['made-tommy-regular'] items-center z-10 transition duration-500`} style={{ 'backgroundColor' : `rgba(0, 0, 0, ${ scroll > 0.02 ? '0' : '1' }`, transition: 'all 1s ease' }}>
      <div className="min-w-full flex flex-wrap items-center justify-between py-2 md:px-[5em] lg:px-[12em]">
        <Link href="/" className="flex items-center">
          <img src="/img/perla.png" className="h-10 px-6" alt="Perla Labs" />
          <h1 className='text-lg text-perla-primary'>{ scroll }</h1>
        </Link>
        <button onClick={() => setMenuOpened(!menuOpened)}
                type="button" 
                className="inline-flex items-center bg-transparent p-2 ml-3 rounded-lg md:hidden" aria-controls="navbar-default" aria-expanded="false">
          <svg className="w-6 h-6 fill-perla-primary" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </button>
        <div className="flex flex-row hidden w-full h-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 md:p-0 md:flex-row md:gap-x-[6em] md:mt-0 md:border-0 font-semibold">
            <li>
              <Link href="/" className="block py-2 pl-3 pr-4 rounded md:border-0 md:hover:text-perla-primary md:p-0 transition duration-500">
                { content["navbar"].about }
              </Link>
            </li>
            <li>
              <Link href="/" className="block py-2 pl-3 pr-4 rounded md:border-0 md:hover:text-perla-primary md:p-0 transition duration-500">
                { content["navbar"].projects }
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block py-2 pl-3 pr-4 rounded md:border-0 md:hover:text-perla-primary md:p-0 transition duration-500">
                { content["navbar"].contact }
              </Link>
            </li>
            <li className='relative h-full'>
              <button onClick={ () => {setLangMenuOpened(!langMenuOpened)} }>
                <h2 className='font-[made-tommy-thin]'>
                  { lang }
                </h2>
              </button>
              <div  className={`flex flex-row items-center absolute ${ langMenuOpened ? "translate-y-0" : "translate-y-4"} gap-2 z-20 bg-perla-black px-3 py-2 rounded-lg  shadow-lg ${ langMenuOpened ? 'block' : 'hidden'}  transition-transform duration-500`}
                    onClick={() => setLangMenuOpened(false)}
                    >
                      { 
                        availableLangs && 
                          availableLangs.map( (data, i) => {
                            return  <h2 className='font-[made-tommy-thin] text-sm cursor-pointer hover:text-perla-primary transition duration-100'
                                        onClick={() => {dispatch(setLang(data))}}
                                        key={i}>
                                      { data }
                                    </h2>
                          })
                      }
              </div>
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






// Función vieja para setear la opacidad calculando el scroll manualmente
  // /**
  //  * Función para manejar la opacidad del navbar según se haya scrolleado o no 
  //  * @param {*} e 
  //  */

  // var scrolledAmount = 0;

  // const handleWheel = (e) => {
  //   const newValue = scrolledAmount + e.deltaY;
  //   if (newValue >= 0) {
  //     scrolledAmount = newValue;
  //   }
  //   if (newValue < 300) {
  //     setOpacityLevel(1);
  //   } else {
  //     setOpacityLevel(0);
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener("wheel", (e) => handleWheel(e));
  // }, []);