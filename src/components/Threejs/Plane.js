import React, { useRef, useState } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import rock from "./Textures/rock.jpg";
import height from "./Textures/height.png";
import alpha from "./Textures/alpha.png";

const Plane = (props) => {
  // This reference will give us direct access to the mesh so we can animate it
  const mesh = useRef();
  const zahl = 0;
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const {
    // gl, // WebGL renderer
    // scene, // Default scene
    // camera, // Default camera
    // raycaster, // Default raycaster
    // size, // Bounds of the view (which stretches 100% and auto-adjusts)
    // viewport, // Bounds of the viewport in 3d units + factor (size/viewport)
    // aspect, // Aspect ratio (size.width / size.height)
    // mouse, // Current, centered, normalized 2D mouse coordinates
    clock, // THREE.Clock (useful for useFrame deltas)
    // invalidate, // Invalidates a single frame (for <Canvas invalidateFrameloop />)
    // intersect, // Calls onMouseMove handlers for objects underneath the cursor
    // setDefaultCamera, // Sets the default camera
  } = useThree();

  // Rotate mesh every frame, this is outside of React without overhead
  let sin = 0;
  useFrame(() => {
    sin = Math.sin(clock.elapsedTime / 3.5);
    mesh.current.rotation.x = -1.7;
    mesh.current.rotation.y = -0.1;
    mesh.current.position.y = -0.9;
    mesh.current.position.x = 0.2;
    mesh.current.position.z = 1.1;
    mesh.current.rotation.z = mesh.current.rotation.z += 0.003;
    mesh.current.material.displacementScale = sin + 0.5;
    mesh.current.material.emissiveIntensity = 0.8 * sin;
  });
  const textureMap = useLoader(TextureLoader, [rock, height, alpha]);

  return (
    <mesh
      {...props}
      ref={mesh}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <planeBufferGeometry attach="geometry" args={[3, 3, 32, 32]} />
      <meshStandardMaterial
        attach="material"
        map={textureMap[0]}
        displacementMap={textureMap[1]}
        alphaMap={textureMap[2]}
        displacementScale={0.5}
        transparent={true}
        depthTest={false}
        emissive={0x767081}
        emissiveIntensity={0}
        color={0x767081}
      />
    </mesh>
  );
};

export default Plane;
