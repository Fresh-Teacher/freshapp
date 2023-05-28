import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FiDownload } from 'react-icons/fi';

const TopClassSchemesOfWork = () => {
  const [lessonNotes, setLessonNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const sampleData = [
      {
        title: 'Lesson Note 1',
        description: 'This is the description of Lesson Note 1.',
        price: 1000,
        link: 'https://example.com/lesson-note-1',
      },
      {
        title: 'Lesson Note 2',
        description: 'This is the description of Lesson Note 2.',
        price: 1500,
        link: 'https://example.com/lesson-note-2',
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
                  <Button
                    variant="primary"
                    onClick={() => {
                      window.location.href = note.link;
                    }}
                  >
                    {note.price !== 0 ? (
                      <>
                        <strike>{note.price.toLocaleString()}/=</strike>
                        <span
                          className="free-banner"
                          style={{
                            position: 'absolute',
                            top: '0',
                            right: '0',
                            backgroundColor: '#28a745',
                            color: '#fff',
                            padding: '5px 10px',
                            fontWeight: 'bold',
                            fontStyle: 'italic',
                            fontSize: '12px',
                            borderRadius: '8px',
                            marginBottom: '5px',
                          }}
                        >
                          FREE
                        </span>
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
          <p>No Results Found</p>
        )}
      </Row>
    </div>
  );
};

export default TopClassSchemesOfWork;
