import './App.css';
import {Routes, Route, useLocation, NavLink} from 'react-router-dom';
import Home from './pages/Home.js';
import Project from './pages/Project.js';
import { useState, useEffect } from 'react';

function App() {
  const [position, setPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // 스크롤 메뉴 바
  useEffect(()=>{
    function onScroll(){
      setPosition(window.scrollY);
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    }
  },[])

  useEffect(()=>{
    if(position > 700){
      setIsVisible(true)
    }else{
      setIsVisible(false)
    }
  }, [position]);

  const activeStyle = {
    opacity: 1,
    textDecoration:'underline'
  }
  const deactiveStyle = {
    textDecoration:'none'
  }

  return (
    <div className="App">
      <div className={`${'link-bar'} ${isVisible || location.pathname !== '/' ? 'active' : ''}`}>
        <NavLink to='/' style={({isActive})=>{
          return isActive ? activeStyle : deactiveStyle;
        }}>HOME</NavLink>
        <NavLink to='/project' style={({isActive})=>{
          return isActive ? activeStyle : deactiveStyle;
        }}>PROJECT</NavLink>
        <NavLink to='/contact' style={({isActive})=>{
          return isActive ? activeStyle : deactiveStyle;
        }}>CONTACT</NavLink>
      </div>

      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/project' element={ <Project/> }/>
        <Route path='/contact' element={ <div></div> }/>
      </Routes>
    </div>
  );
}

export default App;