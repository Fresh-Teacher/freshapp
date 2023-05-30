import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FiDownload, FiEye } from 'react-icons/fi';
import PDFViewer from './PDFViewer';

const PrimaryThreeSchemesOfWork = () => {
  const [lessonNotes, setLessonNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNote, setSelectedNote] = useState(null);
  const [scrollToPdf, setScrollToPdf] = useState(false);

  useEffect(() => {
    const sampleData = [
      {
        title: 'MTC P.3 SCHEME OF WORK All Terms',
        description: 'Mathematics',
        price: 5000,
        link: 'https://freshteacher.software/MTC P.3 SCHEMEOF WORK All Terms.pdf',
      },
      {
        title: 'P.3 Agriculture Scheme Term 2',
        description: '',
        price: 5000,
        link: 'https://freshteacher.software/P.3 Agriculture Scheme Term 2.pdf',
      },
      {
        title: 'P.3 Art Scheme Term 3',
        description: 'Art',
        price: 5000,
        link: 'https://freshteacher.software/P.3 Art Scheme Term 3.pdf',
      },
      {
        title: 'P.3 Art Scheme Term II',
        description: 'Art',
        price: 5000,
        link: 'https://freshteacher.software/P.3 Art Scheme Term II.pdf',
      },
      {
        title: 'P.3 Comprehension Term 2',
        description: 'English',
        price: 5000,
        link: 'https://freshteacher.software/P.3 Comprehension Term 2.pdf',
      },
      {
        title: 'P.3 Comprehension Term I',
        description: 'English',
        price: 5000,
        link: 'https://freshteacher.software/P.3 Comprehension Term I.pdf',
      },
      {
        title: 'P.3 English Comprehension Term III',
        description: 'English',
        price: 5000,
        link: 'https://freshteacher.software/P.3 English Comprehension Term III.pdf',
      },
      {
        title: 'P.3 English Scheme Term 1',
        description: 'English',
        price: 5000,
        link: 'https://freshteacher.software/P.3 English Scheme Term 1.pdf',
      },
      {
        title: 'P.3 GENERAL SCHEMES OF WORK FIRST TERM',
        description: 'Thematic',
        price: 5000,
        link: 'https://freshteacher.software/P.3 GENERAL SCHEMES OF WORK FIRST TERM.pdf',
      },
      {
        title: 'P.3 Grammar Term 2',
        description: 'English',
        price: 5000,
        link: 'https://freshteacher.software/P.3 Grammar Term 2.pdf',
      },
      {
        title: 'P.3 Grammar Term III',
        description: 'English',
        price: 5000,
        link: 'https://freshteacher.software/P.3 Grammar Term III.pdf',
      },
      {
        title: 'P.3 Grammar Term One',
        description: 'English',
        price: 5000,
        link: 'https://freshteacher.software/P.3 Grammar Term One.pdf',
      },
      {
        title: 'P.3 LIT 1 SCHEMES OF WORK TERM ONE',
        description: 'Literacy',
        price: 5000,
        link: 'https://freshteacher.software/P.3 LIT 1 SCHEMES OF WORK TERM ONE.pdf',
      },
      {
        title: 'P.3 LIT I  Scheme TERM II ',
        description: 'Literacy',
        price: 5000,
        link: 'https://freshteacher.software/P.3 LIT I  Scheme TERM II .pdf',
      },
      {
        title: 'P.3 LIT. II SCHEMES',
        description: 'Literacy',
        price: 5000,
        link: 'https://freshteacher.software/P.3 LIT. II SCHEMES.pdf',
      },
      {
        title: 'P.3 Lit1 Term iii',
        description: 'Literacy',
        price: 5000,
        link: 'https://freshteacher.software/P.3 Lit1 Term iii.pdf',
      },
      {
        title: 'P.3 LIT2 TERM 2 SCHEME',
        description: 'Literacy',
        price: 5000,
        link: 'https://freshteacher.software/P.3 LIT2 TERM 2 SCHEME.pdf',
      },
      {
        title: 'P.3 Literacy Scheme of Work Term 2',
        description: 'Literacy',
        price: 5000,
        link: 'https://freshteacher.software/P.3 Literac Scheme of Work Term 2.pdf',
      },
      {
        title: 'P.3 LITERACY 1 SCHEME TERM 1',
        description: 'Literacy',
        price: 5000,
        link: 'https://freshteacher.software/P.3 LITERACY 1 SCHEME TERM 1.pdf',
      },
      {
        title: 'P.3 Literacy 1 Term I',
        description: 'Literacy',
        price: 5000,
        link: 'https://freshteacher.software/P.3 Literacy 1 Term I.pdf',
      },
      {
        title: 'P.3 Literacy 1 Term Two Scheme',
        description: 'Literacy',
        price: 5000,
        link: 'https://freshteacher.software/P.3 Literacy 1 Term Two Scheme.pdf',
      },
      {
        title: 'p.3 math scheme of work 2nd term',
        description: 'MATHS',
        price: 5000,
        link: 'https://freshteacher.software/p.3 math scheme of work 2nd term.pdf',
      },
      {
        title: 'P.3 Mathematics Scheme Term 1',
        description: 'MATHS',
        price: 5000,
        link: 'https://freshteacher.software/P.3 Mathematics Scheme Term 1.pdf',
      },
      {
        title: 'P.3 Maths Scheme of Work TERM THREE',
        description: 'MATHS',
        price: 5000,
        link: 'https://freshteacher.software/P.3 Maths Scheme of Work TERM THREE.pdf',
      },
      {
        title: 'P.3 Maths Term 3',
        description: 'MATHS',
        price: 5000,
        link: 'https://freshteacher.software/P.3 Maths Term 3.pdf',
      },
      {
        title: 'P.3 MATHS UNIVERSAL SCHEME OF WORK',
        description: 'MATHS',
        price: 5000,
        link: 'https://freshteacher.software/P.3 MATHS UNIVERSAL SCHEME OF WORK.pdf',
      },
      {
        title: 'P.3 P.E Term 3',
        description: 'Physical Education',
        price: 5000,
        link: 'https://freshteacher.software/P.3 P.E Term 3.pdf',
      },
      {
        title: 'P.3 R.E Term 1',
        description: 'Religious Education',
        price: 5000,
        link: 'https://freshteacher.software/P.3 R.E Term 1.pdf',
      },
      {
        title: 'P.3 RE Term 2',
        description: 'Religious Education',
        price: 5000,
        link: 'https://freshteacher.software/P.3 RE Term 2.pdf',
      },
      {
        title: 'P.3 RE TERM 111 SCHEME',
        description: 'Religious Education',
        price: 5000,
        link: 'https://freshteacher.software/P.3 RE TERM 111 SCHEME.pdf',
      },
      {
        title: 'P.3 RE Term II',
        description: 'Religious Education',
        price: 5000,
        link: 'https://freshteacher.software/P.3 RE Term II.pdf',
      },
      {
        title: 'P.3 Religious Education Third Term',
        description: 'Religious Education',
        price: 5000,
        link: 'https://freshteacher.software/P.3 Religious Education Third Term.pdf',
      },
      {
        title: 'P.3 Scheme of Work English',
        description: 'English',
        price: 5000,
        link: 'https://freshteacher.software/P.3 Scheme of Work English.pdf',
      },
      {
        title: 'P.3 Science Third Term',
        description: 'Science',
        price: 5000,
        link: 'https://freshteacher.software/P.3 Science Third Term.pdf',
      },
      {
        title: 'P.3 THEMATIC SCHEME OF WORK TERM ONE',
        description: 'THEMATIC',
        price: 5000,
        link: 'https://freshteacher.software/P.3 THEMATIC SCHEME OF WORK TERM ONE.pdf',
      },
      {
        title: 'P3 Art Schemes Term 2',
        description: 'Art',
        price: 5000,
        link: 'https://freshteacher.software/P3 Art Schemes Term 2.pdf',
      },
      {
        title: 'P3 CRE SCHEME TERM THREE',
        description: 'Religious Education',
        price: 5000,
        link: 'https://freshteacher.software/P3 CRE SCHEME TERM THREE.pdf',
      },
      {
        title: 'P3 ENGLISH Comprehension TERM 2 SCHEME',
        description: 'ENGLISH',
        price: 5000,
        link: 'https://freshteacher.software/P3 ENGLISH Comprehension TERM 2 SCHEME.pdf',
      },
      {
        title: 'P3 IRE SCHEME Term I',
        description: 'Religious Education',
        price: 5000,
        link: 'https://freshteacher.software/P3 IRE SCHEME Term I.pdf',
      },
      {
        title: 'P3 English Grammar Scheme Term2',
        description: 'English',
        price: 5000,
        link: 'https://freshteacher.software/P3 English Grammar Scheme Term2.pdf',
      },
      {
        title: 'P3 LIT2 TERM 1 SCHEME',
        description: 'Literacy',
        price: 5000,
        link: 'https://freshteacher.software/P3 LIT2 TERM 1 SCHEME.pdf',
      },
      {
        title: 'P3 LIT2 TERM 2 SCHEME',
        description: 'Literacy',
        price: 5000,
        link: 'https://freshteacher.software/P3 LIT2 TERM 2 SCHEME.pdf',
      },
      {
        title: 'P3 Literacy Scheme of Work Term 2',
        description: 'Literacy',
        price: 5000,
        link: 'https://freshteacher.software/P3 Literacy Scheme of Work Term 2.pdf',
      },
      {
        title: 'P3 RE TERM 2 SCHEME',
        description: 'Religious Education',
        price: 5000,
        link: 'https://freshteacher.software/P3 RE TERM 2 SCHEME.pdf',
      },
      {
        title: 'ENGLISH GRAMMAR P.3 TERM 2 SCHEMES OF WORK',
        description: 'GRAMMAR',
        price: 10000,
        link: 'https://freshteacher.software/ENGLISH GRAMMAR P.3 TERM 2 SCHEMES OF WORK.pdf',
      },
      {
        title: 'LITERACY IB P.3 TERM 2 SCHEMES OF WORK',
        description: 'LITERACY',
        price: 15000,
        link: 'https://freshteacher.software/LITERACY IB P.3 TERM 2 SCHEMES OF WORK.pdf',
      },
      {
        title: 'P.3  READING SCHEME OF WORK TERM III',
        description: 'READING',
        price: 25000,
        link: 'https://freshteacher.software/P.3  READING SCHEME OF WORK TERM III.pdf',
      },
      {
        title: 'P.3 GRAMMAR, COMPREHENSION & COMPREHENSION SCHEME OF WORK TERM II',
        description: 'English',
        price: 55000,
        link: 'https://freshteacher.software/P.3 GRAMMAR, COMPREHENSION & COMPREHENSION SCHEME OF WORK TERM II.pdf',
      },
      {
        title: '.3 INTEGERATED SCIENCE SCHEME OF WORK TERM I',
        description: 'SCIENCE',
        price: 2000,
        link: 'https://freshteacher.software/P.3 INTEGERATED SCIENCE SCHEME OF WORK TERM I.pdf',
      },{
        title: 'P.3 LIT I B  SCHEME OF WORK TERM I',
        description: 'LITERACY',
        price: 10000,
        link: 'https://freshteacher.software/P.3 LIT I B  SCHEME OF WORK TERM I.pdf',
      },
      {
        title: 'P.3 LIT IA SCHEME OF WORK TERM III',
        description: 'LITERACY',
        price: 15000,
        link: 'https://freshteacher.software/P.3 LIT IA SCHEME OF WORK TERM III.pdf',
      },
      {
        title: 'P.3 LIT IB SCHEME OF WORK TERM III',
        description: 'LITERACY',
        price: 25000,
        link: 'https://freshteacher.software/P.3 LIT IB SCHEME OF WORK TERM III.pdf',
      },
      {
        title: 'P.3 MATHEMATICS SCHEME OF WORK FOR TERM II',
        description: 'MATHEMATICS',
        price: 55000,
        link: 'https://freshteacher.software/P.3 MATHEMATICS SCHEME OF WORK FOR TERM II.pdf',
      },
      {
        title: 'P.3 MATHEMATICS SCHEME OF WORK TERM III',
        description: 'MATHEMATICS',
        price: 2000,
        link: 'https://freshteacher.software/P.3 MATHEMATICS SCHEME OF WORK TERM III.pdf',
      },{
        title: 'P.3 R. E TERM ONE SCHEME OF WORK FOR RELIGIOUS EDUCATION',
        description: 'Religious Education',
        price: 10000,
        link: 'https://freshteacher.software/P.3 R. E TERM ONE SCHEME OF WORK FOR RELIGIOUS EDUCATION.pdf',
      },
      {
        title: 'P.3 R.E SCHEME OF WORK TERM III',
        description: 'Religious Education',
        price: 15000,
        link: 'https://freshteacher.software/P.3 R.E SCHEME OF WORK TERM III.pdf',
      },
      {
        title: 'P.3 READING SCHEME OF WORK TERM I',
        description: 'READING',
        price: 25000,
        link: 'https://freshteacher.software/P.3 READING SCHEME OF WORK TERM I.pdf',
      },
      {
        title: 'P.3 READING SCHEME OF WORK TERM II',
        description: 'READING',
        price: 55000,
        link: 'https://freshteacher.software/P.3 READING SCHEME OF WORK TERM II.pdf',
      },
      {
        title: 'R.E SCHEME OF WORK P.3 TERM 2',
        description: 'Religious Education',
        price: 2500,
        link: 'https://freshteacher.software/R.E SCHEME OF WORK P.3 TERM 2.pdf',
      },{
        title: 'SCIENCE  SCHEME OF WORK P.3 TERM 2',
        description: 'SCIENCE',
        price: 37000,
        link: 'https://freshteacher.software/SCIENCE  SCHEME OF WORK P.3 TERM 2.pdf',
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
      <h1>Primary Three Class Schemes of Work</h1>
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

export default PrimaryThreeSchemesOfWork;
