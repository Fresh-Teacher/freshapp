import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTopButton from './ScrollToTopButton';
import './ScrollToTopButton.css';
import NavBar from './NavBar';
import './NavBar.css';


// Past Papers
const BabyClassPastPapers = lazy(() => import('./BabyClassPastPapers'));
const MiddleClassPastPapers = lazy(() => import('./MiddleClassPastPapers'));
const TopClassPastPapers = lazy(() => import('./TopClassPastPapers'));
const PrimaryOneClassPastPapers = lazy(() => import('./PrimaryOneClassPastPapers'));
const PrimaryTwoClassPastPapers = lazy(() => import('./PrimaryTwoClassPastPapers'));
const PrimaryThreeClassPastPapers = lazy(() => import('./PrimaryThreeClassPastPapers'));
const PrimaryFourClassPastPapers = lazy(() => import('./PrimaryFourClassPastPapers'));
const PrimaryFiveClassPastPapers = lazy(() => import('./PrimaryFiveClassPastPapers'));
const PrimarySixClassPastPapers = lazy(() => import('./PrimarySixClassPastPapers'));
const PrimarySevenClassPastPapers = lazy(() => import('./PrimarySevenClassPastPapers'));
const SeniorOnePastPapers = lazy(() => import('./SeniorOnePastPapers'));
const SeniorTwoPastPapers = lazy(() => import('./SeniorTwoPastPapers'));
const SeniorThreePastPapers = lazy(() => import('./SeniorThreePastPapers'));
const SeniorFourPastPapers = lazy(() => import('./SeniorFourPastPapers'));
const SeniorFivePastPapers = lazy(() => import('./SeniorFivePastPapers'));
const SeniorSixPastPapers = lazy(() => import('./SeniorSixPastPapers'));

//Lesson Notes
const BabyClassLessonNotes = lazy(() => import('./BabyClassLessonNotes'));
const MiddleClassLessonNotes = lazy(() => import('./MiddleClassLessonNotes'));
const TopClassLessonNotes = lazy(() => import('./TopClassLessonNotes'));
const PrimaryOneLessonNotes = lazy(() => import('./PrimaryOneLessonNotes'));
const PrimaryTwoLessonNotes = lazy(() => import('./PrimaryTwoLessonNotes'));
const PrimaryThreeLessonNotes = lazy(() => import('./PrimaryThreeLessonNotes'));
const PrimaryFourLessonNotes = lazy(() => import('./PrimaryFourLessonNotes'));
const PrimaryFiveLessonNotes = lazy(() => import('./PrimaryFiveLessonNotes'));
const PrimarySixLessonNotes = lazy(() => import('./PrimarySixLessonNotes'));
const PrimarySevenLessonNotes = lazy(() => import('./PrimarySevenLessonNotes'));
const SeniorOneLessonNotes = lazy(() => import('./SeniorOneLessonNotes'));
const SeniorTwoLessonNotes = lazy(() => import('./SeniorTwoLessonNotes'));
const SeniorThreeLessonNotes = lazy(() => import('./SeniorThreeLessonNotes'));
const SeniorFourLessonNotes = lazy(() => import('./SeniorFourLessonNotes'));
const SeniorFiveLessonNotes = lazy(() => import('./SeniorFiveLessonNotes'));
const SeniorSixLessonNotes = lazy(() => import('./SeniorSixLessonNotes'));

//Schemes of Work
const BabyClassSchemesOfWork = lazy(() => import('./BabyClassSchemesOfWork'));
const MiddleClassSchemesOfWork = lazy(() => import('./MiddleClassSchemesOfWork'));
const TopClassSchemesOfWork = lazy(() => import('./TopClassSchemesOfWork'));
const PrimaryOneSchemesOfWork = lazy(() => import('./PrimaryOneSchemesOfWork'));
const PrimaryTwoSchemesOfWork = lazy(() => import('./PrimaryTwoSchemesOfWork'));
const PrimaryThreeSchemesOfWork = lazy(() => import('./PrimaryThreeSchemesOfWork'));
const PrimaryFourSchemesOfWork = lazy(() => import('./PrimaryFourSchemesOfWork'));
const PrimaryFiveSchemesOfWork = lazy(() => import('./PrimaryFiveSchemesOfWork'));
const PrimarySixSchemesOfWork = lazy(() => import('./PrimarySixSchemesOfWork'));
const PrimarySevenSchemesOfWork = lazy(() => import('./PrimarySevenSchemesOfWork'));
const SeniorOneSchemesOfWork = lazy(() => import('./SeniorOneSchemesOfWork'));
const SeniorTwoSchemesOfWork = lazy(() => import('./SeniorTwoSchemesOfWork'));
const SeniorThreeSchemesOfWork = lazy(() => import('./SeniorThreeSchemesOfWork'));
const SeniorFourSchemesOfWork = lazy(() => import('./SeniorFourSchemesOfWork'));
const SeniorFiveSchemesOfWork = lazy(() => import('./SeniorFiveSchemesOfWork'));
const SeniorSixSchemesOfWork = lazy(() => import('./SeniorSixSchemesOfWork'));

