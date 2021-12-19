import React, { Suspense, useState } from "react";
import Sphere from "./Sphere";
import Tetrahedron from "./Tetrahedron";
import Plane from "./Plane";
import { Canvas } from "@react-three/fiber";
import { ResizeObserver } from "@juggle/resize-observer";

const ThreejsRender = () => {
  const [animation, toggleAnimation] = useState(false);

  return (
    <div className="animationWrapper">
      <div className="animationToggleWrapper">
        <div className="animationToggle" role="button" tabIndex="0" onClick={(e) => { toggleAnimation(!animation) }} onKeyDown={(e) => { toggleAnimation(!animation) }}>
          {animation ? (<h5 className="stopAnim">STOP ANIMATION</h5>) : (<h5 className="startAnim">START ANIMATION</h5>)}
          <h6>COMPUTATION HEAVY</h6>
        </div>
        <svg className="arrows">
          <path d="M0 0l30 32L60 0" className="a1"></path>
          <path d="M0 20l30 32 30-32" className="a2"></path>
          <path d="M0 40l30 32 30-32" className="a3"></path>
        </svg>
      </div>
      {animation ? (
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
      ) : (<></>)
      }
    </div>
  );
};

export default ThreejsRender;
