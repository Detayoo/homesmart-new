import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Couch from './components/Couch/Couch';
import Pros from './components/Pros/Pros';
import Partners from './components/Partners/Partners';
import Relax from './components/Relax/Relax';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Couch />
    <Pros/>
    <Partners />
    <Relax />
    <Contact/>
    </div>
  );
}

export default App;
