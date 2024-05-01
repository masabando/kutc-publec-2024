import { Canvas } from "@react-three/fiber"
import { Html } from "@react-three/drei"

export default function Title() {
  return (
    <Canvas
      shadows
      gl={{ alpha: true, antialias: true }}
      camera={{ position: [0, 0, 5], fov: 50, near: 0.1, far: 1000 }}
      onCreated={({ gl }) => {
        gl.setClearColor(0xffffff);
      }}
      style={{zIndex: 100}}
    >
      <Html
        center
        prepend
        style={{
          color: "#333",
          fontSize: "4vw",
          textAlign: "center",
          width: "100vw",
        }}
      >
        <div className="title">Web技術の進歩がもたらす変化と可能性</div>
        <div
          className="mt-5"
          style={{
            fontSize: "max(3vw, 18px)",
          }}
        >
          坂東 将光
        </div>
        <div
          className="mt-3"
          style={{
            fontSize: "max(1.6vw, 14px)",
          }}
        >
          近畿大学工業高等専門学校
          <br />
          総合システム工学科 制御情報コース
        </div>
        <div
          className="mt-5"
          style={{
            fontSize: "max(1.6vw, 14px)",
          }}
        >
          近畿大学工業高等専門学校 &nbsp; 土曜公開講座
          <br />
          2024年10月26日(土)
        </div>
      </Html>
    </Canvas>
  );
}