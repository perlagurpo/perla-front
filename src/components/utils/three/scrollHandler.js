import { useEffect } from "react";
import { useScroll } from "@react-three/drei";
import { useDispatch } from "react-redux";
import { setCurrent } from "@/app/store/features/scrollSlice";

/**
 * Armo este componente para que gestione las actualizaciones de estado del scroll global.
 * Sí o si tiene que tener como padre a ScrollControls, de otra manera no puede usar useScroll para recibir sus datos.
 */
export default function ScrollHandler () {
  const scroll = useScroll();
  const dispatch = useDispatch();
  
  useEffect(
    () => {
      const timer = setInterval(() => {
        dispatch(setCurrent(scroll.scroll.current));
      }, 500);

      return () => {
        clearInterval(timer);
      };
    }
  ,[]);

}