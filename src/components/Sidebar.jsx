import { NavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import useAuthStore from "../store/useAuthStore"


export default function Sidebar() {
    const isAuthenticated = useAuthStore.use.isAuthenticated()
    const logout = useAuthStore.use.logout()

    return (
        <>{isAuthenticated && (
            <Navbar bg="primary" variant="dark" className="flex-column p-4" style={{ width: "250px", height: "100vh" }}>
                <Navbar.Brand>LOGO</Navbar.Brand>
                <Nav className="flex-column">
                    <Nav.Link as={NavLink} to="/">Tableau de bord</Nav.Link>
                    <Nav.Link as={NavLink} to="/received">Courriers reçus</Nav.Link>
                    <Nav.Link as={NavLink} to="/sent">Courriers envoyés</Nav.Link>
                    <Nav.Link as={NavLink} to="/send">Envoyer courrier</Nav.Link>
                    <Button variant="secondary" onClick={logout} className="mt-4">
                        Se déconnecter
                    </Button>
                </Nav>
            </Navbar>
        )}</>
    )
}