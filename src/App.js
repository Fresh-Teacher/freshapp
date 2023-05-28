import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const PrimaryThreeLessonNotes = lazy(() => import('./PrimaryThreeLessonNotes'));
const SeniorFiveSchemesOfWork = lazy(() => import('./SeniorFiveSchemesOfWork'));
const MiddleClassPastPapers = lazy(() => import('./MiddleClassPastPapers'));

const ResourceSubjects = () => {
  const { academicClass, resource } = useParams();

  const getResourceComponent = (resource) => {
    switch (resource) {
      case 'Lesson Notes':
        return PrimaryThreeLessonNotes;
      case 'Schemes of Work':
        return SeniorFiveSchemesOfWork;
      case 'Past Papers':
        return MiddleClassPastPapers;
      default:
        return null;
    }
  };

  const ResourceComponent = getResourceComponent(resource);

  return (
    <div className="container">
      <h1>{academicClass} {resource}</h1>
      <Suspense fallback={<div>Loading...</div>}>
        {ResourceComponent && <ResourceComponent />}
      </Suspense>
    </div>
  );
};

const ClassButtons = () => {
  const { academicLevel } = useParams();

  const classes = {
    Nursery: ['Baby Class', 'Middle Class', 'Top Class'],
    Primary: [
      'Primary One',
      'Primary Two',
      'Primary Three',
      'Primary Four',
      'Primary Five',
      'Primary Six',
      'Primary Seven'
    ],
    Secondary: [
      'Senior One',
      'Senior Two',
      'Senior Three',
      'Senior Four',
      'Senior Five',
      'Senior Six'
    ]
  };

  const navigate = useNavigate();

  const handleClassClick = (academicClass) => {
    navigate(`/resources/${academicClass}`);
  };

  return (
    <div className="container">
      <h1>Select a Class</h1>
      <div className="button-container">
        {classes[academicLevel].map((academicClass, index) => (
          <button
            key={index}
            className="btn btn-secondary spaced-button"
            onClick={() => handleClassClick(academicClass)}
          >
            {academicClass}
          </button>
        ))}
      </div>
    </div>
  );
};

const ResourceButtons = () => {
  const { academicClass } = useParams();

  const resources = ['Schemes of Work', 'Past Papers', 'Lesson Notes'];

  const navigate = useNavigate();

  const handleResourceClick = (resource) => {
    navigate(`/resources/${academicClass}/${resource}`);
  };

  return (
    <div className="container">
      <h1>Select a Resource</h1>
      <div className="button-container">
        {resources.map((resource, index) => (
          <button
            key={index}
            className="btn btn-info spaced-button"
            onClick={() => handleResourceClick(resource)}
          >
            {resource}
          </button>
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  const academicLevels = ['Nursery', 'Primary', 'Secondary'];

  return (
    <div className="container">
      <h1>Select an Academic Level</h1>
      <div className="button-container">
        {academicLevels.map((level, index) => (
          <Link key={index} to={`/class/${level}`} className="btn btn-primary spaced-button">
            {level}
          </Link>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/class/:academicLevel" element={<ClassButtons />} />
        <Route path="/resources/:academicClass" element={<ResourceButtons />} />
        <Route path="/resources/:academicClass/:resource" element={<ResourceSubjects />} />
      </Routes>
    </Router>
  );
};

export default App;
