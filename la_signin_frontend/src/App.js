import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        {/* <Route path="/la/signout" element={<About />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
