import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FiDownload, FiEye } from 'react-icons/fi';
import PDFViewer from './PDFViewer';

const SeniorSixClassPastPapers = () => {
  const [lessonNotes, setLessonNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNote, setSelectedNote] = useState(null);
  const [scrollToPdf, setScrollToPdf] = useState(false);

  useEffect(() => {
    const sampleData = [
      {
        title: 'A-level-Mathematics-Virtual-Seminar-27th-Feb.-2021',
        description: 'Senior Six',
        price: 10000,
        link: 'https://freshteacher.software/A-level-Mathematics-Virtual-Seminar-27th-Feb.-2021.pdf',
      },
      {
        title: 'A. MATHS P.1',
        description: 'Senior Six',
        price: 15000,
        link: 'https://freshteacher.software/A. MATHS P.1.pdf',
      },
      {
        title: 'A. SUB-MATHS P.1',
        description: 'Senior Six',
        price: 25000,
        link: 'https://freshteacher.software/A. SUB-MATHS P.1.pdf',
      },
      {
        title: 'CRETA POST MOCK P.1 2022',
        description: 'Senior Six',
        price: 55000,
        link: 'https://freshteacher.software/CRETA POST MOCK P.1 2022.pdf',
      },
      {
        title: 'CRETA POST MOCK P.2 2022',
        description: 'Senior Six',
        price: 2000,
        link: 'https://freshteacher.software/CRETA POST MOCK P.2 2022.pdf',
      },{
        title: 'DIVINITY P2 NOTES-A LEVEL',
        description: 'Senior Six',
        price: 10000,
        link: 'https://freshteacher.software/DIVINITY P2 NOTES-A LEVEL.PDF',
      },
      {
        title: 'ECON 1 A',
        description: 'Senior Six',
        price: 15000,
        link: 'https://freshteacher.software/ECON 1 A.pdf',
      },
      {
        title: 'ECON 1 RES 2022.',
        description: 'Senior Six',
        price: 25000,
        link: 'https://freshteacher.software/ECON 1 RES 2022..pdf',
      },
      {
        title: 'ECON 2 A',
        description: 'Senior Six',
        price: 55000,
        link: 'https://freshteacher.software/ECON 2 A.pdf',
      },
      {
        title: 'Economics paper 1',
        description: 'Senior Six',
        price: 2000,
        link: 'https://freshteacher.software/Economics paper 1.pdf',
      },{
        title: 'Economics paper 2',
        description: 'Senior Six',
        price: 10000,
        link: 'https://freshteacher.software/Economics paper 2.pdf',
      },
      {
        title: 'ECONOMICS SEMINAR GUIDE 2022- edited',
        description: 'Senior Six',
        price: 15000,
        link: 'https://freshteacher.software/ECONOMICS SEMINAR GUIDE 2022- edited.pdf',
      },
      {
        title: 'ECONOMICS-2',
        description: 'Senior Six',
        price: 25000,
        link: 'https://freshteacher.software/ECONOMICS-2.pdf',
      },
      {
        title: 'ECONOMICS-P.1-INTERNAL-MOCKS-2019',
        description: 'Senior Six',
        price: 55000,
        link: 'https://freshteacher.software/ECONOMICS-P.1-INTERNAL-MOCKS-2019.pdf',
      },
      {
        title: 'ECONOMICS-P.1-INTERNAL-MOCKS-2019',
        description: 'Senior Six',
        price: 2500,
        link: 'https://freshteacher.software/ECONOMICS-P.1-INTERNAL-MOCKS-2019.pdf',
      },{
        title: 'Economics-Pp1',
        description: 'Senior Six',
        price: 37000,
        link: 'https://freshteacher.software/Economics-Pp1.pdf',
      },
      {
        title: 'GEOG 1 RESOURCE 2022.',
        description: 'Senior Six',
        price: 13000,
        link: 'https://freshteacher.software/GEOG 1 RESOURCE 2022..pdf',
      },
      {
        title: 'GEOG INTRODUCTION FORM ONE NOTES',
        description: 'Senior Six',
        price: 45000,
        link: 'https://freshteacher.software/GEOG INTRODUCTION FORM ONE NOTES.pdf',
      },
      {
        title: 'GEOG OBJECTIVE QN BANK',
        description: 'Senior Six',
        price: 57500,
        link: 'https://freshteacher.software/GEOG OBJECTIVE QN BANK.pdf',
      },
      {
        title: 'GEOGRAPHY P250123WAKISSHA GUIDES 2022',
        description: 'Senior Six',
        price: 24800,
        link: 'https://freshteacher.software/GEOGRAPHY P250123WAKISSHA GUIDES 2022.pdf',
      },{
        title: 'IRE 2 A',
        description: 'Senior Six',
        price: 86000,
        link: 'https://freshteacher.software/IRE 2 A.pdf',
      },
      {
        title: 'IRE 3 A',
        description: 'Senior Six',
        price: 11000,
        link: 'https://freshteacher.software/IRE 3 A.pdf',
      },
      {
        title: 'IRE 4 A',
        description: 'Senior Six',
        price: 29000,
        link: 'https://freshteacher.software/IRE 4 A.pdf',
      },
      {
        title: 'IRE Paper 1 ADVANCED LEVEL QUESTIONS FOR DISCUSSION',
        description: 'Senior Six',
        price: 95000,
        link: 'https://freshteacher.software/IRE Paper 1 ADVANCED LEVEL QUESTIONS FOR DISCUSSION.pdf',
      },
      {
        title: 'JINJA MOCK CHEMISTRY',
        description: 'Senior Six',
        price: 29000,
        link: 'https://freshteacher.software/JINJA MOCK CHEMISTRY.pdf',
      },{
        title: 'jjeb 2022 uace',
        description: 'Senior Six',
        price: 12400,
        link: 'https://freshteacher.software/jjeb 2022 uace.pdf',
      },
      {
        title: 'JJEB GEOG 3 2022',
        description: 'Senior Six',
        price: 15800,
        link: 'https://freshteacher.software/JJEB GEOG 3 2022.pdf',
      },
      {
        title: 'KISWAHILI 2 A',
        description: 'Senior Six',
        price: 82000,
        link: 'https://freshteacher.software/KISWAHILI 2 A.pdf',
      },
      {
        title: 'kiswahili paper 1 WAKISSHA.pdf',    
        description: 'Senior Six',
        price: 53000,
        link: 'https://freshteacher.software/kiswahili paper 1 WAKISSHA.pdf',    
        },
      {
        title: 'MATH 1 A',
        description: 'Senior Six',
        price: 10000,
        link: 'https://freshteacher.software/MATH 1 A.pdf',
      },
      {
        title: 'MATH 2 A',
        description: 'Senior Six',
        price: 15000,
        link: 'https://freshteacher.software/MATH 2 A.pdf',
      },
      {
        title: 'math pp1 (1)',
        description: 'Senior Six',
        price: 25000,
        link: 'https://freshteacher.software/math pp1 (1).pdf',
      },
      {
        title: 'MATHS 1 RESOURCE MOCK 2022 VHS',
        description: 'Senior Six',
        price: 55000,
        link: 'https://freshteacher.software/MATHS 1 RESOURCE MOCK 2022 VHS.pdf',
      },
      {
        title: 'Maths applied pp2',
        description: 'Senior Six',
        price: 2000,
        link: 'https://freshteacher.software/Maths applied pp2.pdf',
      },{
        title: 'MATHS PAPER 2',
        description: 'Senior Six',
        price: 10000,
        link: 'https://freshteacher.software/MATHS PAPER 2.pdf',
      },
      {
        title: 'MATHS-1-UACE',
        description: 'Senior Six',
        price: 15000,
        link: 'https://freshteacher.software/MATHS-1-UACE.pdf',
      },
      {
        title: 'NEW SOLUTION GUIDE44777',
        description: 'Senior Six',
        price: 25000,
        link: 'https://freshteacher.software/NEW SOLUTION GUIDE44777.pdf',
      },
      {
        title: 'NSAMBYA',
        description: 'Senior Six',
        price: 55000,
        link: 'https://freshteacher.software/NSAMBYA.pdf',
      },
      {
        title: 'Paper-1-A-level-Math-Virtual-Seminar-27th-Feb.-2021',
        description: 'Senior Six',
        price: 2000,
        link: 'https://freshteacher.software/Paper-1-A-level-Math-Virtual-Seminar-27th-Feb.-2021.pdf',
      },{
        title: 'PHYSICAL CHEMISTRY',
        description: 'Senior Six',
        price: 10000,
        link: 'https://freshteacher.software/PHYSICAL CHEMISTRY.pdf',
      },
      {
        title: 'S.6 ENT P2',
        description: 'Senior Six',
        price: 15000,
        link: 'https://freshteacher.software/S.6 ENT P2.pdf',
      },
      {
        title: 'S.6 ENTREPRENEURSHIP 1',
        description: 'Senior Six',
        price: 25000,
        link: 'https://freshteacher.software/S.6 ENTREPRENEURSHIP 1.pdf',
      },
      {
        title: 'S.6 ENTREPRENUERSHIP 3',
        description: 'Senior Six',
        price: 55000,
        link: 'https://freshteacher.software/S.6 ENTREPRENUERSHIP 3.pdf',
      },
      {
        title: 'S.6 PHYSICS SEMINAR 2022',
        description: 'Senior Six',
        price: 2500,
        link: 'https://freshteacher.software/S.6 PHYSICS SEMINAR 2022.pdf',
      },{
        title: 'S.6 MATHS LADDER PROBLEMS NOTES GHS',
        description: 'Senior Six',
        price: 37000,
        link: 'https://freshteacher.software/S.6 MATHS LADDER PROBLEMS NOTES GHS.pdf',
      },
      {
        title: 'S.6 SET-1-Sub Math-MOCK EXAM-2022-three',
        description: 'Senior Six',
        price: 13000,
        link: 'https://freshteacher.software/S.6 SET-1-Sub Math-MOCK EXAM-2022-three.pdf',
      },
      {
        title: 'S.6 SUB MATH REVISION PAST PAPERS (ecolebooks.com)',
        description: 'Senior Six',
        price: 45000,
        link: 'https://freshteacher.software/S.6 SUB MATH REVISION PAST PAPERS (ecolebooks.com).pdf',
      },
      {
        title: 'S.6_Kiswahili _1589922343',
        description: 'Senior Six',
        price: 57500,
        link: 'https://freshteacher.software/S.6_Kiswahili _1589922343.pdf',
      },
      {
        title: 'S.6-Applied-Maths-Past-Paper',
        description: 'Senior Six',
        price: 24800,
        link: 'https://freshteacher.software/S.6-Applied-Maths-Past-Paper.pdf',
      },{
        title: 'S.6-Mathematics-Paper-1-Past-paer',
        description: 'Senior Six',
        price: 86000,
        link: 'https://freshteacher.software/S.6-Mathematics-Paper-1-Past-paer.pdf',
      },
      {
        title: 'S.6-PURE-MATHS-QUESTION-PAPER',
        description: 'Senior Six',
        price: 11000,
        link: 'https://freshteacher.software/S.6-PURE-MATHS-QUESTION-PAPER.pdf',
      },
      {
        title: 'S6 MATH PAPER 1 TEST1-2020',
        description: 'Senior Six',
        price: 29000,
        link: 'https://freshteacher.software/S6 MATH PAPER 1 TEST1-2020.pdf',
      },
      {
        title: 'S6 Math Probability Revision Qns',
        description: 'Senior Six',
        price: 95000,
        link: 'https://freshteacher.software/S6 Math Probability Revision Qns.pdf',
      },
      {
        title: 'S6 Subsid Maths',
        description: 'Senior Six',
        price: 29000,
        link: 'https://freshteacher.software/S6 Subsid Maths.pdf',
      },{
        title: 'S6_ kiswahili WAKISSHA mock0',
        description: 'Senior Six',
        price: 12400,
        link: 'https://freshteacher.software/S6_ kiswahili WAKISSHA mock0.pdf',
      },
      {
        title: 'S6-DIV2Gospel-of-John',
        description: 'Senior Six',
        price: 15800,
        link: 'https://freshteacher.software/S6-DIV2Gospel-of-John.pdf',
      },
      {
        title: 'S6.Wakissha-Marking-Guide-UACE-Economics-Paper-2',
        description: 'Senior Six',
        price: 82000,
        link: 'https://freshteacher.software/S6.Wakissha-Marking-Guide-UACE-Economics-Paper-2.pdf',
      },
      {
        title: 'seminar S.6 P1 PHY SEETA HS GREEN',  
        description: 'Senior Six',
        price: 53000,
        link: 'https://freshteacher.software/seminar S.6 P1 PHY SEETA HS GREEN.pdf',  
          },
      {
        title: 'SUB MATH PAPER 1',
        description: 'Senior Six',
        price: 13000,
        link: 'https://freshteacher.software/SUB MATH PAPER 1.pdf',
      },{
        title: 'sub maths seminar qns 2019, ndejje',
        description: 'Senior Six',
        price: 10000,
        link: 'https://freshteacher.software/sub maths seminar qns 2019, ndejje.pdf',
      },
      {
        title: 'TAEB A-LEVEL BIO-3 PAPER & CONFIDENTIAL-2022',
        description: 'Senior Six',
        price: 15000,
        link: 'https://freshteacher.software/TAEB A-LEVEL BIO-3 PAPER & CONFIDENTIAL-2022.pdf',
      },
      {
        title: 'the book of psalms div 1_1590992413',
        description: 'Senior Six',
        price: 25000,
        link: 'https://freshteacher.software/thebookofpsalmsdiv1_1590992413.pdf',
      },
      {
        title: 'UACE Economics1',
        description: 'Senior Six',
        price: 55000,
        link: 'https://freshteacher.software/UACE Economics1.pdf',
      },
      {
        title: 'UACE Mathematics2',
        description: 'Senior Six',
        price: 2000,
        link: 'https://freshteacher.software/UACE Mathematics2.pdf',
      },{
        title: 'UACE P425-2 Maths 2020 UNEB(0)',
        description: 'Senior Six',
        price: 10000,
        link: 'https://freshteacher.software/UACE P425-2 Maths 2020 UNEB(0).pdf',
      },
      {
        title: 'UACE PURE MATH P1',
        description: 'Senior Six',
        price: 15000,
        link: 'https://freshteacher.software/UACE PURE MATH P1.pdf',
      },
      {
        title: 'UACE-ECONOMICS-2-Past-papers-1',
        description: 'Senior Six',
        price: 25000,
        link: 'https://freshteacher.software/UACE-ECONOMICS-2-Past-papers-1.pdf',
      },
      {
        title: 'UACE-ENT-1-Past-paers',
        description: 'Senior Six',
        price: 55000,
        link: 'https://freshteacher.software/UACE-ENT-1-Past-paers.pdf',
      },
      {
        title: 'UACE-ENT-2-Past-papers',
        description: 'Senior Six',
        price: 2000,
        link: 'https://freshteacher.software/UACE-ENT-2-Past-papers.pdf',
      },{
        title: 'UACE-ENT-3-Past-papers',
        description: 'Senior Six',
        price: 10000,
        link: 'https://freshteacher.software/UACE-ENT-3-Past-papers.pdf',
      },
      {
        title: 'umta 2 marking guide',
        description: 'Senior Six',
        price: 15000,
        link: 'https://freshteacher.software/umta 2 marking guide.pdf',
      },
      {
        title: 'UMTA mock Math guide S6 p1 2022',
        description: 'Senior Six',
        price: 25000,
        link: 'https://freshteacher.software/UMTA mock Math guide S6 p1 2022.pdf',
      },
      {
        title: 'UMTA P510 P1',
        description: 'Senior Six',
        price: 55000,
        link: 'https://freshteacher.software/UMTA P510 P1.pdf',
      },
      {
        title: 'UMTA PHY1 UACE GUIDE 2022',
        description: 'Senior Six',
        price: 2500,
        link: 'https://freshteacher.software/UMTA PHY1 UACE GUIDE 2022.pdf',
      },{
        title: 'UMTA UACE Entre 1',
        description: 'Senior Six',
        price: 37000,
        link: 'https://freshteacher.software/UMTA UACE Entre 1.pdf',
      },
      {
        title: 'UMTA UACE Entre 2',
        description: 'Senior Six',
        price: 13000,
        link: 'https://freshteacher.software/UMTA UACE Entre 2.pdf',
      },
      {
        title: 'UMTA UACE Entre 3',
        description: 'Senior Six',
        price: 45000,
        link: 'https://freshteacher.software/UMTA UACE Entre 3.pdf',
      },
      {
        title: 'unanse 2',
        description: 'Senior Six',
        price: 57500,
        link: 'https://freshteacher.software/unanse 2.pdf',
      },
      {
        title: 'WAKATA-MOCKS-2020',
        description: 'Senior Six',
        price: 24800,
        link: 'https://freshteacher.software/WAKATA-MOCKS-2020.pdf',
      },{
        title: 'wakisha Ent 1',
        description: 'Senior Six',
        price: 86000,
        link: 'https://freshteacher.software/wakisha Ent 1.pdf',
      },
      {
        title: 'wakisha Ent 2',
        description: 'Senior Six',
        price: 11000,
        link: 'https://freshteacher.software/wakisha Ent 2.pdf',
      },
      {
        title: 'wakisha Ent 3',
        description: 'Senior Six',
        price: 29000,
        link: 'https://freshteacher.software/wakisha Ent 3.pdf',
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
      <h1>Senior Six Class Past Papers</h1>
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

export default SeniorSixClassPastPapers;
