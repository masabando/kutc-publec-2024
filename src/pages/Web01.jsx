import Container from "react-bootstrap/Container";
import styles from "./normalStyles.module.scss";

export default function Web01() {
  return (
    <Container fluid className={styles.normalStyles}>
      <h2>Webページのはじまり</h2>
      <div className="mt-3">
        1990年代初頭に静的なテキストページが誕生
        <ul className="mt-5 ms-5">
          <li>シンプルなテキスト</li>
          <li style={{ fontSize: "200%" }}>リンク (相互作用)</li>
        </ul>
        Google検索、Wikipedia、近大高専のWebサイト
      </div>
    </Container>
  );
}
