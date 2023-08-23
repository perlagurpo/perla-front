import { Text } from '@react-three/drei'

function PageOne(){
    return(
      <>
        <mesh position={[0,0,0]} rotation={[3,5,7]}>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
        <Text position={[2.5, 0, 0]}
              color="black" anchorX="center" anchorY="middle" fontSize={0.4}>
          Perla-Labs
        </Text>
      </>
    );
  }

  
export default PageOne;