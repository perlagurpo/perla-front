/**
 * Por ahora tiene la función de envolver a otros componentes para trabajarlos como grupo y manejar su posición
 * en el ScrollDown y así trabajar sus posiciones internas como relativas. 
 */
export default function SectionWrapper({ children, yOffset=0 }) {

  return(
    <group position={[0,yOffset,0]}>
      { children }
    </group>
  );
}