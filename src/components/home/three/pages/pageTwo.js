import { Text } from '@react-three/drei';

function PageTwo(){
    return(
      <>
        <mesh position={[0,-5,0]}>
          <sphereGeometry />
          <meshPhongMaterial />
        </mesh>
        <Text position={[2.5, -5, 0]}
              color="black" anchorX="center" anchorY="middle" fontSize={0.4}>
          page2
        </Text>
      </>
    );
}

export default PageTwo;