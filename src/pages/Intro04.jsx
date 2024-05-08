import { Canvas } from "@react-three/fiber";
import { Html, Float, OrbitControls } from "@react-three/drei";
import firstWebpage from "../assets/firstWebpage.png";

export default function Intro04() {
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
      {/* <Environment preset="forest" background backgroundBlurriness={0.7} /> */}
      <Float floatIntensity={6} rotationIntensity={2}>
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
          <div style={{lineHeight: "1.1"}}>人類最初のWebページ<br />もう少しで34年前</div>
          <img className="mw-100" src={firstWebpage} alt="firstWebpage" />
        </Html>
      </Float>
      <OrbitControls />
    </Canvas>
  );
}