'use client';
import { useState } from 'react';
import Link from "next/link";

export default function Navbar() {

  const [menuOpened, setMenuOpened] = useState(false);

  return(
    <nav className="flex flex-col bg-perla-fullBlack dark:perla-fullBlack font-['made-tommy-regular'] items-center">
      <div className="min-w-full flex flex-wrap items-center justify-between py-4 md:px-[5em] lg:px-[12em]  ">
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
              <Link href="/" className="block py-2 pl-3 pr-4 rounded md:border-0 md:hover:text-orange-700 md:p-0  md:dark:hover:text-fomo-pri-one dark:hover:text-fomo-pri-one">
                ¿Quiénes somos?
              </Link>
            </li>
            <li>
              <Link href="/" className="block py-2 pl-3 pr-4 rounded md:border-0 md:hover:text-orange-700 md:p-0  md:dark:hover:text-fomo-pri-one dark:hover:text-fomo-pri-one">
                Proyectos
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block py-2 pl-3 pr-4 rounded md:border-0 md:hover:text-orange-700 md:p-0  md:dark:hover:text-fomo-pri-one dark:hover:text-fomo-pri-one">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        <div className={`${ menuOpened ? "block" : "hidden"} w-full md:hidden`} onClick={() => setMenuOpened(false)}>
          <ul className="flex flex-col text-center p-4 text-lg font-medium text-fomo-pri-one dark:bg-fomo-sec-white dark:text-fomo-pri-two">
            <li>
              <Link href="/" className="block py-2 pl-3 pr-4 rounded md:border-0 md:hover:text-orange-700 md:p-0  md:dark:hover:text-fomo-pri-one dark:hover:text-fomo-pri-one">
                Eventos
              </Link>
            </li>
            
            <li>
              <Link href="/" className="block py-2 pl-3 pr-4 rounded md:border-0 md:hover:text-orange-700 md:p-0  md:dark:hover:text-fomo-pri-one dark:hover:text-fomo-pri-one">
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block py-2 pl-3 pr-4 rounded md:border-0 md:hover:text-orange-700 md:p-0  md:dark:hover:text-fomo-pri-one dark:hover:text-fomo-pri-one">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}