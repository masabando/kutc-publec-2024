import Container from "react-bootstrap/Container";
import styles from "./normalStyles.module.scss";
import web0old from "../assets/web0_old.png";

export default function Web01_1() {
  return (
    <Container fluid className={styles.normalStyles}>
      <h2>Webページ誕生「前」</h2>
      <div className="mt-5 text-center">
        <img src={web0old} alt="web0old" className="mw-100" />
      </div>
    </Container>
  );
}
