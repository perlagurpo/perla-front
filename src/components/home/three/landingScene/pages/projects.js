import { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/three";
import { Color } from "three";
import Project from "./project";
import { Text } from "@react-three/drei";


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
          position: activeProject == i ? [0,0,0] : [projectsGap,0,-0.01],
          // active: [projects.map((pr,i) => true)],
          scale: activeProject == i ? 1 : 0.98,
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
              <animated.group position={projectsSprings[i].position} scale={projectsSprings[i].scale} key={i}>
                <Project data={project} active={true} />
              </animated.group>
            );
          }
        )
      }
      <BrowseElement position={[7,3.5,0]} text={">"} active={activeProject < (projectsSprings.length - 1)} onClick={() => browseProjects("forwards")} />
      <BrowseElement position={[-7,3.5,0]} text={"<"} active={activeProject > 0} onClick={() => browseProjects("backwards")} />
    </animated.group>
  );

}


function BrowseElement({ position, onClick, text, active }) {
  const browseElementRef = useRef();
  const textRef = useRef();
  const [hovered, setHovered] = useState(false);
  const browseElementSpring = useSpring({
    opacity: hovered ? 0.9 : 0,
    scale: hovered ? 1.1 : 1,
  });

  useEffect(
    () => {
      document.body.style.cursor = hovered ? "pointer" : "auto";
      textRef.current.color = hovered ? "white" : "#D9D9D9";
    }
  , [hovered]);

  return(
    <animated.group ref={browseElementRef} position={position} opacity={browseElementSpring.opacity} scale={browseElementSpring.scale} visible={active}>
      <Text onClick={onClick}
            onPointerEnter={() => setHovered(true)}
            onPointerLeave={() => setHovered(false)}
            color={"#D9D9D9"}
            ref={textRef}
            >
              {text}
      </Text>
    </animated.group>
  );
}