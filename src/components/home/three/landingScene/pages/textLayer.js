/**
 * Elementos de texto HTML que se muestran al frente en la escena 3D.
 * Deben estar envueltos por un componente <Scroll> para ser scrolleados.
 * @returns 
 */
export default function TextLayer({ textContent }) {

  return(
    <>
      <h3 style={{ position: 'absolute', top: `60vh`, right: '20vw', fontSize: '8em', color: 'black', transform: `translate3d(0,-100%,0)` }}>
        {textContent.title}
      </h3>
      <p style={{ position: 'absolute', top: `70vh`, right: '20vw', fontSize: '4em', color: 'black', transform: `translate3d(0,-120%,0)` }}>
        {textContent.subtitle}
      </p>
      <h3 style={{ position: 'absolute', top: `430vh`, right: '10vw', fontSize: '6em', color: 'black', transform: `translate3d(0,-100%,0)` }}>
        {textContent.aboutTitle}
      </h3>
      <p style={{ position: 'absolute', top: `440vh`, right: '10vw', fontSize: '4em', color: 'black', transform: `translate3d(0,-120%,0)` }}>
        {textContent.aboutSubtitle}
      </p>
    </>
  );
}