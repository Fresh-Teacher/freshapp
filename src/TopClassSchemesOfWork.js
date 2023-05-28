import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FiDownload, FiEye } from 'react-icons/fi';

const TopClassSchemesOfWork = () => {
  const [lessonNotes, setLessonNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const sampleData = [
      {
        title: 'Top Class Schemes of Work',
        description: 'This is the description of Lesson Note 1.',
        price: 10000,
        link: 'https://freshteacher.software/2016_1-Baby-Class.pdf',
      },
      {
        title: 'Top Class English Schemes of Work',
        description: 'This is the description of Lesson Note 2.',
        price: 15000,
        link: 'https://freshteacher.software/TOP-CLASS-SET%20I.pdf',
      },
      // Add more lesson notes here
    ];

    setLessonNotes(sampleData);
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredNotes = lessonNotes.filter((note) => {
    const { title, description } = note;
    const query = searchQuery.toLowerCase();
    return title.toLowerCase().includes(query) || description.toLowerCase().includes(query);
  });

  return (
    <div style={{ padding: '20px' }}>
      <h1>Top Class Schemes Of Work</h1>
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
                        padding: '1px 10px',  // Adjusted padding here
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
                    href={note.link}
                    download=""
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
                  <Button
                    variant="primary"
                    style={{ width: '100%', marginBottom: '10px' }}
                    onClick={() => {
                      window.open(note.link, '_blank');
                    }}
                  >
                    <span style={{ marginRight: '10px' }}>
                      <strong>Preview</strong> <FiEye />
                    </span>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p style={{ color: 'red' }}>
            No Results Found! Please Try Searching Again Using Different Keywords...
          </p>
        )}
      </Row>
    </div>
  );
};

export default TopClassSchemesOfWork;
