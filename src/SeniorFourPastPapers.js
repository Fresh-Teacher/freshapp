import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FiDownload, FiEye } from 'react-icons/fi';
import PDFViewer from './PDFViewer';

const SeniorFourClassPastPapers = () => {
  const [lessonNotes, setLessonNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNote, setSelectedNote] = useState(null);
  const [scrollToPdf, setScrollToPdf] = useState(false);

  useEffect(() => {
    const sampleData = [
      {
        title: '2020_KINGS_COLLEGE_BUDO_S4_MATHEMATICS_PAPER_1_PRE_UNEB_TEST_2',
        description: 'Senior Four',
        price: 10000,
        link: 'https://freshteacher.software/2020_KINGS_COLLEGE_BUDO_S4_MATHEMATICS_PAPER_1_PRE_UNEB_TEST_2.pdf',
      },
      {
        title: 'CBC BIOLOGY GUIDE',
        description: 'Senior Four',
        price: 15000,
        link: 'https://freshteacher.software/CBC BIOLOGY GUIDE.pdf',
      },
      {
        title: 'Chem paper3 Olevel 2022',
        description: 'Senior Four',
        price: 25000,
        link: 'https://freshteacher.software/Chem paper3 Olevel 2022.pdf',
      },
      {
        title: 'Chem paper3 Olevel 2022',
        description: 'Senior Four',
        price: 55000,
        link: 'https://freshteacher.software/Chem paper3 Olevel 2022.pdf',
      },
      {
        title: 'COMM 1 O',
        description: 'Senior Four',
        price: 2000,
        link: 'https://freshteacher.software/COMM 1 O.pdf',
      },{
        title: 'COMMERCE-1',
        description: 'Senior Four',
        price: 10000,
        link: 'https://freshteacher.software/COMMERCE-1.pdf',
      },
      {
        title: 'Commerce-2',
        description: 'Senior Four',
        price: 15000,
        link: 'https://freshteacher.software/Commerce-2.pdf',
      },
      {
        title: 'COMMERCE',
        description: 'Senior Four',
        price: 25000,
        link: 'https://freshteacher.software/COMMERCE.pdf',
      },
      {
        title: 'Elementary Physics new version',
        description: 'Senior Four',
        price: 55000,
        link: 'https://freshteacher.software/Elementary Physics new version.pdf',
      },
      {
        title: 'ENT-S.5',
        description: 'Senior Four',
        price: 2000,
        link: 'https://freshteacher.software/ENT-S.5.pdf',
      },{
        title: 'ENT.-QUESTIONS-AND-ANSWERS',
        description: 'Senior Four',
        price: 10000,
        link: 'https://freshteacher.software/ENT.-QUESTIONS-AND-ANSWERS.pdf',
      },
      {
        title: 'GEOG PAPER 3-UGANDA AND FIELDWORK',
        description: 'Senior Four',
        price: 15000,
        link: 'https://freshteacher.software/GEOG PAPER 3-UGANDA AND FIELDWORK.pdf',
      },
      {
        title: 'Geogg 1 2022',
        description: 'Senior Four',
        price: 25000,
        link: 'https://freshteacher.software/Geogg 1 2022.pdf',
      },
      {
        title: 'geography pp2 olevel JJEB guide n qn',
        description: 'Senior Four',
        price: 55000,
        link: 'https://freshteacher.software/geography pp2 olevel JJEB guide n qn.pdf',
      },
      {
        title: 'IRE PAPER 1 O-LEVEL PRE ISLAMIC ARABIA SUMMARISED POINTS-1',
        description: 'Senior Four',
        price: 2500,
        link: 'https://freshteacher.software/IRE PAPER 1 O-LEVEL PRE ISLAMIC ARABIA SUMMARISED POINTS-1',
      },{
        title: 'Georgraphy Syllabus',
        description: 'Senior Four',
        price: 37000,
        link: 'https://freshteacher.software/Georgraphy Syllabus.pdf',
      },
      {
        title: 'JJEB GEOG 2 UCE 2022',
        description: 'Senior Four',
        price: 13000,
        link: 'https://freshteacher.software/JJEB GEOG 2 UCE 2022.pdf',
      },
      {
        title: 'JJEB GEOG 2 UCE',
        description: 'Senior Four',
        price: 45000,
        link: 'https://freshteacher.software/JJEB GEOG 2 UCE.pdf',
      },
      {
        title: 'JJEB GEOG 3 2022 MARKING GUIDE',
        description: 'Senior Four',
        price: 24800,
        link: 'https://freshteacher.software/JJEB GEOG 3 2022 MARKING GUIDE.pdf',
      },
      {
        title: 'MATH 1 O',
        description: 'Senior Four',
        price: 86000,
        link: 'https://freshteacher.software/MATH 1 O.pdf',
      },
      {
        title: 'MATH 2 O',
        description: 'Senior Four',
        price: 11000,
        link: 'https://freshteacher.software/MATH 2 O.pdf',
      },
      {
        title: 'Math Pp1',
        description: 'Senior Four',
        price: 29000,
        link: 'https://freshteacher.software/Math Pp1.pdf',
      },
      {
        title: 'Math Pp2',
        description: 'Senior Four',
        price: 95000,
        link: 'https://freshteacher.software/Math Pp2.pdf',
      },
      {
        title: 'MATH TEST F2',
        description: 'Senior Four',
        price: 10000,
        link: 'https://freshteacher.software/MATH TEST F2.pdf',
      },
      {
        title: 'MATHEMATICS_456_Paper_1,_2022_HOIMA_DIOCESE_EXAMINATIONS_BOARD',
        description: 'Senior Four',
        price: 15000,
        link: 'https://freshteacher.software/MATHEMATICS_456_Paper_1,_2022_HOIMA_DIOCESE_EXAMINATIONS_BOARD.pdf',
      },
      {
        title: 'maths S.4 p1 uce 2022',
        description: 'Senior Four',
        price: 25000,
        link: 'https://freshteacher.software/maths S.4 p1 uce 2022.pdf',
      },
      {
        title: 'maths uce p2 2022',
        description: 'Senior Four',
        price: 55000,
        link: 'https://freshteacher.software/maths uce p2 2022.pdf',
      },
      {
        title: 'MATIGO MOCKS 2022 PHY1',
        description: 'Senior Four',
        price: 2000,
        link: 'https://freshteacher.software/MATIGO MOCKS 2022 PHY1.pdf',
      },{
        title: 'My MG Maths 1 uce 2022 Section B',
        description: 'Senior Four',
        price: 10000,
        link: 'https://freshteacher.software/My MG Maths 1 uce 2022 Section B.pdf',
      },
      {
        title: 'NEREB 2022 GEOG 1',
        description: 'Senior Four',
        price: 15000,
        link: 'https://freshteacher.software/NEREB 2022 GEOG 1.pdf',
      },
      {
        title: 'NEW CURRR EXAM(2)',
        description: 'Senior Four',
        price: 25000,
        link: 'https://freshteacher.software/NEW CURRR EXAM(2).pdf',
      },
      {
        title: 'O MATHS P2',
        description: 'Senior Four',
        price: 55000,
        link: 'https://freshteacher.software/O MATHS P2.pdf',
      },
      {
        title: 'Phy p3 2022',
        description: 'Senior Four',
        price: 2000,
        link: 'https://freshteacher.software/Phy p3 2022.pdf',
      },{
        title: 'S.4  MATH TEST1-2020',
        description: 'Senior Four',
        price: 10000,
        link: 'https://freshteacher.software/S.4  MATH TEST1-2020.pdf',
      },
      {
        title: 'S.4 COMMERCE RESOURCE MOCK 2019 (ecolebooks.com)(1)',
        description: 'Senior Four',
        price: 15000,
        link: 'https://freshteacher.software/S.4 COMMERCE RESOURCE MOCK 2019 (ecolebooks.com)(1).pdf',
      },
      {
        title: 'S.4 COMMERCEJINJA JOINT MOCK 2019 - MARKING GUIDE (ecolebooks.com)',
        description: 'Senior Four',
        price: 25000,
        link: 'https://freshteacher.software/S.4 COMMERCEJINJA JOINT MOCK 2019 - MARKING GUIDE (ecolebooks.com).pdf',
      },
      {
        title: 'S.4 MATH TEST3-2020-3',
        description: 'Senior Four',
        price: 55000,
        link: 'https://freshteacher.software/S.4 MATH TEST3-2020-3.pdf',
      },
      {
        title: 'S4-GEOGRAPHY-2',
        description: 'Senior Four',
        price: 2500,
        link: 'https://freshteacher.software/S4-GEOGRAPHY-2.pdf',
      },{
        title: 'SectionA UCE MTC 1 2022 My MG',
        description: 'Senior Four',
        price: 37000,
        link: 'https://freshteacher.software/SectionA UCE MTC 1 2022 My MG.pdf',
      },
      {
        title: 'STANDARD HIGH SCHOOL – ZZANA S.4 KISWAHILI EXAMINATION',
        description: 'Senior Four',
        price: 13000,
        link: 'https://freshteacher.software/STANDARD HIGH SCHOOL – ZZANA S.4 KISWAHILI EXAMINATION.pdf',
      },
      {
        title: 'TAEB PHY3 O 22',
        description: 'Senior Four',
        price: 45000,
        link: 'https://freshteacher.software/TAEB PHY3 O 22.pdf',
      },
      {
        title: 'UCE 553 2 2022',
        description: 'Senior Four',
        price: 57500,
        link: 'https://freshteacher.software/UCE 553 2 2022.pdf',
      },
      {
        title: 'UCE 2022 MATHS ONE',
        description: 'Senior Four',
        price: 24800,
        link: 'https://freshteacher.software/UCE 2022 MATHS ONE.pdf',
      },{
        title: 'UCE MTC 2 O 22',
        description: 'Senior Four',
        price: 86000,
        link: 'https://freshteacher.software/UCE MTC 2 O 22.pdf',
      },
      {
        title: 'uce_tt_2022',
        description: 'Senior Four',
        price: 11000,
        link: 'https://freshteacher.software/uce_tt_2022.pdf',
      },
      {
        title: 'UCE',
        description: 'Senior Four',
        price: 29000,
        link: 'https://freshteacher.software/UCE.pdf',
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
      <h1>Senior Four Class Past Papers</h1>
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

export default SeniorFourClassPastPapers;
