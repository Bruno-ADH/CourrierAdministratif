import { Table } from "react-bootstrap";
import useMailStore from "../store/store";

function ReceivedMails() {
  const receivedMails = useMailStore.use.receivedMails();

  return (
    <div>
      <h2 className="mb-4">COURRIERS REÇUS</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>N°</th>
            <th>Date Arrivée</th>
            <th>Origine</th>
            <th>Type</th>
            <th>Objet</th>
            <th>Statut</th>
          </tr>
        </thead>
        <tbody>
          {receivedMails.map((mail) => (
            <tr key={mail.id}>
              <td>{mail.id}</td>
              <td>{mail.dateArrivee}</td>
              <td>{mail.origine}</td>
              <td>{mail.type}</td>
              <td>{mail.objet}</td>
              <td>{mail.statut}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ReceivedMails;
