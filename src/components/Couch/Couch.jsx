import CouchImage from "../../assets/couch.png";
import './Couch.css';
import {ReactComponent as Meter} from '../../assets/app.svg'

const Couch = () => {
  return (
    <div className="couch">
      <img className="meter" src='https://furniture-ossy.netlify.app/static/media/app.45288807dfeef78f73dd00c69238962c.svg' />
      <img  className="couch-image" src={CouchImage} alt="" />

      <button><i class="bi bi-download"></i> &nbsp; Download The App</button>
    </div>
  );
};

export default Couch;
