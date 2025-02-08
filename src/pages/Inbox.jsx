import React, { useState } from "react";
import { Form, InputGroup, Button, Dropdown, Table } from "react-bootstrap";
import { FiFilter, FiAlertCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const dummyMails = [
  { id: 1, type: "Lettre", objet: "Demande de congé", dateArrivee: "2024-09-01", dateSortie: "2024-09-05", categorie: "RH" },
  { id: 2, type: "Email", objet: "Facture mensuelle", dateArrivee: "2024-09-03", dateSortie: "2024-09-04", categorie: "Finance" },
  { id: 3, type: "Lettre", objet: "Invitation conférence", dateArrivee: "2024-09-07", dateSortie: "2024-09-10", categorie: "Communication" }
];

function Inbox() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState("objet");
  const navigate = useNavigate();

  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const handleFilterChange = (filter) => setFilterBy(filter);
  const handleMailClick = (id) => navigate(`/dashboard/inbox/${id}`);

  const filteredMails = dummyMails.filter(mail => {
    const field = mail[filterBy]?.toLowerCase();
    return field && field.includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <h2>Boîte de réception</h2>
      <InputGroup className="mb-3">
        <Form.Control placeholder={`Rechercher par ${filterBy}`} value={searchTerm} onChange={handleSearchChange} />
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic"><FiFilter /></Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleFilterChange("dateArrivee")}>Date d'arrivée</Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilterChange("dateSortie")}>Date de sortie</Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilterChange("categorie")}>Catégorie</Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilterChange("objet")}>Objet</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </InputGroup>

      {filteredMails.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Num</th>
              <th>Type</th>
              <th>Objet</th>
              <th>Date d'arrivée</th>
              <th>Date de sortie</th>
            </tr>
          </thead>
          <tbody>
            {filteredMails.map(mail => (
              <tr key={mail.id} onClick={() => handleMailClick(mail.id)} style={{ cursor: "pointer" }}>
                <td>{mail.id}</td>
                <td>{mail.type}</td>
                <td>{mail.objet}</td>
                <td>{mail.dateArrivee}</td>
                <td>{mail.dateSortie}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <div className="text-center mt-5">
          <FiAlertCircle size={50} color="gray" />
          <p className="mt-3 text-muted">Aucun courrier trouvé correspondant à votre recherche.</p>
        </div>
      )}
    </div>
  );
}

export default Inbox;
