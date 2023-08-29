import { Text, useGLTF, OrbitControls } from '@react-three/drei'


function PageOne(){

    const pearl = useGLTF('/pearl/source/pearl3.gltf')
    
    return(
      <>
        {/* <OrbitControls makeDefault />  */}
        <primitive 
          object={ pearl.scene }
          scale={ 3 }
          position={ [ 0, -3, -4 ] }
          rotation-y={ 5 }
        />
        <Text className="font-['made-tommy-regular']" position={[-3,-3,0]}> Grupo Perla Software </Text>
    </>
    );
  }

  
export default PageOne;