import Container from "react-bootstrap/Container";
import styles from "./normalStyles.module.scss";

export default function Web02() {
  return (
    <Container fluid className={styles.normalStyles}>
      <h2>リンクによる体験</h2>
      情報をリンクしたことにより生まれる体験
      
      <h3>SNS</h3>
      ミクシィ、X (Twitter)、Facebook、Instagram、...

      <h3>ネットショッピング</h3>
      Amazon、楽天、Yahoo!ショッピング、...
    </Container>
  );
}
