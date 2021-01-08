import Foto from './assets/image/image1.jpg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Resume,Portofolio,Profile,Home} from './pages';
import Navbar from './components/Navbar';

import React,{useState} from 'react'

function App() {
  const [isDark,setIsDark]=useState(true)

  const setDark=(e)=>{
    setIsDark(e)
  }

  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div className={`App isdark ${isDark && `isdark`}`}>
      <div className="App-image">
        <img src={Foto} className="App-logo" alt="logo" />
        {
          !isDark && (
            <>
            <h3 className='App-image-text'>Mohammad Rizal Azky</h3>
            <h4 className='App-image-text'>Web Developer</h4>
            </>
          )
        }
      </div>
      <div className='App-container-content'>
            <Navbar onClick={setDark}/>
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
