import { Container, Row, Col } from "react-bootstrap";
import Menu from "./components/Menu";
import Main from "./components/Main";

function Home(props) {
  return (
    <Container fluid>
      <Row>
        <Menu />
        <Col>
          <Main />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;