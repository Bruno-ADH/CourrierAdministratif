import NotificationIcon from "./NotificationIcon";
import { FiSend, FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ActionButton = ({searchIcon = true,}) => {
    const navigate = useNavigate();

    return (
        <div className="d-flex justify-content-end align-items-center mb-3 pe-4">
          <FiSearch size={24} className={`mx-3 cursor-pointer ${!searchIcon && "d-none"}`} onClick={() => navigate('/dashboard/inbox', { state: { autofocus: true } })} />
          <FiSend size={24} className="mx-3 cursor-pointer" onClick={() => navigate('/dashboard/send')} />
          <NotificationIcon />
        </div>
    )
}

export default ActionButton;