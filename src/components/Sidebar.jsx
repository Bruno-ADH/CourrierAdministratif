import React, { useState, useMemo } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FiMenu, FiInbox, FiSend, FiHome, FiMail, FiBox } from "react-icons/fi";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import useAuthStore from "../store/useAuthStore"


export default function Sidebar() {
    const isAuthenticated = useAuthStore.use.isAuthenticated()
    const logout = useAuthStore.use.logout()
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    const menuItems = useMemo(() => [
        { name: "Tableau de bord", path: "/dashboard", icon: <FiHome size={22}/> },
        { name: "Boîte de réception", path: "/dashboard/inbox", icon: <FiBox size={22}/> },
        { name: "Courriers reçus", path: "/dashboard/received", icon: <FiInbox size={22}/> },
        { name: "Courriers envoyés", path: "/dashboard/sent", icon: <FiSend size={22}/> },
        { name: "Envoyer courrier", path: "/dashboard/send", icon: <FiMail size={22}/> },
      ], []);

    return (
        <>
            {/* Mobile Menu Button */}
            <Button variant="primary" className="d-md-none position-fixed m-2" style={{ zIndex: 1050 }} onClick={toggleMobileMenu}>
                <FiMenu size={24} />
            </Button>
            {isMobileMenuOpen && (
                    <div
                        className="position-fixed top-0 start-0 w-100 h-100"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 1030 }}
                        onClick={closeMobileMenu}
                    ></div>
            )}
            {/* Sidebar */}
            <div
                className={`bg-secondary text-black overflow-hidden flex-column vh-100 ${isMobileMenuOpen ? "d-flex position-fixed" : "d-none d-md-flex position-relative"
                    }`}
                style={{
                    width: isSidebarCollapsed ? "80px" : "250px",
                    transition: "width 0.3s ease",
                    zIndex: 1040,
                }}
            >
                <Navbar.Brand className="text-center mb-4 text-black bg-primary text-black fs-5 fm-poppins-semibold py-3 pt-4">{isSidebarCollapsed ? "LOGO" : "LOGO"}</Navbar.Brand>

                <Nav className="flex-column px-3 py-1">
                    {menuItems.map((item) => (
                        <OverlayTrigger
                            key={item.name}
                            placement="right"
                            overlay={!isSidebarCollapsed ? <></> : <Tooltip>{item.name}</Tooltip>}
                            trigger={["hover", "focus"]}
                        >
                            <Nav.Link 
                            as={NavLink} 
                            to={item.path} 
                            className="d-flex align-items-center my-2 text-black"
                            style={{ whiteSpace: "nowrap" }}
                            >
                                {item.icon}
                                {!isSidebarCollapsed && <span className="ms-3">{item.name}</span>}
                            </Nav.Link>
                        </OverlayTrigger>
                    ))}
                </Nav>

                {/* Collapse Button */}
                <Button
                    variant="light"
                    className="mt-auto align-self-center px-2 py-1 mb-3"
                    onClick={toggleSidebar}
                    style={{ borderRadius: "50%" }}
                >
                    {isSidebarCollapsed ? <AiOutlineArrowRight /> : <AiOutlineArrowLeft />}
                </Button>
            </div>
        </>
    )
}