import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FiDownload, FiEye } from 'react-icons/fi';
import PDFViewer from './PDFViewer';

const PrimaryTwoClassPastPapers = () => {
  const [lessonNotes, setLessonNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNote, setSelectedNote] = useState(null);
  const [scrollToPdf, setScrollToPdf] = useState(false);

  useEffect(() => {
    const sampleData = [
      {
        title: 'P. 2 MTC SET I',
        description: 'Primary Two',
        price: 10000,
        link: 'https://freshteacher.software/P. 2 MTC SET I.pdf',
      },
      {
        title: 'P. 2 Package   4',
        description: 'Primary Two',
        price: 15000,
        link: 'https://freshteacher.software/P. 2 Package   4.pdf',
      },
      {
        title: 'P.2 - THEOLOGY',
        description: 'Primary Two',
        price: 25000,
        link: 'https://freshteacher.software/P.2 - THEOLOGY.pdf',
      },
      {
        title: 'P.2 Eng Lockdown activity 2',
        description: 'Primary Two',
        price: 55000,
        link: 'https://freshteacher.software/P.2 Eng Lockdown activity 2.pdf',
      },
      {
        title: 'P.2 Eng Lockdown activity 2',
        description: 'Primary Two',
        price: 2000,
        link: 'https://freshteacher.software/P.2 Eng Lockdown activity 2.pdf',
      },{
        title: 'P.2 ENG',
        description: 'Primary Two',
        price: 10000,
        link: 'https://freshteacher.software/P.2 ENG.pdf',
      },
      {
        title: 'P.2 English Lockdown activity (2)',
        description: 'Primary Two',
        price: 15000,
        link: 'https://freshteacher.software/P.2 English Lockdown activity (2).pdf',
      },
      {
        title: 'P.2 English Lockdown activity (3)',
        description: 'Primary Two',
        price: 25000,
        link: 'https://freshteacher.software/P.2 English Lockdown activity (3).pdf',
      },
      {
        title: 'P.2 English Lockdown activity',
        description: 'Primary Two',
        price: 55000,
        link: 'https://freshteacher.software/P.2 English Lockdown activity.pdf',
      },
      {
        title: 'P.2 ENTRY EXAM',
        description: 'Primary Two',
        price: 2000,
        link: 'https://freshteacher.software/P.2 ENTRY EXAM.pdf',
      },{
        title: 'P.2 LEGIT MTC ISSUE 4 ',
        description: 'Primary Two',
        price: 10000,
        link: 'https://freshteacher.software/P.2 LEGIT MTC ISSUE 4 .pdf',
      },
      {
        title: 'P.2 LIT 1 HP',
        description: 'Primary Two',
        price: 15000,
        link: 'https://freshteacher.software/P.2 LIT 1 HP.pdf',
      },
      {
        title: 'P.2 Literacy 1A Lockdown activitY (2)',
        description: 'Primary Two',
        price: 25000,
        link: 'https://freshteacher.software/P.2 Literacy 1A Lockdown activitY (2).pdf',
      },
      {
        title: 'P.2 Literacy 1A Lockdown activity',
        description: 'Primary Two',
        price: 55000,
        link: 'https://freshteacher.software/P.2 Literacy 1A Lockdown activity.pdf',
      },
      {
        title: 'P.2 Literacy 1A Lockdown activity',
        description: 'Primary Two',
        price: 2500,
        link: 'https://freshteacher.software/P.2 Literacy 1A Lockdown activity.pdf',
      },{
        title: 'P.2 Literacy 1B Lockdown activity',
        description: 'Primary Two',
        price: 37000,
        link: 'https://freshteacher.software/P.2 Literacy 1B Lockdown activity.pdf',
      },
      {
        title: 'P.2 Literacy1A Lockdown activity (2)',
        description: 'Primary Two',
        price: 13000,
        link: 'https://freshteacher.software/P.2 Literacy1A Lockdown activity (2).pdf',
      },
      {
        title: 'P.2 Literacy1A Lockdown activity',
        description: 'Primary Two',
        price: 45000,
        link: 'https://freshteacher.software/P.2 Literacy1A Lockdown activity.pdf',
      },
      {
        title: 'P.2 Mathematics Lockdown activity (2)',
        description: 'Primary Two',
        price: 57500,
        link: 'https://freshteacher.software/P.2 Mathematics Lockdown activity (2).pdf',
      },
      {
        title: 'P.2 Mathematics Lockdown activity',
        description: 'Primary Two',
        price: 24800,
        link: 'https://freshteacher.software/P.2 Mathematics Lockdown activity.pdf',
      },{
        title: 'P.2 MATHS',
        description: 'Primary Two',
        price: 86000,
        link: 'https://freshteacher.software/P.2 MATHS.pdf',
      },
      {
        title: 'P.2 SST Revision booklet',
        description: 'Primary Two',
        price: 11000,
        link: 'https://freshteacher.software/P.2 SST Revision booklet.pdf',
      },
      {
        title: 'P.2-ENG-SET-5',
        description: 'Primary Two',
        price: 29000,
        link: 'https://freshteacher.software/P.2-ENG-SET-5.pdf',
      },
      {
        title: 'P.2-ENG-SET-II',
        description: 'Primary Two',
        price: 95000,
        link: 'https://freshteacher.software/P.2-ENG-SET-II.pdf',
      },
      {
        title: 'P.2-ENGLISH-WORK-BOOK-TERM-ONE',
        description: 'Primary Two',
        price: 29000,
        link: 'https://freshteacher.software/P.2-ENGLISH-WORK-BOOK-TERM-ONE.pdf',
      },{
        title: 'P.2-LIT-1-A-SET-5',
        description: 'Primary Two',
        price: 12400,
        link: 'https://freshteacher.software/P.2-LIT-1-A-SET-5.pdf',
      },
      {
        title: 'P.2-LIT-1-A-SET-5',
        description: 'Primary Two',
        price: 15800,
        link: 'https://freshteacher.software/P.2-LIT-1-A-SET-5.pdf',
      },
      {
        title: 'P.2-LIT-1-A-SET-II',
        description: 'Primary Two',
        price: 82000,
        link: 'https://freshteacher.software/P.2-LIT-1-A-SET-II.pdf',
      },
      {
        title: 'P.2-LIT-I-B-SET-5.pdf',     
        description: 'Primary Two',
        price: 53000,
        link: 'https://freshteacher.software/P.2-LIT-I-B-SET-5.pdf',     
       },
      {
        title: 'P.2-LIT-I-B-SET-II',
        description: 'Primary Two',
        price: 13000,
        link: 'https://freshteacher.software/P.2-LIT-I-B-SET-II.pdf',
      },
      {
        title: 'P.2-LITERACY-WORK-BOOK-TERM-ONE',
        description: 'Primary Two',
        price: 10000,
        link: 'https://freshteacher.software/P.2-LITERACY-WORK-BOOK-TERM-ONE.pdf',
      },
      {
        title: 'P.2-MATHEMATICS-WORKBOOK-TERM-ONE',
        description: 'Primary Two',
        price: 15000,
        link: 'https://freshteacher.software/P.2-MATHEMATICS-WORKBOOK-TERM-ONE.pdf',
      },
      {
        title: 'P.2-MTC-SET-5',
        description: 'Primary Two',
        price: 25000,
        link: 'https://freshteacher.software/P.2-MTC-SET-5.pdf',
      },
      {
        title: 'P.2-MTC-SET-II',
        description: 'Primary Two',
        price: 55000,
        link: 'https://freshteacher.software/P.2-MTC-SET-II.pdf',
      },
      {
        title: 'P.2-R.E-REVISION-SET-I-2021-MOTHERCARE-PREPARATORY-SCHOOLS',
        description: 'Primary Two',
        price: 2000,
        link: 'https://freshteacher.software/P.2-R.E-REVISION-SET-I-2021-MOTHERCARE-PREPARATORY-SCHOOLS.pdf',
      },{
        title: 'P.2-SETI LITTLE MUHEJI',
        description: 'Primary Two',
        price: 10000,
        link: 'https://freshteacher.software/P.2-SETI LITTLE MUHEJI.pdf',
      },
      {
        title: 'P.2-Week-3-pdf',
        description: 'Primary Two',
        price: 15000,
        link: 'https://freshteacher.software/P.2-Week-3-pdf.pdf',
      },
      {
        title: 'P2 ENGLISH',
        description: 'Primary Two',
        price: 25000,
        link: 'https://freshteacher.software/P2 ENGLISH.pdf',
      },
      {
        title: 'P2 LITERACY I',
        description: 'Primary Two',
        price: 55000,
        link: 'https://freshteacher.software/P2 LITERACY I.pdf',
      },
      {
        title: 'P2 LITERACY II',
        description: 'Primary Two',
        price: 2000,
        link: 'https://freshteacher.software/P2 LITERACY II.pdf',
      },
      {
        title: 'P2 Material 2',
        description: 'Primary Two',
        price: 10000,
        link: 'https://freshteacher.software/P2 Material 2.pdf',
      },
      {
        title: 'P2 MATH',
        description: 'Primary Two',
        price: 15000,
        link: 'https://freshteacher.software/P2 MATH.pdf',
      },
      {
        title: 'P2 RE',
        description: 'Primary Two',
        price: 25000,
        link: 'https://freshteacher.software/P2 RE.pdf',
      },
      {
        title: 'P2 READING',
        description: 'Primary Two',
        price: 55000,
        link: 'https://freshteacher.software/P2 READING.pdf',
      },
      {
        title: 'P2-WORK-PDF (1) (1)',
        description: 'Primary Two',
        price: 2500,
        link: 'https://freshteacher.software/P2-WORK-PDF (1) (1).pdf',
      },{
        title: 'P2WORK',
        description: 'Primary Two',
        price: 37000,
        link: 'https://freshteacher.software/P2WORK.PDF',
      },
      {
        title: 'PRIMARY 2 SET III 2020',
        description: 'Primary Two',
        price: 13000,
        link: 'https://freshteacher.software/PRIMARY 2 SET III 2020.pdf',
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
      <h1>Primary Two Class Past Papers</h1>
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

export default PrimaryTwoClassPastPapers;
