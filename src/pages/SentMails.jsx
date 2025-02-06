import { Table } from "react-bootstrap";
import useMailStore from "../store/store";

function SentMails() {
  const sentMails = useMailStore((state) => state.sentMails);

  return (
    <div>
      <h2 className="mb-4">COURRIERS ENVOYÉS</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>N°</th>
            <th>Destinataire</th>
            <th>Type</th>
            <th>Objet</th>
            <th>Date Préférence</th>
          </tr>
        </thead>
        <tbody>
          {sentMails.map((mail, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{mail.destinataire}</td>
              <td>{mail.type}</td>
              <td>{mail.objet}</td>
              <td>{mail.datePreference}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default SentMails;
