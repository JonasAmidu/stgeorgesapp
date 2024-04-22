// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import Routes
import { FaHome, FaHistory, FaInfoCircle } from 'react-icons/fa';
import { AiOutlineFlag } from 'react-icons/ai'; // Import flag icon
import VideoPlayer from './VideoPlayer';
import StGeorgesFlag from './StGeorgesFlag.jpg';
import AnotherImage from './HoughtonEnrichment.png';
import Lottie from 'lottie-react';
import animationData from './Animation .json'; 

function Home() {
  return (
    <div>
      <h2><AiOutlineFlag size={24} /> Welcome to St George's Day Celebration at the Harvest Home</h2>
      <img src={StGeorgesFlag} alt="St George's Day Celebration" style={{ width: '100%', maxWidth: '600px' }} />
      <div style={{ width: 300, height: 300 }}>
        <Lottie animationData={animationData} />
      </div>
    </div>
  );
}

function History() {
  return (
    <div>
      <h2>History</h2>
      <VideoPlayer />
    </div>
  );
}

function AdditionalInfo() {
  return (
    <div>
      <h2>*This mobile app is sponsored and funded by the Houghton Enrichment Society </h2>
      <img src={AnotherImage} alt="St George's Day Celebration" style={{ width: '50%', maxWidth: '600px' }} />


      {/* Add your additional info content here */}
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes> {/* Wrap Routes around Route components */}
          <Route exact path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/additional-info" element={<AdditionalInfo />} />
        </Routes>

        <nav style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#f0f0f0', textAlign: 'center' }}>
          <ul style={{ display: 'flex', justifyContent: 'space-around', listStyleType: 'none', padding: 0 }}>
            <li><Link to="/"><FaHome size={24} /><br />Home</Link></li>
            <li><Link to="/history"><FaHistory size={24} /><br />History</Link></li>
            <li><Link to="/additional-info"><FaInfoCircle size={24} /><br />Additional Info</Link></li>
          </ul>
        </nav>
      </div>
    </Router>
  );
}

export default App;
