import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FiDownload, FiEye } from 'react-icons/fi';
import PDFViewer from './PDFViewer';

const MiddleClassSchemesOfWork = () => {
  const [lessonNotes, setLessonNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNote, setSelectedNote] = useState(null);
  const [scrollToPdf, setScrollToPdf] = useState(false);

  useEffect(() => {
    const sampleData = [
      {
        title: 'english middle class scheme of work',
        description: 'english',
        price: 10000,
        link: 'https://freshteacher.software/english middle class scheme of work.pdf',
      },
      {
        title: 'literacy middle class scheme of work',
        description: 'literacy',
        price: 15000,
        link: 'https://freshteacher.software/literacy middle class scheme of work.pdf',
      },
      {
        title: 'Middle Aptitude Scheme Term 2',
        description: 'Aptitude',
        price: 25000,
        link: 'https://freshteacher.software/Middle Aptitude Scheme Term 2.pdf',
      },
      {
        title: 'Middle Aptitude Scheme Term 2',
        description: 'Aptitude',
        price: 55000,
        link: 'https://freshteacher.software/Middle Aptitude Scheme Term 2.pdf',
      },
      {
        title: 'Middle class English scheme of work',
        description: 'English',
        price: 2000,
        link: 'https://freshteacher.software/Middle class English scheme of work.pdf',
      },{
        title: 'Middle class Numbers scheme of work',
        description: 'Numbers',
        price: 10000,
        link: 'https://freshteacher.software/Middle class Numbers scheme of work.pdf',
      },
      {
        title: 'Middle class RE term 3 scheme of work',
        description: 'Religious Education',
        price: 15000,
        link: 'https://freshteacher.software/Middle class RE term 3 scheme of work.pdf',
      },
      {
        title: 'Middle class reading term 3 scheme of work',
        description: 'Reading',
        price: 25000,
        link: 'https://freshteacher.software/Middle class reading term 3 scheme of work.pdf',
      },
      {
        title: 'Middle English Scheme Term 2',
        description: 'English',
        price: 55000,
        link: 'https://freshteacher.software/Middle English Scheme Term 2.pdf',
      },
      {
        title: 'middle literacy third term scheme of work',
        description: 'Literacy',
        price: 2000,
        link: 'https://freshteacher.software/middle literacy third term scheme of work.pdf',
      },{
        title: 'Middle Numbers Scheme Term 2',
        description: 'Numbers',
        price: 10000,
        link: 'https://freshteacher.software/Middle Number Scheme Term 2.pdf',
      },
      {
        title: 'Middle Writing Scheme Term 2',
        description: 'Writing',
        price: 25000,
        link: 'https://freshteacher.software/Middle Writing Scheme Term 2.pdf',
      },
      {
        title: 'numbers middle class scheme of work',
        description: 'Numbers',
        price: 55000,
        link: 'https://freshteacher.software/numbers middle class scheme of work.pdf',
      },
      {
        title: 'NURSERY ART AND CRAFT TERM 2 scheme of work',
        description: 'ART AND CRAFT',
        price: 2500,
        link: 'https://freshteacher.software/NURSERY ART AND CRAFT TERM 2 scheme of work.pdf',
      },{
        title: 'NURSERY GENERAL KNOWLEDGE 2 scheme of work',
        description: 'GENERAL KNOWLEDGE II',
        price: 37000,
        link: 'https://freshteacher.software/NURSERY GENERAL KNOWLEDGE 2 scheme of work.pdf',
      },
      {
        title: 'NURSERY general knowledge scheme of work',
        description: 'GENERAL KNOWLEDGE',
        price: 13000,
        link: 'https://freshteacher.software/NURSERY general knowledge scheme of work.pdf',
      },
      {
        title: 'NURSERY LANGUAGE TERM 2 scheme of work',
        description: 'LANGUAGE',
        price: 45000,
        link: 'https://freshteacher.software/NURSERY LANGUAGE TERM 2 scheme of work.pdf',
      },
      {
        title: 'NURSERY NUMBERS TERM 2 scheme of work',
        description: 'NUMBERS',
        price: 57500,
        link: 'https://freshteacher.software/NURSERY NUMBERS TERM 2 scheme of work.pdf',
      },
      {
        title: 'NURSERY PE TERM 2 scheme of work',
        description: 'Physical Education',
        price: 24800,
        link: 'https://freshteacher.software/NURSERY PE TERM 2 scheme of work.pdf',
      },{
        title: 'Nursery rhymes term two scheme of work',
        description: 'Rhymes',
        price: 86000,
        link: 'https://freshteacher.software/Nursery rhymes term two scheme of work.pdf',
      },
      {
        title: 'RADIO SCHEME OF WORK FOR NURSERY',
        description: 'Radio',
        price: 11000,
        link: 'https://freshteacher.software/RADIO SCHEME OF WORK FOR NURSERY.pdf',
      },
      {
        title: 'scheme of work for English term 3 for Middle class',
        description: 'English',
        price: 29000,
        link: 'https://freshteacher.software/scheme of work for English term 3 for Middle class .pdf',
      },
      {
        title: 'Scheme of work for Middle class Writing term 3',
        description: 'Writing',
        price: 95000,
        link: 'https://freshteacher.software/Scheme of work for Middle class Writing term 3.pdf',
      },
      {
        title: 'scheme of work for reading LA 5 term 111 Middle class',
        description: 'Reading',
        price: 29000,
        link: 'https://freshteacher.software/scheme of work for reading LA 5 term 111 Middle class.pdf',
      },{
        title: 'VIDEO SCHEME OF WORK FOR NURSERY',
        description: 'VIDEO',
        price: 12400,
        link: 'https://freshteacher.software/VIDEO SCHEME OF WORK FOR NURSERY.pdf',
      },
      {
        title: 'reading middle class scheme of work',
        description: 'Reading',
        price: 12400,
        link: 'https://freshteacher.software/reading middle class scheme of work.pdf',
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
      <h1>Middle Class Schemes Of Work</h1>
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

export default MiddleClassSchemesOfWork;
