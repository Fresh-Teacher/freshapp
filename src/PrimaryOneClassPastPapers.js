import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FiDownload, FiEye } from 'react-icons/fi';
import PDFViewer from './PDFViewer';

const PrimaryOneClassPastPapers = () => {
  const [lessonNotes, setLessonNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNote, setSelectedNote] = useState(null);
  const [scrollToPdf, setScrollToPdf] = useState(false);

  useEffect(() => {
    const sampleData = [
      {
        title: 'P.1 EXAM',
        description: 'Primary One',
        price: 10000,
        link: 'https://freshteacher.software/P.1 EXAM.pdf',
      },
      {
        title: 'P.1 EXAMINATION',
        description: 'Primary One',
        price: 10000,
        link: 'https://freshteacher.software/P.1 EXAMINATION.pdf',
      },
      {
        title: 'P.1 Lit 1A Revision booklet',
        description: 'Primary One',
        price: 10000,
        link: 'https://freshteacher.software/P.1 Lit 1A Revision booklet.pdf',
      },
      {
        title: 'P.1 READING TERM III',
        description: 'Primary One',
        price: 10000,
        link: 'https://freshteacher.software/P.1 READING TERM III.pdf',
      },
      {
        title: 'P.1 READING',
        description: 'Primary One',
        price: 10000,
        link: 'https://freshteacher.software/P.1 READING.pdf',
      },
      {
        title: 'P1 EXAM',
        description: 'Primary One',
        price: 10000,
        link: 'https://freshteacher.software/P1 EXAM.pdf',
      },
      {
        title: 'p1 lit1',
        description: 'Primary One',
        price: 10000,
        link: 'https://freshteacher.software/p1 lit1.pdf',
      },
      {
        title: 'p1 mtc',
        description: 'Primary One',
        price: 10000,
        link: 'https://freshteacher.software/p1 mtc.pdf',
      },
      {
        title: 'Sight Word Poetry Pages (grades PreK-2)',
        description: 'Primary One',
        price: 10000,
        link: 'https://freshteacher.software/Sight Word Poetry Pages (grades PreK-2).pdf',
      },
      
      {
        title: 'P_1_MATHS_REVISION_SET_I_2021_MOTHERCARE_PREPARATORY_SCHOOLS_1',
        description: 'Primary One',
        price: 10000,
        link: 'https://freshteacher.software/P_1_MATHS_REVISION_SET_I_2021_MOTHERCARE_PREPARATORY_SCHOOLS_1.pdf',
      },
      {
        title: 'P. 1 ENG',
        description: 'Primary One',
        price: 15000,
        link: 'https://freshteacher.software/P. 1 ENG.pdf',
      },
      {
        title: 'P. 1 MTC SET I',
        description: 'Primary One',
        price: 25000,
        link: 'https://freshteacher.software/P. 1 MTC SET I.pdf',
      },
      {
        title: 'P.1  ENG ',
        description: 'Primary One',
        price: 55000,
        link: 'https://freshteacher.software/P.1  ENG .pdf',
      },
      {
        title: 'P.1  HOLIDAY  PACKAGE',
        description: 'Primary One',
        price: 2000,
        link: 'https://freshteacher.software/P.1  HOLIDAY  PACKAGE.pdf',
      },{
        title: 'P.1  READ',
        description: 'Primary One',
        price: 10000,
        link: 'https://freshteacher.software/P.1  READ.pdf',
      },
      {
        title: 'P.1 - THEOLOGY',
        description: 'Primary One',
        price: 15000,
        link: 'https://freshteacher.software/P.1 - THEOLOGY.pdf',
      },
      {
        title: 'P.1 COVID-19 HOLIDAY WORK 2020',
        description: 'Primary One',
        price: 25000,
        link: 'https://freshteacher.software/P.1 COVID-19 HOLIDAY WORK 2020.pdf',
      },
      {
        title: 'P.1 ENG - SET 3',
        description: 'Primary One',
        price: 55000,
        link: 'https://freshteacher.software/P.1 ENG - SET 3.pdf',
      },
      {
        title: 'P.1 ENG',
        description: 'Primary One',
        price: 2000,
        link: 'https://freshteacher.software/P.1 ENG.pdf',
      },{
        title: 'P.1 English  Topical  Break  Down    Revised  Lesson  Notes  2016  Repaired (ec',
        description: 'Primary One',
        price: 10000,
        link: 'https://freshteacher.software/P.1 English  Topical  Break  Down    Revised  Lesson  Notes  2016  Repaired (ec.pdf',
      },
      {
        title: 'P.1 English Lockdown activity (2)',
        description: 'Primary One',
        price: 15000,
        link: 'https://freshteacher.software/P.1 English Lockdown activity (2).pdf',
      },
      {
        title: 'P.1 English Lockdown activity (3)',
        description: 'Primary One',
        price: 25000,
        link: 'https://freshteacher.software/P.1 English Lockdown activity (3).pdf',
      },
      {
        title: 'P.1 English Lockdown activity',
        description: 'Primary One',
        price: 55000,
        link: 'https://freshteacher.software/P.1 English Lockdown activity.pdf',
      },
      {
        title: 'P.1 ENGLISH MID TERM THREE EXAMINATIONS',
        description: 'Primary One',
        price: 2500,
        link: 'https://freshteacher.software/P.1 ENGLISH MID TERM THREE EXAMINATIONS.pdf',
      },{
        title: 'P.1 ENGLISH SET 2 TERM II 2022',
        description: 'Primary One',
        price: 37000,
        link: 'https://freshteacher.software/P.1 ENGLISH SET 2 TERM II 2022.pdf',
      },
      {
        title: 'P.1 ENGLISH TERM II 2022',
        description: 'Primary One',
        price: 13000,
        link: 'https://freshteacher.software/P.1 ENGLISH TERM II 2022.pdf',
      },
      {
        title: 'P.1 ENGLISH WEEK 2',
        description: 'Primary One',
        price: 45000,
        link: 'https://freshteacher.software/P.1 ENGLISH WEEK 2.pdf',
      },
      {
        title: 'P.1 HOLIDAY PACKAGE 2020',
        description: 'Primary One',
        price: 57500,
        link: 'https://freshteacher.software/P.1 HOLIDAY PACKAGE 2020.pdf',
      },
      {
        title: 'P.1 Holiday Package',
        description: 'Primary One',
        price: 24800,
        link: 'https://freshteacher.software/P.1 Holiday Package.pdf',
      },{
        title: 'P.1 LIT 1 - SET 3',
        description: 'Primary One',
        price: 86000,
        link: 'https://freshteacher.software/P.1 LIT 1 - SET 3.pdf',
      },
      {
        title: 'P.1 LIT 2 - SET 3',
        description: 'Primary One',
        price: 11000,
        link: 'https://freshteacher.software/P.1 LIT 2 - SET 3.pdf',
      },
      {
        title: 'P.1 LIT. II All Schemes',
        description: 'Primary One',
        price: 29000,
        link: 'https://freshteacher.software/P.1 LIT. II All Schemes.pdf',
      },
      {
        title: 'P.1 LIT',
        description: 'Primary One',
        price: 95000,
        link: 'https://freshteacher.software/P.1 LIT.pdf',
      },
      {
        title: 'P.1 Literacy 1A Lock down activity',
        description: 'Primary One',
        price: 29000,
        link: 'https://freshteacher.software/P.1 Literacy 1A Lock down activity.pdf',
      },{
        title: 'P.1 Literacy 1A Lockdown activity',
        description: 'Primary One',
        price: 12400,
        link: 'https://freshteacher.software/P.1 Literacy 1A Lockdown activity.pdf',
      },
      {
        title: 'P.1 Literacy 1B Lockdown activity (2)',
        description: 'Primary One',
        price: 15800,
        link: 'https://freshteacher.software/P.1 Literacy 1B Lockdown activity (2).pdf',
      },
      {
        title: 'P.1 Literacy 1B Lockdown activity',
        description: 'Primary One',
        price: 82000,
        link: 'https://freshteacher.software/P.1 Literacy 1B Lockdown activity.pdf',
      },
      {
        title: 'P.1 Literacy 1b.pdf',     
        description: 'Primary One',
        price: 53000,
        link: 'https://freshteacher.software/P.1 Literacy 1b.pdf',     
       },
      {
        title: 'P.1 LITERACY A WK 2',
        description: 'Primary One',
        price: 13000,
        link: 'https://freshteacher.software/P.1 LITERACY A WK 2.pdf',
      },{
        title: 'P.1 LITERACY B WK 2',
        description: 'Primary One',
        price: 10000,
        link: 'https://freshteacher.software/P.1 LITERACY B WK 2.pdf',
      },
      {
        title: 'P.1 Literacy1A Lockdown activity (2)',
        description: 'Primary One',
        price: 15000,
        link: 'https://freshteacher.software/P.1 Literacy1A Lockdown activity (2).pdf',
      },
      {
        title: 'P.1 Literacy1A Lockdown activity',
        description: 'Primary One',
        price: 25000,
        link: 'https://freshteacher.software/P.1 Literacy1A Lockdown activity.pdf',
      },
      {
        title: 'P.1 LUG ',
        description: 'Primary One',
        price: 55000,
        link: 'https://freshteacher.software/P.1 LUG .pdf',
      },
      {
        title: 'P.1 M T C WEEK 2',
        description: 'Primary One',
        price: 2000,
        link: 'https://freshteacher.software/P.1 M T C WEEK 2.pdf',
      },{
        title: 'P.1 MATH - SET 3',
        description: 'Primary One',
        price: 10000,
        link: 'https://freshteacher.software/P.1 MATH - SET 3.pdf',
      },
      {
        title: 'P.1 Math Lockdown activity',
        description: 'Primary One',
        price: 15000,
        link: 'https://freshteacher.software/P.1 Math Lockdown activity.pdf',
      },
      {
        title: 'P.1 MATH',
        description: 'Primary One',
        price: 25000,
        link: 'https://freshteacher.software/P.1 MATH.pdf',
      },
      {
        title: 'P.1 MATHS REVISION WORK (2)',
        description: 'Primary One',
        price: 55000,
        link: 'https://freshteacher.software/P.1 MATHS REVISION WORK (2).pdf',
      },
      {
        title: 'P.1 MATHS REVISION WORK',
        description: 'Primary One',
        price: 2000,
        link: 'https://freshteacher.software/P.1 MATHS REVISION WORK.pdf',
      },{
        title: 'P.1 MATHS REVISIONWORK',
        description: 'Primary One',
        price: 10000,
        link: 'https://freshteacher.software/P.1 MATHS REVISIONWORK.pdf',
      },
      {
        title: 'P.1 R.E',
        description: 'Primary One',
        price: 15000,
        link: 'https://freshteacher.software/P.1 R.E.pdf',
      },
      {
        title: 'P.1 READING set 2',
        description: 'Primary One',
        price: 25000,
        link: 'https://freshteacher.software/P.1 READING set 2.pdf',
      },
      {
        title: 'P.1 READING WEEK2',
        description: 'Primary One',
        price: 55000,
        link: 'https://freshteacher.software/P.1 READING WEEK2.pdf',
      },
      {
        title: 'P.1 RECESS PACKAGE 2020',
        description: 'Primary One',
        price: 2500,
        link: 'https://freshteacher.software/P.1 RECESS PACKAGE 2020.pdf',
      },{
        title: 'P.1 WORK GAYAZA JR.',
        description: 'Primary One',
        price: 37000,
        link: 'https://freshteacher.software/P.1 WORK GAYAZA JR..pdf',
      },
      {
        title: 'P.1-ENG-SET-5',
        description: 'Primary One',
        price: 13000,
        link: 'https://freshteacher.software/P.1-ENG-SET-5.pdf',
      },
      {
        title: 'P.1-ENG-SET-II',
        description: 'Primary One',
        price: 45000,
        link: 'https://freshteacher.software/P.1-ENG-SET-II.pdf',
      },
      {
        title: 'P.1-ENGLISH-WORK-BOOK-TERM-ONE-',
        description: 'Primary One',
        price: 57500,
        link: 'https://freshteacher.software/P.1-ENGLISH-WORK-BOOK-TERM-ONE-.pdf',
      },
      {
        title: 'p.1-english',
        description: 'Primary One',
        price: 24800,
        link: 'https://freshteacher.software/p.1-english.pdf',
      },{
        title: 'P.1-LIT-1-A-SET-II',
        description: 'Primary One',
        price: 86000,
        link: 'https://freshteacher.software/P.1-LIT-1-A-SET-II.pdf',
      },
      {
        title: 'P.1-LIT-1-B-SET-5',
        description: 'Primary One',
        price: 11000,
        link: 'https://freshteacher.software/P.1-LIT-1-B-SET-5.pdf',
      },
      {
        title: 'P.1-LIT-1-B-SET-II',
        description: 'Primary One',
        price: 29000,
        link: 'https://freshteacher.software/P.1-LIT-1-B-SET-II.pdf',
      },
      {
        title: 'P.1-LITERACY-BOOK-TERM-ONE',
        description: 'Primary One',
        price: 95000,
        link: 'https://freshteacher.software/P.1-LITERACY-BOOK-TERM-ONE.pdf',
      },
      {
        title: 'P.1-LITERACY-I',
        description: 'Primary One',
        price: 29000,
        link: 'https://freshteacher.software/P.1-LITERACY-I.pdf',
      },{
        title: 'P.1-MATH-WORKBOOK-TERM-ONE',
        description: 'Primary One',
        price: 12400,
        link: 'https://freshteacher.software/P.1-MATH-WORKBOOK-TERM-ONE.pdf',
      },
      {
        title: 'p.1-mathe',
        description: 'Primary One',
        price: 15800,
        link: 'https://freshteacher.software/p.1-mathe.pdf',
      },
      {
        title: 'P.1-MTC-SET-II',
        description: 'Primary One',
        price: 82000,
        link: 'https://freshteacher.software/P.1-MTC-SET-II.pdf',
      },
      {
        title: 'P.1-MTC-SET5',      
        description: 'Primary One',
        price: 53000,
        link: 'https://freshteacher.software/P.1-MTC-SET5.pdf',      
      },
      {
        title: 'P.1-Package-4',
        description: 'Primary One',
        price: 13000,
        link: 'https://freshteacher.software/P.1-Package-4.pdf',
      },{
        title: 'p.1-reading',
        description: 'Primary One',
        price: 10000,
        link: 'https://freshteacher.software/p.1-reading.pdf',
      },
      {
        title: 'p.1-religious-education',
        description: 'Primary One',
        price: 15000,
        link: 'https://freshteacher.software/p.1-religious-education.pdf',
      },
      {
        title: 'P.1-SCI-HOLIDAY-PACKAGE-TM-1-2020',
        description: 'Primary One',
        price: 25000,
        link: 'https://freshteacher.software/P.1-SCI-HOLIDAY-PACKAGE-TM-1-2020.pdf',
      },
      {
        title: 'P.1-SETI LITTLE MUHEJI PS',
        description: 'Primary One',
        price: 55000,
        link: 'https://freshteacher.software/P.1-SETI LITTLE MUHEJI PS.pdf',
      },
      {
        title: 'P.1-SST-HOLIDAY-PACKAGE-TM-1-2020',
        description: 'Primary One',
        price: 2000,
        link: 'https://freshteacher.software/P.1-SST-HOLIDAY-PACKAGE-TM-1-2020.pdf',
      },{
        title: 'P.1-SST-SET-5',
        description: 'Primary One',
        price: 10000,
        link: 'https://freshteacher.software/P.1-SST-SET-5.pdf',
      },
      {
        title: 'P.1LITI',
        description: 'Primary One',
        price: 15000,
        link: 'https://freshteacher.software/P.1LITI.pdf',
      },
      {
        title: 'P1 ENG',
        description: 'Primary One',
        price: 25000,
        link: 'https://freshteacher.software/P1 ENG.pdf',
      },
      {
        title: 'P1 HOMEWORK EXERCISES TERM I',
        description: 'Primary One',
        price: 55000,
        link: 'https://freshteacher.software/P1 HOMEWORK EXERCISES TERM I.pdf',
      },
      {
        title: 'P1 LITERACY 1',
        description: 'Primary One',
        price: 2000,
        link: 'https://freshteacher.software/P1 LITERACY 1.pdf',
      },{
        title: 'P1 LITERACY 2 MID TERM THREE EXAMINATIONS',
        description: 'Primary One',
        price: 10000,
        link: 'https://freshteacher.software/P1 LITERACY 2 MID TERM THREE EXAMINATIONS.pdf',
      },
      {
        title: 'P1 LITERACY 2',
        description: 'Primary One',
        price: 15000,
        link: 'https://freshteacher.software/P1 LITERACY 2.pdf',
      },
      {
        title: 'P1 Material 1',
        description: 'Primary One',
        price: 25000,
        link: 'https://freshteacher.software/P1 Material 1.pdf',
      },
      {
        title: 'P1 MATH',
        description: 'Primary One',
        price: 55000,
        link: 'https://freshteacher.software/P1 MATH.pdf',
      },
      {
        title: 'P1 RE',
        description: 'Primary One',
        price: 2500,
        link: 'https://freshteacher.software/P1 RE.pdf',
      },
      {
        title: 'P1 READING (2)',
        description: 'Primary One',
        price: 37000,
        link: 'https://freshteacher.software/P1 READING (2).pdf',
      },
      {
        title: 'P1 READING',
        description: 'Primary One',
        price: 13000,
        link: 'https://freshteacher.software/P1 READING.pdf',
      },
      {
        title: 'P1 WORK',
        description: 'Primary One',
        price: 45000,
        link: 'https://freshteacher.software/P1 WORK.PDF',
      },
      {
        title: 'PRIMARY 1 SET III 2020',
        description: 'Primary One',
        price: 57500,
        link: 'https://freshteacher.software/PRIMARY 1 SET III 2020.pdf',
      },
      {
        title: 'PRIMARY ONE REVISION WORK SET 13 KAMPALA PARENTS SCHOOL',
        description: 'Primary One',
        price: 24800,
        link: 'https://freshteacher.software/PRIMARY ONE REVISION WORK SET 13 KAMPALA PARENTS SCHOOL.pdf',
      },{
        title: 'PRIMARY ONE REVISION WORK SET 14 KAMPALA PARENTS SCHOOL',
        description: 'Primary One',
        price: 86000,
        link: 'https://freshteacher.software/PRIMARY ONE REVISION WORK SET 14 KAMPALA PARENTS SCHOOL.pdf',
      },
      {
        title: 'PRIMARY ONE REVISION WORK SET 15 KAMPALA PARENTS SCHOOL',
        description: 'Primary One',
        price: 11000,
        link: 'https://freshteacher.software/PRIMARY ONE REVISION WORK SET 15 KAMPALA PARENTS SCHOOL.pdf',
      },
      {
        title: 'PRIMARY ONE REVISION WORK SET 16 KAMPALA PARENTS SCHOOL',
        description: 'Primary One',
        price: 29000,
        link: 'https://freshteacher.software/PRIMARY ONE REVISION WORK SET 16 KAMPALA PARENTS SCHOOL.pdf',
      },
      {
        title: 'PRIMARY ONE REVISION WORK SET 17 KAMPALA PARENTS SCHOOL',
        description: 'Primary One',
        price: 95000,
        link: 'https://freshteacher.software/PRIMARY ONE REVISION WORK SET 17 KAMPALA PARENTS SCHOOL.pdf',
      },
      {
        title: 'short holiday for jr2 (1)',
        description: 'Primary One',
        price: 29000,
        link: 'https://freshteacher.software/short holiday for jr2 (1).pdf',
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
      <h1>Primary One Class Past Papers</h1>
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

export default PrimaryOneClassPastPapers;
