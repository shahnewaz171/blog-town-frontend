import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/Home/Home';
import Navbar from './components/Home/Navbar/Navbar';
import Dropdown from './components/Home/Navbar/Dropdown';
import { useEffect, useState } from 'react';
import Blogs from './components/Home/Blogs/Blogs';
import CreatePost from './components/CreatePost/CreatePost';
import BlogDetails from './components/Home/BlogDetails/BlogDetails';

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
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/createPost">
            <CreatePost />
          </Route>
          <Route path="/blogs">
            <Blogs />
          </Route>
          <Route path="/blogDetails">
            <BlogDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
