import Container from "react-bootstrap/Container";
import styles from "./normalStyles.module.scss";
import ggl from "../assets/google.png";

export default function Web01_3() {
  return (
    <Container fluid className={styles.normalStyles}>
      <h2>Google検索結果もリンク</h2>
      <div className="mt-5 text-center">
        <img src={ggl} alt="ggl" className="mw-100" />
      </div>
    </Container>
  );
}
