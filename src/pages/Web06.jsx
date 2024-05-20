import Container from "react-bootstrap/Container";
import styles from "./normalStyles.module.scss";

export default function Web06() {
  return (
    <Container fluid className={styles.normalStyles}>
      <h2>Webページを作る技術</h2>

      <h3>フロントエンド</h3>
      <ul style={{ marginLeft: "1em" }}>
        <li className="text-danger">React</li>
        <li>Vue</li>
      </ul>

      <h3>フレームワーク</h3>
      <ul style={{ marginLeft: "1em" }}>

        <li className="text-danger">Next.js</li>
        <li>Gatsby</li>
        <li>Nuxt</li>
      </ul>
    </Container>
  );
}
