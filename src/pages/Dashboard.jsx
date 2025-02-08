import { Card, Row, Col } from "react-bootstrap";
import ActionButton from "../components/ActionButtons";

function Dashboard() {
  return (
    <div className="w-100 h-100">
      <h2 className="bg-primary p-3 mb-4 text-center">TABLEAU DE BORD</h2>
      <ActionButton/>
      <Row className="px-3">
        <Col md={4}>
          <Card className="bg-primary text-white text-center p-3">
            <Card.Body>5 <br/> Courriers reçus</Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="bg-success text-white text-center p-3">
            <Card.Body>8<br/> Courriers envoyés</Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="bg-danger text-white text-center p-3">
            <Card.Body>2 <br/>Courriers en attente</Card.Body>
          </Card>
        </Col>
      </Row>
      <Card className="mt-4 p-5 text-center">Calendrier automatique</Card>
    </div>
  );
}

export default Dashboard;
