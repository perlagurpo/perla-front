'use client';
import { useState } from 'react';
import Link from "next/link";
import { useSelector, useDispatch } from 'react-redux';
import { setLang } from '@/app/store/features/langSlice';
import { setLite } from '@/app/store/features/liteSlice';
import { GearIcon } from '../icons/icons';

export default function Navbar() {
  /* Estado local de la UI */
  const [menuOpened, setMenuOpened] = useState(false);
  const [langMenuOpened, setLangMenuOpened] = useState(false);
  const [langMenuActive, setLangMenuActive] = useState(false);
  const [configMenuOpened, setConfigMenuOpened] = useState(false);
  const [configMenuOpacity, setConfigMenuOpacity] = useState(false);
  /* Manejo de estado de Redux */
  const scroll = useSelector((state) => state.scroll.value);
  const lang = useSelector((state) => state.lang.value);
  const availableLangs = useSelector((state) => state.lang.availableValues);
  const content = useSelector((state) => state.lang.content);
  const liteStatus = useSelector((state) => state.lite.value );
  const dispatch = useDispatch();


  function toggleConfigMenu() {
    displayLangMenu(false);
    if (!configMenuOpened) {
      setConfigMenuOpened(true);
      setTimeout(() => setConfigMenuOpacity(1), 100);
    } else {
      setConfigMenuOpacity(0);
      setTimeout(() => setConfigMenuOpened(false), 300);
    }
  }

  function displayLangMenu(value) {
    if (value) {
      setLangMenuOpened(true);
      setTimeout(() => setLangMenuActive(true), 100);
    } else {
      setLangMenuActive(false);
      setTimeout(() => setLangMenuOpened(false), 100);
    }
  }

  /**
   * Renderiza el botón de cambio de lenguaje
   * @returns JSX Element
   */
  function LangUI() {
    return(
        <div className='relative h-full'>
          <button onClick={ () => {displayLangMenu(!langMenuOpened)} }>
            <h2 className='font-[made-tommy-thin] hover:opacity-80 transition duration-100'>
              { lang }
            </h2>
          </button>
          {/* Menú de lenguajes disponibles */}
          <div  className={`absolute ${ langMenuOpened ? 'flex' : 'hidden'}
                            z-20 min-w-md bg-[#505050]
                            rounded-lg shadow-lg
                            translate-y-3 translate-x-[-25%]
                            opacity-[${langMenuActive ? "1" : "0"}] transition duration-300 delay-100`}
                onClick={() => displayLangMenu(false)}
                >
                <div className={`flex flex-row items-center gap-2 px-3 py-2`}>
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
          </div>
        </div>
    );
  }

  return(
    <nav className={`sticky flex flex-col z-10 items-center bg-black font-['made-tommy-regular'] transition duration-500`} style={{ 'backgroundColor' : `rgba(0, 0, 0, ${ scroll > 0.02 ? '0' : '1' }`}}>
      <div className="min-w-full flex flex-row items-center justify-between py-2 md:px-[5em] lg:px-[12em]">
        <Link href="/" className="flex items-center">
          <img src="/img/perla.png" className="h-10 px-6" alt="Perla Labs" />
          {/* <h1 className='text-lg text-perla-primary'>{ scroll }</h1> */}
        </Link>
        <button onClick={() => setMenuOpened(!menuOpened)}
                type="button" 
                className="inline-flex items-center bg-transparent p-2 ml-3 rounded-lg md:hidden" aria-controls="navbar-default" aria-expanded="false">
          <svg className="w-6 h-6 fill-perla-primary" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </button>
        <div className="flex flex-row hidden w-full h-full md:block md:w-auto" id="navbar-default">
          <ul className={`flex flex-col items-center p-4 mt-4 md:p-0 md:flex-row md:gap-x-10 xl:gap-x-[6em] md:mt-0 md:border-0 font-semibold ${scroll > 0.02 && scroll < 0.85 && "text-black"} transition duration-300`}>
            <li>
              <Link href="/" className="block py-2 rounded md:border-0 md:hover:text-perla-primary md:p-0 transition duration-500">
                { content["navbar"].about }
              </Link>
            </li>
            <li>
              <Link href="/" className="block py-2  rounded md:border-0 md:hover:text-perla-primary md:p-0 transition duration-500">
                { content["navbar"].projects }
              </Link>
            </li>
            <li>
              <Link href='mailto:grupo.perla.software@gmail.com' className="block py-2  rounded md:border-0 md:hover:text-perla-primary md:p-0 transition duration-500">
                { content["navbar"].contact }
              </Link>
            </li>
                                
       
            <li className="flex  md:flex-row-reverse items-center gap-2 tracking-wide">
              <div onClick={() => toggleConfigMenu()} className={`cursor-pointer ${configMenuOpened && "rotate-90"} hover:opacity-80 transition duration-300`}>
                <GearIcon width={'20px'} height={'20px'} />
              </div>
              {/* Menú de configuración */}
              <div className={`${configMenuOpened ? "flex flex-row" : "hidden" }
                                items-center min-w-md gap-6 rounded-xl
                                bg-perla-black text-white
                                mx-4 px-4 py-2
                                opacity-${configMenuOpacity}
                                ${configMenuOpacity == 1 ? "translate-x-0" : "translate-x-12"}
                                transition duration-300`}>
                <LangUI />
                <p  className={`text-ms font-[made-tommy-thin] ${liteStatus && "text-perla-primary"} cursor-pointer hover:opacity-80 transition duration-100`}
                    onClick={() => {dispatch(setLite(!liteStatus))}}
                    >
                  lite
                </p>
              </div>
            </li>
          </ul>
          
        </div>

        <div className={`${ menuOpened ? "block" : "hidden"} w-full md:hidden`} onClick={() => setMenuOpened(false)}>
          <ul className="flex flex-col text-center p-4 text-lg font-medium">
            <li>
              <Link href="/" className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0">
                { content["navbar"].projects }
              </Link>
            </li>
            
            <li>
              <Link href="/" className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0">
                { content["navbar"].about }
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0">
              { content["navbar"].contact }
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}