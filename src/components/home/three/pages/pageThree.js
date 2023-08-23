import { Text } from '@react-three/drei';

function PageThree(){

  return(
    <>
      <mesh position={[-4,-10,0]}>
        <boxGeometry />
        <meshPhongMaterial color={'#FFdce5'} />
      </mesh>
      <Text position={[2.5, -10, 0]}
            color="black" anchorX="center" anchorY="middle" fontSize={0.4}>
        Portfolio
      </Text>
    </>
  );
}

  export default PageThree;