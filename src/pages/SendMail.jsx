import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import useMailStore from "../store/store";

function SendMail() {
  const [mail, setMail] = useState({ origine: "", destinataire: "", type: "", objet: "", datePreference: "", fichier: null });
  const sendMail = useMailStore((state) => state.sendMail);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMail(mail);
    alert("Courrier envoyé !");
  };

  return (
    <div>
      <h2 className="mb-4">ENVOYER COURRIER</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Control className="mb-3" type="text" placeholder="Origine" onChange={(e) => setMail({ ...mail, origine: e.target.value })} />
        <Form.Select className="mb-3" onChange={(e) => setMail({ ...mail, destinataire: e.target.value })}>
          <option>Destinataire</option>
        </Form.Select>
        <Form.Select className="mb-3" onChange={(e) => setMail({ ...mail, type: e.target.value })}>
          <option>Type</option>
        </Form.Select>
        <Form.Control className="mb-3" type="text" placeholder="Objet" onChange={(e) => setMail({ ...mail, objet: e.target.value })} />
        <Form.Control className="mb-3" type="date" onChange={(e) => setMail({ ...mail, datePreference: e.target.value })} />
        <Button variant="secondary" className="me-2">Annuler</Button>
        <Button variant="primary" type="submit">Envoyer</Button>
      </Form>
    </div>
  );
}

export default SendMail;
