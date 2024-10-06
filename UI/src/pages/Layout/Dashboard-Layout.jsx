import { Outlet, useNavigate } from "react-router-dom";
import "./Dashboard-Layout.css";
import { useAuth } from "@clerk/clerk-react";
import { useContext, useEffect } from "react";
import ChatList from "../../components/Chat-List/ChatList";
import { SlideContext } from "../../context/slide-context";

export default function DashboardLayout() {
  const { isLoaded, userId } = useAuth();
  const navigate = useNavigate();

  const { onClose, open, onOpen } = useContext(SlideContext);

  console.log("Open", open);

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in");
    }
  }, [isLoaded, userId, navigate]);

  if (!isLoaded) return <div>Loading...</div>;

  console.log(isLoaded, userId);

  return (
    <div className="dashboard-layout">
      {open && (
        <div className={open ? "menu" : "menu-close"}>
          {open && (
            <img
              src="/hamburger.svg"
              alt=""
              style={{
                position: "absolute",
                right: "20px",
                top: "10px",
                color: "#",
                cursor: "pointer",
              }}
              onClick={onClose}
            />
          )}
          <ChatList />
        </div>
      )}
      <div className="content">
        {!open && (
          <img
            src="/hamburger.svg"
            alt=""
            style={{
              position: "absolute",
              left: "20px",
              top: "50px",
              color: "#",
              cursor: "pointer",
            }}
            onClick={onOpen}
          />
        )}
        <Outlet />
      </div>
    </div>
  );
}
