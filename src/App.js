import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Signin from './components/Signin';

import Home from './components/Home';
import Private from './components/Private';
//import ScreenRecorder from './components/ScreenRecorder';


function App() {
  return (
    <>
      <Routes>
      <Route exact path='/' element={<Signin />} />
      <Route element={<Private />}>
      <Route exact path='/home' element={<Home />} />
      {/* <Route exact path='/screen-recorder' element={<ScreenRecorder />} /> */}
     
      </Route>
      
      </Routes>
    </>
  );
}

export default App;
