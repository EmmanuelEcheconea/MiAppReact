import React from 'react';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import Proyectos from './components/proyectos/Proyectos';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Login from './components/auth/Login';
function App() {
  return (
    <div>

    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/nueva-cuenta" component={NuevaCuenta}/>
        <Route exact path="/proyectos" component={Proyectos}/>

      </Switch>
    </Router>


    </div>
  );
}

export default App;