const ResourceSubjects = () => {
  const { academicClass, resource } = useParams();

  const getResourceComponent = (resource) => {
    switch (resource) {
      case 'Lesson Notes':
        switch (academicClass) {
          case 'Baby Class':
            return BabyClassLessonNotes;
          case 'Middle Class':
            return MiddleClassLessonNotes;
          case 'Top Class':
            return TopClassLessonNotes;
          case 'Primary One':
            return PrimaryOneLessonNotes;
          case 'Primary Two':
            return PrimaryTwoLessonNotes;
          case 'Primary Three':
            return PrimaryThreeLessonNotes;
          case 'Primary Four':
            return PrimaryFourLessonNotes;
          case 'Primary Five':
            return PrimaryFiveLessonNotes;
          case 'Primary Six':
            return PrimarySixLessonNotes;
          case 'Primary Seven':
            return PrimarySevenLessonNotes;
          case 'Senior One':
            return SeniorOneLessonNotes;
          case 'Senior Two':
            return SeniorTwoLessonNotes;
          case 'Senior Three':
            return SeniorThreeLessonNotes;
          case 'Senior Four':
            return SeniorFourLessonNotes;
          case 'Senior Five':
            return SeniorFiveLessonNotes;
          case 'Senior Six':
            return SeniorSixLessonNotes;
          default:
            return null;
        }
      case 'Schemes of Work':
        switch (academicClass) {
          case 'Baby Class':
            return BabyClassSchemesOfWork;
          case 'Middle Class':
            return MiddleClassSchemesOfWork;
          case 'Top Class':
            return TopClassSchemesOfWork;
          case 'Primary One':
            return PrimaryOneSchemesOfWork;
          case 'Primary Two':
            return PrimaryTwoSchemesOfWork;
          case 'Primary Three':
            return PrimaryThreeSchemesOfWork;
          case 'Primary Four':
            return PrimaryFourSchemesOfWork;
          case 'Primary Five':
            return PrimaryFiveSchemesOfWork;
          case 'Primary Six':
            return PrimarySixSchemesOfWork;
          case 'Primary Seven':
            return PrimarySevenSchemesOfWork;
          case 'Senior One':
            return SeniorOneSchemesOfWork;
          case 'Senior Two':
            return SeniorTwoSchemesOfWork;
          case 'Senior Three':
            return SeniorThreeSchemesOfWork;
          case 'Senior Four':
            return SeniorFourSchemesOfWork;
          case 'Senior Five':
            return SeniorFiveSchemesOfWork;
          case 'Senior Six':
            return SeniorSixSchemesOfWork;
          default:
            return null;
        }
      case 'Past Papers':
        switch (academicClass) {
          case 'Baby Class':
            return BabyClassPastPapers;
          case 'Middle Class':
            return MiddleClassPastPapers;
          case 'Top Class':
            return TopClassPastPapers;
          case 'Primary One':
            return PrimaryOneClassPastPapers;
          case 'Primary Two':
            return PrimaryTwoClassPastPapers;
          case 'Primary Three':
            return PrimaryThreeClassPastPapers;
          case 'Primary Four':
            return PrimaryFourClassPastPapers;
          case 'Primary Five':
            return PrimaryFiveClassPastPapers;
          case 'Primary Six':
            return PrimarySixClassPastPapers;
          case 'Primary Seven':
            return PrimarySevenClassPastPapers;
          case 'Senior One':
            return SeniorOnePastPapers;
          case 'Senior Two':
            return SeniorTwoPastPapers;
          case 'Senior Three':
            return SeniorThreePastPapers;
          case 'Senior Four':
            return SeniorFourPastPapers;
          case 'Senior Five':
            return SeniorFivePastPapers;
          case 'Senior Six':
            return SeniorSixPastPapers;
          default:
            return null;
        }
      default:
        return null;
    }
  };

  const ResourceComponent = getResourceComponent(resource);

  return (
    <div>
      {ResourceComponent ? (
        <Suspense fallback={<div>Searching for content...🔎</div>}>
          <ResourceComponent />
        </Suspense>
      ) : (
        <div>Resource not found.</div>
      )}
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
      {/* Include the NavBar component */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/class/:academicLevel" element={<ClassButtons />} />
        <Route path="/resources/:academicClass" element={<ResourceButtons />} />
        <Route path="/resources/:academicClass/:resource" element={<ResourceSubjects />} />
      </Routes>
      <ScrollToTopButton />
    </Router>
  );
};


export default App;
