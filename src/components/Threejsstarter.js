import React from "react";
import Box from "./Box";
import { Canvas } from "@react-three/fiber";

const Threejsstarter = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  );
};

export default Threejsstarter;
