//import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/About";
import Adopt from "./components/Adopt";
import Description from "./components/Description";

function App() {
  
  return (
    <Router>
      <div>
        <Nav />
          <Switch>
            <Route path="/About" component={About}/>
            <Route path="/pet/:id" children={<Description />} />
            <Route path="/" component={Adopt} exact/>
          </Switch>
      </div>

    </Router>
  );
}

export default App;
