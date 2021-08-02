import 'semantic-ui-css/semantic.min.css'
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeadEl from "./Components/HeadEl";
import Navigation from "./Components/Navigation";
import AboutSem from './Components/AboutSem';
import Projects from './Components/Projects';
import Resume from './Components/Resume'
function App() {
  return (
    <Router> 
        <HeadEl />
        <Navigation />
        <Switch>
        <Route exact path="/" component={AboutSem} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/resume" component={Resume} />
        </Switch>
     </Router>
  );
}

export default App;
