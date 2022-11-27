import React, { useEffect, useRef } from 'react'
import { Canvas, useThree } from '@react-three/fiber/'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { PerspectiveCamera, Stats } from '@react-three/drei';
import { TextureLoader } from 'three';
import { useLoader, useFrame } from 'react-three-fiber';
import brickTexture from "./TEXTURES/brick_texture.jpg"
import galaxyTexture from "./TEXTURES/galaxy2_texture.jpg"
import { getProject } from '@theatre/core'
import studio from '@theatre/studio'

studio.initialize()

export default function App() {
  const [galaxyMap, BrickMap] = useLoader(TextureLoader, [galaxyTexture, brickTexture]);
  const demoSheet = getProject('Demo Project').sheet('Demo Sheet')

  return (
    <>
      <center><button onClick={() => {
        console.log("hello world")
      }}>hellp world</button></center>
      <Canvas style={{ position: "fixed", top: "0", left: "0", zIndex: "-1", background: "black" }}>

        <ambientLight intensity={0.4} />
        <CameraController position={[0, 0, 5]} />

        {/* the next mesh is a box with blackcolor, args is the size, and the mesh visible */}
        <mesh visible={false}>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial meshStandardMaterial />
        </mesh>

        {/* the next mesh is a sphere with hotpink color, args is how smooth the sphere is 
        there is the scale, the rotation x, y, z */}
        <mesh
          visible={false}
          scale={1.1}
          position={[0, 0, 0]}
          rotation-x={50}
        >
          <sphereGeometry args={[1, 25, 25]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>

        {/* the next mesh has all types of events, this is the description of the event object 
        ({
          ...DomEvent                   // All the original event data
          ...Intersection               // All of Three's intersection data - see note 2
          intersections: Intersection[] // The first intersection of each intersected object
          object: Object3D              // The object that was actually hit
          eventObject: Object3D         // The object that registered the event
          unprojectedPoint: Vector3     // Camera-unprojected point
          ray: Ray                      // The ray that was used to strike the object
          camera: Camera                // The camera that was used in the raycaster
          sourceEvent: DomEvent         // A reference to the host event
          delta: number                 // Distance between mouse down and mouse up event in pixels
        }) => ...*/}

        <mesh visible={false}

        >
          <sphereGeometry args={[1, 25, 25]} />
          <meshStandardMaterial />
        </mesh>

        <mesh >
          <sphereGeometry args={[2,]} />
          <meshStandardMaterial map={galaxyMap} />
        </mesh>



        {/* this element is a prespective camera that has default props*/}
        <PerspectiveCamera makeDefault position={[5, 5, -5]} fov={75} />
        {/* the next element is a camera controller, is lets up rotate the camera with mouse movements */}
        <CameraController />
        {/* the next element is a stats element, is lets up see the fps */}
        {/*<Stats />*/}

      </Canvas >
    </>
  )
}



/* this components is the camera controller that uses orbit controls to manipulate the camera */
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


const DirectionalLight = (props) => {
  const { camera } = useThree();
  const directionalLight = useRef();
  //in each frame, the light is moved to the camera position, useFrame
  useFrame(() => {
    directionalLight.current.position.set(camera.position.x, camera.position.y, camera.position.z);
    //log camera position and rotation
    console.table(camera.position);
    console.tabla(directionalLight.position)
  });
  return (
    <>
      <directionalLight {...props} ref={directionalLight} />
    </>
  );
}
