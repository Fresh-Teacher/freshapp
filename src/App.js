import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ResourceSubjects = () => {
  const { academicClass, resource } = useParams();

  let subjects = [];

  if (academicClass.startsWith('Primary')) {
    const grade = academicClass.split(' ')[1];
    if (resource === 'Schemes of Work') {
      subjects = [`Primary ${grade} English Schemes of Work`, `Primary ${grade} Mathematics Schemes of Work`, `Primary ${grade} Science Schemes of Work`];
    } else if (resource === 'Past Papers') {
      subjects = [`Primary ${grade} English Past Papers`, `Primary ${grade} Mathematics Past Papers`, `Primary ${grade} Science Past Papers`];
    } else if (resource === 'Lesson Notes') {
      subjects = [`Primary ${grade} English Lesson Notes`, `Primary ${grade} Mathematics Lesson Notes`, `Primary ${grade} Science Lesson Notes`];
    }
  } else if (academicClass.startsWith('Senior')) {
    const grade = academicClass.split(' ')[1];
    if (resource === 'Schemes of Work') {
      subjects = [`Senior ${grade} English Schemes of Work`, `Senior ${grade} Mathematics Schemes of Work`, `Senior ${grade} Physics Schemes of Work`];
    } else if (resource === 'Past Papers') {
      subjects = [`Senior ${grade} English Past Papers`, `Senior ${grade} Mathematics Past Papers`, `Senior ${grade} Physics Past Papers`];
    } else if (resource === 'Lesson Notes') {
      subjects = [`Senior ${grade} English Lesson Notes`, `Senior ${grade} Mathematics Lesson Notes`, `Senior ${grade} Physics Lesson Notes`];
    }
  } else if (academicClass === 'Nursery') {
    if (resource === 'Schemes of Work') {
      subjects = ['Nursery Reading Schemes of Work', 'Nursery Mathematics Schemes of Work', 'Nursery Art Schemes of Work'];
    } else if (resource === 'Past Papers') {
      subjects = ['Nursery Reading Past Papers', 'Nursery Mathematics Past Papers', 'Nursery Art Past Papers'];
    } else if (resource === 'Lesson Notes') {
      subjects = ['Nursery Reading Lesson Notes', 'Nursery Mathematics Lesson Notes', 'Nursery Art Lesson Notes'];
    }
  } else if (academicClass === 'Baby Class') {
    if (resource === 'Schemes of Work') {
      subjects = ['Baby Class Reading Schemes of Work', 'Baby Class Mathematics Schemes of Work', 'Baby Class Art Schemes of Work'];
    } else if (resource === 'Past Papers') {
      subjects = ['Baby Class Reading Past Papers', 'Baby Class Mathematics Past Papers', 'Baby Class Art Past Papers'];
    } else if (resource === 'Lesson Notes') {
      subjects = ['Baby Class Reading Lesson Notes', 'Baby Class Mathematics Lesson Notes', 'Baby Class Art Lesson Notes'];
    }
  }

  const handleSubjectClick = (subject) => {
    console.log("Selected subject:", subject);
  };

  return (
    <div className="container">
      <h1>Select a Subject</h1>
      <div className="button-container">
        {subjects.map((subject, index) => (
          <button
            key={index}
            className="btn btn-info spaced-button"
            onClick={() => handleSubjectClick(subject)}
          >
            {subject}
          </button>
        ))}
      </div>
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
