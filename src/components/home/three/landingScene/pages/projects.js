import { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/three";
import { MeshPhongMaterial } from "three";
import Project from "./project";


export default function Projects({ projects=[], active=false }) {
  const projectsGap = 20;
  const [activeProject, setActiveProject] = useState(0);
  const [groupVisibility, setGroupVisibility] = useState(false);

  const sectionSpring = useSpring({
    position: active ? [0,0,0] : [0,-20,0],
    config : {
      friction: 110,
      mass: 20,
    }
  });

  const projectsSprings = projects.map(
      (pr, i) => {
        return useSpring({
          position: activeProject == i ? [0,0,0] : [20,0,0],
          // active: [projects.map((pr,i) => true)],
          config : {
            friction: 100,
            mass: 20,
          }
        });
      }
  );
    
  
  function browseProjects(direction="forwards") {
    if (direction == "forwards") {
      if(activeProject < (projects.length - 1)) {
        setActiveProject(activeProject + 1);
      }
    } else {
      if (direction == "backwards") {
        if(activeProject > 0) {
          setActiveProject(activeProject - 1);
        }
      }
    }
  }


  useEffect(
    () => {
      setTimeout(() => setGroupVisibility(active), active ? 400 : 500);
    }
  ,[active]);
  

  return(
    <animated.group position={sectionSpring.position} visible={groupVisibility}>
      {
        projects.map(
          (project, i) => {
            return(
              <animated.group position={projectsSprings[i].position} key={i}>
                <Project data={project} active={true} />
              </animated.group>
            );
          }
        )
      }
      <BrowseElement position={[7,3.5,0]} size={[0.1,2,0.3]} onClick={() => browseProjects("forwards")} />
      <BrowseElement position={[-7,3.5,0]} size={[0.1,2,0.3]} onClick={() => browseProjects("backwards")} />
      
    </animated.group>
  );

}


function BrowseElement({ size=[2,2,0.3], position, onClick }) {
  return(
    <mesh material={new MeshPhongMaterial({color: "grey"})}
          onClick={onClick}
          
          position={position}
          visible={true}
          >
        <boxGeometry args={size} />
    </mesh>
  );
}