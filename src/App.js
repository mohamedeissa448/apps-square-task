import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Projects from './components/Projects'
import Footer from './components/footer';
import './fontawesome-icons/index'
import './App.css';

function App() {
  return (
    <React.Fragment>
      <div style={{ background : '#fff' }}>
        <NavBar/>
      </div>
      <Switch>
        <Route path="/projects" component={Projects}/>
      </Switch>
      <Footer/>
    </React.Fragment>  
  );
}

export default App;
