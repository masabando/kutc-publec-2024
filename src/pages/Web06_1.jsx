import Container from "react-bootstrap/Container";
import styles from "./normalStyles.module.scss";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";

function Box({ name, icon, highlight }) {
  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{
        color: highlight ? "crimson" : "black",
      }}
    >
      <div style={{ fontSize: "150%" }}>{icon}</div>
      <div>{name}</div>
    </div>
  );
}

export default function Web06() {
  return (
    <Container fluid className={styles.normalStyles}>
      <h2>Webページを作る技術</h2>

      <h3
        className="my-0"
        style={{
          color: "darkblue",
        }}
      >
        従来からの方法
      </h3>
      <div
        className="d-flex justify-content-around"
        style={{
          fontSize: "130%",
        }}
      >
        <Box
          name={
            <p className="text-center">
              <span className="fw-bold text-primary">HTML</span>
              <br />
              構造
            </p>
          }
          icon={<SiHtml5 />}
        />
        <Box
          name={
            <p className="text-center">
              <span className="fw-bold text-primary">CSS</span>
              <br />
              デザイン
            </p>
          }
          icon={<SiCss3 />}
        />
        <Box
          name={
            <p className="text-center">
              <span className="fw-bold text-primary">JavaScript</span>
              <br />
              機能
            </p>
          }
          icon={<SiJavascript />}
        />
      </div>
    </Container>
  );
}
