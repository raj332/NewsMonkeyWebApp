
import './App.css';

import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  const [progress, setprogress] = useState(0)

  const setProgress = (progress) => {
    setprogress(progress);
  }

  return (
    <Router>
      <>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}

        />
        <Routes>
          <Route exact path='/' element={<News setProgress={setProgress} key="general" pagesize="9" country="in" category="general" />} ></Route>
          <Route exact path='/general' element={<News setProgress={setProgress} key="generall" pagesize="9" country="in" category="general" />} ></Route>
          <Route exact path='/business' element={<News setProgress={setProgress} key="business" pagesize="9" country="in" category="business" />} ></Route>
          <Route exact path='/entertainment' element={<News setProgress={setProgress} key="entertainment" pagesize="9" country="in" category="entertainment" />} ></Route>
          <Route exact path='/health' element={<News setProgress={setProgress} key="health" pagesize="9" country="in" category="health" />} ></Route>
          <Route exact path='/science' element={<News setProgress={setProgress} key="science" pagesize="9" country="in" category="science" />} > </Route>
          <Route exact path='/technology' element={<News setProgress={setProgress} key="technology" pagesize="9" country="in" category="technology" />} ></Route>
          <Route exact path='/sports' element={<News setProgress={setProgress} key="sports" pagesize="9" country="in" category="sports" />} ></Route>
        </Routes>
      </>
    </Router>
  );

}

export default App

