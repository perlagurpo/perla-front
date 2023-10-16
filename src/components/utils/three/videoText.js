const { Text } = require("@react-three/drei");
const { useEffect, useState } = require("react");

function VideoTexto({ texto, videoSource, fontSize=5, letterSpacing="1.1%" }) {
  /* Creamos el elemento video y le asignamos las propiedades del objeto pasado como segundo parámetro */
  const [video] = useState(() => Object.assign(document.createElement('video'), { src: videoSource, crossOrigin: 'Anonymous', loop: true, muted: true }));
  
  useEffect(() => void video.play(), [video]);
  return(
    <Text fontSize={fontSize} letterSpacing={letterSpacing}>
      { texto }
      <meshBasicMaterial>
        <videoTexture attach="map" args={[video]} />
      </meshBasicMaterial>
    </Text>
  );
}

export { VideoTexto };