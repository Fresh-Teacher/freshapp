import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FiDownload, FiEye } from 'react-icons/fi';
import PDFViewer from './PDFViewer';

const MiddleClassPastPapers = () => {
  const [lessonNotes, setLessonNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNote, setSelectedNote] = useState(null);
  const [scrollToPdf, setScrollToPdf] = useState(false);

  useEffect(() => {
    const sampleData = [
      {
        title: 'MIDDLE  EOT LANGUAGE DEVELOPMENT',
        description: 'Middle Class',
        price: 10000,
        link: 'https://freshteacher.software/MIDDLE  EOT LANGUAGE DEVELOPMENT.pdf',
      },
      {
        title: 'MIDDLE BOT - TERM III',
        description: 'Middle Class',
        price: 15000,
        link: 'https://freshteacher.software/MIDDLE BOT - TERM III.pdf',
      },
      {
        title: 'MIDDLE CLASS ENGLISH END OF TERM 2 JOINT EXAM',
        description: 'Middle Class',
        price: 25000,
        link: 'https://freshteacher.software/MIDDLE CLASS ENGLISH END OF TERM 2 JOINT EXAM .pdf',
      },
      {
        title: 'Middle Class EXERCISES',
        description: 'Middle Class',
        price: 55000,
        link: 'https://freshteacher.software/Middle Class EXERCISES.pdf',
      },
      {
        title: 'MIDDLE CLASS NUMBERS  END OF TERM 3  EXAM 2017',
        description: 'Middle Class',
        price: 2000,
        link: 'https://freshteacher.software/MIDDLE CLASS NUMBERS  END OF TERM 3  EXAM 2017.pdf',
      },{
        title: 'MIDDLE CLASS NUMBERS  END OF TERM 3  EXAM 2017',
        description: 'Middle Class',
        price: 10000,
        link: 'https://freshteacher.software/MIDDLE CLASS NUMBERS  END OF TERM 3  EXAM 2017.pdf',
      },
      {
        title: 'MIDDLE CLASS READING',
        description: 'Middle Class',
        price: 15000,
        link: 'https://freshteacher.software/MIDDLE CLASS READING.pdf',
      },
      {
        title: 'Middle Class Recess work',
        description: 'Middle Class',
        price: 25000,
        link: 'https://freshteacher.software/Middle Class Recess work.pdf',
      },
      {
        title: 'MIDDLE CLASS REVISION WORK ACTIVITIES',
        description: 'Middle Class',
        price: 55000,
        link: 'https://freshteacher.software/MIDDLE CLASS REVISION WORK ACTIVITIES.pdf',
      },
      {
        title: 'MIDDLE CLASS REVISION WORK ACTIVITY ONE',
        description: 'Middle Class',
        price: 2000,
        link: 'https://freshteacher.software/MIDDLE CLASS REVISION WORK ACTIVITY ONE.pdf',
      },{
        title: 'MIDDLE CLASS REVISION WORK SET 18 KAMPALA PARENTS SCHOOL (2)',
        description: 'Middle Class',
        price: 10000,
        link: 'https://freshteacher.software/MIDDLE CLASS REVISION WORK SET 18 KAMPALA PARENTS SCHOOL (2).pdf',
      },
      {
        title: 'MIDDLE CLASS REVISION WORK SET 18 KAMPALA PARENTS SCHOOL',
        description: 'Middle Class',
        price: 15000,
        link: 'https://freshteacher.software/MIDDLE CLASS REVISION WORK SET 18 KAMPALA PARENTS SCHOOL.pdf',
      },
      {
        title: 'MIDDLE CLASS SET 16',
        description: 'Middle Class',
        price: 25000,
        link: 'https://freshteacher.software/MIDDLE CLASS SET 16.pdf',
      },
      {
        title: 'Middle class weekly activity',
        description: 'Middle Class',
        price: 55000,
        link: 'https://freshteacher.software/Middle class weekly activity.pdf',
      },
      {
        title: 'MIDDLE CLASS- TERM 2',
        description: 'Middle Class',
        price: 2500,
        link: 'https://freshteacher.software/MIDDLE CLASS- TERM 2.pdf',
      },{
        title: 'MIDDLE EOT MATHS CONCEPTS',
        description: 'Middle Class',
        price: 37000,
        link: 'https://freshteacher.software/MIDDLE EOT MATHS CONCEPTS.pdf',
      },
      {
        title: 'MIDDLE HOLIDAY PACKAGE - 2022',
        description: 'Middle Class',
        price: 13000,
        link: 'https://freshteacher.software/MIDDLE HOLIDAY PACKAGE - 2022.pdf',
      },
      {
        title: 'MIDDLE PRIME MID TERM III LANG DEVT',
        description: 'Middle Class',
        price: 45000,
        link: 'https://freshteacher.software/MIDDLE PRIME MID TERM III LANG DEVT.pdf',
      },
      {
        title: 'MIDDLE WRITING EOT 1',
        description: 'Middle Class',
        price: 57500,
        link: 'https://freshteacher.software/MIDDLE WRITING EOT 1.pdf',
      },
      {
        title: 'MIDDLE-CLASS TERM 1',
        description: 'Middle Class',
        price: 24800,
        link: 'https://freshteacher.software/MIDDLE-CLASS TERM 1.pdf',
      },{
        title: 'MIDDLE-CLASS TERM 1',
        description: 'Middle Class',
        price: 86000,
        link: 'https://freshteacher.software/MIDDLE-CLASS TERM 1.pdf',
      },
      {
        title: 'MIDDLE-CLASS-HOLIDAY-PACKAGE[2]',
        description: 'Middle Class',
        price: 11000,
        link: 'https://freshteacher.software/MIDDLE-CLASS-HOLIDAY-PACKAGE[2].pdf',
      },
      {
        title: 'MIDDLE-CLASS-SET I REVISION',
        description: 'Middle Class',
        price: 29000,
        link: 'https://freshteacher.software/MIDDLE-CLASS-SET I REVISION.pdf',
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
      <h1>Middle Class Past Papers</h1>
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

export default MiddleClassPastPapers;
