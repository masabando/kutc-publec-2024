import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  SpotLight,
  Text3D,
  Center,
  OrbitControls,
  ContactShadows,
  useDepthBuffer,
} from "@react-three/drei";

function IntroMain() {
  const depthBuffer = useDepthBuffer();
  const leftLightRef = useRef();
  const rightLightRef = useRef();
  useFrame(() => {
    leftLightRef.current.target.position.x = Math.sin(
      performance.now() * 0.001
    );
    rightLightRef.current.target.position.x = Math.sin(
      performance.now() * 0.001
    );
    leftLightRef.current.target.position.z = Math.cos(
      performance.now() * 0.001
    );
    rightLightRef.current.target.position.z = Math.cos(
      performance.now() * 0.001
    );
  });
  return (
    <>
      <SpotLight
        ref={rightLightRef}
        depthBuffer={depthBuffer}
        penumbra={1}
        distance={6}
        angle={0.35}
        attenuation={5}
        anglePower={4}
        intensity={20}
        color={"#ff6688"}
        position={[2, 1, 3]}
      />
      <SpotLight
        ref={leftLightRef}
        depthBuffer={depthBuffer}
        penumbra={1}
        distance={6}
        angle={0.35}
        attenuation={5}
        anglePower={4}
        intensity={20}
        color={"#6688ff"}
        position={[-2, 1, 3]}
      />
      <Center>
        <Text3D
          letterSpacing={-0.06}
          size={1}
          font="Inter_Bold.json"
          curveSegments={32}          
          castShadow
          receiveShadow
        >
          Web
          <meshStandardMaterial color="#ffffff" />
        </Text3D>
      </Center>
      <ContactShadows
        rotation={[0, 0, Math.PI]}
        position={[0, -0.6, 0]}
        opacity={0.25}
        scale={10}
        blur={2}
        far={1}
        resolution={256}
      />
    </>
  );
}

export default function Intro() {
  return (
    <Canvas
      shadows
      gl={{ alpha: true, antialias: true }}
      camera={{ position: [0, 0, 5], fov: 50, near: 0.1, far: 1000 }}
      style={{ zIndex: 100 }}
    >
      <OrbitControls />
      <color attach="background" args={["#202020"]} />
      <fog attach="fog" args={["#202020", 5, 20]} />
      <ambientLight intensity={0.015} />
      <IntroMain />
    </Canvas>
  );
}
