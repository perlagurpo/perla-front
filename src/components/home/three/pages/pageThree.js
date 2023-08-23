import { Text } from '@react-three/drei';

function PageThree(){

  return(
    <>
      <mesh position={[-4,0,0]} rotation={[2,4,0]}>
        <boxGeometry />
        <meshPhongMaterial color='aquamarine' />
      </mesh>
      <Text position={[2.5, 0, 0]}
            color="black" anchorX="center" anchorY="middle" fontSize={0.4}>
        Portfolio
      </Text>
    </>
  );
}

  export default PageThree;