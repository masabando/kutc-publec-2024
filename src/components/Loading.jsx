import { Html } from "@react-three/drei";
import Spinner from "react-bootstrap/Spinner";

export default function Loading() {
  return (
    <Html prepend fullscreen>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          background: "white",
          fontSize: "16pt",
        }}
      >
        <Spinner
          animation="border"
          variant="dark"
          style={{
            width: "100px",
            height: "100px",
          }}
        />
        <div className="mt-4">データをロード中...</div>
      </div>
    </Html>
  );
}