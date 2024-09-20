import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home.js';
import Project from './pages/Project.js';

function App() {

  return (
    <div className="App">
      <div className="link-bar">
        <Link to='/'>HOME</Link>
        <Link to='/project'>PROJECT</Link>
        <Link to='/contact'>CONTACT</Link>
      </div>
      <Routes>
        <Route path='/' element={
          <div>
            <Home/>
          </div>
        }/>
        <Route path='/skills' element={
          <div>
            <Project/>
          </div>
        }/>
      </Routes>
    </div>
  );
}

export default App;