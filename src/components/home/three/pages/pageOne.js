import { Text } from '@react-three/drei'

function PageOne(){
    return(
      <group>
        <mesh position={[-4,0,0]} rotation={[3,5,7]}>
          <boxGeometry />
          <meshStandardMaterial color='aquamarine' />
        </mesh>
        <Text position={[2.5, 0, 0]}
              color="black" anchorX="center" anchorY="middle" fontSize={0.4}>
          Perla-Labs
        </Text>
      </group>
    );
  }

  
export default PageOne;