import './App.css';
import {Routes, Route, Link, useLocation} from 'react-router-dom';
import Home from './pages/Home.js';
import Project from './pages/Project.js';
import { useState, useEffect } from 'react';

function App() {
  
  const [position, setPosition] = useState(0);

  // 스크롤 메뉴 바 오퍼시티
  function onScroll(){
    setPosition(window.scrollY);
  }
  useEffect(()=>{
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    }
  }, []);
  
  //
  // const navigate = useNavigate();
  const location = useLocation();
  useEffect(()=>{
    console.log(location);
  },[location])

  return (
    <div className="App">
      <div className="link-bar" style={{opacity:(position-300)/500}}>
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
        <Route path='/contact' element={
          <div>

          </div>
        }/>
      </Routes>
    </div>
  );
}

export default App;