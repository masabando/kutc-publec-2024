import { Canvas } from "@react-three/fiber";
import { Float, Environment, Html, OrbitControls } from "@react-three/drei";
import responsive_wide from "../assets/responsive_wide.png";

function WebPage({ img }) {
  return (
    <Html
      center
      prepend
      style={{
        //width: "100vw",
        textAlign: "center",
        userSelect: "none",
        pointerEvents: "none",
      }}
      transform
    >
      <div className="text-center d-inline-block" style={{maxWidth: "min(80%, 700px)"}}>
        <img src={img} className="mw-100" />
      </div>
    </Html>
  );
}

export default function Web04_1() {
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
      <Environment preset="lobby" background backgroundBlurriness={0.7} />
      <OrbitControls />
      <Float floatIntensity={10} speed={3} rotationIntensity={0} position={[0, 0, 0]}>
        <WebPage img={responsive_wide} />
      </Float>
    </Canvas>
  );
}
