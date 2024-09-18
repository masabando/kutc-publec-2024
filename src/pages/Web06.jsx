import Container from "react-bootstrap/Container";
import styles from "./normalStyles.module.scss";
import {
  SiNuxtdotjs,
  SiReact,
  SiNextdotjs,
  SiGatsby,
  SiVuedotjs,
} from "react-icons/si";

function Box({ name, icon, highlight }) {
  return (
    <div className="d-flex flex-column align-items-center" style={{
      color: highlight ? "crimson" : "black",
    }}>
      <div style={{fontSize: "150%"}}>{icon}</div>
      <div>{name}</div>
    </div>
  );
}

export default function Web06() {
  return (
    <Container fluid className={styles.normalStyles}>
      <h2>Webページを作る技術</h2>

      <h3 className="my-0" style={{
        color: "darkblue",
      }}>フロントエンドUIライブラリ</h3>
      <div
        className="d-flex justify-content-around"
        style={{
          fontSize: "130%",
        }}
      >
        <Box name="React" icon={<SiReact />} highlight />
        <Box name="Vue" icon={<SiVuedotjs />} />
      </div>

      <h3 className="my-0" style={{
        color: "darkblue",
      }}>フレームワーク</h3>
      <div
        className="d-flex justify-content-around"
        style={{
          fontSize: "130%",
        }}
      >
        <Box name="Next.js" icon={<SiNextdotjs />} highlight />
        <Box name="Gatsby" icon={<SiGatsby />} />
        <Box name="Nuxt.js" icon={<SiNuxtdotjs />} />
      </div>
    </Container>
  );
}
