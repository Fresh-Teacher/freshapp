import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FiDownload, FiEye } from 'react-icons/fi';
import PDFViewer from './PDFViewer';

const PrimaryOneLessonNotes = () => {
  const [lessonNotes, setLessonNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNote, setSelectedNote] = useState(null);
  const [scrollToPdf, setScrollToPdf] = useState(false);

  useEffect(() => {
    const sampleData = [
      {
        title: 'P.1 ENGLISH AND COMPREHENSION NOTES TERM 3.pdf',
        description: 'ENGLISH',
        price: 5000,
        link: 'https://freshteacher.software/P.1 ENGLISH AND COMPREHENSION NOTES TERM 3.pdf',
      },
     {
      title: 'P.1 ENGLISH TERM 3 notes.pdf',
        description: 'ENGLISH',
        price: 5000,
        link: 'https://freshteacher.software/P.1 ENGLISH TERM 3 notes.pdf',
      },
     {
      title: 'P.1 English Term I notes.pdf',
        description: 'ENGLISH',
        price: 5000,
        link: 'https://freshteacher.software/P.1 English Term I notes.pdf',
      },
     {
      title: 'P.1 ENGLISH TERMS 1, 2 _ 3  notes.pdf',
        description: 'ENGLISH',
        price: 5000,
        link: 'https://freshteacher.software/P.1 ENGLISH TERMS 1, 2 _ 3  notes.pdf',
      },
     {
      title: 'P.1 Literacy Lesson Notes Term 1.pdf',
        description: 'Literacy',
        price: 5000,
        link: 'https://freshteacher.software/P.1 Lesson Notes Term 1.pdf',
      },
    {
      title: 'P.1 LIT. II notes.pdf',
        description: 'Literacy',
        price: 5000,
        link: 'https://freshteacher.software/P.1 LIT. II notes.pdf',
      },
     {
      title: 'P.1 Literacy All Terms notes.pdf',
        description: 'Literacy',
        price: 5000,
        link: 'https://freshteacher.software/P.1 Literacy All Terms notes.pdf',
      },
     {
      title: 'P.1 LITERACY II TERM III notes.pdf',
        description: 'Literacy',
        price: 5000,
        link: 'https://freshteacher.software/P.1 LITERACY II TERM III notes.pdf',
      },
     {
      title: 'P.1 Literacy Notes Term 1.pdf',
        description: 'Literacy',
        price: 5000,
        link: 'https://freshteacher.software/P.1 Literacy Notes Term 1.pdf',
      },
    {
      title: 'P.1 LITERACY TERM 3 notes.pdf',
        description: 'Literacy',
        price: 5000,
        link: 'https://freshteacher.software/P.1 LITERACY TERM 3 notes.pdf',
      },
     {
      title: 'P.1 Literacy Term II notes.pdf',
        description: 'Literacy',
        price: 5000,
        link: 'https://freshteacher.software/P.1 Literacy Term II notes.pdf',
      },
    {
      title: 'P.1 LITERACY TWO TERM TWO NOTES.pdf',
        description: 'Literacy',
        price: 5000,
        link: 'https://freshteacher.software/P.1 LITERACY TWO TERM TWO NOTES.pdf',
      },
    {
      title: 'P.1 MATHS LESSON NOTES TERM II.pdf',
        description: 'MATHS',
        price: 5000,
        link: 'https://freshteacher.software/P.1 MATHS LESSON NOTES TERM II.pdf',
      },
    {
      title: 'P.1 MATHS TERM 3 NOTES.pdf',
        description: 'MATHS',
        price: 5000,
        link: 'https://freshteacher.software/P.1 MATHS TERM 3 NOTES.pdf',
      },
    {
      title: 'P.1 MATHS TERM III NOTES.pdf',
        description: 'MATHS',
        price: 5000,
        link: 'https://freshteacher.software/P.1 MATHS TERM III NOTES.pdf',
      },
    {
      title: 'P.1 MTC All Terms NOTES.pdf',
        description: 'MATHS',
        price: 5000,
        link: 'https://freshteacher.software/P.1 MTC All Terms NOTES.pdf',
      },
    {
      title: 'P.1 MTC TERM 1 NOTES.pdf',
        description: 'MATHS',
        price: 5000,
        link: 'https://freshteacher.software/P.1 MTC TERM 1 NOTES.pdf',
      },
    {
      title: 'P.1 News Term One notes.pdf',
        description: 'News',
        price: 5000,
        link: 'https://freshteacher.software/P.1 News Term One notes.pdf',
      },
    {
      title: 'P.1 Oral Literature Term II notes.pdf',
        description: 'Oral Literature',
        price: 5000,
        link: 'https://freshteacher.software/P.1 Oral Literature Term II notes.pdf',
      },
    {
      title: 'P.1 R.E Term 2 notes.pdf',
        description: 'Religious Education',
        price: 5000,
        link: 'https://freshteacher.software/P.1 R.E Term 2 notes.pdf',
      },
    {
      title: 'P.1 READING TERM I,II,III NOTES.pdf',
        description: 'READING',
        price: 5000,
        link: 'https://freshteacher.software/P.1 READING TERM I,II,III NOTES.pdf',
      },
    {
      title: 'P.1 READING TERM III NOTES.pdf',
        description: 'READING',
        price: 5000,
        link: 'https://freshteacher.software/P.1 READING TERM III NOTES.pdf',
      },
      {
        title: 'P.1 ENGLISH GRAMMAR, COMPOSITION & COMPREHENSION TERM III',
        description: 'ENGLISH',
        price: 10000,
        link: 'https://freshteacher.software/P.1 ENGLISH GRAMMAR, COMPOSITION & COMPREHENSION TERM III.pdf',
      },
      {
        title: 'P.1 MATHEMATICS LESSON NOTES TERM III',
        description: 'MATHEMATICS',
        price: 15000,
        link: 'https://freshteacher.software/P.1 MATHEMATICS LESSON NOTES TERM III.pdf',
      },
      {
        title: 'P.1 R.E LESSON NOTES TERM 1',
        description: 'Religious Education',
        price: 25000,
        link: 'https://freshteacher.software/P.1 R.E LESSON NOTES TERM 1.pdf',
      },
      {
        title: 'P.1 R.E LESSON NOTES TERM I',
        description: 'Religious Education',
        price: 55000,
        link: 'https://freshteacher.software/P.1 R.E LESSON NOTES TERM I.pdf',
      },
      {
        title: 'P.1 READING LESSON NOTES TERM II',
        description: 'READING',
        price: 2000,
        link: 'https://freshteacher.software/P.1 READING LESSON NOTES TERM II.pdf',
      },{
        title: 'P.1 READING LESSON NOTES TERM III',
        description: 'READING',
        price: 10000,
        link: 'https://freshteacher.software/P.1 READING LESSON NOTES TERM III.pdf',
      },
      {
        title: 'P.1 TERM 1 ENGLISH COMPOSITION & COMPREHENSION LESSON NOTES',
        description: 'ENGLISH',
        price: 15000,
        link: 'https://freshteacher.software/P.1 TERM 1 ENGLISH COMPOSITION & COMPREHENSION LESSON NOTES.pdf',
      },
      {
        title: 'P.1 TERM 1 MATHEMATICS LESSON NOTES',
        description: 'MATHEMATICS',
        price: 25000,
        link: 'https://freshteacher.software/P.1 TERM 1 MATHEMATICS LESSON NOTES.pdf',
      },
      {
        title: 'P.I ENGLISH GRAMMAR  LESSON NOTES',
        description: 'ENGLISH',
        price: 55000,
        link: 'https://freshteacher.software/P.I ENGLISH GRAMMAR  LESSON NOTES.pdf',
      },
      {
        title: 'P.I LITERACY LESSON NOTES TERM II',
        description: 'LITERACY',
        price: 2000,
        link: 'https://freshteacher.software/P.I LITERACY LESSON NOTES TERM II.pdf',
      },{
        title: 'P.I LITERACY LESSON NOTES TERM III',
        description: 'LITERACY',
        price: 10000,
        link: 'https://freshteacher.software/P.I LITERACY LESSON NOTES TERM III.pdf',
      },
      {
        title: 'P.I LITERACY TERM I LESSON NOTES',
        description: 'LITERACY',
        price: 15000,
        link: 'https://freshteacher.software/P.I LITERACY TERM I LESSON NOTES.pdf',
      },
      {
        title: 'P.I LUGANDA LESSON NOTES TERM I',
        description: 'LUGANDA',
        price: 25000,
        link: 'https://freshteacher.software/P.I LUGANDA LESSON NOTES TERM I.pdf',
      },
      {
        title: 'P.I LUGANDA LESSON NOTES TERM II',
        description: 'LUGANDA',
        price: 55000,
        link: 'https://freshteacher.software/P.I LUGANDA LESSON NOTES TERM II.pdf',
      },
      {
        title: 'P.I LUGANDA LESSON NOTES TERM III',
        description: 'LUGANDA',
        price: 2500,
        link: 'https://freshteacher.software/P.I LUGANDA LESSON NOTES TERM III.pdf',
      },{
        title: 'P.I MATHEMATICS LESSON NOTES TERM II',
        description: 'MATHEMATICS',
        price: 37000,
        link: 'https://freshteacher.software/P.I MATHEMATICS LESSON NOTES TERM II.pdf',
      },
      {
        title: 'P.I R.E  LESSON NOTES TERM II',
        description: 'Religious Education',
        price: 13000,
        link: 'https://freshteacher.software/P.I R.E  LESSON NOTES TERM II.pdf',
      },
      {
        title: 'P.I R.E LESSON NOTES TERM III',
        description: 'Religious Education',
        price: 45000,
        link: 'https://freshteacher.software/P.I R.E LESSON NOTES TERM III.pdf',
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
      <h1>Primary One Class Lesson Notes</h1>
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

export default PrimaryOneLessonNotes;
