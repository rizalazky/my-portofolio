import Foto from './assets/image/fotojpg.jpg';
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
    <Router basename={process.env.PUBLIC_URL}>
    <div className="App">
      <div className="App-image">
        <img src={Foto} className="App-logo" alt="logo" />
        <h3>Mohammad Rizal Azky</h3>
        <h4>Web Developer</h4>
      </div>
      <div className='App-container-content'>
          
            <Navbar/>
            <div className='App-content'>
            <Switch >
            <Route exact  path="/">
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
            
      </div>
      
    </div>
    </Router>
  );
}

export default App;
