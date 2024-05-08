import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import CugnotAppleton from "../assets/CugnotAppleton.jpg";

export default function Intro02() {
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
          fontSize: "min(8vw, 50px)",
          textAlign: "center",
          width: "100vw",
          userSelect: "none",
          pointerEvents: "none",
        }}
        transform
      >
        <div className="text-center w-100">
          <div>人類最初の自動車</div>
          <div>キュニョーの砲車 (蒸気)</div>
          <img style={{
            width: "min(80vw, 1200px)",
          }} src={CugnotAppleton} alt="CugnotAppleton" />
          <div>255年前</div>
        </div>
      </Html>
      <OrbitControls />
    </Canvas>
  );
}
