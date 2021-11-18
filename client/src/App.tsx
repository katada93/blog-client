import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Tags from './pages/Tags/Tags';
import Header from './components/Header/Header';
import './App.css';
import About from './pages/About/About';
import Auth from './pages/Login/Login';
import Postpage from './pages/Postpage/Postpage';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './features/store';
import { me } from './features/slices/authSlice';

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(me());
  }, [dispatch]);
  return (
    <div className='app'>
      <Header />

      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/about' exact>
          <About />
        </Route>
        <Route path='/tags' exact>
          <Tags />
        </Route>
        <Route path='/login' exact>
          <Auth />
        </Route>
        <Route path='/post/:id' exact>
          <Postpage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
