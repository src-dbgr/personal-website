import React, { Suspense } from "react";
import Sphere from "./Sphere";
import Tetrahedron from "./Tetrahedron";
import Plane from "./Plane";
import { Canvas } from "@react-three/fiber";
import { ResizeObserver } from "@juggle/resize-observer";

const ThreejsRender = () => {
  return (
    <>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Canvas
          camera={{ fov: 75, near: 0.1, far: 500, position: [-2, 2, 3] }}
          className="trianglecanvas"
          resize={{ polyfill: ResizeObserver }}
        >
          <ambientLight />
          <pointLight position={[-3, 3, -2]} intensity={20} color={0x767081} />
          <pointLight position={[1, 1.5, 3]} intensity={20} color={0x35a169} />
          <pointLight
            position={[1, -1.5, -7]}
            intensity={10}
            color={0xb5b2a6}
          />
          <pointLight position={[2, 1, 4]} intensity={5} color={0x8f76be} />
          <Sphere position={[1, 0.5, 0]} />
          <Tetrahedron position={[1, 0.5, 0]} />
          <Plane position={[1, 0, 0]} />
        </Canvas>
      </Suspense>
    </>
  );
};

export default ThreejsRender;
