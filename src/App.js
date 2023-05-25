import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import your separate components for each route
import Schemes from './Schemes';
import Notes from './Notes';
import Papers from './Papers';

const Home = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedAcademicClass, setSelectedAcademicClass] = useState(null);
  const [showSecondButtons, setShowSecondButtons] = useState(false);
  const [showThirdButtons, setShowThirdButtons] = useState(false);
  const navigate = useNavigate();

  const handleClick = (index) => {
    setSelectedButton(index);
    setShowSecondButtons(true);
  };

  const handleAcademicClassClick = (index) => {
    setSelectedAcademicClass(index);
    setShowThirdButtons(true);
  };

  const handleGoBack = () => {
    if (showThirdButtons) {
      setShowThirdButtons(false);
    } else if (showSecondButtons) {
      setShowSecondButtons(false);
      setSelectedButton(null);
    } else {
      navigate(-1); // Go back using the router's navigate function
    }
  };

  return (
    <div className="container">
      <h1>Fresh Teacher's e-Library</h1>
      <div className="button-container">
        {selectedButton === null && (
          <>
            <button
              className={`btn btn-primary spaced-button`}
              onClick={() => handleClick(0)}
            >
              Nursery
            </button>
            <button
              className={`btn btn-primary spaced-button`}
              onClick={() => handleClick(1)}
            >
              Primary
            </button>
            <button
              className={`btn btn-primary spaced-button`}
              onClick={() => handleClick(2)}
            >
              Secondary
            </button>
          </>
        )}
        {selectedButton === 0 && showSecondButtons && !showThirdButtons && (
          <>
            <button
              className="btn btn-success spaced-button"
              onClick={() => handleAcademicClassClick(0)}
            >
              Baby Class
            </button>
            <button
              className="btn btn-success spaced-button"
              onClick={() => handleAcademicClassClick(1)}
            >
              Middle Class
            </button>
            <button
              className="btn btn-success spaced-button"
              onClick={() => handleAcademicClassClick(2)}
            >
              Top Class
            </button>
          </>
        )}
        {selectedButton === 1 && showSecondButtons && !showThirdButtons && (
          <>
            <button
              className="btn btn-success spaced-button"
              onClick={() => handleAcademicClassClick(0)}
            >
              Primary One
            </button>
            <button
              className="btn btn-success spaced-button"
              onClick={() => handleAcademicClassClick(1)}
            >
              Primary Two
            </button>
            <button
              className="btn btn-success spaced-button"
              onClick={() => handleAcademicClassClick(2)}
            >
              Primary Three
            </button>
            <button
              className="btn btn-success spaced-button"
              onClick={() => handleAcademicClassClick(3)}
            >
              Primary Four
            </button>
            <button
              className="btn btn-success spaced-button"
              onClick={() => handleAcademicClassClick(4)}
            >
              Primary Five
            </button>
            <button
              className="btn btn-success spaced-button"
              onClick={() => handleAcademicClassClick(5)}
            >
              Primary Six
            </button>
            <button
              className="btn btn-success spaced-button"
              onClick={() => handleAcademicClassClick(6)}
            >
              Primary Seven
            </button>
          </>
        )}
        {selectedButton === 2 && showSecondButtons && !showThirdButtons && (
          <>
            <button
              className="btn btn-success spaced-button"
              onClick={() => handleAcademicClassClick(0)}
            >
              Senior One
            </button>
            <button
              className="btn btn-success spaced-button"
              onClick={() => handleAcademicClassClick(1)}
            >
              Senior Two
            </button>
            <button
              className="btn btn-success spaced-button"
              onClick={() => handleAcademicClassClick(2)}
            >
              Senior Three
            </button>
            <button
              className="btn btn-success spaced-button"
              onClick={() => handleAcademicClassClick(3)}
            >
              Senior Four
            </button>
            <button
              className="btn btn-success spaced-button"
              onClick={() => handleAcademicClassClick(4)}
            >
              Senior Five
            </button>
            <button
              className="btn btn-success spaced-button"
              onClick={() => handleAcademicClassClick(5)}
            >
              Senior Six
            </button>
          </>
        )}
        {selectedAcademicClass !== null && showThirdButtons && (
          <>
            <Link to="/schemes" className="btn btn-info spaced-button">
              Schemes of Work
            </Link>
            <Link to="/notes" className="btn btn-info spaced-button">
              Lesson Notes
            </Link>
            <Link to="/papers" className="btn btn-info spaced-button">
              Past Papers
            </Link>
          </>
        )}
      </div>
      {selectedButton !== null && (
        <button className="btn btn-danger" onClick={handleGoBack}>
          <span>&larr; Go Back</span>
        </button>
      )}
    </div>
  );
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/schemes" element={<Schemes />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/papers" element={<Papers />} />
    </Routes>
  </Router>
);

export default App;
