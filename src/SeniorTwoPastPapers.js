import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FiDownload, FiEye } from 'react-icons/fi';
import PDFViewer from './PDFViewer';

const SeniorTwoClassPastPapers = () => {
  const [lessonNotes, setLessonNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNote, setSelectedNote] = useState(null);
  const [scrollToPdf, setScrollToPdf] = useState(false);

  useEffect(() => {
    const sampleData = [
      {
        title: '02 -- S.2 Mathematics Revision Work -and Upload',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/02 -- S.2 Mathematics Revision Work -and Upload.pdf',
      },
      {
        title: '08 --- Revise S.2 Physics - Work Energy  Power- Tr. Ibrah',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/08 --- Revise S.2 Physics - Work Energy  Power- Tr. Ibrah.pdf',
      },
      {
        title: 'ASC S.2 BIO',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/ASC S.2 BIO.pdf',
      },
      {
        title: 'BSSM S.2. PHYSICS REVISION QUESTIONS',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/BSSM S.2. PHYSICS REVISION QUESTIONS.pdf',
      },
      {
        title: 'chem s2',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/chem s2.pdf',
      },
      {
        title: 'English-Senior-two',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/English-Senior-two.pdf',
      },
      {
        title: 'F2 END-TERM 3 EXAMS',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/F2 END-TERM 3 EXAMS.pdf',
      },
      {
        title: 'F2 MID TERM 3 EXAMS',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/F2 MID TERM 3 EXAMS.pdf',
      },
      {
        title: 'FORM 2 END OF TERM 2 EXAMS',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/FORM 2 END OF TERM 2 EXAMS.pdf',
      },
      {
        title: 'FORM 2 SET 1 ASSIGNMENT-1',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/FORM 2 SET 1 ASSIGNMENT-1.pdf',
      },
      {
        title: 'FORM 2 SET 2 ASSIGNMENT',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/FORM 2 SET 2 ASSIGNMENT.pdf',
      },
      {
        title: 'FORM 2 SET 3 EXAMS',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/FORM 2 SET 3 EXAMS.pdf',
      },
      {
        title: 'Form-2 ENG',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/Form-2 ENG.pdf',
      },
      {
        title: 'Kitende S.2 Biology Test',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/Kitende S.2 Biology Test.pdf',
      },
      {
        title: 'Kitende S2 Biology Covid-19',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/Kitende S2 Biology Covid-19.pdf',
      },
      {
        title: 'Kitende S2 History Holiday work',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/Kitende S2 History Holiday work.pdf',
      },
      {
        title: 'MATH TEST F2',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/MATH TEST F2.pdf',
      },
      {
        title: 'PHYSICS FOR LIFE S.1 AND S.2',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/PHYSICS FOR LIFE S.1 AND S.2.pdf',
      },
      {
        title: 'S. 2 insects o level  corona days',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S. 2 insects o level  corona days.pdf',
      },
      {
        title: 'S. 2 TD',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S. 2 TD.pdf',
      },
      {
        title: 'S.1 C.B.C Exam E.o.T 2',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S.1 C.B.C Exam E.o.T 2.pdf',
      },
      {
        title: 'S.2 AGRIC HOLIDAY PACKAGE',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S.2 AGRIC HOLIDAY PACKAGE.pdf',
      },
      {
        title: 'S.2 C.B.C Exam B.o.T 3 Sept',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S.2 C.B.C Exam B.o.T 3 Sept.pdf',
      },
      {
        title: 'S.2 C.B.C Exam E.o.T 2',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S.2 C.B.C Exam E.o.T 2.pdf',
      },
      {
        title: 'S.2 E.o.T 2 C.B.C Exam',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S.2 E.o.T 2 C.B.C Exam.pdf',
      },
      {
        title: 'S.2 ENG importance of trees _ kidnapped',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S.2 ENG importance of trees _ kidnapped.pdf',
      },
      {
        title: 'S.2 ENG P.2 Adamu _ sch. bullies',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S.2 ENG P.2 Adamu _ sch. bullies.pdf',
      },
      {
        title: 'S.2 ENG',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S.2 ENG.pdf',
      },
      {
        title: 'S.2 ENGI',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S.2 ENGI.pdf',
      },
      {
        title: 'S.2 ENGL P.2',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S.2 ENGL P.2.pdf',
      },
      {
        title: 'S.2 ENGLISH END OF TERM 1',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S.2 ENGLISH END OF TERM 1.pdf',
      },
      {
        title: 'S.2 ENGLISH MID TERM III EXAMS 2010',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S.2 ENGLISH MID TERM III EXAMS 2010.pdf',
      },
      {
        title: 'S.2 ENGLISH PASSAGE',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S.2 ENGLISH PASSAGE.pdf',
      },
      {
        title: 'S.2 ENGLL',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S.2 ENGLL.pdf',
      },
      {
        title: 'S.2 ENGS',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S.2 ENGS.pdf',
      },
      {
        title: 'S.2 GEOGRAPHY',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S.2 GEOGRAPHY.pdf',
      },
      {
        title: 'S.2 HISTORY',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S.2 HISTORY.pdf',
      },
      {
        title: 'S.2 Luganda Exercise',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S.2 Luganda Exercise.pdf',
      },
      {
        title: 'S.2 MILLENIUM BIO TEST 2021 PDF',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S.2 MILLENIUM BIO TEST 2021 PDF.pdf',
      },
      {
        title: 'S.2 Physics  Topical Questions - ALL Topics',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S.2 Physics  Topical Questions - ALL Topics.pdf',
      },
      {
        title: 'S.2 PHYSICS (3)',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S.2 PHYSICS (3).pdf',
      },
      {
        title: 'S.2 Physics EXAM. WEB',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S.2 Physics EXAM. WEB.pdf',
      },
      {
        title: 'S.2 Physics Topical Revision - Electrostatics',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S.2 Physics Topical Revision - Electrostatics.pdf',
      },
      {
        title: 'S.2 Physics Topical Revision - Light',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S.2 Physics Topical Revision - Light.pdf',
      },
      {
        title: 'S.2 Physics Topical Revision - Magnets',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S.2 Physics Topical Revision - Magnets.pdf',
      },
      {
        title: 'S.2 Physics Topical Revision - Mechanical Properties',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S.2 Physics Topical Revision - Mechanical Properties.pdf',
      },
      {
        title: 'S.2 Physics Topical Revision - Pressure',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S.2 Physics Topical Revision - Pressure.pdf',
      },
      {
        title: 'S.2 PHYSICS',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S.2 PHYSICS.pdf',
      },
      {
        title: 'S.2 TD HOLIDAY WORK',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S.2 TD HOLIDAY WORK.pdf',
      },
      {
        title: 'S.2-AGRICULTURE-EXAM',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S.2-AGRICULTURE-EXAM.pdf',
      },
      {
        title: 'S.2-BIOLOGY-EXAM',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S.2-BIOLOGY-EXAM.pdf',
      },
      {
        title: 'S.2-BIOLOGY-EXAM',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S.2-BIOLOGY-EXAM.pdf',
      },
      {
        title: 'S.2-CHEMISTRY-EXAM',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S.2-CHEMISTRY-EXAM.pdf',
      },
      {
        title: 'S.2-COMMERCE-EXAM',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S.2-COMMERCE-EXAM.pdf',
      },
      {
        title: 'S.2-COMPUTER-EXAM',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S.2-COMPUTER-EXAM.pdf',
      },
      {
        title: 'S.2-CRE-EXAM',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S.2-CRE-EXAM.pdf',
      },
      {
        title: 'S.2-ENGLISH-EXAM',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S.2-ENGLISH-EXAM.pdf',
      },
      {
        title: 'S.2-ENGLISH-WORK',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S.2-ENGLISH-WORK.pdf',
      },
      {
        title: 'S.2-ENTREPREURSHIP-EXAM',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S.2-ENTREPREURSHIP-EXAM.pdf',
      },
      {
        title: 'S.2-GEOGRAPHY-EXAM',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S.2-GEOGRAPHY-EXAM.pdf',
      },
      {
        title: 'S.2-HISTORY-EXAM',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S.2-HISTORY-EXAM.pdf',
      },
      {
        title: 'S.2-IRE-EXAM',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S.2-IRE-EXAM.pdf',
      },
      {
        title: 'S.2-KISWAHILI-EXAM',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S.2-KISWAHILI-EXAM.pdf',
      },
      {
        title: 'S.2-LITERATURE',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S.2-LITERATURE.pdf',
      },
      {
        title: 'S.2-LUGANDA-EXAM',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S.2-LUGANDA-EXAM.pdf',
      },
      {
        title: 'S.2-MATHEMATICS-QUESTIONS-FOR-REVISION',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S.2-MATHEMATICS-QUESTIONS-FOR-REVISION.pdf',
      },
      {
        title: 'S.2-MATHEMATICS',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S.2-MATHEMATICS.pdf',
      },
      {
        title: 'S.2-MTC-WORK',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S.2-MTC-WORK.pdf',
      },
      {
        title: 'S.2-PHYSICS-EXAM',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S.2-PHYSICS-EXAM.pdf',
      },
      {
        title: 'S.2-TECHNICAL-DRAWING-EXAM-',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S.2-TECHNICAL-DRAWING-EXAM-.pdf',
      },
      {
        title: 'S.2-Technical-Drawing-Work-1',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S.2-Technical-Drawing-Work-1.pdf',
      },
      {
        title: 'S2  CHEMISTRY HOLIDAY WORK',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S2  CHEMISTRY HOLIDAY WORK.pdf',
      },
      {
        title: 'S2 Algebraic fractions solutions',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S2 Algebraic fractions solutions.pdf',
      },
      {
        title: 's2 Algebraic fractions',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/s2 Algebraic fractions.pdf',
      },
      {
        title: 'S2 Biology (4)',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S2 Biology (4).pdf',
      },
      {
        title: 'S2 Business Math 1',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S2 Business Math 1.pdf',
      },
      {
        title: 'S2 Chem Holiday Work',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S2 Chem Holiday Work.pdf',
      },
      {
        title: 'S2 Curved mirrors Qns',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S2 Curved mirrors Qns.pdf',
      },
      {
        title: 'S2 English Holiday work',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S2 English Holiday work.pdf',
      },
      {
        title: 'S2 ENGLISH RECESS TERM',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S2 ENGLISH RECESS TERM.pdf',
      },
      {
        title: 's2 fractions solutions',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/s2 fractions solutions.pdf',
      },
      {
        title: 'S2 Fractions',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S2 Fractions.pdf',
      },
      {
        title: 'S2 FRENCH ACTIVITY',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S2 FRENCH ACTIVITY.pdf',
      },
      {
        title: 'S2 History (4)',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S2 History (4).pdf',
      },
      {
        title: 'S2 History P4 homework',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S2 History P4 homework.pdf',
      },
      {
        title: 'S2 Machines Qns',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S2 Machines Qns.pdf',
      },
      {
        title: 'S2 MATHS  WORK',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S2 MATHS  WORK.pdf',
      },
      {
        title: 'S2 maths set 2',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S2 maths set 2.pdf',
      },
      {
        title: 's2 phy holiday work',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/s2 phy holiday work.pdf',
      },
      {
        title: 'S2 Physics Topical test 1',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S2 Physics Topical test 1.pdf',
      },
      {
        title: 'S2 Physics Topical test 1',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S2 Physics Topical test 1.pdf',
      },
      {
        title: 's2 Recurring decimal',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/s2 Recurring decimal.pdf',
      },
      {
        title: 's2 sets part 1',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/s2 sets part 1.pdf',
      },
      {
        title: 's2 sets part 2 solutions',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/s2 sets part 2 solutions.pdf',
      },
      {
        title: 's2 sets part 2',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/s2 sets part 2.pdf',
      },
      {
        title: 's2 sets part1 solutions',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/s2 sets part1 solutions.pdf',
      },
      {
        title: 'S2 TD ASSIGNMENT ONE',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S2 TD ASSIGNMENT ONE.pdf',
      },
      {
        title: 'S2-Chem-Holiday-Work',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/S2-Chem-Holiday-Work.pdf',
      },
      {
        title: 'SENIOR TWO LUGANDA HOLIDAY WORK',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/SENIOR TWO LUGANDA HOLIDAY WORK.pdf',
      },
      {
        title: 'EDUCAN S.2 CBC CHEMISTRY GUIDE',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/EDUCAN S.2 CBC CHEMISTRY GUIDE.pdf',
      },
      {
        title: 'MATIGO S.2 CHEM 2022',
        description: 'Senior Two',
        price: 15000,
        link: 'https://freshteacher.software/MATIGO S.2 CHEM 2022.pdf',
      },
      {
        title: 'MATIGO S.2 PHY 2022',
        description: 'Senior Two',
        price: 25000,
        link: 'https://freshteacher.software/MATIGO S.2 PHY 2022.pdf',
      },
      {
        title: 'MATIGO S2 BIO 2022',
        description: 'Senior Two',
        price: 55000,
        link: 'https://freshteacher.software/MATIGO S2 BIO 2022.pdf',
      },
      {
        title: 'MATIGO S2 GEOG 2022',
        description: 'Senior Two',
        price: 2000,
        link: 'https://freshteacher.software/MATIGO S2 GEOG 2022.pdf',
      },{
        title: 'MATIGO S2 MATH 2022',
        description: 'Senior Two',
        price: 10000,
        link: 'https://freshteacher.software/MATIGO S2 MATH 2022.pdf',
      },
    ];

    setLessonNotes(sampleData);
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handlePreview = (note) => {
    setSelectedNote(note);
    setScrollToPdf(true);
  };

  const handleClosePreview = () => {
    setSelectedNote(null);
    setScrollToPdf(false);
  };

  const filteredNotes = lessonNotes.filter((note) => {
    const { title, description } = note;
    const query = searchQuery.toLowerCase();
    return title.toLowerCase().includes(query) || description.toLowerCase().includes(query);
  });

  return (
    <div style={{ padding: '20px' }}>
      <h1>Senior Two Class Past Papers</h1>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="Search this page..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <Row xs={1} sm={2} md={3} lg={4} xl={4} xxl={4} className="g-4">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note, index) => (
            <Col key={index}>
              <Card className="h-100 custom-card">
                <Card.Body>
                  <Card.Title>{note.title}</Card.Title>
                  <Card.Text>{note.description}</Card.Text>
                  {note.price !== 0 && (
                    <span
                      className="free-banner"
                      style={{
                        position: 'absolute',
                        top: '0',
                        right: '0',
                        backgroundColor: '#28a745',
                        color: '#fff',
                        padding: '1px 10px',
                        fontWeight: 'bold',
                        fontStyle: 'italic',
                        fontSize: '12px',
                        borderRadius: '8px',
                      }}
                    >
                      <strike>{note.price.toLocaleString()}/=</strike> FREE
                    </span>
                  )}
                  <Button
                    variant="primary"
                    style={{ width: '100%', marginBottom: '10px' }}
                    onClick={() => handlePreview(note)}
                  >
                    <span style={{ marginRight: '10px' }}>
                      <strong>Preview</strong> <FiEye />
                    </span>
                  </Button>
                  <Button
                    variant="primary"
                    style={{ width: '100%', marginBottom: '10px' }}
                    onClick={() => {
                      if (note.price !== 0) {
                        window.location.href = note.link;
                      }
                    }}
                  >
                    {note.price !== 0 ? (
                      <>
                        <span style={{ marginLeft: '10px' }}>
                          <strong>Download</strong> <FiDownload />
                        </span>
                      </>
                    ) : (
                      'FREE'
                    )}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p style={{ color: 'red' }}>No Results Found! Please Try Searching Again Using Different Keywords...</p>
        )}
      </Row>
      {selectedNote && (
        <PDFViewer fileUrl={selectedNote.link} scrollToPdf={scrollToPdf} onClose={handleClosePreview} />
      )}
    </div>
  );
};

export default SeniorTwoClassPastPapers;
