import { Container, Row, Col } from "react-bootstrap";
import Menu from "./components/Menu";
import Main from "./components/Main";

function Synthetic(props) {
  return (
    <Container fluid>
      <Row>
        <Col sm={3}>
          <Menu />
        </Col>
        <Col sm={9}>
          <Main />
        </Col>
      </Row>
    </Container>
  );
}

export default Synthetic;
