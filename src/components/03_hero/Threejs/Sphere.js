import React, { useRef, useState, useEffect } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import nm from "./Textures/nm.jpg";
import normal from "./Textures/normal.jpg";

const Sphere = (props) => {
  // This reference will give us direct access to the mesh so we can animate it
  const mesh = useRef();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  // Rotate mesh every frame, this is outside of React without overhead
  let sin = 0;
  useFrame(() => {
    sin = Math.sin(clock.elapsedTime / 10);
    mesh.current.rotation.x = mesh.current.rotation.y +=
      0.003 + (mouse.x * mouse.y) / 80;
    mesh.current.position.y = 0.9 * Math.abs(Math.sin(clock.elapsedTime / 5));
    mesh.current.material.emissiveIntensity = 0.9 * sin;
    mesh.current.material.opacity =
      0.7 * Math.abs(Math.sin(clock.elapsedTime / 3));
    mesh.current.scale.x = (sin + 0.2) * (active ? 1.8 : 0.8);
    mesh.current.scale.y = (sin + 0.2) * (active ? 1.8 : 0.8);
    mesh.current.scale.z = (sin + 0.2) * (active ? 1.8 : 0.8);
  });

  const {
    mouse, // Current, centered, normalized 2D mouse coordinates
    clock, // THREE.Clock (useful for useFrame deltas)
  } = useThree();

  // const texture = useTexture("textures/nm.jpg");      <-- alternative, using "@react-three/drei" lib, image ist placed in static folder
  // const texture = useLoader(TextureLoader, nm);       <-- alternative by using an import of a locally stored image
  // const textureMap = useLoader(TextureLoader, [nm]);    <-- alternative by using an array
  const textureMap = useLoader(TextureLoader, [nm, normal]);

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [0.65, 0.65, 0.65] : [1.5, 1.5, 1.5]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <sphereBufferGeometry attach="geometry" args={[0.8, 32, 32]} />
      <meshStandardMaterial
        attach="material"
        roughness={0.5}
        metalness={0.5}
        fog={true}
        transparent={true}
        opacity={0.5}
        wireframe={true}
        emissive={0x767081}
        emissiveIntensity={0.5}
        color={0x35a169}
        alphaMap={textureMap[0]}
        roughnessMap={textureMap[1]}

        // alphaMap={textureMap[0]} <-- use this way if import via array is done
        // example:const textureMap = useLoader(TextureLoader, [textures/nm.jpg]);
        // note, the image must be placed into the gatsby "static" folder.
        // the folder static must of course contain itself a folder named "textures"
        // the static folder itself must be placed in the root of you project, not src!
      />
    </mesh>
  );
};

export default Sphere;
