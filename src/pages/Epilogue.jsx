import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, OrbitControls, Preload } from "@react-three/drei";
import { EffectComposer, Glitch } from "@react-three/postprocessing";
import { GlitchMode } from "postprocessing";
import { Suspense, useEffect, useState } from "react";

function FutureItems({ idx, setIdx }) {
  const { camera } = useThree();
  const text = [
    <span
      key="start"
      style={{
        color: "white",
        textShadow: "0 0 20px royalblue",
      }}
    >
      ここから先は
      <br />
      未知の世界
    </span>,
    <span
      key="end"
      className="text-white"
      style={{
        textShadow: "0 0 20px hotpink",
      }}
    >
      Webページを
      <br />
      作りませんか
    </span>,
  ];
  useFrame(() => {
    if (idx === 0 && camera.position.z < 0) setIdx(1);
    if (idx === 1 && camera.position.z > 0) setIdx(0);
  });
  return (
    <Html
      center
      //prepend
      rotation={[0, idx % 2 === 0 ? 0 : Math.PI, 0]}
      style={{
        color: "#333",
        fontSize: "min(12vw, 120px)",
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
  const cubeNum = 10;
  const colorList = [
    "hotpink",
    "royalblue",
    "lime",
    "gold",
    "purple",
    "cyan",
    "orange",
    "red",
    "green",
    "blue",
  ];
  const [angle, setAngle] = useState(0);
  const [lightAngle, setLightAngle] = useState({ theta: 0, phi: 0 });
  const [cubeProp, setCubeProp] = useState(
    Array(cubeNum).fill({
      pos: [0, 0, 0],
      args: [5, 5, 5],
      color: "white",
      speed: 1,
    })
  );
  function getRand(min, max) {
    return min + Math.random() * (max - min);
  }
  useEffect(() => {
    setCubeProp(
      Array(cubeNum)
        .fill(0)
        .map(() => {
          let s = getRand(1, 3);
          return {
            pos: [getRand(-10, 10), getRand(-10, 10), getRand(-10, 10)],
            args: [s, s, s],
            //color: `hsl(${~~(Math.random() * 360)}deg 80% 50%)`,
            color: colorList.at(~~(Math.random() * colorList.length)),
            speed: getRand(0.5, 1.5),
          };
        })
    );
  }, []);
  useFrame(() => {
    setAngle((angle) => angle + 0.01);
    setLightAngle((lightAngle) => ({
      theta: lightAngle.theta + 0.03,
      phi: lightAngle.phi + 0.05,
    }));
  });
  return (
    <Suspense fallback={null}>
      <Preload all />

      {idx === 0 && (
        <>
          <ambientLight intensity={0.2} />
          <pointLight
            position={[
              10 * Math.sin(lightAngle.phi),
              10 * Math.sin(lightAngle.theta),
              10 * Math.cos(lightAngle.phi),
            ]}
            intensity={100}
          />
          {Array(cubeNum)
            .fill()
            .map((p, i) => (
              <mesh
                key={`cube-${i}`}
                position={cubeProp[i].pos}
                rotation={[
                  -angle * 0.7 * cubeProp[i].speed,
                  angle * cubeProp[i].speed,
                  0,
                ]}
                receiveShadow
              >
                <boxGeometry args={cubeProp[i].args} />
                <meshPhysicalMaterial
                  color={cubeProp[i].color}
                  roughness={0.6}
                  alphaTest={0.1}
                  transparent
                  opacity={0.4}
                />
              </mesh>
            ))}
        </>
      )}
      {idx === 1 && (
        <Html
          prepend
          fullscreen
          style={{
            width: "100vw",
            height: "100dvh",
            background: "url(/bg/ktc-02-2.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Html>
      )}
    </Suspense>
  );
}

export default function Epilogue() {
  const [idx, setIdx] = useState(0);
  return (
    <Canvas
      shadows
      gl={{ alpha: true, antialias: true }}
      camera={{ position: [0, 0, 25], fov: 50, near: 0.1, far: 1000 }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000);
      }}
      style={{ zIndex: 100 }}
    >
      <FutureItems idx={idx} setIdx={setIdx} />
      <Envs idx={idx} />
      <OrbitControls />
      <EffectComposer>
        <Glitch
          delay={[1, 2]}
          duration={[0.1, 0.2]}
          strength={[0.1, 0.2]}
          mode={GlitchMode.SPORADIC}
          active
          ratio={0.15}
        />
      </EffectComposer>
    </Canvas>
  );
}
