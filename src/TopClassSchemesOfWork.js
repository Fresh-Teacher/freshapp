import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FiDownload, FiEye } from 'react-icons/fi';
import PDFViewer from './PDFViewer';

const TopClassSchemesOfWork = () => {
  const [lessonNotes, setLessonNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNote, setSelectedNote] = useState(null);
  const [scrollToPdf, setScrollToPdf] = useState(false);

  useEffect(() => {
    const sampleData = [
      {
        title: 'literacy top class scheme of work',
        description: 'Literacy',
        price: 10000,
        link: 'https://freshteacher.software/literacy top class scheme of work.pdf',
      },
      {
        title: 'NURSERY ART AND CRAFT TERM 2 scheme of work',
        description: 'ART AND CRAFT',
        price: 15000,
        link: 'https://freshteacher.software/NURSERY ART AND CRAFT TERM 2 scheme of work.pdf',
      },
      {
        title: 'NURSERY GENERAL KNOWLEDGE 2 scheme of work',
        description: 'GENERAL KNOWLEDGE 2',
        price: 25000,
        link: 'https://freshteacher.software/NURSERY GENERAL KNOWLEDGE 2 scheme of work.pdf',
      },
      {
        title: 'NURSERY general knowledge scheme of work',
        description: 'GENERAL KNOWLEDGE',
        price: 55000,
        link: 'https://freshteacher.software/NURSERY general knowledge scheme of work.pdf',
      },
      {
        title: 'NURSERY LANGUAGE TERM 2 scheme of work',
        description: 'LANGUAGE',
        price: 2000,
        link: 'https://freshteacher.software/NURSERY LANGUAGE TERM 2 scheme of work.pdf',
      },{
        title: 'NURSERY NUMBERS TERM 2 scheme of work',
        description: 'NUMBERS',
        price: 10000,
        link: 'https://freshteacher.software/NURSERY NUMBERS TERM 2 scheme of work.pdf',
      },
      {
        title: 'NURSERY PE TERM 2 scheme of work',
        description: 'Physical Education',
        price: 15000,
        link: 'https://freshteacher.software/NURSERY PE TERM 2 scheme of work.pdf',
      },
      {
        title: 'Nursery rhymes term two scheme of work',
        description: 'Rhymes',
        price: 25000,
        link: 'https://freshteacher.software/Nursery rhymes term two scheme of work.pdf',
      },
      {
        title: 'Pre Aptitude scheme Top class term iii scheme of work',
        description: 'Aptitude',
        price: 55000,
        link: 'https://freshteacher.software/Pre Aptitude scheme Top class term iii scheme of work.pdf',
      },
      {
        title: 'Pre Writing scheme Top class term term 3',
        description: 'Writing',
        price: 2000,
        link: 'https://freshteacher.software/Pre Writing scheme Top class term term 3.pdf',
      },{
        title: 'r.e top class term 1 scheme of work',
        description: 'Religious Education',
        price: 10000,
        link: 'https://freshteacher.software/r.e top class term 1 scheme of work.pdf',
      },
      {
        title: 'RADIO SCHEME OF WORK FOR NURSERY',
        description: 'RADIO',
        price: 15000,
        link: 'https://freshteacher.software/RADIO SCHEME OF WORK FOR NURSERY.pdf',
      },
      {
        title: 'reading top class term ii scheme of work',
        description: 'Reading',
        price: 25000,
        link: 'https://freshteacher.software/reading top class term ii scheme of work.pdf',
      },
      {
        title: 'SCHEME NUMBERS FOR TOP CLASS term iii',
        description: 'NUMBERS',
        price: 55000,
        link: 'https://freshteacher.software/SCHEME NUMBERS FOR TOP CLASS term iii.pdf',
      },
      {
        title: 'SCHEME READING FOR TOP CLASS TERM 3',
        description: 'READING',
        price: 2500,
        link: 'https://freshteacher.software/SCHEME READING FOR TOP CLASS TERM 3.pdf',
      },{
        title: 'Top Class Aptitude Scheme Term 2',
        description: 'Aptitude',
        price: 37000,
        link: 'https://freshteacher.software/Top Class Aptitude Scheme Term 2.pdf',
      },
      {
        title: 'Top class english term 3 scheme of work',
        description: 'English',
        price: 13000,
        link: 'https://freshteacher.software/Top class english term 3 scheme of work.pdf',
      },
      {
        title: 'Top Class Numbers Scheme Term 2',
        description: 'Numbers',
        price: 45000,
        link: 'https://freshteacher.software/Top Class Numbers Scheme Term 2.pdf',
      },
      {
        title: 'top class R.E term 3 scheme of work',
        description: 'R.E',
        price: 57500,
        link: 'https://freshteacher.software/top class R.E term 3 scheme of work.pdf',
      },
      {
        title: 'Top Class Reading Scheme Term 2',
        description: 'Reading',
        price: 24800,
        link: 'https://freshteacher.software/Top Class Reading Scheme Term 2.pdf',
      },{
        title: 'TOP CLASS READING term 1 scheme of work',
        description: 'READING',
        price: 86000,
        link: 'https://freshteacher.software/TOP CLASS READING term 1 scheme of work.pdf',
      },
      {
        title: 'Top Class Writing Scheme Term 2',
        description: 'Writing',
        price: 11000,
        link: 'https://freshteacher.software/Top Class Writing Scheme Term 2.pdf',
      },
      {
        title: 'top literacy term 3',
        description: 'Literacy',
        price: 29000,
        link: 'https://freshteacher.software/top literacy term 3.pdf',
      },
      {
        title: 'VIDEO SCHEME OF WORK FOR NURSERY',
        description: 'VIDEO',
        price: 95000,
        link: 'https://freshteacher.software/VIDEO SCHEME OF WORK FOR NURSERY.pdf',
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
      <h1>Top Class Schemes of Work</h1>
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

export default TopClassSchemesOfWork;
