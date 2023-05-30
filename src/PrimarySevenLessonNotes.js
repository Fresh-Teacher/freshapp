import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FiDownload, FiEye } from 'react-icons/fi';
import PDFViewer from './PDFViewer';

const PrimarySevenLessonNotes = () => {
  const [lessonNotes, setLessonNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNote, setSelectedNote] = useState(null);
  const [scrollToPdf, setScrollToPdf] = useState(false);

  useEffect(() => {
    const sampleData = [
      {
        title: 'SST P.7 LESSON NOTES.pdf',
        description: 'SST',
        price: 5000,
        link: 'https://freshteacher.software/SST P.7 LESSON NOTES.pdf',
      },
      {
        title: 'English P.7 Lesson Notes Term 1.pdf',
        description: 'English',
        price: 5000,
        link: 'https://freshteacher.software/English P.7 Lesson Notes Term 1.pdf',
      },
      {
        title: 'MTC P.7 LESSON NOTES TERM ONE.pdf',
        description: 'MTC',
        price: 5000,
        link: 'https://freshteacher.software/MTC P.7 LESSON NOTES TERM ONE.pdf',
      },
      {
        title: 'P. 7 COMPREHENSION NOTES.pdf',
        description: 'ENGLISH',
        price: 5000,
        link: 'https://freshteacher.software/P. 7 COMPREHENSION NOTES.pdf',
      },
      {
        title: 'P.7  SCIENCE TERM 1 LESSON NOTES.pdf',
        description: 'SCIENCE',
        price: 5000,
        link: 'https://freshteacher.software/P.7  SCIENCE TERM 1 LESSON NOTES.pdf',
      },
      {
        title: 'P.7 C.R.E LESSON  NOTES.pdf',
        description: 'Religious Education',
        price: 5000,
        link: 'https://freshteacher.software/P.7 C.R.E LESSON  NOTES.pdf',
      },
      {
        title: 'P.7 CHRISTIAN RELIGIOUS EDUCATION LESSON NOTES TERM I.pdf',
        description: 'Religious Education',
        price: 5000,
        link: 'https://freshteacher.software/P.7 CHRISTIAN RELIGIOUS EDUCATION LESSON NOTES TERM I.pdf',
      },
      {
        title: 'P.7 CRE Lesson Notes Term 2.pdf',
        description: 'Religious Education',
        price: 5000,
        link: 'https://freshteacher.software/P.7 CRE Lesson Notes Term 2.pdf',
      },
      {
        title: 'P.7 ENGLISH GRAMMAR LESSON  NOTES.pdf',
        description: 'ENGLISH',
        price: 5000,
        link: 'https://freshteacher.software/P.7 ENGLISH GRAMMAR LESSON  NOTES.pdf',
      },
      {
        title: 'P.7 ENGLISH LESSON NOTES TERM ONE.pdf',
        description: 'ENGLISH',
        price: 5000,
        link: 'https://freshteacher.software/P.7 ENGLISH LESSON NOTES TERM ONE.pdf',
      },
      {
        title: 'P.7 GRAMMAR LESSON NOTES.pdf',
        description: 'English',
        price: 5000,
        link: 'https://freshteacher.software/P.7 GRAMMAR LESSON NOTES.pdf',
      },
      {
        title: 'P.7 IRE LESSON NOTES TERM ONE.pdf',
        description: 'Religious Education',
        price: 5000,
        link: 'https://freshteacher.software/P.7 IRE LESSON NOTES TERM ONE.pdf',
      },
      {
        title: 'P.7 LESSON NOTES  MATHS.pdf',
        description: 'MATHS',
        price: 5000,
        link: 'https://freshteacher.software/P.7 LESSON NOTES  MATHS.pdf',
      },
      {
        title: 'P.7 LESSON NOTES TERM 2 SST.pdf',
        description: 'SST',
        price: 5000,
        link: 'https://freshteacher.software/P.7 LESSON NOTES TERM 2 SST.pdf',
      },
      {
        title: 'P.7 NOTES MATHEMATICS.pdf',
        description: 'MATHEMATICS',
        price: 5000,
        link: 'https://freshteacher.software/P.7 NOTES MATHEMATICS.pdf',
      },
      {
        title: 'P.7 S.S.T LESSON  NOTES.pdf',
        description: 'S.S.T',
        price: 5000,
        link: 'https://freshteacher.software/P.7 S.S.T LESSON  NOTES.pdf',
      },
      {
        title: 'P.7 S.S.T NOTES TERM 2 AND 3.pdf',
        description: 'S.S.T',
        price: 5000,
        link: 'https://freshteacher.software/P.7 S.S.T NOTES TERM 2 AND 3.pdf',
      },
      {
        title: 'P.7 SCIENCE LESSON NOTES TERM ONE.pdf',
        description: 'SCIENCE',
        price: 5000,
        link: 'https://freshteacher.software/P.7 SCIENCE LESSON NOTES TERM ONE.pdf',
      },
      {
        title: 'P.7 SST  TERM ONE.pdf',
        description: 'SST',
        price: 5000,
        link: 'https://freshteacher.software/P.7 SST  TERM ONE.pdf',
      },
      {
        title: 'P.7 SST LESSON NOTES TERM 1.pdf',
        description: 'SST',
        price: 5000,
        link: 'https://freshteacher.software/P.7 SST LESSON NOTES TERM 1.pdf',
      },
      {
        title: 'P.7 SST LESSON NOTES TERM 2.pdf',
        description: 'SST',
        price: 5000,
        link: 'https://freshteacher.software/P.7 SST LESSON NOTES TERM 2.pdf',
      },
      {
        title: 'P.7 SST NOTES TERM 2 AND 3.pdf',
        description: 'SST',
        price: 5000,
        link: 'https://freshteacher.software/P.7 SST NOTES TERM 2 AND 3.pdf',
      },
      {
        title: 'P.7 SST TERM 2 LESSON NOTES.pdf',
        description: 'SST',
        price: 5000,
        link: 'https://freshteacher.software/P.7 SST TERM 2 LESSON NOTES.pdf',
      },
      {
        title: 'P7  SCIENCE LESSON  NOTES.pdf',
        description: 'SCIENCE',
        price: 5000,
        link: 'https://freshteacher.software/P7  SCIENCE LESSON  NOTES.pdf',
      },
      {
        title: 'P7 C.R.E LESSON NOTES TERM III.pdf',
        description: 'Religious Education',
        price: 5000,
        link: 'https://freshteacher.software/P7 C.R.E LESSON NOTES TERM III.pdf',
      },
      {
        title: 'P7 I.R.E  Lesson NOTES.pdf',
        description: 'Religious Education',
        price: 5000,
        link: 'https://freshteacher.software/P7 I.R.E  Lesson NOTES.pdf',
      },
      {
        title: 'P7 I.R.E TERM ONE LESSON NOTES.pdf',
        description: 'Religious Education',
        price: 5000,
        link: 'https://freshteacher.software/P7 I.R.E TERM ONE LESSON NOTES.pdf',
      },
      {
        title: 'P.7 COMPOSITION AND COMPREHENSION LESSON NOTES TERM 1 - 3',
        description: 'English',
        price: 10000,
        link: 'https://freshteacher.software/P.7 COMPOSITION AND COMPREHENSION LESSON NOTES TERM 1 - 3.pdf',
      },
      {
        title: 'P.7 GRAMMAR LESSON NOTES',
        description: 'English',
        price: 15000,
        link: 'https://freshteacher.software/P.7 GRAMMAR LESSON NOTES.pdf',
      },
      {
        title: 'P.7 MATHS NOTES TERM 1',
        description: 'MATHS',
        price: 25000,
        link: 'https://freshteacher.software/P.7 MATHS NOTES TERM 1.pdf',
      },
      {
        title: 'R.E LESSON NOTES TERM 1',
        description: 'Religious Education',
        price: 55000,
        link: 'https://freshteacher.software/P.7 R.E LESSON NOTES TERM 1.pdf',
      },
      {
        title: 'P.7 SST LESSON NOTES FOR TERM  I - III',
        description: 'Social Studies',
        price: 10000,
        link: 'https://freshteacher.software/P.7 SST LESSON NOTES FOR TERM  I - III.pdf',
      },
      {
        title: 'P7 SCIENCE  LESSON NOTES TERM 1 - 3',
        description: 'SCIENCE',
        price: 15000,
        link: 'https://freshteacher.software/P7 SCIENCE  LESSON NOTES TERM 1 - 3.pdf',
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
      <h1>Primary Seven Class Lesson Notes</h1>
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

export default PrimarySevenLessonNotes;
