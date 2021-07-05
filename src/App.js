import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import About from './Components/About';


function App() {

  return (
    <div className="App container-fluid bg-dark">
      <Header />
      <Navigation />
      <About />
    </div>
  );
}

export default App;
