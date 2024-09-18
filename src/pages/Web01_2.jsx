import Container from "react-bootstrap/Container";
import styles from "./normalStyles.module.scss";
import web0new from "../assets/web0_new.png";

export default function Web01_2() {
  return (
    <Container fluid className={styles.normalStyles}>
      <h2>Webページ誕生「後」</h2>
      <div className="mt-5 text-center">
        <img src={web0new} alt="web0old" className="mw-100" />
      </div>
    </Container>
  );
}
