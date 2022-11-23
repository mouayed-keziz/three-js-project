import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import gltfmodel from "./FINAL MESH BITY.gltf"
import { useFrame } from "react-three-fiber";

export default function BityModel(props) {
    const { nodes, materials } = useGLTF(gltfmodel);
    const mesh = useRef()
    useFrame(() => (mesh.current.rotation.y += 0.01))
    return (
        <group ref={mesh} {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.BITY.geometry}
                material={materials["Material.001"]}
                position={[0.06, 2.47, -0.19]}
                scale={[0.49, 0.58, 0.83]}
            />
            <group position={[-0.1, 1.43, -0.12]} scale={[0.63, 1.15, 0.93]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube006.geometry}
                    material={materials["Material.011"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube006_1.geometry}
                    material={materials["Material.001"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube006_2.geometry}
                    material={materials.Material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube006_3.geometry}
                    material={materials["Material.004"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube006_4.geometry}
                    material={materials.schaumst}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube006_5.geometry}
                    material={materials["Material #856"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube006_6.geometry}
                    material={materials["Material.003"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube006_7.geometry}
                    material={materials["Material #879"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube006_8.geometry}
                    material={materials["Material.007"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube006_9.geometry}
                    material={materials.rift_CLOTH}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube006_10.geometry}
                    material={materials["Material.017"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube006_11.geometry}
                    material={materials["Material.018"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube006_12.geometry}
                    material={materials["Material.019"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube006_13.geometry}
                    material={materials["Material.020"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube006_14.geometry}
                    material={materials["Material.021"]}
                />
            </group>
        </group>
    );
}

useGLTF.preload(gltfmodel);