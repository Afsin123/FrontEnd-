import './App.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';  

import { BrowserRouter as Routes, Route, Router, Switch } from 'react-router-dom';
import Home from './components/Home'
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return ( 
    
    <div className="App">
      <Header/> 
      <Switch>
          <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
         <Route path='/contact' component={Contact} />

        </Switch>
      <Footer/>
    </div>
    
     
  );
}

export default App;
