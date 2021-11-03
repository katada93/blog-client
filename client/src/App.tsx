import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Tags from './pages/Tags/Tags';
import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';
import './App.css';
import About from './pages/About/About';

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <Header />

        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/tags'>
            <Tags />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
