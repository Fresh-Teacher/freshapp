import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FiDownload, FiEye } from 'react-icons/fi';
import PDFViewer from './PDFViewer';

const PrimaryFiveLessonNotes = () => {
  const [lessonNotes, setLessonNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNote, setSelectedNote] = useState(null);
  const [scrollToPdf, setScrollToPdf] = useState(false);

  useEffect(() => {
    const sampleData = [
      {
        title: 'P. 5 Lesson notes Mathematics ALL Terms',
        description: 'Mathematics',
        price: 5000,
        link: 'https://freshteacher.software/P. 5 Lesson notes Mathematics ALL Terms.pdf',
      },
      {
        title: 'P.5 English lesson notes Terms I - III',
        description: 'English',
        price: 5000,
        link: 'https://freshteacher.software/P.5 English lesson notes Terms I - III.pdf',
      },
      {
        title: 'P.5 Lesson Notes SST All Terms',
        description: 'Social Studies',
        price: 5000,
        link: 'https://freshteacher.software/P.5 Lesson Notes SST All Terms.pdf',
      },
      {
        title: 'P.5 Science Lesson Notes',
        description: 'Science',
        price: 5000,
        link: 'https://freshteacher.software/P.5 Science Lesson Notes.pdf',
      },
      {
        title: 'CRE NOTES P.5. ALL TERMS',
        description: 'Religious Education',
        price: 5000,
        link: 'https://freshteacher.software/CRE NOTES P.5. ALL TERMS.pdf',
      },
      {
        title: 'P.5 COMPOSITION AND COMPREHENSION LESSON NOTES TERM 2',
        description: 'English',
        price: 10000,
        link: 'https://freshteacher.software/P.5 COMPOSITION AND COMPREHENSION LESSON NOTES TERM 2.pdf',
      },
      
      {
        title: 'P.5 COMPOSITION AND COMPREHENSION LESSON NOTES TERM III',
        description: 'English',
        price: 15000,
        link: 'https://freshteacher.software/P.5 COMPOSITION AND COMPREHENSION LESSON NOTES TERM III.pdf',
      },
      {
        title: 'P.5 COMPOSITION AND COMPREHENSION TERM 1',
        description: 'English',
        price: 25000,
        link: 'https://freshteacher.software/P.5 COMPOSITION AND COMPREHENSION TERM 1.pdf',
      },
      {
        title: 'P.5 ENGLISH GRAMMAR LESSON NOTES TERM III',
        description: 'ENGLISH',
        price: 55000,
        link: 'https://freshteacher.software/P.5 ENGLISH GRAMMAR LESSON NOTES TERM III.pdf',
      },
      {
        title: 'P.5 GRAMMAR LESSON NOTES  FOR TERM I',
        description: 'ENGLISH',
        price: 2000,
        link: 'https://freshteacher.software/P.5 GRAMMAR LESSON NOTES  FOR TERM I.pdf',
      },{
        title: 'P.5 GRAMMAR LESSON NOTES TERM II',
        description: 'English',
        price: 10000,
        link: 'https://freshteacher.software/P.5 GRAMMAR LESSON NOTES TERM II.pdf',
      },
      {
        title: 'P.5 MATHEMATICS LESSON NOTED TERM III',
        description: 'Mathematics',
        price: 15000,
        link: 'https://freshteacher.software/P.5 MATHEMATICS LESSON NOTED TERM III.pdf',
      },
      {
        title: 'P.5 MATHEMATICS LESSON NOTES TERM II',
        description: 'MATHEMATICS',
        price: 25000,
        link: 'https://freshteacher.software/P.5 MATHEMATICS LESSON NOTES TERM II.pdf',
      },
      {
        title: 'P.5 MATHS LESSON NOTES TERM 1',
        description: 'MATHEMATICS',
        price: 55000,
        link: 'https://freshteacher.software/P.5 MATHS LESSON NOTES TERM 1.pdf',
      },
      {
        title: 'P.5 R E LESSON NOTES TERM 1',
        description: 'Religious Education',
        price: 2000,
        link: 'https://freshteacher.software/P.5 R E LESSON NOTES TERM 1.pdf',
      },{
        title: 'P.5 R.E LESSON NOTES TERM 2',
        description: 'Religious Education',
        price: 10000,
        link: 'https://freshteacher.software/P.5 R.E LESSON NOTES TERM 2.pdf',
      },
      {
        title: 'P.5 R.E LESSON NOTES TERM III',
        description: 'Religious Education',
        price: 15000,
        link: 'https://freshteacher.software/P.5 R.E LESSON NOTES TERM III.pdf',
      },
      {
        title: 'P.5 SCIENCE  LESSON NOTES TERM III',
        description: 'SCIENCE',
        price: 25000,
        link: 'https://freshteacher.software/P.5 SCIENCE  LESSON NOTES TERM III.pdf',
      },
      {
        title: 'P.5 SCIENCE LESSON NOTES TERM 1',
        description: 'SCIENCE',
        price: 55000,
        link: 'https://freshteacher.software/P.5 SCIENCE LESSON NOTES TERM 1.pdf',
      },
      {
        title: 'P.5 SCIENCE LESSON NOTES TERM II',
        description: 'SCIENCE',
        price: 2500,
        link: 'https://freshteacher.software/P.5 SCIENCE LESSON NOTES TERM II.pdf',
      },{
        title: 'P.5 SST LESSON NOTES TERM 1',
        description: 'Social Studies',
        price: 37000,
        link: 'https://freshteacher.software/P.5 SST LESSON NOTES TERM 1.pdf',
      },
      {
        title: 'P.5 SST LESSON NOTES TERM II',
        description: 'Social Studies',
        price: 13000,
        link: 'https://freshteacher.software/P.5 SST LESSON NOTES TERM II.pdf',
      },
      {
        title: 'P.5 SST LESSON NOTES TERM III',
        description: 'Social Studies',
        price: 45000,
        link: 'https://freshteacher.software/P.5 SST LESSON NOTES TERM III.pdf',
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
      <h1>Primary Five Class Lesson Notes</h1>
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

export default PrimaryFiveLessonNotes;
