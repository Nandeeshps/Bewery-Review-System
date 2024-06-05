import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Search from './Components/Search';
import Brewery from './Components/Brewery';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/brewery/:id" element={<Brewery/>} />
      </Routes>
    </Router>
  );
}

export default App;
