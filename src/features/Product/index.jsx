import { Container, Row, Col } from "react-bootstrap";
import Menu from "./components/Menu";
import Main from "./components/Main";

function Product({ title, setTitle, handleSetTitle }) {
  return (
    <Container fluid>
      <Row>
        <Menu handleSetTitle={handleSetTitle} setTitle={setTitle} />
        <Col>
          <Main title={title} />
        </Col>
      </Row>
    </Container>
  );
}

export default Product;
