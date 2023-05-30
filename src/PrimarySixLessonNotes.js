import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FiDownload, FiEye } from 'react-icons/fi';
import PDFViewer from './PDFViewer';

const PrimarySixLessonNotes = () => {
  const [lessonNotes, setLessonNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNote, setSelectedNote] = useState(null);
  const [scrollToPdf, setScrollToPdf] = useState(false);

  useEffect(() => {
    const sampleData = [
      {
        title: 'CRE NOTES P.6 ALL TERMS',
        description: 'Religious Education',
        price: 10000,
        link: 'https://freshteacher.software/CRE NOTES P.6 ALL TERMS.pdf',
      },
      {
        title: 'ENGLISH P.6 TERM ONE',
        description: 'ENGLISH',
        price: 10000,
        link: 'https://freshteacher.software/ENGLISH P.6 TERM ONE.pdf',
      },
      {
        title: 'IRE NOTES P.6 ALL TERMS',
        description: 'Religious Education',
        price: 10000,
        link: 'https://freshteacher.software/IRE NOTES P.6 ALL TERMS.pdf',
      },
      {
        title: 'MATH P.6 TERM III',
        description: 'MATH',
        price: 10000,
        link: 'https://freshteacher.software/MATH P.6 TERM III.pdf',
      },
      {
        title: 'MTC P.6 LESSON NOTES TERM ONE 1',
        description: 'MATH',
        price: 10000,
        link: 'https://freshteacher.software/MTC P.6 LESSON NOTES TERM ONE 1.pdf',
      },
      {
        title: 'P.6  Comprehension Term 1',
        description: 'English',
        price: 10000,
        link: 'https://freshteacher.software/P.6  Comprehension Term 1.pdf',
      },
      {
        title: 'P.6  Grammar Term 1',
        description: 'English',
        price: 10000,
        link: 'https://freshteacher.software/P.6  Grammar Term 1.pdf',
      },
      {
        title: 'P.6  Grammar Term 1',
        description: 'English',
        price: 10000,
        link: 'https://freshteacher.software/P.6  Grammar Term 1.pdf',
      },
      {
        title: 'P.6 ALL TERMS MTC LESSON NOT',
        description: 'MATHEMATICS',
        price: 10000,
        link: 'https://freshteacher.software/P.6 ALL TERMS MTC LESSON NOT.pdf',
      },
      {
        title: 'P.6 Composition Term 1',
        description: 'English',
        price: 10000,
        link: 'https://freshteacher.software/P.6 Composition Term 1.pdf',
      },
      {
        title: 'P.6 Composition Term 3',
        description: 'English',
        price: 10000,
        link: 'https://freshteacher.software/P.6 Composition Term 3.pdf',
      },
      {
        title: 'P.6 Comprehension Term 3',
        description: 'English',
        price: 10000,
        link: 'https://freshteacher.software/P.6 Comprehension Term 3.pdf',
      },
      {
        title: 'P.6 CRE NOTES TERM 3',
        description: 'Religious Education',
        price: 10000,
        link: 'https://freshteacher.software/P.6 CRE NOTES TERM 3.pdf',
      },
      {
        title: 'P.6 ENGLISH LESSON NOTES TERM I - III',
        description: 'ENGLISH',
        price: 10000,
        link: 'https://freshteacher.software/P.6 ENGLISH LESSON NOTES TERM I - III.pdf',
      },
      {
        title: 'P.6 ENGLISH LESSON NOTES TERM ONE',
        description: 'ENGLISH',
        price: 10000,
        link: 'https://freshteacher.software/P.6 ENGLISH LESSON NOTES TERM ONE.pdf',
      },
      {
        title: 'P.6 English Term Two',
        description: 'ENGLISH',
        price: 10000,
        link: 'https://freshteacher.software/P.6 English Term Two.pdf',
      },
      {
        title: 'P.6 GRAMMAR NOTES TERM THREE',
        description: 'ENGLISH',
        price: 10000,
        link: 'https://freshteacher.software/P.6 GRAMMAR NOTES TERM THREE.pdf',
      },
      {
        title: 'P.6 MATHEMATICS LESSON NOTES THIRD TERM',
        description: 'MATHEMATICS',
        price: 10000,
        link: 'https://freshteacher.software/P.6 MATHEMATICS LESSON NOTES THIRD TERM.pdf',
      },
      {
        title: 'P.6 MTC  LESSON NOTES ALL TERMS',
        description: 'MATHEMATICS',
        price: 10000,
        link: 'https://freshteacher.software/P.6 MTC  LESSON NOTES ALL TERMS.pdf',
      },
      {
        title: 'P.6 R.E LESSON TERM 1 NOTES',
        description: 'Religious Education',
        price: 10000,
        link: 'https://freshteacher.software/P.6 R.E LESSON TERM 1 NOTES.pdf',
      },
      {
        title: 'P.6 RE NOTES TERM II',
        description: 'Religious Education',
        price: 10000,
        link: 'https://freshteacher.software/P.6 RE NOTES TERM II.pdf',
      },
      {
        title: 'P.6 S.S.T Notes Term 2',
        description: 'Social Studies',
        price: 10000,
        link: 'https://freshteacher.software/P.6 S.S.T Notes Term 2.pdf',
      },
      {
        title: 'P.6 SCIE lesson notes',
        description: 'SCIENCE',
        price: 10000,
        link: 'https://freshteacher.software/P.6 SCIE lesson notes.pdf',
      },
      {
        title: 'P.6 SCIENCE NOTES  2  3',
        description: 'SCIENCE',
        price: 10000,
        link: 'https://freshteacher.software/P.6 SCIENCE NOTES  2  3.pdf',
      },
      {
        title: 'p.6 science notes term iii',
        description: 'SCIENCE',
        price: 10000,
        link: 'https://freshteacher.software/p.6 science notes term iii.pdf',
      },
      {
        title: 'P.6 SST LESSON NOTES TERM III',
        description: 'Social Studies',
        price: 10000,
        link: 'https://freshteacher.software/P.6 SST LESSON NOTES TERM III.pdf',
      },
      {
        title: 'P.6 SST NOTE TERM 123',
        description: 'Social Studies',
        price: 10000,
        link: 'https://freshteacher.software/P.6 SST NOTE TERM 123.pdf',
      },
      {
        title: 'P.6 SST NOTES TERM 1',
        description: 'Social Studies',
        price: 10000,
        link: 'https://freshteacher.software/P.6 SST NOTES TERM 1.pdf',
      },
      {
        title: 'P6 SCIENCE ALL TERMS LESSON NOTES',
        description: 'SCIENCE',
        price: 10000,
        link: 'https://freshteacher.software/P6 SCIENCE ALL TERMS LESSON NOTES.pdf',
      },
      {
        title: 'P.6 COMPOSITION AND COMPREHENSION  LESSON NOTES TERM III',
        description: 'English',
        price: 10000,
        link: 'https://freshteacher.software/P.6 COMPOSITION AND COMPREHENSION  LESSON NOTES TERM III.pdf',
      },
      {
        title: 'P.6 COMPOSITION AND COMPREHENSION LESSON NOTES TERM 1',
        description: 'English',
        price: 15000,
        link: 'https://freshteacher.software/P.6 COMPOSITION AND COMPREHENSION LESSON NOTES TERM 1.pdf',
      },
      {
        title: 'P.6 COMPOSITION AND COMPREHENSION LESSON NOTES TERM II',
        description: 'English',
        price: 25000,
        link: 'https://freshteacher.software/P.6 COMPOSITION AND COMPREHENSION LESSON NOTES TERM II.pdf',
      },
      {
        title: 'P.6 GRAMMAR LESSON NOTES  FOR TERM I',
        description: 'English',
        price: 55000,
        link: 'https://freshteacher.software/P.6 GRAMMAR LESSON NOTES  FOR TERM I.pdf',
      },
      {
        title: 'P.6 GRAMMAR LESSON NOTES TERM II',
        description: 'English',
        price: 2000,
        link: 'https://freshteacher.software/P.6 GRAMMAR LESSON NOTES TERM II.pdf',
      },{
        title: 'P.6 GRAMMAR LESSON NOTES TERM III',
        description: 'English',
        price: 10000,
        link: 'https://freshteacher.software/P.6 GRAMMAR LESSON NOTES TERM III.pdf',
      },
      {
        title: 'P.6 MTC LESSON NOTES TERM 1',
        description: 'Mathematics',
        price: 15000,
        link: 'https://freshteacher.software/P.6 LESSON NOTES TERM 1.pdf',
      },
      {
        title: 'P.6 MATHEMATICS TERM III LESSON NOTES',
        description: 'MATHEMATICS',
        price: 25000,
        link: 'https://freshteacher.software/P.6 MATHEMATICS TERM III LESSON NOTES.pdf',
      },
      {
        title: 'P.6 MATHS LESSON NOTES TERM 1',
        description: 'MATHEMATICS',
        price: 55000,
        link: 'https://freshteacher.software/P.6 MATHS LESSON NOTES TERM 1.pdf',
      },
      {
        title: 'P.6 MATHS LESSON NOTES TERM II',
        description: 'MATHEMATICS',
        price: 2000,
        link: 'https://freshteacher.software/P.6 MATHS LESSON NOTES TERM II.pdf',
      },{
        title: 'P.6 R.E LESSON NOTES  TERM 1',
        description: 'Primary Six',
        price: 10000,
        link: 'https://freshteacher.software/P.6 R.E LESSON NOTES  TERM 1.pdf',
      },
      {
        title: 'P.6 R.E LESSON NOTES TERM 2',
        description: 'Religious Education',
        price: 15000,
        link: 'https://freshteacher.software/P.6 R.E LESSON NOTES TERM 2.pdf',
      },
      {
        title: 'P.6 R.E LESSON NOTES TERM III',
        description: 'Religious Education',
        price: 25000,
        link: 'https://freshteacher.software/P.6 R.E LESSON NOTES TERM III.pdf',
      },
      {
        title: 'P.6 SCIENCE LESSON NOTES TERM 1',
        description: 'SCIENCE',
        price: 55000,
        link: 'https://freshteacher.software/P.6 SCIENCE LESSON NOTES TERM 1.pdf',
      },
      {
        title: 'P.6 SCIENCE LESSON NOTES TERM II',
        description: 'SCIENCE',
        price: 2500,
        link: 'https://freshteacher.software/P.6 SCIENCE LESSON NOTES TERM II.pdf',
      },{
        title: 'P.6 SCIENCE LESSON NOTES TERM III',
        description: 'SCIENCE',
        price: 37000,
        link: 'https://freshteacher.software/P.6 SCIENCE LESSON NOTES TERM III.pdf',
      },
      {
        title: 'P.6 SST LESSON NOTES TERM 1',
        description: 'Social Studies',
        price: 13000,
        link: 'https://freshteacher.software/P.6 SST LESSON NOTES TERM 1.pdf',
      },
      {
        title: 'P.6 SST LESSON NOTES TERM II',
        description: 'Social Studies',
        price: 45000,
        link: 'https://freshteacher.software/P.6 SST LESSON NOTES TERM II.pdf',
      },
      {
        title: 'P.6 SST LESSON NOTES TERM III',
        description: 'Social Studies',
        price: 57500,
        link: 'https://freshteacher.software/P.6 SST LESSON NOTES TERM III.pdf',
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
      <h1>Primary Six Class Lesson Notes</h1>
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

export default PrimarySixLessonNotes;
