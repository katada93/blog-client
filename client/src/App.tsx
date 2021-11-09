import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Tags from './pages/Tags/Tags';
import Header from './components/Header/Header';
import './App.css';
import About from './pages/About/About';
import Auth from './pages/Auth/Auth';
import Postpage from './pages/Postpage/Postpage';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './features/store';

function App() {
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
        <Route path='/auth'>
          <Auth />
        </Route>
        <Route path='/post/:id'>
          <Postpage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
