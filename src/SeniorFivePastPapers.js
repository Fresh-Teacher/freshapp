import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FiDownload, FiEye } from 'react-icons/fi';
import PDFViewer from './PDFViewer';

const SeniorFiveClassPastPapers = () => {
  const [lessonNotes, setLessonNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNote, setSelectedNote] = useState(null);
  const [scrollToPdf, setScrollToPdf] = useState(false);

  useEffect(() => {
    const sampleData = [
      {
        title: 'ASC S.5 CHEMI',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//ASC S.5 CHEMI.pdf',
      },
      {
        title: 'FORM-5',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//FORM-5.pdf',
      },
      {
        title: 'ICT PRACTICAL-WORKBOOK - Copy (3)',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//ICT PRACTICAL-WORKBOOK - Copy (3).pdf',
      },
      {
        title: 'Kitende S5 Applied MTC HW',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//Kitende S5 Applied MTC HW.pdf',
      },
      {
        title: 'Kitende S5 Geog 1 work',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//Kitende S5 Geog 1 work.pdf',
      },
      {
        title: 'Kitende S5 Pure MTC work',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//Kitende S5 Pure MTC work.pdf',
      },
      {
        title: 'LIt S.5',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//LIt S.5.pdf',
      },
      {
        title: 'P510 1 BEGINNING OF TERM THREE s.5,',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//P510 1 BEGINNING OF TERM THREE s.5,.pdf',
      },
      {
        title: 'PHYSICS UACE RESOURCE MOCK EXAMINATIONS – 2022',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//PHYSICS UACE RESOURCE MOCK EXAMINATIONS – 2022.pdf',
      },
      {
        title: 'S 5  ICT paper one holiday Assignment 1',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S 5  ICT paper one holiday Assignment 1.pdf',
      },
      {
        title: 'S 5 A GEOG',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S 5 A GEOG.pdf',
      },
      {
        title: 'S 5 ICT Assignment 2',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S 5 ICT Assignment 2.pdf',
      },
      {
        title: 'S 5 PHYSICS 2  TEST 1',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S 5 PHYSICS 2  TEST 1.pdf',
      },
      {
        title: 's-5 subsidiary mathematics',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//s-5 subsidiary mathematics.pdf',
      },
      {
        title: 'S.5 _ S.6 PAPER 3 LIT',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S.5 _ S.6 PAPER 3 LIT.pdf',
      },
      {
        title: 'S.5 Applied Maths 2',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S.5 Applied Maths 2.pdf',
      },
      {
        title: 'S.5 BIO3 EOT 2',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S.5 BIO3 EOT 2.pdf',
      },
      {
        title: 'S.5 Bio3 EOT2',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S.5 Bio3 EOT2.pdf',
      },
      {
        title: 'S.5 Chem 3 MOT 1',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S.5 Chem 3 MOT 1.pdf',
      },
      {
        title: 'S.5 chem holid work',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S.5 chem holid work.pdf',
      },
      {
        title: 'S.5 END OF TERM II SUBCIDIARY ICT EXAM',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S.5 END OF TERM II SUBCIDIARY ICT EXAM.pdf',
      },
      {
        title: 'S.5 END TERM III LIT P.1',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S.5 END TERM III LIT P.1.pdf',
      },
      {
        title: 'S.5 END TERM III LIT P.2',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S.5 END TERM III LIT P.2.pdf',
      },
      {
        title: 'S.5 EUROPEAN HISTORY B.O.T II 2016 MARKING GUIDE(1)',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S.5 EUROPEAN HISTORY B.O.T II 2016 MARKING GUIDE(1).pdf',
      },
      {
        title: 'S.5 HOLIDAY PACKAGE LITERATURE KCB',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S.5 HOLIDAY PACKAGE LITERATURE KCB.pdf',
      },
      {
        title: 'S.5 HOLIDAY PACKAGE',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S.5 HOLIDAY PACKAGE.pdf',
      },
      {
        title: 'S.5 I.R.E PPP.2 ',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S.5 I.R.E PPP.2 .pdf',
      },
      {
        title: 'S.5 IRE PPP.2',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S.5 IRE PPP.2.pdf',
      },
      {
        title: 'S.5 LIT ING. P.1',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S.5 LIT ING. P.1.pdf',
      },
      {
        title: 'S.5 LIT P.1',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S.5 LIT P.1.pdf',
      },
      {
        title: 'S.5 LIT P.2',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S.5 LIT P.2.pdf',
      },
      {
        title: 'S.5 LIT PAPER 1 BEGINNING OF TERM III EXAMS',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S.5 LIT PAPER 1 BEGINNING OF TERM III EXAMS.pdf',
      },
      {
        title: 'S.5 LIT PAPER 1 BEGINNING OF TERM III EXAMS',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S.5 LIT PAPER 1 BEGINNING OF TERM III EXAMS.pdf',
      },
      {
        title: 'S.5 LIT PAPER 1',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S.5 LIT PAPER 1.pdf',
      },
      {
        title: 'S.5 LITi P.2',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S.5 LITi P.2.pdf',
      },
      {
        title: 'S.5 LITR P.1',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S.5 LITR P.1.pdf',
      },
      {
        title: 'S.5 LITR P.2',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S.5 LITR P.2.pdf',
      },
      {
        title: 'S.5 LITR P.3',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S.5 LITR P.3.pdf',
      },
      {
        title: 'S.5 LITRE P.3',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S.5 LITRE P.3.pdf',
      },
      {
        title: 'S.5 MILLENIUM BIOLOGY P2 TEST 2 PDF',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S.5 MILLENIUM BIOLOGY P2 TEST 2 PDF.pdf',
      },
      {
        title: 'S.5 MILLENIUM BIOLOGY TEST 2021 PDF',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S.5 MILLENIUM BIOLOGY TEST 2021 PDF.pdf',
      },
      {
        title: 'S.5 MILLENIUM BIOLOGY TEST P2 PDF',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S.5 MILLENIUM BIOLOGY TEST P2 PDF.pdf',
      },
      {
        title: 'S.5 PAPER 2  TEST 2',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S.5 PAPER 2  TEST 2.pdf',
      },
      {
        title: 'S.5 PAPER 2 LIT',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S.5 PAPER 2 LIT.pdf',
      },
      {
        title: 'S.5 Phy P1',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S.5 Phy P1.pdf',
      },
      {
        title: 'S.5 PHY PAPER 2 TEST 3',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S.5 PHY PAPER 2 TEST 3.pdf',
      },
      {
        title: 's.5 physics mechanics ,exercise',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//s.5 physics mechanics ,exercise.pdf',
      },
      {
        title: 'S.5 SUB MATH HOLIDAY WORK',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S.5 SUB MATH HOLIDAY WORK.pdf',
      },
      {
        title: 'S.5 TD HOLIDAY WORK',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S.5 TD HOLIDAY WORK.pdf',
      },
      {
        title: 'S.5-and-S.6-General-Paper',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S.5-and-S.6-General-Paper.pdf',
      },
      {
        title: 'S.5-and-S.6-Luganda-paper-2-Notes',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S.5-and-S.6-Luganda-paper-2-Notes.pdf',
      },
      {
        title: 'S.5-ECONOMICS-AND-ENTREPRENEURSHIP-HOLIDAY-WORK - Copy',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S.5-ECONOMICS-AND-ENTREPRENEURSHIP-HOLIDAY-WORK - Copy.pdf',
      },
      {
        title: 'S.5-ECONOMICS-AND-ENTREPRENEURSHIP-HOLIDAY-WORK',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S.5-ECONOMICS-AND-ENTREPRENEURSHIP-HOLIDAY-WORK.pdf',
      },
      {
        title: 'S.5-ICT-WORK',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S.5-ICT-WORK.pdf',
      },
      {
        title: 'S.5-LITERATURE-PAPER-2-',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S.5-LITERATURE-PAPER-2-.pdf',
      },
      {
        title: 'S.5-MTC-1-Test-2',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S.5-MTC-1-Test-2.pdf',
      },
      {
        title: 'S5 Applied math qns',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S5 Applied math qns.pdf',
      },
      {
        title: 'S5 ART NOTES AND QUESTIONS',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S5 ART NOTES AND QUESTIONS.pdf',
      },
      {
        title: 'S5 BIO1 TOPICAL TEST',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S5 BIO1 TOPICAL TEST.pdf',
      },
      {
        title: 'S5 ECONOMICS RECESS WORK',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S5 ECONOMICS RECESS WORK.pdf',
      },
      {
        title: 'S5 GENERAL PAPER ASSIGNMENT',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S5 GENERAL PAPER ASSIGNMENT.pdf',
      },
      {
        title: 'S5 Geog 1 assignment',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S5 Geog 1 assignment.pdf',
      },
      {
        title: 'S5 Geog 2 home work',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S5 Geog 2 home work.pdf',
      },
      {
        title: 'S5 Geog1',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S5 Geog1.pdf',
      },
      {
        title: 'S5 GERMAN PAPER 3 Peter Bichsel_Die Tochter',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S5 GERMAN PAPER 3 Peter Bichsel_Die Tochter.pdf',
      },
      {
        title: 'S5 Linear motion Qns',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S5 Linear motion Qns.pdf',
      },
      {
        title: 'S5 Lit 1 holiday exercise',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S5 Lit 1 holiday exercise.pdf',
      },
      {
        title: 'S5 MATH CALCULUS - DIFFERENTIATION',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S5 MATH CALCULUS - DIFFERENTIATION.pdf',
      },
      {
        title: 'S5 MATHS PAPER 1 2020 TERM 1',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S5 MATHS PAPER 1 2020 TERM 1.pdf',
      },
      {
        title: 'S5 MATHS-MERRYLAND-ENTEBBE',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S5 MATHS-MERRYLAND-ENTEBBE.pdf',
      },
      {
        title: 'S5 MID OF TERM II BIOLOGY EXAMINATION',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S5 MID OF TERM II BIOLOGY EXAMINATION.pdf',
      },
      {
        title: 'S5 TD PAPER TWO',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S5 TD PAPER TWO.pdf',
      },
      {
        title: 'S5-MATHEMATICS-RECESS-WORK2020',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S5-MATHEMATICS-RECESS-WORK2020.pdf',
      },
      {
        title: 'S5B BIOLOGY - HOME ASSIGNMENT',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S5B BIOLOGY - HOME ASSIGNMENT.pdf',
      },
      {
        title: 'S5 Applied math qns',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software/S5 Applied math qns.pdf',
      },
      {
        title: 'S5 MATHS PAPER 1 2020 TERM 1',
        description: 'Senior Five',
        price: 15000,
        link: 'https://freshteacher.software/S5 MATHS PAPER 1 2020 TERM 1.pdf',
      },
      {
        title: 'S5 Bio 1 Mid Term 3',
        description: 'Senior Five',
        price: 25000,
        link: 'https://freshteacher.software/S5bio1mid3.pdf',
      },
      {
        title: 'S850-3 - SUB-ICT-Practical  for S6',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//S850-3 - SUB-ICT-Practical  for S6.pdf',
      },
      {
        title: 'SENIOR FIVE PHYSICS PAPER 1 TEST',
        description: 'Senior Five',
        price: 10000,
        link: 'https://freshteacher.software//SENIOR FIVE PHYSICS PAPER 1 TEST.pdf',
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
      <h1>Senior Five Class Past Papers</h1>
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

export default SeniorFiveClassPastPapers;
