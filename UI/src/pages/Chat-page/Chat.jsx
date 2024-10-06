import "./Chat.css";
import NewPrompt from "../../components/NewPrompt/NewPrompt";

export default function Chat() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="chat">
          <div className="message user">
            1.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium nostrum atque quo aut quidem mollitia aliquid, veritatis
            quae ut numquam!
          </div>
          <div className="message ai">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            cumque?
          </div>
          <div className="message user">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
            sapiente magni facere dolor amet totam iste molestiae.
          </div>
          <div className="message ai">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            labore vel tempora itaque perferendis culpa?
          </div>
          <div className="message user">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            nostrum atque quo aut quidem mollitia aliquid, veritatis quae ut
            numquam!
          </div>
          <div className="message ai">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            cumque?
          </div>
          <div className="message user">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
            sapiente magni facere dolor amet totam iste molestiae.
          </div>
          <div className="message ai">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            labore vel tempora itaque perferendis culpa?
          </div>
          <div className="message user">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            nostrum atque quo aut quidem mollitia aliquid, veritatis quae ut
            numquam!
          </div>
          <div className="message ai">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            cumque?
          </div>
          <div className="message user">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
            sapiente magni facere dolor amet totam iste molestiae.
          </div>
          <div className="message ai">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            labore vel tempora itaque perferendis culpa?
          </div>
          <div className="message user">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            nostrum atque quo aut quidem mollitia aliquid, veritatis quae ut
            numquam!
          </div>
          <NewPrompt />
        </div>
      </div>
    </div>
  );
}
