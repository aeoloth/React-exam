import './App.css';
import React from 'react';
import NavBar from './components/Navbar';
import Page404 from './components/page404';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Lessons from './components/Lessons';
import Issues from './components/Issues';

function App() {
  return (
    <div className="App">
            <BrowserRouter>
                <header style={{'background-color': '#282c34'}}>
                  <NavBar/>
                </header>

                <Switch>
                    <Route path="/lessons" component={Lessons}/>
                    <Route path="/issues" component={Issues}/>
                    <Route path="/404" component={Page404}/>
                    <Redirect from="*" to="/404"/>
                </Switch>
            </BrowserRouter>
    </div>
  );
}

export default App;
