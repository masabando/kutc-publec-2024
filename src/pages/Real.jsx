import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sky, OrbitControls, Box, Float, Gltf, useGLTF, Plane, useTexture } from "@react-three/drei";

function Wall1() {
  const tex = useTexture({
    map: "./wall/brick_wall/brick_wall_005_diff_2k.jpg",
    aoMap: "./wall/brick_wall/brick_wall_005_ao_2k.jpg",
    normalMap: "./wall/brick_wall/brick_wall_005_nor_dx_2k.jpg",
    roughnessMap: "./wall/brick_wall/brick_wall_005_rough_2k.jpg",
    bumpMap: "./wall/brick_wall/brick_wall_005_diff_2k.jpg",
  })
  for (const key in tex) {
    tex[key].repeat.x = 6;
    tex[key].repeat.y = 3;
    tex[key].wrapS = 1000;
    tex[key].wrapT = 1000;
  }
  return (
    <Plane
      args={[10, 5]}
      rotation={[0, 0, 0]}
      position={[0, 2.5, -5]}
      receiveShadow
    >
      <meshStandardMaterial
        {...tex}
        normalScale={[1, 1]}
      />
    </Plane>
  )
}

function Wall2() {
  const tex = useTexture({
    map: "./wall/monastery_stone/monastery_stone_floor_diff_2k.jpg",
    aoMap: "./wall/monastery_stone/monastery_stone_floor_ao_2k.jpg",
    normalMap: "./wall/monastery_stone/monastery_stone_floor_nor_dx_2k.jpg",
    roughnessMap: "./wall/monastery_stone/monastery_stone_floor_rough_2k.jpg",
    bumpMap: "./wall/monastery_stone/monastery_stone_floor_diff_2k.jpg",
  })
  for (const key in tex) {
    tex[key].repeat.x = 6;
    tex[key].repeat.y = 3;
    tex[key].wrapS = 1000;
    tex[key].wrapT = 1000;
  }
  return (
    <Plane
      args={[10, 5]}
      rotation={[0, -Math.PI / 2, 0]}
      position={[5, 2.5, 0]}
      receiveShadow
    >
      <meshStandardMaterial
        {...tex}
        normalScale={[1, 1]}
      />
    </Plane>
  )
}

function Wall3() {
  const tex = useTexture({
    map: "./wall/stone_tiles/stone_tiles_diff_2k.jpg",
    aoMap: "./wall/stone_tiles/stone_tiles_ao_2k.jpg",
    normalMap: "./wall/stone_tiles/stone_tiles_nor_dx_2k.jpg",
    roughnessMap: "./wall/stone_tiles/stone_tiles_rough_2k.jpg",
    bumpMap: "./wall/stone_tiles/stone_tiles_diff_2k.jpg",
  })
  for (const key in tex) {
    tex[key].repeat.x = 6;
    tex[key].repeat.y = 3;
    tex[key].wrapS = 1000;
    tex[key].wrapT = 1000;
  }
  return (
    <Plane
      args={[10, 5]}
      rotation={[0, Math.PI / 2, 0]}
      position={[-5, 2.5, 0]}
      receiveShadow
    >
      <meshStandardMaterial
        {...tex}
        normalScale={[1, 1]}
      />
    </Plane>
  )
}

function Wall4() {
  const tex = useTexture({
    map: "./wall/rocky_terrain/rocky_terrain_diff_2k.jpg",
    aoMap: "./wall/rocky_terrain/rocky_terrain_ao_2k.jpg",
    normalMap: "./wall/rocky_terrain/rocky_terrain_nor_dx_2k.jpg",
    roughnessMap: "./wall/rocky_terrain/rocky_terrain_rough_2k.jpg",
    bumpMap: "./wall/rocky_terrain/rocky_terrain_diff_2k.jpg",
  })
  for (const key in tex) {
    tex[key].repeat.x = 6;
    tex[key].repeat.y = 3;
    tex[key].wrapS = 1000;
    tex[key].wrapT = 1000;
  }
  return (
    <Plane
      args={[10, 5]}
      rotation={[0, Math.PI, 0]}
      position={[0, 2.5, 5]}
      receiveShadow
    >
      <meshStandardMaterial
        {...tex}
        normalScale={[1, 1]}
      />
    </Plane>
  )
}


function Ceil() {
  const tex = useTexture({
    map: "./floor/wood_cabinet_worn_long_diff_2k.jpg",
    aoMap: "./floor/wood_cabinet_worn_long_ao_2k.jpg",
    normalMap: "./floor/wood_cabinet_worn_long_nor_dx_2k.jpg",
    roughnessMap: "./floor/wood_cabinet_worn_long_rough_2k.jpg",
    bumpMap: "./floor/wood_cabinet_worn_long_diff_2k.jpg",
  })
  for (const key in tex) {
    tex[key].repeat.x = 6;
    tex[key].repeat.y = 6;
    tex[key].wrapS = 1000;
    tex[key].wrapT = 1000;
  }
  return (
    <Plane
      args={[10, 10]}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 5, 0]}
      receiveShadow
    >
      <meshStandardMaterial
        {...tex}
        normalScale={[1, 1]}
      />
    </Plane>
  )
}


