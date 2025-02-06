import { Card, Row, Col } from "react-bootstrap";

function Dashboard() {
  return (
    <div className="w-100 bg-danger h-100">
      <h2 className="mb-4">TABLEAU DE BORD</h2>
      <Row>
        <Col md={4}>
          <Card className="bg-primary text-white text-center p-3">
            <Card.Body>5 Courriers reçus</Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="bg-success text-white text-center p-3">
            <Card.Body>8 Courriers envoyés</Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="bg-danger text-white text-center p-3">
            <Card.Body>2 Courriers en attente</Card.Body>
          </Card>
        </Col>
      </Row>
      <Card className="mt-4 p-5 text-center">Calendrier automatique</Card>
    </div>
  );
}

export default Dashboard;
