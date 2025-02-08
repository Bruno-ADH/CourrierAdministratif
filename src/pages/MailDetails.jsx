import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

const dummyMails = [
  { id: 1, type: "Lettre", objet: "Demande de congé", dateArrivee: "2024-09-01", dateSortie: "2024-09-05", categorie: "RH", content: "Détail de la demande de congé..." },
  { id: 2, type: "Email", objet: "Facture mensuelle", dateArrivee: "2024-09-03", dateSortie: "2024-09-04", categorie: "Finance", content: "Détail de la facture mensuelle..." },
  { id: 3, type: "Lettre", objet: "Invitation conférence", dateArrivee: "2024-09-07", dateSortie: "2024-09-10", categorie: "Communication", content: "Détail de l'invitation à la conférence..." }
];

function MailDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const mail = dummyMails.find(mail => mail.id === parseInt(id));

  if (!mail) return <p>Courrier non trouvé.</p>;

  return (
    <Card>
      <Card.Body>
        <Card.Title>{mail.objet}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{mail.type} - {mail.categorie}</Card.Subtitle>
        <Card.Text>{mail.content}</Card.Text>
        <Button variant="secondary" onClick={() => navigate(-1)}>Retour</Button>
      </Card.Body>
    </Card>
  );
}

export default MailDetails;
