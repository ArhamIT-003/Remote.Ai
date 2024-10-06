import { Link } from "react-router-dom";
import "./chatList.css";
export default function ChatList() {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <div className="chatList">
      <span className="title" style={{ marginTop: "16px" }}>
        Dashboard
      </span>
      <div className="explore">
        <Link to={"/dashboard"}>Create a new Chat</Link>
        <Link to={"/explore"}>Explore</Link>
      </div>
      <hr />
      <span className="title">Recent Chats</span>

      <div className="list">
        {list.map((item, index) => (
          <Link to={"/"} key={index}>
            {item}
          </Link>
        ))}
      </div>
      <hr />

      <div className="copyrights">
        <img src="/logo.png" alt="" />
        <span>Copyrights &copy; 2024 Remote.AI</span>
      </div>
    </div>
  );
}
