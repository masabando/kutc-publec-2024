import { Canvas } from "@react-three/fiber";
import { Environment, Html, Float, OrbitControls } from "@react-three/drei";
import Container from "react-bootstrap/Container";

export default function Title() {
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
            坂東 将光 (Masamitsu Bando)
          </div>
          <div className="mt-3">
            近畿大学工業高等専門学校
            <br />
            総合システム工学科 制御情報コース 准教授
          </div>
          <div className="mt-5">
            Web制作
            <br />
            ソフトウェア開発
            <br />
            アプリ開発
            <br />
            VR開発
          </div>
        </Container>
      </Html>
      <Float floatIntensity={10} rotationIntensity={4}>
        <Html
          style={{ userSelect: "none", pointerEvents: "none" }}
          transform
        >
          <iframe
            title="embed_alice"
            src="https://alice.helixcode.net/~bando/"
            width={500}
            height={700}
          />
        </Html>
        <Html
          style={{ userSelect: "none", pointerEvents: "none" }}
          transform
          rotation={[0, Math.PI, 0]}
          position={[0, 0, -0.05]}
        >
          <iframe
            title="embed"
            src="https://www.ktc.ac.jp"
            width={500}
            height={700}
          />
        </Html>
      </Float>
      <OrbitControls />
    </Canvas>
  );
}
