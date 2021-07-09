import 'semantic-ui-css/semantic.min.css'
import "./index.css";
import HeadEl from "./Components/HeadEl";
import Navigation from "./Components/Navigation";
import About from "./Components/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutSem from './Components/AboutSem';

function App() {
  return (
    <Router> 
        <HeadEl />
        <Navigation />
        <Switch>
        <AboutSem />
        </Switch>
     </Router>
  );
}

export default App;
