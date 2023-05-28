import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FiDownload, FiEye } from 'react-icons/fi';
import PDFViewer from './PDFViewer';

const PrimaryThreeClassPastPapers = () => {
  const [lessonNotes, setLessonNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNote, setSelectedNote] = useState(null);
  const [scrollToPdf, setScrollToPdf] = useState(false);

  useEffect(() => {
    const sampleData = [
      {
        title: 'Past Papers',
        description: 'Primary Three',
        price: 10000,
        link: 'https://freshteacher.software/sample.pdf',
      },
      {
        title: 'Past Papers',
        description: 'Primary Three',
        price: 15000,
        link: 'https://freshteacher.software/sample.pdf',
      },
      {
        title: 'Past Papers',
        description: 'Primary Three',
        price: 25000,
        link: 'https://freshteacher.software/sample.pdf',
      },
      {
        title: 'Past Papers',
        description: 'Primary Three',
        price: 55000,
        link: 'https://freshteacher.software/sample.pdf',
      },
      {
        title: 'Past Papers',
        description: 'Primary Three',
        price: 2000,
        link: 'https://freshteacher.software/sample.pdf',
      },{
        title: 'Past Papers',
        description: 'Primary Three',
        price: 10000,
        link: 'https://freshteacher.software/sample.pdf',
      },
      {
        title: 'Past Papers',
        description: 'Primary Three',
        price: 15000,
        link: 'https://freshteacher.software/sample.pdf',
      },
      {
        title: 'Past Papers',
        description: 'Primary Three',
        price: 25000,
        link: 'https://freshteacher.software/sample.pdf',
      },
      {
        title: 'Past Papers',
        description: 'Primary Three',
        price: 55000,
        link: 'https://freshteacher.software/sample.pdf',
      },
      {
        title: 'Past Papers',
        description: 'Primary Three',
        price: 2000,
        link: 'https://freshteacher.software/sample.pdf',
      },{
        title: 'Past Papers',
        description: 'Primary Three',
        price: 10000,
        link: 'https://freshteacher.software/sample.pdf',
      },
      {
        title: 'Past Papers',
        description: 'Primary Three',
        price: 15000,
        link: 'https://freshteacher.software/sample.pdf',
      },
      {
        title: 'Past Papers',
        description: 'Primary Three',
        price: 25000,
        link: 'https://freshteacher.software/sample.pdf',
      },
      {
        title: 'Past Papers',
        description: 'Primary Three',
        price: 55000,
        link: 'https://freshteacher.software/sample.pdf',
      },
      {
        title: 'Past Papers',
        description: 'Primary Three',
        price: 2500,
        link: 'https://freshteacher.software/sample.pdf',
      },{
        title: 'Past Papers',
        description: 'Primary Three',
        price: 37000,
        link: 'https://freshteacher.software/sample.pdf',
      },
      {
        title: 'Past Papers',
        description: 'Primary Three',
        price: 13000,
        link: 'https://freshteacher.software/sample.pdf',
      },
      {
        title: 'Past Papers',
        description: 'Primary Three',
        price: 45000,
        link: 'https://freshteacher.software/sample.pdf',
      },
      {
        title: 'Past Papers',
        description: 'Primary Three',
        price: 57500,
        link: 'https://freshteacher.software/sample.pdf',
      },
      {
        title: 'Past Papers',
        description: 'Primary Three',
        price: 24800,
        link: 'https://freshteacher.software/sample.pdf',
      },{
        title: 'Past Papers',
        description: 'Primary Three',
        price: 86000,
        link: 'https://freshteacher.software/sample.pdf',
      },
      {
        title: 'Past Papers',
        description: 'Primary Three',
        price: 11000,
        link: 'https://freshteacher.software/sample.pdf',
      },
      {
        title: 'Past Papers',
        description: 'Primary Three',
        price: 29000,
        link: 'https://freshteacher.software/sample.pdf',
      },
      {
        title: 'Past Papers',
        description: 'Primary Three',
        price: 95000,
        link: 'https://freshteacher.software/sample.pdf',
      },
      {
        title: 'Past Papers',
        description: 'Primary Three',
        price: 29000,
        link: 'https://freshteacher.software/sample.pdf',
      },{
        title: 'Past Papers',
        description: 'Primary Three',
        price: 12400,
        link: 'https://freshteacher.software/sample.pdf',
      },
      {
        title: 'Past Papers',
        description: 'Primary Three',
        price: 15800,
        link: 'https://freshteacher.software/sample.pdf',
      },
      {
        title: 'Past Papers',
        description: 'Primary Three',
        price: 82000,
        link: 'https://freshteacher.software/sample.pdf',
      },
      {
        title: 'Past Papers',
        description: 'Primary Three',
        price: 53000,
        link: 'https://freshteacher.software/sample.pdf',      },
      {
        title: 'Past Papers',
        description: 'Primary Three',
        price: 13000,
        link: 'https://freshteacher.software/sample.pdf',
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
      <h1>Primary Three Class Past Papers</h1>
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

export default PrimaryThreeClassPastPapers;
