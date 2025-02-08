import React from "react";
import { Card, ListGroup } from "react-bootstrap";

// Notifications simulées pour l'exemple
const mockNotifications = [
  { id: 1, message: "Vous avez un nouveau courrier de Jean Dupont." },
  { id: 2, message: "Votre courrier a été bien envoyé à Marie Claire." }
];

function NotificationsPage() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Notifications</Card.Title>
        <ListGroup variant="flush">
          {mockNotifications.map(notif => (
            <ListGroup.Item key={notif.id}>{notif.message}</ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default NotificationsPage;
