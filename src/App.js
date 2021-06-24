import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/Home/Home';
import Navbar from './components/Home/Navbar/Navbar';
import Dropdown from './components/Home/Navbar/Dropdown';
import { useEffect, useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen){
        setIsOpen(false);
      }
    }

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    }
  })

  return (
    <div>
      <Router>
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Switch>
          <Route to="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
