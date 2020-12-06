import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Resume,Portofolio,Profile,Contact} from './pages';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Mohammad Rizal Azky Gajah</p>
        
      </header>
      <Router>
        <Navbar/>
        <Switch >
        <Route exact path="/">
            <Profile/>
          </Route>
          <Route path="/resume" component={Resume}>
            
          </Route>  
          <Route path="/portofolio">
            <Portofolio/>
          </Route>
          <Route path="/contact">
            <Contact/>  
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