function Floor() {
  const tex = useTexture({
    map: "./wall/weathered_planks/weathered_planks_diff_2k.jpg",
    aoMap: "./wall/weathered_planks/weathered_planks_ao_2k.jpg",
    normalMap: "./wall/weathered_planks/weathered_planks_nor_dx_2k.jpg",
    roughnessMap: "./wall/weathered_planks/weathered_planks_rough_2k.jpg",
    bumpMap: "./wall/weathered_planks/weathered_planks_diff_2k.jpg",
  })
  for (const key in tex) {
    tex[key].repeat.x = 6;
    tex[key].repeat.y = 6;
    tex[key].wrapS = 1000;
    tex[key].wrapT = 1000;
  }
  return (
    <Plane
      args={[10, 10]}
      rotation={[-Math.PI / 2, 0, 0]}
      receiveShadow
    >
      <meshStandardMaterial
        {...tex}
        normalScale={[1, 1]}
      />
    </Plane>
  )
}


export default function Real() {
  return (
    <Canvas
      shadows
      gl={{ alpha: true, antialias: true }}
      camera={{ position: [0, 2, 0], fov: 50, near: 0.1, far: 1000 }}
      onCreated={({ gl }) => {
        gl.setClearColor(0xffffff);
      }}
      style={{ zIndex: 100 }}
    >
      <OrbitControls target={[0, 2, 0]} />
      <Sky scale={100} sunPosition={[100, 30, -100]} turbidity={0.1} />
      <ambientLight intensity={1} />
      {/* <directionalLight
        position={[100, 100, 100]}
        intensity={2.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={1000}
        shadow-camera-left={-100}
        shadow-camera-right={100}
        shadow-camera-top={100}
        shadow-camera-bottom={-100}
      /> */}
      <pointLight
        position={[0, 3, 0]}
        intensity={50}
        decay={1.6}
        color="white"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={1000}
        shadow-camera-left={-100}
        shadow-camera-right={100}
        shadow-camera-top={100}
        shadow-camera-bottom={-100}
      />
      <Floor />
      <Wall1 />
      <Wall2 />
      <Wall3 />
      <Wall4 />
      <Ceil />
      <Gltf
        src="./gltf/painted_cabinet/painted_wooden_cabinet_2k.gltf"
        scale={1.4}
        position={[0, 0, -4]}
        receiveShadow
        castShadow
      />
      <Gltf
        src="./gltf/painted_stool/painted_wooden_stool_2k.gltf"
        scale={1.4}
        rotation={[0, 1, 0]}
        position={[0, 0, -1.8]}
        receiveShadow
        castShadow
      />
      <Gltf
        src="./gltf/potted_plant/potted_plant_01_2k.gltf"
        scale={1.6}
        position={[4, 0, -4]}
        receiveShadow
        castShadow
      />
      <Gltf
        src="./gltf/potted_plant2/potted_plant_02_2k.gltf"
        scale={1.6}
        position={[2.6, 0, -4]}
        receiveShadow
        castShadow
      />
      {/* <Gltf
        src="./gltf/tree/tree_small_02_1k.gltf"
        scale={1.4}
        position={[-2.6, 0, -3]}
        receiveShadow
        castShadow
      /> */}
      <Gltf
        src="./gltf/rat/street_rat_1k.gltf"
        scale={5}
        position={[0, 0.8, -1.7]}
        rotation={[0, 0.4, 0]}
        receiveShadow
        castShadow
      />
      <Gltf
        src="./gltf/apple/food_apple_01_1k.gltf"
        scale={3}
        position={[1.4, 0.0, -4]}
        rotation={[0, 0.4, 0]}
        receiveShadow
        castShadow
      />
      <Gltf
        src="./gltf/apple/food_apple_01_1k.gltf"
        scale={3}
        position={[0.4, 1.67, -4]}
        rotation={[0.0, 0.1, 0]}
        receiveShadow
        castShadow
      />
      <Gltf
        src="./gltf/apple/food_apple_01_1k.gltf"
        scale={3}
        position={[1.4, 0.0, -4]}
        rotation={[0, 0.4, 0]}
        receiveShadow
        castShadow
      />
      <Gltf
        src="./gltf/suitcase/vintage_suitcase_1k.gltf"
        scale={1.6}
        position={[-3.9, 0.0, -5]}
        rotation={[0, 0.8, 0]}
        receiveShadow
        castShadow
      />
    </Canvas>
  );
}
