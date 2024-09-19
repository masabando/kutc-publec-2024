import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { useState } from "react";


function Years() {
  const [idx, setIdx] = useState(0);
  const { camera } = useThree();
  useFrame(() => {
    if (idx === 0 && camera.position.z < 0) setIdx(1);
    if (idx === 1 && camera.position.z > 0) setIdx(0);
  });
  return (
    <Html
      center
      prepend
      style={{
        color: "#333",
        fontSize: "min(26vw, 240px)",
        textAlign: "center",
        width: "100vw",
        userSelect: "none",
        pointerEvents: "none",
      }}
      transform
      rotation={[0, idx % 2 === 0 ? 0 : Math.PI, 0]}
    >
      {idx === 0 ?
        <div>1769年</div>
        : <div style={{
          fontSize: "min(15vw, 200px)",
          lineHeight: "1.1",
        }}>人類最初の<br /><span className="fw-bold text-primary">自動車</span>が誕生</div>}
    </Html>
  );
}

export default function Intro01() {
  return (
    <Canvas
      shadows
      gl={{ alpha: true, antialias: true }}
      camera={{ position: [0, 0, 25], fov: 50, near: 0.1, far: 1000 }}
      onCreated={({ gl }) => {
        gl.setClearColor(0xffffff);
      }}
      style={{ zIndex: 100 }}
    >
      <Years />
      <OrbitControls />
    </Canvas>
  );
}
