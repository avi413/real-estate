import React from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import Realestate from './Realestate';
import PageNotFound from './PageNotFound';
import Map from './Map';

function App() {
  return (
    <BrowserRouter> 
      <div className="App"  dir="rtl">
        <header className="header">
          <NavLink to='/' className="header__logo">Real estate demo appy</NavLink>
          <nav className="menu">
            <ul className="menu__list">
              <li className="menu__list-item"><NavLink className="menu__link" to='/real-estate'>Real estate</NavLink></li>
              <li className="menu__list-item"><NavLink className="menu__link" to='/map'>Map</NavLink></li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path='/' component={Realestate}/>
          <Route exact path='/real-estate' component={Realestate}/>
          <Route exact path='/map' component={Map}/>
          <Route exact path='/*' component={PageNotFound}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
