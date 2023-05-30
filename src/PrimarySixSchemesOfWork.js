import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FiDownload, FiEye } from 'react-icons/fi';
import PDFViewer from './PDFViewer';

const PrimarySixSchemesOfWork = () => {
  const [lessonNotes, setLessonNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNote, setSelectedNote] = useState(null);
  const [scrollToPdf, setScrollToPdf] = useState(false);

  useEffect(() => {
    const sampleData = [
      {
        title: 'P.6 COMPOSITION AND COMPREHENSION TERM 2 SCHEME',
        description: 'ENGLISH',
        price: 10000,
        link: 'https://freshteacher.software/P.6 COMPOSITION AND COMPREHENSION TERM 2 SCHEME.pdf',
      },
      {
        title: 'P.6 ENGLISH COMPOSITION AND COMPREHENSION SCHEME TERM III',
        description: 'ENGLISH',
        price: 15000,
        link: 'https://freshteacher.software/P.6 ENGLISH COMPOSITION AND COMPREHENSION SCHEME TERM III.pdf',
      },
      {
        title: 'P.6 ENGLISH SCHEME COMPOSITION AND COMPREHENSION TERM 1',
        description: 'ENGLISH',
        price: 25000,
        link: 'https://freshteacher.software/P.6 ENGLISH SCHEME COMPOSITION AND COMPREHENSION TERM 1.pdf',
      },
      {
        title: 'P.6 ENGLISH SCHEME GRAMMAR TERM I',
        description: 'ENGLISH',
        price: 55000,
        link: 'https://freshteacher.software/P.6 ENGLISH SCHEME GRAMMAR TERM I.pdf',
      },
      {
        title: 'P.6 GRAMMAR  SCHEME TERM II',
        description: 'ENGLISH',
        price: 2000,
        link: 'https://freshteacher.software/P.6 GRAMMAR  SCHEME TERM II.pdf',
      },{
        title: 'P.6 GRAMMAR SCHEME TERM III',
        description: 'ENGLISH',
        price: 10000,
        link: 'https://freshteacher.software/P.6 GRAMMAR SCHEME TERM III.pdf',
      },
      {
        title: 'P.6 MATHEMATICS SCHEME  TERM 2',
        description: 'MATHEMATICS',
        price: 15000,
        link: 'https://freshteacher.software/P.6 MATHEMATICS SCHEME  TERM 2.pdf',
      },
      {
        title: 'P.6 MATHEMATICS SCHEME TERM 1',
        description: 'MATHEMATICS',
        price: 25000,
        link: 'https://freshteacher.software/P.6 MATHEMATICS SCHEME TERM 1.pdf',
      },
      {
        title: 'SP.6 R.E SCHEME TERM 1',
        description: 'RELIGIOUS EDUCATION',
        price: 55000,
        link: 'https://freshteacher.software/P.6 R.E SCHEME TERM 1.pdf',
      },
      {
        title: 'P.6 R.E SCHEME TERM II',
        description: 'RELIGIOUS EDUCATION',
        price: 2000,
        link: 'https://freshteacher.software/P.6 R.E SCHEME TERM II.pdf',
      },{
        title: 'P.6 R.E SCHEME TERM III',
        description: 'RELIGIOUS EDUCATION',
        price: 10000,
        link: 'https://freshteacher.software/P.6 R.E SCHEME TERM III.pdf',
      },
      {
        title: 'P.6 SCIENCE SCHEME TERM II',
        description: 'SCIENCE',
        price: 15000,
        link: 'https://freshteacher.software/P.6 SCIENCE SCHEME TERM II.pdf',
      },
      {
        title: 'P.6 SCIENCE SCHEME TERM III',
        description: 'SCIENCE',
        price: 25000,
        link: 'https://freshteacher.software/P.6 SCIENCE SCHEME TERM III.pdf',
      },
      {
        title: 'P.6 SST SCHEME TERM 1',
        description: 'Social Studies',
        price: 55000,
        link: 'https://freshteacher.software/P.6 SST SCHEME TERM 1.pdf',
      },
      {
        title: 'P.6 SST SCHEME TERM 2',
        description: 'Social Studies',
        price: 2500,
        link: 'https://freshteacher.software/P.6 SST SCHEME TERM 2.pdf',
      },{
        title: 'P.6 SST SCHEME TERM 3',
        description: 'Social Studies',
        price: 37000,
        link: 'https://freshteacher.software/P.6 SST SCHEME TERM 3.pdf',
      },
      {
        title: 'PRIMARY SIX SCIENCE SHEME OF WORK',
        description: 'SCIENCE',
        price: 13000,
        link: 'https://freshteacher.software/PRIMARY SIX SCIENCE SHEME OF WORK.pdf',
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
      <h1>Primary Six Class Schemes of Work</h1>
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

export default PrimarySixSchemesOfWork;
