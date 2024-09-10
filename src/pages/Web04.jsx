import Container from "react-bootstrap/Container";
import styles from "./normalStyles.module.scss";

export default function Web04() {
  return (
    <Container fluid className={styles.normalStyles}>
      <h2>スマホとレスポンシブデザイン</h2>
      スマホの画面に合わせ、<br />
      縦長のWebページが登場。<br />
      レスポンシブデザインも。

      <h3>例えば…</h3>
      <ul style={{ marginLeft: "1em" }}>
        <li>PCだとサイドメニューあり</li>
        <li>スマホだとメニューボタンに</li>
      </ul>

    </Container>
  );
}
