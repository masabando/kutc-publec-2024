import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, OrbitControls, Environment, Preload, useEnvironment } from "@react-three/drei";
import { Suspense, useState } from "react";

function FutureItems({ idx, setIdx }) {
  const { camera } = useThree();
  const text = [
    <span key="start">
      Webページの
      <br />
      これから
    </span>,
    <span key="newDesign" className="text-white">
      全く新しいデザインの
      <br />
      Webページ
    </span>,
    <span
      key="detail3D"
      style={{
        textShadow: "0 0 10px rgba(255,255,255,0.5)",
      }}
    >
      3D表現が
      <br />
      よりリアルに
    </span>,
    <span
      key="realAndDigital"
      style={{
        textShadow: "0 0 10px rgba(0,255,0,0.5)",
      }}
    >
      リアルとデジタルの
      <br />
      融合
    </span>,
  ];
  useFrame(() => {
    if (idx === 0 && camera.position.z < 0) setIdx(1);
    if (idx === 1 && camera.position.z > 0) setIdx(2);
    if (idx === 2 && camera.position.z < 0) setIdx(3);
    if (idx === 3 && camera.position.z > 0) setIdx(0);
  });
  return (
    <Html
      center
      prepend
      rotation={[0, idx % 2 === 0 ? 0 : Math.PI, 0]}
      style={{
        color: "#333",
        fontSize: "min(10vw, 100px)",
        fontWeight: "bold",
        textAlign: "center",
        width: "100vw",
        userSelect: "none",
        pointerEvents: "none",
      }}
      transform
    >
      {text[idx]}
    </Html>
  );
}

function Envs({ idx }) {
  const envNight = useEnvironment({
    files: './bg/dikhololo_night_2k.hdr',
  })
  const envResting = useEnvironment({
    files: './bg/resting_place_2k.hdr',
  })
  return (
    <Suspense fallback={null}>
      <Preload all />
      {idx === 0 && (
        <Environment
          preset="lobby"
          background
          key="env0"
          backgroundBlurriness={1}
        />
      )}
      {idx === 1 && (
        <Environment
          //files="./bg/dikhololo_night_2k.hdr"
          map={envNight}
          background
          key="env1"
        />
      )}
      {idx === 2 && <Environment preset="lobby" background key="env2" />}
      {idx === 3 && (
        <Environment
          //files="./bg/resting_place_2k.hdr"
          map={envResting}
          background
          key="env3"
        />
      )}
    </Suspense>
  );
}

export default function Future() {
  const [idx, setIdx] = useState(0);
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
      <FutureItems idx={idx} setIdx={setIdx} />
      <Envs idx={idx} />
      <OrbitControls />
    </Canvas>
  );
}
