import logo from './assets/image/fotojpg.jpg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Resume,Portofolio,Profile,Home} from './pages';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <div className="App-image">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Mohammad Rizal Azky</h3>
        <h4>Web Developer</h4>
      </div>
      <div className='App-container-content'>
          <Router basename={process.env.PUBLIC_URL}>
            <Navbar/>
            <div className='App-content'>
            <Switch >
            <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/resume" component={Resume}>
                
              </Route>  
              <Route path="/portofolio">
                <Portofolio/>
              </Route>
              <Route path="/profile">
                <Profile/>  
              </Route>
            </Switch>
            </div>
          </Router>  
      </div>
      
    </div>
  );
}

export default App;
