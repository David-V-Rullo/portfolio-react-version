import 'semantic-ui-css/semantic.min.css'
import "./index.css";
import HeadEl from "./Components/HeadEl";
import Navigation from "./Components/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutSem from './Components/AboutSem';
import Projects from './Components/Projects';
function App() {
  return (
    <Router> 
        <HeadEl />
        <Navigation />
        <Switch>
        <Route exact path="/" component={AboutSem} />
        <Route exact path="/projects" component={Projects} />
        </Switch>
     </Router>
  );
}

export default App;
