import "./Partners.css";
import {ReactComponent as Spotify} from '../../assets/spotify.svg';
import {ReactComponent as Dell} from '../../assets/dell.svg';
import {ReactComponent as Cisco} from '../../assets/cisco.svg';
import {ReactComponent as Disney} from '../../assets/disney.svg';
import {ReactComponent as Deezer} from '../../assets/deezer.svg';
import {ReactComponent as Verizon} from '../../assets/verizon.svg';
import {ReactComponent as Texas} from '../../assets/texas.svg';

const Partners = () => {
  return (
    <div className="partners">
      <h1>Our Partners</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit maxime
        obcaecati quia esse, veniam rem itaque. Cupiditate quisquam totam
        deleniti?
      </p>

      <main className="partners__list">
<Spotify className="spotify"/>
<Dell className="dell"/>
<Cisco className="cisco"/>
<Disney className="disney"/>
<Deezer className="deezer"/>
<Verizon className="verizon"/>
<Texas className="texas"/>
      </main>
    </div>
  );
};

export default Partners;
