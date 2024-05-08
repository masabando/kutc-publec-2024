import { Canvas } from "@react-three/fiber";
import { Environment, Html, Float, OrbitControls } from "@react-three/drei";
import syokujiNeko from "../assets/syokujiNeko.jpeg";

export default function Neko() {
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
      <Environment preset="dawn" background backgroundBlurriness={0.7} />
      <Float floatIntensity={10} rotationIntensity={4}>
        <Html
          center
          style={{ userSelect: "none", pointerEvents: "none", textAlign: "center" }} transform>
          <img className="mw-100"
            style={{
              width: "min( 90%, 400px )",
            }}
            src={syokujiNeko} alt="syokujiNeko" />
        </Html>
      </Float>
      <OrbitControls />
    </Canvas>
  );
}
