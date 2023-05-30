import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FiDownload, FiEye } from 'react-icons/fi';
import PDFViewer from './PDFViewer';

const PrimaryFiveSchemesOfWork = () => {
  const [lessonNotes, setLessonNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNote, setSelectedNote] = useState(null);
  const [scrollToPdf, setScrollToPdf] = useState(false);

  useEffect(() => {
    const sampleData = [
      {
        title: 'P.5  S.ST SCHEME TERM 2.pdf',
        description: 'Social Studies',
        price: 5000,
        link: 'https://freshteacher.software/P.5  S.ST SCHEME TERM 2.pdf',
      },
      {
        title: 'p.5 art scheme of work term 3.pdf',
        description: 'Art',
        price: 5000,
        link: 'https://freshteacher.software/p.5 art scheme of work term 3.pdf',
      },
      {
        title: 'P.5 Art term 2.pdf',
        description: 'Art',
        price: 5000,
        link: 'https://freshteacher.software/P.5 Art term 2.pdf',
      },
      {
        title: 'P.5 COMPOSITION SCHEME OF WORK  TERM.pdf',
        description: 'English',
        price: 5000,
        link: 'https://freshteacher.software/P.5 COMPOSITION SCHEME OF WORK  TERM.pdf',
      },
      {
        title: 'P.5 COMPOSITION SCHEME OF WORK TERM 3.pdf',
        description: '',
        price: 5000,
        link: 'https://freshteacher.software/P.5 COMPOSITION SCHEME OF WORK TERM 3.pdf',
      },
      {
        title: 'P.5 COMPREHENSION SCHEME OF WORK TERM ONE.pdf',
        description: 'English',
        price: 5000,
        link: 'https://freshteacher.software/P.5 COMPREHENSION SCHEME OF WORK TERM ONE.pdf',
      },
      {
        title: 'P.5 comprehension term iii.pdf',
        description: 'English',
        price: 5000,
        link: 'https://freshteacher.software/P.5 comprehension term iii.pdf',
      },
      {
        title: 'P.5 comprehension term one.pdf',
        description: 'English',
        price: 5000,
        link: 'https://freshteacher.software/P.5 comprehension term one.pdf',
      },
      {
        title: 'p.5 eng comp term 2.pdf',
        description: 'English',
        price: 5000,
        link: 'https://freshteacher.software/p.5 eng comp term 2.pdf',
      },
      {
        title: 'p.5 eng grammar term 1.pdf',
        description: 'English',
        price: 5000,
        link: 'https://freshteacher.software/p.5 eng grammar term 1.pdf',
      },
      {
        title: 'P.5 Eng Grammar term 2.pdf',
        description: 'English',
        price: 5000,
        link: 'https://freshteacher.software/P.5 Eng Grammar term 2.pdf',
      },
      {
        title: 'P.5 English Schemes of work term I - III.pdf',
        description: 'English',
        price: 5000,
        link: 'https://freshteacher.software/P.5 English Schemes of work term I - III.pdf',
      },
      {
        title: 'P.5 English Language schemes of work all terms.pdf',
        description: 'English',
        price: 5000,
        link: 'https://freshteacher.software/P.5 English Language schemes of work all terms.pdf',
      },
      {
        title: 'P.5 GRAMMAR SCHEME OF WORK TERM ONE.pdf',
        description: 'English',
        price: 5000,
        link: 'https://freshteacher.software/P.5 GRAMMAR SCHEME OF WORK TERM ONE.pdf',
      },
      {
        title: 'P.5 GRAMMAR SCHEME TERM THREE.pdf',
        description: 'English',
        price: 5000,
        link: 'https://freshteacher.software/P.5 GRAMMAR SCHEME TERM THREE.pdf',
      },
      {
        title: 'P.5 Grammar term iii.pdf',
        description: 'English',
        price: 5000,
        link: 'https://freshteacher.software/P.5 Grammar term iii.pdf',
      },
      {
        title: 'p.5 math scheme of work term 2.pdf',
        description: 'Mathematics',
        price: 5000,
        link: 'https://freshteacher.software/p.5 math scheme of work term 2.pdf',
      },
      {
        title: 'P.5 Mathematics Schemes of work TERM III.pdf',
        description: 'Mathematics',
        price: 5000,
        link: 'https://freshteacher.software/P.5 Mathematics Schemes of work TERM III.pdf',
      },
      {
        title: 'p.5 mtc term 3.pdf',
        description: 'Mathematics',
        price: 5000,
        link: 'https://freshteacher.software/p.5 mtc term 3.pdf',
      },
      {
        title: 'p.5 P. E scheme of work term ii.pdf',
        description: 'PHYSICAL EDUCATION',
        price: 5000,
        link: 'https://freshteacher.software/p.5 P. E scheme of work term ii.pdf',
      },
      {
        title: 'p.5 P.E term 3.pdf',
        description: 'PHYSICAL EDUCATION',
        price: 5000,
        link: 'https://freshteacher.software/p.5 P.E term 3.pdf',
      },
      {
        title: 'p.5 r.e scheme of work term 111 .pdf',
        description: 'RELIGIOUS EDUCATION',
        price: 5000,
        link: 'https://freshteacher.software/p.5 r.e scheme of work term 111 .pdf',
      },
      {
        title: 'P.5 RELIGIOUS EDUCATION SCHEME OF WORK P5 TERM III.pdf',
        description: 'RELIGIOUS EDUCATION',
        price: 5000,
        link: 'https://freshteacher.software/P.5 RELIGIOUS EDUCATION SCHEME OF WORK P5 TERM III.pdf',
      },
      {
        title: 'P.5 SCHEME SCIENCE TERM 1 2015.pdf',
        description: 'SCIENCE',
        price: 5000,
        link: 'https://freshteacher.software/P.5 SCHEME SCIENCE TERM 1 2015.pdf',
      },
      {
        title: 'P.5 Sci scheme for term lll.pdf',
        description: 'SCIENCE',
        price: 5000,
        link: 'https://freshteacher.software/P.5 Sci scheme for term lll.pdf',
      },
      {
        title: 'P.5 scie scheme of work term 1.pdf',
        description: 'SCIENCE',
        price: 5000,
        link: 'https://freshteacher.software/P.5 scie scheme of work term 1.pdf',
      },
      {
        title: 'p.5 science scheme term 1.pdf',
        description: 'SCIENCE',
        price: 5000,
        link: 'https://freshteacher.software/p.5 science scheme term 1.pdf',
      },
      {
        title: 'P.5 science term 2.pdf',
        description: 'SCIENCE',
        price: 5000,
        link: 'https://freshteacher.software/P.5 science term 2.pdf',
      },
      {
        title: 'P.5 SCIENCE term 3.pdf',
        description: 'SCIENCE',
        price: 5000,
        link: 'https://freshteacher.software/P.5 SCIENCE term 3.pdf',
      },
      {
        title: 'P.5 SST SCHEME  TERM I.pdf',
        description: 'Social Studies',
        price: 5000,
        link: 'https://freshteacher.software/P.5 SST SCHEME  TERM I.pdf',
      },
      {
        title: 'p.5 sst scheme of work t3.pdf',
        description: 'Social Studies',
        price: 5000,
        link: 'https://freshteacher.software/p.5 sst scheme of work t3.pdf',
      },
      {
        title: 'P.5 SST SCHEME TERM 3.pdf',
        description: 'Social Studies',
        price: 5000,
        link: 'https://freshteacher.software/P.5 SST SCHEME TERM 3.pdf',
      },
      {
        title: 'P.5 SST scheme term1.pdf',
        description: 'Social Studies',
        price: 5000,
        link: 'https://freshteacher.software/P.5 SST scheme term1.pdf',
      },
      {
        title: 'p.5 sst term 11.pdf',
        description: 'Social Studies',
        price: 5000,
        link: 'https://freshteacher.software/p.5 sst term 11.pdf',
      },
      {
        title: 'P.5 sst term II.pdf',
        description: 'Social Studies',
        price: 5000,
        link: 'https://freshteacher.software/P.5 sst term II.pdf',
      },
      {
        title: 'p.5 sst term one.pdf',
        description: 'Social Studies',
        price: 5000,
        link: 'https://freshteacher.software/p.5 sst term one.pdf',
      },
      {
        title: 'P.5 TERM 1 science  SCHEMEs.pdf',
        description: 'Science',
        price: 5000,
        link: 'https://freshteacher.software/P.5 TERM 1 science  SCHEMEs.pdf',
      },
      {
        title: 'P.5 TERM 3 COMPREHENSION SCHEME.pdf',
        description: 'ENGLISH',
        price: 5000,
        link: 'https://freshteacher.software/P.5 TERM 3 COMPREHENSION SCHEME.pdf',
      },
      {
        title: 'P5 ENGLISH SCHEME OF WORK TERM ONE 1.pdf',
        description: 'ENGLISH',
        price: 5000,
        link: 'https://freshteacher.software/P5 ENGLISH SCHEME OF WORK TERM ONE 1.pdf',
      },
      {
        title: 'P5 SCIENCE SCHEME OF WORK term 1.pdf',
        description: 'SCIENCE',
        price: 5000,
        link: 'https://freshteacher.software/P5 SCIENCE SCHEME OF WORK term 1.pdf',
      },
      {
        title: 'scheme of work english P.5 term 1.pdf',
        description: 'English',
        price: 5000,
        link: 'https://freshteacher.software/scheme of work english P.5 term 1.pdf',
      },
      {
        title: 'P.5  SCIENCE SCHEME OF WORK NEW EDITION TERM 1',
        description: 'SCIENCE',
        price: 10000,
        link: 'https://freshteacher.software/P.5  SCIENCE SCHEME OF WORK NEW EDITION TERM 1.pdf',
      },
      {
        title: 'P.5 COMPOSITION AND COMPREHENSION SCHEME TERM II',
        description: 'English',
        price: 15000,
        link: 'https://freshteacher.software/P.5 COMPOSITION AND COMPREHENSION SCHEME TERM II.pdf',
      },
      {
        title: 'P.5 COMPOSITION AND COMPREHENSION SCHEME TERM III',
        description: 'English',
        price: 25000,
        link: 'https://freshteacher.software/P.5 COMPOSITION AND COMPREHENSION SCHEME TERM III.pdf',
      },
      {
        title: 'P.5 ENGLISH SCHEME COMPOSITION AND COMPREHENSION TERM I',
        description: 'English',
        price: 55000,
        link: 'https://freshteacher.software/P.5 ENGLISH SCHEME COMPOSITION AND COMPREHENSION TERM I.pdf',
      },
      {
        title: 'P.5 GRAMMAR SCHEME TERM II',
        description: 'English',
        price: 2000,
        link: 'https://freshteacher.software/P.5 GRAMMAR SCHEME TERM II.pdf',
      },{
        title: 'P.5 INTEGRATED SCIENCE SCHEME TERM II',
        description: 'SCIENCE',
        price: 10000,
        link: 'https://freshteacher.software/P.5 INTEGRATED SCIENCE SCHEME TERM II.pdf'
      },
      {
        title: 'P.5 MATHEMATICS SCHEME  TERM 1',
        description: 'MATHEMATICS',
        price: 15000,
        link: 'https://freshteacher.software/P.5 MATHEMATICS SCHEME  TERM 1.pdf',
      },
      {
        title: 'P.5 MATHS SCHEME OF WORK TERM 2',
        description: 'MATHS',
        price: 25000,
        link: 'https://freshteacher.software/P.5 MATHS SCHEME OF WORK TERM 2.pdf',
      },
      {
        title: 'P.5 MATHS SCHEME OF WORK TERM III',
        description: 'MATHS',
        price: 55000,
        link: 'https://freshteacher.software/P.5 MATHS SCHEME OF WORK TERM III.pdf',
      },
      {
        title: 'P.5 R.E  SCHEMES TERM I',
        description: 'Religious Education',
        price: 2000,
        link: 'https://freshteacher.software/P.5 R.E  SCHEMES TERM I.pdf',
      },{
        title: 'P.5 R.E SCHEME TERM II',
        description: 'Religious Education',
        price: 10000,
        link: 'https://freshteacher.software/P.5 R.E SCHEME TERM II.pdf',
      },
      {
        title: 'P.5 R.E SCHEME TERM III',
        description: 'Religious Education',
        price: 15000,
        link: 'https://freshteacher.software/P.5 R.E SCHEME TERM III.pdf',
      },
      {
        title: 'P.5 SCIENCE SCHEME  TERM III',
        description: 'SCIENCE',
        price: 25000,
        link: 'https://freshteacher.software/P.5 SCIENCE SCHEME  TERM III.pdf',
      },
     
      {
        title: 'P.5 SST SCHEME  TERM 1',
        description: 'Social Studies',
        price: 2500,
        link: 'https://freshteacher.software/P.5 SST SCHEME  TERM 1.pdf',
      },{
        title: 'P.5 SST SCHEME  TERM III',
        description: 'Social Studies',
        price: 37000,
        link: 'https://freshteacher.software/P.5 SST SCHEME  TERM III.pdf',
      },
      {
        title: 'P.5 SST SCHEME OF WORK FOR TERM II',
        description: 'Social Studies',
        price: 13000,
        link: 'https://freshteacher.software/p.5 SST SCHEME OF WORK FOR TERM II.pdf',
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
      <h1>Primary Five Class Schemes of Work</h1>
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

export default PrimaryFiveSchemesOfWork;
