import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FiDownload, FiEye } from 'react-icons/fi';
import PDFViewer from './PDFViewer';

const PrimaryFourSchemesOfWork = () => {
  const [lessonNotes, setLessonNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNote, setSelectedNote] = useState(null);
  const [scrollToPdf, setScrollToPdf] = useState(false);

  useEffect(() => {
    const sampleData = [
      {
        title: 'MTC P.4 SCHEME',
        description: 'Mathematics',
        price: 5000,
        link: 'https://freshteacher.software/MTC P.4 SCHEME.pdf',
      },
      {
        title: 'p.4 art scheme of work term 3',
        description: 'Art',
        price: 5000,
        link: 'https://freshteacher.software/p.4 art scheme of work term 3.pdf',
      },
      {
        title: 'P.4 COMPOSITION SCHEME OF WORK TERM 3',
        description: 'English',
        price: 5000,
        link: 'https://freshteacher.software/P.4 COMPOSITION SCHEME OF WORK TERM 3.pdf',
      },
      {
        title: 'P.4 comprehension eng term 2',
        description: 'English',
        price: 5000,
        link: 'https://freshteacher.software/P.4 comprehension eng term 2.pdf',
      },
      {
        title: 'P.4 Comprehension Scheme of work term 3',
        description: 'English',
        price: 5000,
        link: 'https://freshteacher.software/P.4 Comprehension Scheme of work term 3.pdf',
      },
      {
        title: 'P.4 comprehension term one',
        description: 'English',
        price: 5000,
        link: 'https://freshteacher.software/P.4 comprehension term one.pdf',
      },
      {
        title: 'P.4 CRE SCHEME',
        description: 'Religious Education',
        price: 5000,
        link: 'https://freshteacher.software/P.4 CRE SCHEME.pdf',
      },
      {
        title: 'p.4 eng comp scheme term iii',
        description: 'English',
        price: 5000,
        link: 'https://freshteacher.software/p.4 eng comp scheme term iii.pdf',
      },
      {
        title: 'p.4 english scheme of work for term 2',
        description: 'English',
        price: 5000,
        link: 'https://freshteacher.software/p.4 english scheme of work for term 2.pdf',
      },
      {
        title: 'p.4 GRAMMaR term one',
        description: 'English',
        price: 5000,
        link: 'https://freshteacher.software/p.4 GRAMMaR term one.pdf',
      },
      {
        title: 'p.4 math 2017',
        description: 'Math',
        price: 5000,
        link: 'https://freshteacher.software/p.4 math 2017.pdf',
      },
      {
        title: 'p.4 math scheme of work term 3',
        description: 'Math',
        price: 5000,
        link: 'https://freshteacher.software/p.4 math scheme of work term 3.pdf',
      },
      {
        title: 'P.4 math scheme term 2',
        description: 'Math',
        price: 5000,
        link: 'https://freshteacher.software/P.4 math scheme term 2.pdf',
      },
      {
        title: 'P.4 math term 1',
        description: 'Math',
        price: 5000,
        link: 'https://freshteacher.software/P.4 math term 1.pdf',
      },
      {
        title: 'P.4 MATHS SCHEME OF WORK TERM THREE',
        description: 'Math',
        price: 5000,
        link: 'https://freshteacher.software/P.4 MATHS SCHEME OF WORK TERM THREE.pdf',
      },
      {
        title: 'p.4 p.e scheme term ii',
        description: 'Physical Education',
        price: 5000,
        link: 'https://freshteacher.software/p.4 p.e scheme term ii.pdf',
      },
      {
        title: 'P.4 R.E SCHEME OF WORK',
        description: 'Religious Education',
        price: 5000,
        link: 'https://freshteacher.software/P.4 R.E SCHEME OF WORK.pdf',
      },
      {
        title: 'p.4 r.e term iii',
        description: 'Religious Education',
        price: 5000,
        link: 'https://freshteacher.software/p.4 r.e term iii.pdf',
      },
      {
        title: 'p.4 R.e term i',
        description: 'Religious Education',
        price: 5000,
        link: 'https://freshteacher.software/p.4 R.e term i.pdf',
      },
      {
        title: 'p.4 re scheme of work term 2',
        description: 'Religious Education',
        price: 5000,
        link: 'https://freshteacher.software/p.4 re scheme of work term 2.pdf',
      },
      {
        title: 'P.4 S.S.T Scheme Term 2',
        description: 'Social Studies',
        price: 5000,
        link: 'https://freshteacher.software/P.4 S.S.T Scheme Term 2.pdf',
      },
      {
        title: 'P.4 S.ST Scheme of term 2',
        description: 'Social Studies',
        price: 5000,
        link: 'https://freshteacher.software/P.4 S.ST Scheme of term 2.pdf',
      },
      {
        title: 'P.4 scheme grammar term three',
        description: 'ENGLISH',
        price: 5000,
        link: 'https://freshteacher.software/P.4 scheme grammar term three.pdf',
      },
      {
        title: 'P.4 SCHEMES OF WORK FOR ENGLISH TERM I - III',
        description: 'ENGLISH',
        price: 5000,
        link: 'https://freshteacher.software/P.4 SCHEMES OF WORK FOR ENGLISH TERM I - III.pdf',
      },
      {
        title: 'P.4 schemes of work',
        description: 'Social Studies',
        price: 5000,
        link: 'https://freshteacher.software/P.4 schemes of work.pdf',
      },
      {
        title: 'p.4 sci scheme term 2',
        description: 'Science',
        price: 5000,
        link: 'https://freshteacher.software/p.4 sci scheme term 2.pdf',
      },
      {
        title: 'P.4 SCIENCE SCHEME TERM 1',
        description: 'SCIENCE',
        price: 5000,
        link: 'https://freshteacher.software/P.4 SCIENCE SCHEME TERM 1.pdf',
      },
      {
        title: 'P.4 SCIENCE SCHEME TERM III',
        description: 'SCIENCE',
        price: 5000,
        link: 'https://freshteacher.software/P.4 SCIENCE SCHEME TERM III.pdf',
      },
      {
        title: 'P.4 SOCIAL STUDIES SCHEME OF WORK FOR TERM 1',
        description: 'SOCIAL STUDIES',
        price: 5000,
        link: 'https://freshteacher.software/P.4 SOCIAL STUDIES SCHEME OF WORK FOR TERM 1.pdf',
      },
      {
        title: 'P.4 SOCIAL STUDIES SCHEME OF WORK TERM 111',
        description: 'SOCIAL STUDIES',
        price: 5000,
        link: 'https://freshteacher.software/P.4 SOCIAL STUDIES SCHEME OF WORK TERM 111.pdf',
      },
      {
        title: 'P.4 SST SCHEME TERM 1',
        description: 'SOCIAL STUDIES',
        price: 5000,
        link: 'https://freshteacher.software/P.4 SST SCHEME TERM 1.pdf',
      },
      {
        title: 'P.4 sst scheme Term III',
        description: 'SOCIAL STUDIES',
        price: 5000,
        link: 'https://freshteacher.software/P.4 sst scheme Term III.pdf',
      },
      {
        title: 'p.4 sst term 2',
        description: 'SOCIAL STUDIES',
        price: 5000,
        link: 'https://freshteacher.software/p.4 sst term 2.pdf',
      },
      {
        title: 'P.4 SST term II',
        description: 'SOCIAL STUDIES',
        price: 5000,
        link: 'https://freshteacher.software/P.4 SST term II.pdf',
      },
      {
        title: 'P4 SCHEME OF WORK Math Term One',
        description: 'Math',
        price: 5000,
        link: 'https://freshteacher.software/P4 SCHEME OF WORK Math Term One.pdf',
      },
      {
        title: 'P4 SOW SST Term II',
        description: 'SOCIAL STUDIES',
        price: 5000,
        link: 'https://freshteacher.software/P4 SOW SST Term II.pdf',
      },
      {
        title: 'Schemes of work english p.4',
        description: 'English',
        price: 5000,
        link: 'https://freshteacher.software/Schemes of work english p.4.pdf',
      },
      {
        title: 'P.4  SST  SCHEME  TERM 1',
        description: 'Social Studies',
        price: 10000,
        link: 'https://freshteacher.software/P.4  SST  SCHEME  TERM 1.pdf',
      },
      {
        title: 'P.4 COMPOSITION AND COMPREHENSION SCHEME TERM III',
        description: 'English',
        price: 15000,
        link: 'https://freshteacher.software/P.4 COMPOSITION AND COMPREHENSION SCHEME TERM III.pdf',
      },
      {
        title: 'P.4 ENGLISH SCHEME COMPOSITION AND COMPREHENSION TERM 1',
        description: 'English',
        price: 25000,
        link: 'https://freshteacher.software/P.4 ENGLISH SCHEME COMPOSITION AND COMPREHENSION TERM 1.pdf',
      },
      {
        title: 'P.4 ENGLISH SCHEME COMPOSITION AND COMPREHENSION TERM II',
        description: 'English',
        price: 55000,
        link: 'https://freshteacher.software/P.4 ENGLISH SCHEME COMPOSITION AND COMPREHENSION TERM II.pdf',
      },
      {
        title: 'P.4 GRAMMAR SCHEME TERM II',
        description: 'English',
        price: 2000,
        link: 'https://freshteacher.software/P.4 GRAMMAR SCHEME TERM II.pdf',
      },{
        title: 'P.4 GRAMMAR SCHEME TERM III',
        description: 'English',
        price: 10000,
        link: 'https://freshteacher.software/P.4 GRAMMAR SCHEME TERM III.pdf',
      },
      {
        title: 'P.4 INTEGERATED SCIENCE SCHEME OF WORK FOR TERM 2',
        description: 'SCIENCE',
        price: 15000,
        link: 'https://freshteacher.software/P.4 INTEGERATED SCIENCE SCHEME OF WORK FOR TERM 2.pdf',
      },
      {
        title: 'P.4 MATHEMATICS SCHEME  TERM 1',
        description: 'MATHEMATICS',
        price: 25000,
        link: 'https://freshteacher.software/P.4 MATHEMATICS SCHEME  TERM 1.pdf',
      },
      {
        title: 'P.4 MATHS SCHEME TERM 2',
        description: 'MATHEMATICS',
        price: 55000,
        link: 'https://freshteacher.software/P.4 MATHS SCHEME TERM 2.pdf',
      },
      {
        title: 'P.4 R.E SCHEME  TERM 1',
        description: 'Religious Education',
        price: 2000,
        link: 'https://freshteacher.software/P.4 R.E SCHEME  TERM 1.pdf',
      },{
        title: 'P.4 R.E SCHEME  TERM III',
        description: 'Religious Education',
        price: 10000,
        link: 'https://freshteacher.software/P.4 R.E SCHEME  TERM III.pdf',
      },
      {
        title: 'P.4 SCIENCE SCHEME OF WORK TERM 1',
        description: 'SCIENCE',
        price: 15000,
        link: 'https://freshteacher.software/P.4 SCIENCE SCHEME OF WORK TERM 1.pdf',
      },
      {
        title: 'P.4 SCIENCE SCHEME TERM 3',
        description: 'SCIENCE',
        price: 25000,
        link: 'https://freshteacher.software/P.4 SCIENCE SCHEME TERM 3.pdf',
      },
      {
        title: 'P.4 SST SCHEME OF WORK  FOR TERM II',
        description: 'Social Studies',
        price: 55000,
        link: 'https://freshteacher.software/P.4 SST SCHEME OF WORK  FOR TERM II.pdf',
      },
      {
        title: 'P.4 SST SCHEME OF WORK TERM III',
        description: 'Social Studies',
        price: 2500,
        link: 'https://freshteacher.software/P.4 SST SCHEME OF WORK TERM III.pdf',
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
      <h1>Primary Four Class Schemes of Work</h1>
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

export default PrimaryFourSchemesOfWork;
