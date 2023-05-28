import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PrimaryThreeLessonNotes = () => {
  const [lessonNotes, setLessonNotes] = useState([]);

  useEffect(() => {
    // Fetch the data from PrimaryThreeLessonNotes.json or import it directly
    // For example, you can import the JSON file as follows:
    // import lessonNotesData from './PrimaryThreeLessonNotes.json';
    // Then, set the lessonNotes state with the fetched/imported data
    // setLessonNotes(lessonNotesData);

    // For demonstration purposes, I'll use a sample data object
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
      },{
        title: 'Lesson Note 2',
        description: 'This is the description of Lesson Note 2.',
        price: '15',
        link: 'https://example.com/lesson-note-2',
      },{
        title: 'Lesson Note 2',
        description: 'This is the description of Lesson Note 2.',
        price: '15',
        link: 'https://example.com/lesson-note-2',
      },{
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
      <h1>Primary Three Lesson Notes</h1>
      <Row>
        {lessonNotes.map((note, index) => (
          <Col xs={4} key={index}>
            <Card>
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

export default PrimaryThreeLessonNotes;
