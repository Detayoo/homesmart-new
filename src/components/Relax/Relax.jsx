import "./Relax.css";
import Table from "../../assets/table.png";

const Relax = () => {
  return (
    <div className="relax">
      <img src={Table} alt="" />
      <div className="home">
        <h3>Relax, You're Home!</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          praesentium doloremque ducimus placeat animi labore quis incidunt
          nulla nemo voluptas modi necessitatibus quia, cum exercitationem rem
          earum perspiciatis mollitia officiis reiciendis assumenda id.
          Consectetur possimus nobis nesciunt saepe enim inventore!
        </p>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Relax;
