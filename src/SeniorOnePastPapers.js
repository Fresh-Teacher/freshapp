import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FiDownload, FiEye } from 'react-icons/fi';
import PDFViewer from './PDFViewer';

const SeniorOneClassPastPapers = () => {
  const [lessonNotes, setLessonNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNote, setSelectedNote] = useState(null);
  const [scrollToPdf, setScrollToPdf] = useState(false);

  useEffect(() => {
    const sampleData = [
      {
        title: 'ART  week1',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/ART  week1.pdf',
      },
      {
        title: 'CBC Chemistry S.1',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/CBC Chemistry S.1.pdf',
      },
      {
        title: 'Chem S.1 E.o.T 2 C.B.C Exam',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/Chem S.1 E.o.T 2 C.B.C Exam.pdf',
      },
      {
        title: 'F1 END-TERM 3 EXAMS',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/F1 END-TERM 3 EXAMS.pdf',
      },
      {
        title: 'F1 SET 2 ALL SUBJECTS',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/F1 SET 2 ALL SUBJECTS.pdf',
      },
      {
        title: 'FORM 1 END OF TERM 2 EXAMS',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/FORM 1 END OF TERM 2 EXAMS.pdf',
      },
      {
        title: 'FORM 1 SET 1 ASSIGNMENT-1',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/FORM 1 SET 1 ASSIGNMENT-1.pdf',
      },
      {
        title: 'FORM 1 SET 2 ASSIGNMENT',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/FORM 1 SET 2 ASSIGNMENT.pdf',
      },
      {
        title: 'FORM 1 SET 3 EXAMS',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/FORM 1 SET 3 EXAMS.pdf',
      },
      {
        title: 'KCB S.1 BIOLOGY - ACTIVITY 2  2020',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/KCB S.1 BIOLOGY - ACTIVITY 2  2020.pdf',
      },
      {
        title: 'Kitende S1 Chem Covid19 Qns',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/Kitende S1 Chem Covid19 Qns.pdf',
      },
      {
        title: 'Kitende S1 Food and Nutrition',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/Kitende S1 Food and Nutrition.pdf',
      },
      {
        title: 'mathematics S1 ACTIVITY',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/mathematics S1 ACTIVITY.pdf',
      },
      {
        title: 'S 1 PHY LECTURE 15',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/S 1 PHY LECTURE 15.pdf',
      },
      {
        title: 'S_1_activity_of_integration_1_introduction_to_biology_term_1_2020 (3)',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/S_1_activity_of_integration_1_introduction_to_biology_term_1_2020 (3).pdf',
      },
      {
        title: 'S.1  Entrepreneurship',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/S.1  Entrepreneurship.pdf',
      },
      {
        title: 'S.1  IRE 20 APRIL 2020',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/S.1  IRE 20 APRIL 2020.pdf',
      },
      {
        title: 'S.1 BIOLOGY',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/S.1 BIOLOGY.pdf',
      },
      {
        title: 'S.1 Commerce',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/S.1 Commerce.pdf',
      },
      {
        title: 'S.1 Coronavirus Break Activity 3A',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/S.1 Coronavirus Break Activity 3A.pdf',
      },
      {
        title: 'S.1 CRE HOLIDAY PACKAGE',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/S.1 CRE HOLIDAY PACKAGE.pdf',
      },
      {
        title: 'S.1 END TERM III ENG',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/S.1 END TERM III ENG.pdf',
      },
      {
        title: 'S.1 ENG',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/S.1 ENG.pdf',
      },
      {
        title: 'S.1 ENGI',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/S.1 ENGI.pdf',
      },
      {
        title: 'S.1 English Passage 2015',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/S.1 English Passage 2015.pdf',
      },
      {
        title: 'S.1 ENGLL',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/S.1 ENGLL.pdf',
      },
      {
        title: 'S.1 ENGS',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/S.1 ENGS.pdf',
      },
      {
        title: 'S.1 GEOGRAPHY HOLIDAY PACKAGE',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/S.1 GEOGRAPHY HOLIDAY PACKAGE.pdf',
      },
      {
        title: 'S.1 HISTORY AND POLITICAL EDUCATION',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/S.1 HISTORY AND POLITICAL EDUCATION.pdf',
      },
      {
        title: 'S.1 Holiday package',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/S.1 Holiday package.pdf',
      },
      {
        title: 'S.1 ICT Activity 3',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/S.1 ICT Activity 3.pdf',
      },
      {
        title: 'S.1 ICT Introduction to ICT Activity 1',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/S.1 ICT Introduction to ICT Activity 1.pdf',
      },
      {
        title: 'S.1 ICT Introduction to ICT Activity 2 (2)',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/S.1 ICT Introduction to ICT Activity 2 (2).pdf',
      },
      {
        title: 'S.1 KISWAHILI',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/S.1 KISWAHILI.pdf',
      },
      {
        title: 'S.1 LITERATURE WEEK ONE',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/S.1 LITERATURE WEEK ONE.pdf',
      },
      {
        title: 'S.1 math workbook 2020',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/S.1 math workbook 2020.pdf',
      },
      {
        title: 'S.1 Mathematics Work -NGS',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/S.1 Mathematics Work -NGS.pdf',
      },
      {
        title: 'S.1 Mathematics',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/S.1 Mathematics.pdf',
      },
      {
        title: 'S.1 PHYSICS ONE MONTH HOLIDAY WORK',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/S.1 PHYSICS ONE MONTH HOLIDAY WORK.pdf',
      },
      {
        title: 'S.1 TD HOLIDAY WORK',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/S.1 TD HOLIDAY WORK.pdf',
      },
      {
        title: 'S.1-ENTREpreneurship',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/S.1-ENTREpreneurship.pdf',
      },
      {
        title: 'S.1-Physical-Education-activity-of-integration.',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/S.1-Physical-Education-activity-of-integration..pdf',
      },
      {
        title: 'S.2 END TERM II ENG',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/S.2 END TERM II ENG.pdf',
      },
      {
        title: 'S.2 END TERM III ENG P.2',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/S.2 END TERM III ENG P.2.pdf',
      },
      {
        title: 'S.I GEOG  RECESS WORK',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/S.I GEOG  RECESS WORK.pdf',
      },
      {
        title: 'S1 (English language)',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/S1 (English language).pdf',
      },
      {
        title: 'S1 ACTIVITY 1 2020',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/S1 ACTIVITY 1 2020.pdf',
      },
      {
        title: 'S1 Biology activity 2',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/S1 Biology activity 2.pdf',
      },
      {
        title: 'S1 BIOLOGY CBC 2022 T2',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/S1 BIOLOGY CBC 2022 T2.pdf',
      },
      {
        title: 'S1 BIOLOGY WEEK 2',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/S1 BIOLOGY WEEK 2.pdf',
      },
      {
        title: 'S1 chemistry Activity',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/S1 chemistry Activity.pdf',
      },
      {
        title: 'S1 chemistry term 1 recess exercise-1',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/S1 chemistry term 1 recess exercise-1.pdf',
      },
      {
        title: 'S1 CHEMISTRY WEEK 2',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/S1 CHEMISTRY WEEK 2.pdf',
      },
      {
        title: 'S1 ENG',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/S1 ENG.pdf',
      },
      {
        title: 'S1 ENGLISH WEEK ONE',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/S1 ENGLISH WEEK ONE.pdf',
      },
      {
        title: 'S1 EXAMS',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/S1 EXAMS.pdf',
      },
      {
        title: 'S1 Geography',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/S1 Geography.pdf',
      },
      {
        title: 'S1 Kiswahili Holiday activities',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/S1 Kiswahili Holiday activities.pdf',
      },
      {
        title: 'S1 Lit Holiday work',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/S1 Lit Holiday work.pdf',
      },
      {
        title: 'S1 package',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/S1 package.pdf',
      },
      {
        title: 's1 PE homework',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/s1 PE homework.pdf',
      },
      {
        title: 'S1 TEST BIOLOGY',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/S1 TEST BIOLOGY.pdf',
      },
      {
        title: 'S1 WORK',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/S1 WORK.pdf',
      },
      {
        title: 'S1-Geogrraphy-Activity',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/S1-Geogrraphy-Activity.pdf',
      },
      {
        title: 'S1-HISTORY-ACTIVITY-OF-INTEGRATION',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/S1-HISTORY-ACTIVITY-OF-INTEGRATION.pdf',
      },
      {
        title: 'mathematics S1 ACTIVITY',
        description: 'Senior One',
        price: 10000,
        link: 'https://freshteacher.software/mathematics S1 ACTIVITY.pdf',
      },
      {
        title: 'S.1-HISTORY and P.E-Sources-of-History-B-MF',
        description: 'Senior One',
        price: 15000,
        link: 'https://freshteacher.software/S.1-HISTORY and P.E-Sources-of-History-B-MF.pdf',
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
      <h1>Senior One Class Past Papers</h1>
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

export default SeniorOneClassPastPapers;
