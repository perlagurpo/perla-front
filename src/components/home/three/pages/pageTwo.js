import { Text } from '@react-three/drei';

function PageTwo(){
    return(
      <>
        <mesh position={[-4,-5,0]}>
          <sphereGeometry />
          <meshPhongMaterial />
        </mesh>
        <Text position={[2.5, -5, 0]}
              color="black" anchorX="center" anchorY="middle" fontSize={0.4}>
          desarrolla proyectos
          
        </Text>
      </>
    );
}

export default PageTwo;