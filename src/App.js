import './App.css';
import Dogs from './Dogs/Dogs'
import Dog from './Dog/Dog'
import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { getDogsList } from './DogsList'


function App() {
  return (
    <div className="App">
      <nav className='App-nav'>
        <NavLink exact className='not-active-link' activeClassName='active-link' to='/dogs'>
          Dogs
                </NavLink>
        <NavLink exact className='not-active-link' activeClassName='active-link' to='/dogs/kai'>
          Kai
                </NavLink>
        <NavLink exact className='not-active-link' activeClassName='active-link' to='/dogs/whiskey'>
          Whiskey
                </NavLink>
        <NavLink exact className='not-active-link' activeClassName='active-link' to='/dogs/hazel'>
          Hazel
                </NavLink>
        <NavLink exact className='not-active-link' activeClassName='active-link' to='/dogs/tubby'>
          Tubby
        </NavLink>
      </nav>

      <Switch>
        <Route exact path='/dogs' render={() => <Dogs dogList={getDogsList()} />} />
        <Route exact path='/dogs/:dogName' render={routeProps => <Dog name={routeProps.match.params.dogName} />} />
        <Route exact path='/' render={() => <Redirect to='/dogs' />} />

      </Switch>
    </div>
  );
}

export default App;
