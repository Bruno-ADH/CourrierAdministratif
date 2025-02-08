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
import Inbox from "./pages/Inbox";
import MailDetails from "./pages/MailDetails";
import NotificationsPage from "./pages/NotificationsPage";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useAuthStore.use.isAuthenticated()
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
      { path: "received", element: <ReceivedMails /> },
      { path: "sent", element: <SentMails /> },
      { path: "send", element: <SendMail /> },
      { path: "inbox", element: <Inbox /> },
      { path: "inbox/:id", element: <MailDetails />  },
      { path: "notifications", element: <NotificationsPage /> },
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
      <Sidebar/>
      <Container fluid className="p-0 vh-100 w-100">
        <Outlet /> 
      </Container>
    </div>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
