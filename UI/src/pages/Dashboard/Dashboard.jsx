import "./Dashboard.css";
import { Link } from "react-router-dom";
export default function Dashboard() {
  const options = [
    {
      name: "Create a New Chat",
      img: "/chat.png",
      href: "/dashboard",
    },

    {
      name: "Analyze images",
      img: "/image.png",
      href: "/dashboard",
    },
    {
      name: "Help me with my code",
      img: "/code.png",
      href: "/dashboard",
    },
  ];

  return (
    <div className="container">
      <div className="wrapper">
        <div className="title">
          <h1>Welcome to Remote.AI</h1>
        </div>
        <div className="options">
          {options.map((option, index) => (
            <Link className="option" key={index} to={option.href}>
              <img src={option.img} alt="" className="images" />
              <h3>{option.name}</h3>
            </Link>
          ))}
        </div>
      </div>
      <div className="input-container">
        <input type="text" placeholder="Message Remote.AI" className="input" />

        <button className="send-btn">
          <img src="/arrow.png" alt="" className="btn-image" />
        </button>
      </div>
    </div>
  );
}
