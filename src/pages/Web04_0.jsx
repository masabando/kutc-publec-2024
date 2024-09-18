import { Canvas } from "@react-three/fiber";
import { Float, Environment, Html, OrbitControls } from "@react-three/drei";
import { useEffect, useState } from "react";

function WebPage() {
  const [pageWidth, setPageWidth] = useState(40);
  useEffect(() => {
    const loop = () => {
      // loop width 800 to 1400 sin loop
      setPageWidth(1000 + 200 * Math.sin(performance.now() / 1000));
      requestAnimationFrame(loop);
    };
    loop();
  }, []);
  return (
    <Html
      center
      style={{
        width: `${pageWidth}px`,
        //textAlign: "center",
        userSelect: "none",
        pointerEvents: "none",
        perspective: "1000",
      }}
      //transform
    >
      <iframe
        src="https://www.ktc.ac.jp"
        style={{
          width: `100%`,
          height: "80vh",
          scale: `${100 * window.innerWidth * 0.8 / 1400}%`,
      }} />
    </Html>
  );
}

export default function Web04_0() {
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
        <WebPage />
      </Float>
    </Canvas>
  );
}
