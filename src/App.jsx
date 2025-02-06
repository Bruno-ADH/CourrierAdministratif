import { Navigate, NavLink, createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '../src/styles/fonts.css'
import '../src/styles/style.css'
import '../src/styles/custom.scss'
import Dashboard from "./pages/Dashboard";
import SendMail from "./pages/SendMail";
import SentMails from "./pages/SentMails";
import ReceivedMails from "./pages/ReceivedMails";
import Sidebar from "./components/Sidebar";
import AuthForm from "./pages/AuthFom";
import useAuthStore from "./store/useAuthStore"
import PageError from "./pages/PageError";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useAuthStore.use.isAuthenticated()
  console.log('isAuthenticated 1:>> ', isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />, // Redirection automatique vers login
  },
  {
    path: "/login",
    element: <AuthForm />,
  },
  {
    path: "/dashboard",
    element: <ProtectedRoute><AppLayout /></ProtectedRoute>,
    errorElement: <PageError />,
    children: [
      { path: "", element: <Dashboard /> },
      { path: "received", element: <ReceivedMails /> },  // ✅ Vérifie bien que c'est "received" et PAS "receive"
      { path: "sent", element: <SentMails /> },
      { path: "send", element: <SendMail /> },
    ],
  },
  { path: "*", element: <PageError /> },
])

function AppLayout() {
  const isAuthenticated = useAuthStore.use.isAuthenticated()
  console.log('isAuthenticated 2:>> ', isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="d-flex">
      <Navbar bg="primary" variant="dark" className="flex-column p-4" style={{ width: "250px", height: "100vh" }}>
        <Navbar.Brand>LOGO</Navbar.Brand>
        <Nav className="flex-column">
          <Nav.Link as={NavLink} to="/dashboard">Tableau de bord</Nav.Link>
          <Nav.Link as={NavLink} to="/dashboard/received">Courriers reçus</Nav.Link>
          <Nav.Link as={NavLink} to="/dashboard/sent">Courriers envoyés</Nav.Link>
          <Nav.Link as={NavLink} to="/dashboard/send">Envoyer courrier</Nav.Link>
        </Nav>
      </Navbar>

      <Container className="p-4 bg-transparent">
        <Outlet /> 
      </Container>
    </div>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
