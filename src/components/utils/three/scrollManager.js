import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect } from "react";

/**
 * Componente que se encarga de administrar el scroll según la cantidad de páginas que se utilizan
 * La cantidad de páginas es determinada por la cantidad de hijos que tiene el componente
 */
export default function ScrollManager({ pagesState, setPagesState, children }) {
    const totalPages = children.length;
    const scroll = useScroll();
    const scrollPerPage = 1 / totalPages;
    var actPage = 0; 

    function setPagesStatus(page) {
      let updatedState = new Array(totalPages);
      actPage = page;
      // La clásica: un for, sino se puede mandar un map también
      for (let i = 0; i <  children.length; i++) {
        if (i == page) {
          updatedState[i] = true;
        } else {
          updatedState[i] = false;
        }
      }
      setPagesState({ "currentPage" : page, "localScroll": 0, "activePages": updatedState });
    }

    useEffect(
      () => {
        actPage = 0;
        let state = [];
        children.map((data, i) => state.push(i == actPage ? true : false));
        setPagesState({ "currentPage": actPage, "activePages": state });
      },[]);

    useFrame(
      () => {
        const currentScroll = scroll.scroll.current;
        const currentPage = Math.floor(currentScroll / scrollPerPage);
        if (currentPage != pagesState.currentPage) {
          console.log("actualizo" + pagesState.currentPage + currentPage)
          setPagesStatus(currentPage);
        }
      }
    );

    return(
      <>
        { children }
      </>
    );
}