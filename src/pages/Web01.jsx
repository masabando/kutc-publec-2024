import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import Container from "react-bootstrap/Container";

export default function Web01() {
  return (
    <Canvas
      shadows
      gl={{ alpha: true, antialias: true }}
      camera={{ position: [0, 0, 5], fov: 50, near: 0.1, far: 1000 }}
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
          fontSize: "max(2vw, 16px)",
          textAlign: "center",
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
            Webページのはじまり
          </div>
          <div className="mt-3 d-inline-block">
            1990年代初頭に静的なテキストページが誕生
            <ul className="text-start mt-5">
              <li>シンプルなテキスト</li>
              <li style={{fontSize: "200%"}}>リンク (相互作用)</li>
            </ul>
          </div>
        </Container>
      </Html>
    </Canvas>
  );
}
