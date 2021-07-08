import React, { useRef, useState } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import normal from "./Textures/normal.jpg";

const Tetrahedron = (props) => {
  // This reference will give us direct access to the mesh so we can animate it
  const mesh = useRef();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Rotate mesh every frame, this is outside of React without overhead
  let sin = 0;
  useFrame(() => {
    sin = Math.sin(clock.elapsedTime);
    mesh.current.rotation.x = mesh.current.rotation.y +=
      0.0025 - +(mouse.x * mouse.y) / 80;
    mesh.current.rotation.y = mesh.current.rotation.x +=
      0.0025 - +(mouse.y * mouse.y) / 80;
    mesh.current.position.y = 1 * Math.abs(Math.sin(clock.elapsedTime / 5));
    mesh.current.material.emissiveIntensity = 6 * sin;
  });
  const texture = useLoader(TextureLoader, normal);

  const {
    // gl, // WebGL renderer
    // scene, // Default scene
    // camera, // Default camera
    // raycaster, // Default raycaster
    // size, // Bounds of the view (which stretches 100% and auto-adjusts)
    // viewport, // Bounds of the viewport in 3d units + factor (size/viewport)
    // aspect, // Aspect ratio (size.width / size.height)
    mouse, // Current, centered, normalized 2D mouse coordinates
    clock, // THREE.Clock (useful for useFrame deltas)
    // invalidate, // Invalidates a single frame (for <Canvas invalidateFrameloop />)
    // intersect, // Calls onMouseMove handlers for objects underneath the cursor
    // setDefaultCamera, // Sets the default camera
  } = useThree();

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1, 1, 1] : [1.4, 1.4, 1.4]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <tetrahedronBufferGeometry attach="geometry" args={[1.2, 0]} />
      <meshStandardMaterial
        attach="material"
        roughness={0.6}
        metalness={0.2}
        transparent={true}
        opacity={0.5}
        wireframe={active ? true : false}
        emissive={0x35a169}
        emissiveIntensity={0}
        color={0x35a169}
      />
    </mesh>
  );
};

export default Tetrahedron;
