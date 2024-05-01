import { Canvas } from "@react-three/fiber";
import { Html, Float, Environment } from "@react-three/drei";
import Container from "react-bootstrap/Container";

export default function Web02() {
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
      <Environment preset="city" background backgroundBlurriness={0.7} />
      <Html
        center
        prepend
        style={{
          color: "#333",
          fontSize: "max(2vw, 16px)",
          textAlign: "left",
          width: "100vw",
          userSelect: "none",
        }}
      >
        <Container
          fluid
          style={{
            textShadow: "0 0 10px #fff",
          }}
        >
          <div
            className="header"
            style={{
              fontSize: "max(3vw, 24px)",
            }}
          >
            Webページの進化
          </div>
          <div className="mt-3 d-inline-block">
            魅力的なWebページが登場
            <ul className="text-start mt-5">
              <li>画像</li>
              <li>動画</li>
              <li>スマホへの対応</li>
            </ul>
          </div>
        </Container>
      </Html>
      <Float floatIntensity={10} rotationIntensity={4}>
        <Html
          style={{ userSelect: "none", pointerEvents: "none" }}
          occlude="blending"
          transform
        >
          <iframe
            title="embed"
            src="https://www.ktc.ac.jp"
            width={500}
            height={700}
          />
        </Html>
      </Float>
    </Canvas>
  );
}
