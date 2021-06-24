import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Router>
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
