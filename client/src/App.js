import './App.css';
import {Route, Routes} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Detail from './components/Detail/Detail';
import FormVideogame from './components/FormVideogame/FormVideogame';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import { getVideogame } from './redux/actions';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch(); 
  useEffect(() =>{
    dispatch(getVideogame())
    
  },[])
  

  return (
    <div className="App">
          <Nav/>
            <Routes>

              <Route path="/detail" element={ <Detail/>} /> 
              <Route path="/formvideogame" element={<FormVideogame/>} />
              <Route  path="/home" element={ <Home />} />
            </Routes>
    </div>
  );
}

export default App;
