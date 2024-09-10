import Container from "react-bootstrap/Container";
import styles from "./normalStyles.module.scss";

export default function Web03() {
  return (
    <Container fluid className={styles.normalStyles}>
      <h2>スマホの誕生</h2>
      カメラもマイクもある<br />
      持ち運べる小さなコンピュータ<br />
      SNSとも相性バッチリ
      
      <h3>どこでもWebページを閲覧</h3>
      <ul style={{ marginLeft: "1em" }}>
        <li>ビーチ</li>
        <li>公園</li>
        <li>カフェ</li>
      </ul>

    </Container>
  );
}
