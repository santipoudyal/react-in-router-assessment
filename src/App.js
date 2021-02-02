import React from 'react';
import { Route,Switch } from 'react-router-dom';
//import { Route, Switch} from 'react-router';


import './App.css';
import Welcome from './components/welcome/Welcome';
import Clock from './components/clock/Clock';
import Contact from './components/contact/Contact';
import Navigation from './components/navigation/Navigation';
import NotFound from './components/notFound/NotFound';
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Switch>
      <Route 
      exact path="/" 
      render={(props)=> <Welcome{...props} name="Shanti Poudyel"/>} 
      />
     <Route path="/clock" component= {Clock} />
     <Route path="/contact" component= {Contact} />
     <Route path="/welcome/:name" component= {Welcome} />

     <Route>
       <NotFound/>
     </Route>
      </Switch> 
     
    </div>
  );
}

export default App;