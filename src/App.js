import React, { Suspense, useEffect } from 'react'
import { Canvas, useThree } from '@react-three/fiber/'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import Controls from './Controls';

import BityModel from './Bity';
import { Environment, PerspectiveCamera } from '@react-three/drei';

import studio from '@theatre/studio'
import extension from '@theatre/r3f/dist/extension'
import { SheetProvider } from '@theatre/r3f'
import { getProject } from '@theatre/core';

studio.initialize()
studio.extend(extension)

export default function App() {
  const demoSheet = getProject('Demo Project').sheet('Demo Sheet');
  return (
    <>
      <Canvas style={{ position: "fixed", top: "0", left: "0", zIndex: "-1" }}>
        <SheetProvider sheet={demoSheet}>
          <PerspectiveCamera makeDefault position={[5, 5, -5]} fov={75} />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <CameraController />
          <Suspense fallback={null}>
            <BityModel position={[0, -2, 0]} />
            <Environment preset="studio" background />
          </Suspense>
        </SheetProvider>
      </Canvas >
    </>
  )
}

/*
"sunset" | "dawn" | "night" | "warehouse" | "forest" | "apartment" | "studio" | "city" | "park" | "lobby"
*/



const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(
    () => {
      const controls = new OrbitControls(camera, gl.domElement);
      controls.minDistance = 3;
      controls.maxDistance = 20;
      return () => {
        controls.dispose();
      };
    },
    [camera, gl]
  );
  return null;
};

