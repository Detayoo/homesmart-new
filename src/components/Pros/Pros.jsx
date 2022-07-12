import "./Pros.css";
import {ReactComponent as Dots} from '../../assets/dots.svg'

const Pros = () => {
  return (
    <div className="pros">
        <Dots className="dots" />
      <div className="safe">
        <i className="bi bi-key-fill"></i>
        <h3>Safe</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias amet
          necessitatibus tenetur blanditiis facilis eum illo cupiditate iste
          nisi sapiente?
        </p>
      </div>

      <div className="easy-payments">
        <i class="bi bi-paypal"></i>
        <h3>Easy Payments</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias amet
          necessitatibus tenetur blanditiis facilis eum illo cupiditate iste
          nisi sapiente?
        </p>
      </div>

      <div className="anytime">
        <i class="bi bi-lightbulb-fill"></i>
        <h3>Anytime</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias amet
          necessitatibus tenetur blanditiis facilis eum illo cupiditate iste
          nisi sapiente?
        </p>
      </div>
      <Dots className="dots" />

    </div>
  );
};

export default Pros;
