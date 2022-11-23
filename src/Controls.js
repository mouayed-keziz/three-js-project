// import TWEEN from '@tweenjs/tween.js';
// import React, { useEffect, useRef } from 'react';
// import { extend, useFrame, useThree } from 'react-three-fiber';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// // extend THREE to include OrbitControls
// extend({ OrbitControls });


// const ALT_KEY = 18;
// const CTRL_KEY = 17;
// const CMD_KEY = 91;

// function Controls(
//     { lookAt, initialCameraPosition, useTrackball = false },
//     ref
// ) {
//     const { scene, camera, gl } = useThree();
//     console.log('camera.pos', camera?.position);
//     const controls = useRef();
//     React.useImperativeHandle(ref, () => ({
//         resetCamera: duration => {
//             tweenLookAt(new THREE.Vector3(0, 0, 0), initialCameraPosition, {
//                 duration,
//             });
//         },
//         tweenTo: ({ x, y, z, cx, cy, cz }, options) =>
//             tweenLookAt({ x, y, z }, [cx, cy, cz], options),
//         getCurrentState: includeUp => getCurrentState(includeUp),
//     }));

//     useFrame(() => {
//         TWEEN.update();
//         controls.current.update();
//     });
//     window.c = controls;
//     window.cam = camera;

//     function getCurrentState(includeUp = useTrackball) {
//         const currentState = {
//             x: controls.current.target.x,
//             y: controls.current.target.y,
//             z: controls.current.target.z,
//             cx: camera.position.x,
//             cy: camera.position.y,
//             cz: camera.position.z,
//         };

//         if (includeUp) {
//             currentState.upx = camera.up.x;
//             currentState.upy = camera.up.y;
//             currentState.upz = camera.up.z;
//         }

//         return currentState;
//     }

//     function tweenLookAt(
//         lookAt,
//         cameraPosition,
//         { cameraOffset = 50, duration = 1000 } = {}
//     ) {
//         console.log('tweenLookAt duration=', duration);
//         if (lookAt) {
//             const source = getCurrentState();

//             const target = {
//                 x: lookAt.x,
//                 y: lookAt.y,
//                 z: lookAt.z,
//                 cx: lookAt.x + 0,
//                 cy: lookAt.y + cameraOffset,
//                 cz: lookAt.z + cameraOffset, //overrides.cameraZ == null ? lookAt.z + 3 : overrides.cameraZ,

//                 // reset up vector (trackball only)
//                 upx: controls.current.up0 ? controls.current.up0.x : 0,
//                 upy: controls.current.up0 ? controls.current.up0.y : 1,
//                 upz: controls.current.up0 ? controls.current.up0.z : 0,
//             };

//             if (cameraPosition) {
//                 target.cx = cameraPosition[0];
//                 target.cy = cameraPosition[1];
//                 target.cz = cameraPosition[2];
//             }

//             const t = new TWEEN.Tween(source)
//                 .to(target, duration)
//                 // .easing(TWEEN.Easing.Cubic.InOut)
//                 .onUpdate(function (object) {
//                     if (controls.current) {
//                         // camera.up.set(object.upx, object.upy, object.upz); // might only be needed for trackball
//                         camera.position.set(object.cx, object.cy, object.cz);
//                         controls.current.target.set(object.x, object.y, object.z);
//                         camera.updateProjectionMatrix();
//                     }
//                 })
//                 .start();
//         }
//     }

//     // if the prop changes, tween
//     useEffect(() => {
//         tweenLookAt(lookAt);
//         return () => { };
//     }, [lookAt]);

//     return (
//         <>
//             {useTrackball ? (
//                 <trackballControls
//                     ref={controls}
//                     args={[camera, gl.domElement]}
//                     keys={[ALT_KEY, CTRL_KEY, CMD_KEY]}
//                     // noRotate
//                     dynamicDampingFactor={0.1}
//                 /*mouseButtons={{
//                   LEFT: THREE.MOUSE.PAN,
//                   MIDDLE: THREE.MOUSE.ZOOM,
//                   RIGHT: THREE.MOUSE.ROTATE,
//                 }}*/
//                 />
//             ) : (
//                 <orbitControls
//                     ref={controls}
//                     args={[camera, gl.domElement]}
//                     enableDamping
//                     dampingFactor={0.05}
//                     rotateSpeed={0.5}
//                     maxDistance={1000}
//                     minPolarAngle={0}
//                     maxPolarAngle={Math.PI / 2}
//                 /*mouseButtons={{
//                   LEFT: THREE.MOUSE.PAN,
//                   MIDDLE: THREE.MOUSE.ZOOM,
//                   RIGHT: THREE.MOUSE.ROTATE,
//                 }}*/
//                 />
//             )}
//         </>
//     );
// }
// Controls = React.forwardRef(Controls); // eslint-disable-line no-func-assign

// export default Controls;