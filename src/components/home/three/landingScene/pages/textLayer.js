/**
 * Elementos de texto HTML que se muestran al frente en la escena 3D.
 * Deben estar envueltos por un componente <Scroll> para ser scrolleados.
 * @returns 
 */
export default function TextLayer() {

  return(
    <>
      <h3 style={{ position: 'absolute', top: `60vh`, right: '20vw', fontSize: '8em', color: 'black', transform: `translate3d(0,-100%,0)` }}>Grupo Perla</h3>
      <p style={{ position: 'absolute', top: `70vh`, right: '20vw', fontSize: '4em', color: 'black', transform: `translate3d(0,-120%,0)` }}>surfeando la vida =P</p>
      <h3 style={{ position: 'absolute', top: `430vh`, right: '10vw', fontSize: '6em', color: 'black', transform: `translate3d(0,-100%,0)` }}>Tremendos capos estos pibess</h3>
      <p style={{ position: 'absolute', top: `440vh`, right: '10vw', fontSize: '4em', color: 'black', transform: `translate3d(0,-120%,0)` }}>contratanos gringo culeau</p>
    </>
  );
}