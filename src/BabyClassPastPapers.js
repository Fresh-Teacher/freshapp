import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BabyClassPastPapers = () => {
  const [lessonNotes, setLessonNotes] = useState([]);

  useEffect(() => {
    const sampleData = [
      {
        title: 'Lesson Note 1',
        description: 'This is the description of Lesson Note 1.',
        price: '10',
        link: 'https://example.com/lesson-note-1',
      },
      {
        title: 'Lesson Note 2',
        description: 'This is the description of Lesson Note 2.',
        price: '15',
        link: 'https://example.com/lesson-note-2',
      },
      {
        title: 'Lesson Note 2',
        description: 'This is the description of Lesson Note 2.',
        price: '15',
        link: 'https://example.com/lesson-note-2',
      },{
        title: 'Lesson Note 2',
        description: 'This is the description of Lesson Note 2.',
        price: '15',
        link: 'https://example.com/lesson-note-2',
      },
      {
        title: 'Lesson Note 2',
        description: 'This is the description of Lesson Note 2.',
        price: '15',
        link: 'https://example.com/lesson-note-2',
      },{
        title: 'Lesson Note 2',
        description: 'This is the description of Lesson Note 2.',
        price: '15',
        link: 'https://example.com/lesson-note-2',
      },
    ];

    setLessonNotes(sampleData);
  }, []);

  return (
    <div>
      <h1>Baby Class Past Papers</h1>
      <Row xs={1} sm={2} md={3} lg={4} xl={4} xxl={4} className="g-4">
        {lessonNotes.map((note, index) => (
          <Col key={index}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>{note.title}</Card.Title>
                <Card.Text>{note.description}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => {
                    window.location.href = note.link;
                  }}
                >
                  Download (Price: {note.price})
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BabyClassPastPapers;
