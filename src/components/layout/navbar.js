'use client';
import { useState } from 'react';
import Link from "next/link";

export default function Navbar() {
  const initialColor = "#000"
  const [menuOpened, setMenuOpened] = useState(false);
  const [navColor, setNavColor] = useState();

  return(
    <nav className="sticky flex flex-col bg-sky-500/[.08] font-['made-tommy-regular'] items-center z-10">
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