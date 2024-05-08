import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";

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
      >
        1769年
      </Html>
      <OrbitControls />
    </Canvas>
  );
}
