import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sky, OrbitControls, Box, Float } from "@react-three/drei";
import Ocean from "../components/Ocean";
import Loading from "../components/Loading";

function RotateBox() {
  const gRef = useRef();
  const [brRef, bgRef, bbRef, bRef] = [useRef(), useRef(), useRef(), useRef()];
  useFrame(() => {
    gRef.current.rotation.y += 0.01;
    brRef.current.rotation.y += 0.02;
    brRef.current.rotation.x -= 0.01;
    bgRef.current.rotation.y += 0.02;
    bgRef.current.rotation.x -= 0.01;
    bbRef.current.rotation.y += 0.02;
    bbRef.current.rotation.x -= 0.01;
    bRef.current.rotation.y += 0.04;
    bRef.current.rotation.x -= 0.08;
  });
  const p = {
    args: [...Array(3).fill(2)],
    castShadow: true,
    receiveShadow: true,
  };
  const mp = {
    roughness: 0.1,
    metalness: 0.1,
    transmission: 1,
    thickness: 3,
    //opacity: 0.5,
    //transparent: true,
  };
  return (
    <group ref={gRef}>
      <Box
        ref={brRef}
        position={[10 * Math.cos(0), 3, 10 * Math.sin(0)]}
        {...p}
      >
        <meshPhysicalMaterial {...mp} color="red" />
      </Box>
      <Box
        ref={bgRef}
        position={[
          10 * Math.cos((2 * Math.PI) / 3),
          3,
          10 * Math.sin((2 * Math.PI) / 3),
        ]}
        {...p}
      >
        <meshPhysicalMaterial {...mp} color="green" />
      </Box>
      <Box
        ref={bbRef}
        position={[
          10 * Math.cos((4 * Math.PI) / 3),
          3,
          10 * Math.sin((4 * Math.PI) / 3),
        ]}
        {...p}
      >
        <meshPhysicalMaterial {...mp} color="blue" />
      </Box>
      <Box ref={bRef} position={[0, 6, 0]} {...p}>
        <meshPhysicalMaterial color="gray" />
      </Box>
    </group>
  );
}

export default function Emotional() {
  return (
    <Canvas
      shadows
      gl={{ alpha: true, antialias: true }}
      camera={{ position: [0, 7, 35], fov: 50, near: 0.1, far: 1000 }}
      onCreated={({ gl }) => {
        gl.setClearColor(0xffffff);
      }}
      style={{ zIndex: 100 }}
    >
      <Suspense fallback={<Loading />}>
        <OrbitControls />
        <Sky scale={100} sunPosition={[100, 30, -100]} turbidity={0.1} />
        <ambientLight intensity={1} />
        <directionalLight
          position={[100, 100, 100]}
          intensity={0.5}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={1000}
          shadow-camera-left={-100}
          shadow-camera-right={100}
          shadow-camera-top={100}
          shadow-camera-bottom={-100}
        />
        <Ocean />
        <Float
          position={[0, 3, 0]}
          speed={3}
          floatIntensity={40}
          rotationIntensity={4}
        >
          <Box args={[...Array(3).fill(5)]} castShadow receiveShadow>
            <meshPhysicalMaterial
              roughness={0.1}
              metalness={0.1}
              thickness={3}
              clearcoat={1}
              clearcoatRoughness={0.1}
              transmission={1}
            />
          </Box>
        </Float>
        <RotateBox />
      </Suspense>
    </Canvas>
  );
}
