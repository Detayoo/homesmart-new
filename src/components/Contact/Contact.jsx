import "./Contact.css";
import Lamp from "../../assets/lamp.png";

const Contact = () => {
  return (
    <div className="contact">
      <div className="lamp">
        <img src={Lamp} alt="" />
        <button>
          <i class="bi bi-download"></i> &nbsp; Download App Now
        </button>
      </div>

      <form>
        <h2>Contact Us</h2>
        <div className="name-input">
          <label>ENTER NAME</label>
          <input type="text" />
        </div>
        <div className="email-input">
          <label>EMAIL</label>
          <input type="text"/>
        </div>
        <div className="message-input">
            <textarea  placeholder="ENTER MESSAGE..."/>
        </div>
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default Contact;
