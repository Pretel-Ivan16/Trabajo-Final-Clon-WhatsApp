import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function useChatNavigation(seleccionarChat) {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      seleccionarChat(id);
    }
  }, [id, seleccionarChat]);

  const handleExit = () => {
    seleccionarChat(null);
    navigate("/");
  };

  return { handleExit };
}
