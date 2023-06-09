import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FiDownload, FiEye } from 'react-icons/fi';
import PDFViewer from './PDFViewer';

const PrimaryOneSchemesOfWork = () => {
  const [lessonNotes, setLessonNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNote, setSelectedNote] = useState(null);
  const [scrollToPdf, setScrollToPdf] = useState(false);

  useEffect(() => {
    const sampleData = [
      {
        title: 'music scheme of work for p.1 term 2',
        description: 'Music',
        price: 5000,
        link: 'https://freshteacher.software/music scheme of work for p.1 term 2.pdf',
      },
      {
        title: 'p.1 comprehension scheme term ii',
        description: 'English',
        price: 5000,
        link: 'https://freshteacher.software/p.1 comprehension scheme term ii.pdf',
      }, {
        title: 'P.1 English Comprehension term three scheme',
        description: 'English',
        price: 5000,
        link: 'https://freshteacher.software/P.1 English Comprehension term three scheme.pdf',
      },
      {
        title: 'P.1 English Grammar Scheme of Work Term One',
        description: 'English',
        price: 5000,
        link: 'https://freshteacher.software/P.1 English Grammar Scheme of Work Term One.pdf',
      }, {
        title: 'P.1 LIT 1 SCHEMES OF WORK',
        description: 'Literacy',
        price: 5000,
        link: 'https://freshteacher.software/P.1 LIT 1 SCHEMES OF WORK.pdf',
      },
      {
        title: 'P.1 LIT 2 SCHEME OF WORK TERM 2',
        description: 'Literacy',
        price: 5000,
        link: 'https://freshteacher.software/P.1 LIT 2 SCHEME OF WORK TERM 2.pdf',
      }, {
        title: 'P.1 LIT. II All Schemes',
        description: 'Literacy',
        price: 5000,
        link: 'https://freshteacher.software/P.1 LIT. II All Schemes.pdf',
      },
      {
        title: 'P.1 P.E SCHEME TERM 3',
        description: 'Physical Education',
        price: 5000,
        link: 'https://freshteacher.software/P.1 P.E SCHEME TERM 3.pdf',
      }, {
        title: 'P.1 RE scheme of work',
        description: 'Religious Education',
        price: 5000,
        link: 'https://freshteacher.software/P.1 RE scheme of work.pdf',
      },
      {
        title: 'p.1 reading scheme of work',
        description: 'Reading',
        price: 5000,
        link: 'https://freshteacher.software/p.1 reading scheme of work.pdf',
      }, {
        title: 'P.1 Religious education SCHEME OF WORK',
        description: 'Religious Education',
        price: 5000,
        link: 'https://freshteacher.software/P.1 Religious education SCHEME OF WORK.pdf',
      },
      {
        title: 'P.1 Scheme of work lit 2 third term',
        description: 'Literacy',
        price: 5000,
        link: 'https://freshteacher.software/P.1 Scheme of work lit 2 third term.pdf',
      }, {
        title: 'P.1 SCHEMES OF WORK - TERM III',
        description: 'Literacy',
        price: 5000,
        link: 'https://freshteacher.software/P.1 SCHEMES OF WORK - TERM III.pdf',
      },
      {
        title: 'P.1 SCHEMES OF WORK TERM II',
        description: 'Literacy',
        price: 5000,
        link: 'https://freshteacher.software/P.1 SCHEMES OF WORK TERM II.pdf',
      }, {
        title: 'P.1 SCHEMES term 2',
        description: 'Literacy',
        price: 5000,
        link: 'https://freshteacher.software/p.1 SCHEMES term 2.pdf',
      },
      {
        title: 'P.1 Term 1 reading scheme',
        description: 'Reading',
        price: 5000,
        link: 'https://freshteacher.software/P.1 Term 1 reading scheme.pdf',
      }, {
        title: 'P.1 TERM 3 SCHEME',
        description: 'Literacy',
        price: 5000,
        link: 'https://freshteacher.software/P.1 TERM 3 SCHEME.pdf',
      },
      {
        title: 'P.1 THEMATIC SCHEMES term 2',
        description: 'Numeracy',
        price: 5000,
        link: 'https://freshteacher.software/P.1 THEMATIC SCHEMES term 2.pdf',
      }, {
        title: 'P1 schemes of work',
        description: 'Literacy',
        price: 5000,
        link: 'https://freshteacher.software/P1 schemes of work.pdf',
      },
      {
        title: 'P1 term 111 all subjects scheme',
        description: 'Combined',
        price: 5000,
        link: 'https://freshteacher.software/p1 term 111 all subjects scheme.pdf',
      }, {
        title: 'scheme of work english p.1',
        description: 'English',
        price: 5000,
        link: 'https://freshteacher.software/scheme of work english p.1.pdf',
      },
      {
        title: 'LITERACY SCHEME P.1 TERM 2',
        description: 'LITERACY',
        price: 10000,
        link: 'https://freshteacher.software/LITERACY SCHEME P.1 TERM 2.pdf',
      },
      {
        title: 'LUGANDA P.1 TERM 2',
        description: 'LUGANDA',
        price: 15000,
        link: 'https://freshteacher.software/LUGANDA P.1 TERM 2.pdf',
      },
      {
        title: 'P.I  ENGLISH GRAMMAR , COMPOSITION & COMPREHENSION SCHEME OF WORK TERM III',
        description: 'ENGLISH',
        price: 25000,
        link: 'https://freshteacher.software/P.I  ENGLISH GRAMMAR , COMPOSITION & COMPREHENSION SCHEME OF WORK TERM III.pdf',
      },
      {
        title: 'P.I GRAMMAR, COMPOSITION & COMPREHENSION SCHEME OF WORK TERM II',
        description: 'ENGLISH',
        price: 55000,
        link: 'https://freshteacher.software/P.I GRAMMAR, COMPOSITION & COMPREHENSION SCHEME OF WORK TERM II.pdf',
      },
      {
        title: 'P.I LITERACY SCHEME OF WORK TERM III',
        description: 'LITERACY',
        price: 2000,
        link: 'https://freshteacher.software/P.I LITERACY SCHEME OF WORK TERM III.pdf',
      }, {
        title: 'P.I LITERACY TERM I SCHEME OF WORK',
        description: 'LITERACY',
        price: 10000,
        link: 'https://freshteacher.software/P.I LITERACY TERM I SCHEME OF WORK.pdf',
      },
      {
        title: 'P.I LUGANDA  SCHEME OF WORK TERM I',
        description: 'LUGANDA',
        price: 15000,
        link: 'https://freshteacher.software/P.I LUGANDA  SCHEME OF WORK TERM I.pdf',
      },
      {
        title: 'P.I LUGANDA SCHEME WORK TERM III',
        description: 'LUGANDA',
        price: 25000,
        link: 'https://freshteacher.software/P.I LUGANDA SCHEME WORK TERM III.pdf',
      },
      {
        title: 'P.I MATHEMATICS SCHEME OF WORK TERM III',
        description: 'MATHEMATICS',
        price: 55000,
        link: 'https://freshteacher.software/P.I MATHEMATICS SCHEME OF WORK TERM IIII.pdf',
      },
      {
        title: 'P.I R.E  SCHEME OF WORK TERM I',
        description: 'Religious Education',
        price: 2000,
        link: 'https://freshteacher.software/P.I R.E  SCHEME OF WORK TERM I.pdf',
      }, {
        title: 'P.I READING SCHEME OF WORK TERM I',
        description: 'READING',
        price: 10000,
        link: 'https://freshteacher.software/P.I READING SCHEME OF WORK TERM I.pdf',
      },
      {
        title: 'P.I READING SCHEME OF WORK TERM II',
        description: 'READING',
        price: 15000,
        link: 'https://freshteacher.software/P.I READING SCHEME OF WORK TERM II.pdf',
      },
      {
        title: 'P.I READING SCHEME OF WORK TERM III',
        description: 'READING',
        price: 25000,
        link: 'https://freshteacher.software/P.I READING SCHEME OF WORK TERM III.pdf',
      },
      {
        title: 'PRIMARY ONE SCHEME OF WORK GRAMMAR',
        description: 'English',
        price: 55000,
        link: 'https://freshteacher.software/PRIMARY ONE SCHEME OF WORK GRAMMAR.pdf',
      },
      {
        title: 'R.E SCHEME P.1 TERM 2',
        description: 'Religious Education',
        price: 2500,
        link: 'https://freshteacher.software/R.E SCHEME P.1 TERM 2.pdf',
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
      <h1>Primary One Class Schemes of Work</h1>
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

export default PrimaryOneSchemesOfWork;
