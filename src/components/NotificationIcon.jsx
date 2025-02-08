import React, { useState, useEffect } from "react";
import { FiBell } from "react-icons/fi";
import { Badge, Toast, ToastContainer } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// Simuler des notifications pour l'exemple
const mockNotifications = [
  { id: 1, message: "Vous avez un nouveau courrier." },
  { id: 2, message: "Vous avez un nouveau courrier." }
];

function NotificationIcon() {
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();

  // Simuler la réception de nouvelles notifications après 3 secondes
  useEffect(() => {
    const timer = setTimeout(() => {
      setNotifications(mockNotifications);
      setUnreadCount(mockNotifications.length);
      showTemporaryAlert(mockNotifications.length);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Fonction pour afficher une alerte temporaire
  const showTemporaryAlert = (count) => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);  // L'alerte disparaît après 4 secondes
  };

  const handleClick = () => {
    navigate('/dashboard/notifications');
    setUnreadCount(0);  // Marquer les notifications comme lues après clic
  };

  return (
    <>
      <div className="position-relative cursor-pointer" onClick={handleClick}>
        <FiBell size={24} />
        {unreadCount > 0 && (
          <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle">
            {unreadCount}
          </Badge>
        )}
      </div>

      {/* Affichage de l'alerte temporaire (toast) */}
      <ToastContainer position="top-end" className="p-3" style={{ zIndex: 1060 }}>
        <Toast onClose={() => setShowToast(false)} show={showToast} delay={4000} autohide bg="info">
          <Toast.Body className="text-white">
            {unreadCount === 1 ? "Vous avez un nouveau courrier." : `Vous avez ${unreadCount} nouveaux courriers.`}
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}

export default NotificationIcon;
