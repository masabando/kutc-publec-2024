import Container from "react-bootstrap/Container";
import styles from "./normalStyles.module.scss";
import leftMan from "../assets/1-3.png";
import rightMan from "../assets/1-4.png";

export default function Web01_3() {
  return (
    <Container fluid className={styles.normalStyles}>
      <h2>Webページ誕生によって得たもの</h2>
      <div className="mt-4 text-center">
        <div>情報間をリンクする力</div>
        <div className="mt-4">どの情報とリンクするかの自由</div>
      </div>
      <div className="d-flex justify-content-between mt-2">
        <img
          src={leftMan}
          alt="leftMan"
          style={{
            maxWidth: "45%",
          }}
        />
        <img
          src={rightMan}
          alt="rightMan"
          style={{
            maxWidth: "45%",
          }}
        />
      </div>
    </Container>
  );
}
