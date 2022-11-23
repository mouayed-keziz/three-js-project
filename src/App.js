import React, { Suspense, useEffect } from 'react'
import { Canvas, useThree } from '@react-three/fiber/'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import Controls from './Controls';


import BityModel from './Bity';
import { Environment } from '@react-three/drei';
import { GridHelper } from "three";


export default function App() {

  return (
    <>
      <button>hello world</button>
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }} style={{ position: "fixed", top: "0", left: "0", zIndex: "-1" }}>
        <ambientLight intensity={0.4} />
        <CameraController />
        <Suspense fallback={null}>
          <BityModel position={[0, -2, 0]} />
          <Environment preset="sunset" background="blue" />
        </Suspense>
      </Canvas >
    </>
  )
}

// function MyBox() {
//   //const mesh = useRef();


//   return (
//     <mesh>
//       <boxGeometry />
//       <meshStandardMaterial />
//     </mesh>
//   );
// }


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

