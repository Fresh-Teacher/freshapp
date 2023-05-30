import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FiDownload, FiEye } from 'react-icons/fi';
import PDFViewer from './PDFViewer';

const PrimaryTwoLessonNotes = () => {
  const [lessonNotes, setLessonNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNote, setSelectedNote] = useState(null);
  const [scrollToPdf, setScrollToPdf] = useState(false);

  useEffect(() => {
    const sampleData = [
      {
        title: 'P. 2  MATHEMATICS LESSON NOTES TERM III',
        description: 'ENGLISH',
        price: 10000,
        link: 'https://freshteacher.software/P. 2  MATHEMATICS LESSON NOTES TERM III.pdf',
      },
      {
        title: 'P.2 ENGLISH GRAMMAR, COMP & COMPREHENSION LESSON NOTES TERM II',
        description: 'ENGLISH',
        price: 15000,
        link: 'https://freshteacher.software/P.2 ENGLISH GRAMMAR, COMP & COMPREHENSION LESSON NOTES TERM II.pdf',
      },
      {
        title: 'P.2 GRAMMAR, COMPOSITION & COMPREHENSION TERM I',
        description: 'ENGLISH',
        price: 25000,
        link: 'https://freshteacher.software/P.2 GRAMMAR, COMPOSITION & COMPREHENSION TERM I.pdf',
      },
      {
        title: 'P.2 LITERACY  LESSON NOTES TERM I',
        description: 'LITERACY',
        price: 55000,
        link: 'https://freshteacher.software/P.2 LITERACY  LESSON NOTES TERM I.pdf',
      },
      {
        title: 'P.2 LITERACY  LESSON NOTES TERM III',
        description: 'LITERACY',
        price: 2000,
        link: 'https://freshteacher.software/P.2 LITERACY  LESSON NOTES TERM III.pdf,'
      },{
        title: 'P.2 LITERACY II WRITING LESSON NOTES TERM II',
        description: 'LITERACY',
        price: 10000,
        link: 'https://freshteacher.software/P.2 LITERACY II WRITING LESSON NOTES TERM II.pdf',
      },
      {
        title: 'P.2 LITERACY II WRITING TERM I - III',
        description: 'LITERACY',
        price: 15000,
        link: 'https://freshteacher.software/P.2 LITERACY II WRITING TERM I - III.pdf',
      },
      {
        title: 'P.2 LITERACY II WRITING TERM I',
        description: 'LITERACY',
        price: 25000,
        link: 'https://freshteacher.software/P.2 LITERACY II WRITING TERM I.pdf',
      },
      {
        title: 'P.2 LITERACY LESSON NOTES TERM II',
        description: 'LITERACY',
        price: 55000,
        link: 'https://freshteacher.software/P.2 LITERACY LESSON NOTES TERM II.pdf',
      },
      {
        title: 'P.2 LUGANDA LESSON NOTES  TERM I',
        description: 'LUGANDA',
        price: 2000,
        link: 'https://freshteacher.software/P.2 LUGANDA LESSON NOTES  TERM I.pdf',
      },{
        title: 'P.2 LUGANDA LESSON NOTES TERM II',
        description: 'LUGANDA',
        price: 10000,
        link: 'https://freshteacher.software/P.2 LUGANDA LESSON NOTES TERM II.pdf',
      },
      {
        title: 'P.2 LUGANDA LESSON NOTES TERM III',
        description: 'LUGANDA',
        price: 15000,
        link: 'https://freshteacher.software/P.2 LUGANDA LESSON NOTES TERM III.pdf',
      },
      {
        title: 'P.2 MATHEMATICS  LESSON NOTES TERM I',
        description: 'MATHEMATICS',
        price: 25000,
        link: 'https://freshteacher.software/P.2 MATHEMATICS  LESSON NOTES TERM I.pdf',
      },
      {
        title: 'P.2 MATHEMATICS  LESSON NOTES TERM III',
        description: 'MATHEMATICS',
        price: 55000,
        link: 'https://freshteacher.software/P.2 MATHEMATICS  LESSON NOTES TERM III.pdf',
      },
      {
        title: 'P.2 MATHEMATICS TERM II',
        description: 'MATHEMATICS',
        price: 2500,
        link: 'https://freshteacher.software/P.2 MATHEMATICS TERM II.pdf',
      },{
        title: 'P.2 P.E LESSON NOTES',
        description: 'Physical Education',
        price: 37000,
        link: 'https://freshteacher.software/P.2 P.E LESSON NOTES.pdf',
      },
      {
        title: 'P.2 R.E LESSON NOTES TERM II',
        description: 'Religious Education',
        price: 13000,
        link: 'https://freshteacher.software/P.2 R.E LESSON NOTES TERM II.pdf',
      },
      {
        title: 'P.2 R.E LESSON NOTES TERM III',
        description: 'Religious Education',
        price: 45000,
        link: 'https://freshteacher.software/P.2 R.E LESSON NOTES TERM III.pdf',
      },
      {
        title: 'P.2 R.E REVISED LESSON NOTES TERM I',
        description: 'Religious Education',
        price: 57500,
        link: 'https://freshteacher.software/P.2 R.E REVISED LESSON NOTES TERM I.pdf',
      },
      {
        title: 'P.2 READING LESSON NOTES TERM I',
        description: 'READING',
        price: 24800,
        link: 'https://freshteacher.software/P.2 READING LESSON NOTES TERM I.pdf',
      },{
        title: 'P.2 READING LESSON NOTES TERM II',
        description: 'READING',
        price: 86000,
        link: 'https://freshteacher.software/P.2 READING LESSON NOTES TERM II.pdf',
      },
      {
        title: 'P.2 READING LESSON NOTES TERM III',
        description: 'READING',
        price: 11000,
        link: 'https://freshteacher.software/P.2 READING LESSON NOTES TERM III.pdf',
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
      <h1>Primary Two Class Lesson Notes</h1>
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

export default PrimaryTwoLessonNotes;
