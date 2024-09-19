import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function MyNav({ page, setPage, hidden, totalPageNum }) {
  return (
    <Navbar bg="light" hidden={hidden} className="py-0">
      <Container fluid>
        <Nav className="me-auto">
          <Nav.Link className="py-1" onClick={()=> setPage(0)}>Home</Nav.Link>
          {/* <Nav.Link className="py-1" onClick={() => setPage(-1)}>＜</Nav.Link>
          <Nav.Link className="py-1" onClick={() => setPage(1)}>＞</Nav.Link> */}
        </Nav>
        {page + 1} / {totalPageNum}
      </Container>
    </Navbar>
  );
}