import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FiDownload, FiEye } from 'react-icons/fi';
import PDFViewer from './PDFViewer';

const TopClassPastPapers = () => {
  const [lessonNotes, setLessonNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNote, setSelectedNote] = useState(null);
  const [scrollToPdf, setScrollToPdf] = useState(false);

  useEffect(() => {
    const sampleData = [
      {
        title: 'Kindergarden WORKBOOK',
        description: 'Top Class',
        price: 10000,
        link: 'https://freshteacher.software/Kindergarden WORKBOOK.pdf',
      },
      {
        title: 'NURSERY WORKBOOK',
        description: 'Top Class',
        price: 15000,
        link: 'https://freshteacher.software/NURSERY WORKBOOK.pdf',
      },
      {
        title: 'Reading top class term III 2017',
        description: 'Top Class',
        price: 25000,
        link: 'https://freshteacher.software/Reading top class term III 2017.PDF',
      },
      {
        title: 'SOCIAL DEVELOPMENT TOP CLASS EOT 1_out',
        description: 'Top Class',
        price: 55000,
        link: 'https://freshteacher.software/SOCIAL DEVELOPMENT TOP CLASS EOT 1_out.pdf',
      },
      {
        title: 'TOP CLASS APTITUDE END OF TERM 3  EXAM 2017',
        description: 'Top Class',
        price: 2000,
        link: 'https://freshteacher.software/TOP CLASS APTITUDE END OF TERM 3  EXAM 2017.pdf',
      },{
        title: 'TOP CLASS ENGLISH  RECESS PACKAGE, 2020 HORMISDALLEN SCHOOLS',
        description: 'Top Class',
        price: 10000,
        link: 'https://freshteacher.software/TOP CLASS ENGLISH  RECESS PACKAGE, 2020 HORMISDALLEN SCHOOLS.pdf',
      },
      {
        title: 'Top class Holiday Package 2022',
        description: 'Top Class',
        price: 15000,
        link: 'https://freshteacher.software/Top class Holiday Package 2022.pdf',
      },
      {
        title: 'TOP CLASS HOLIDAY PACKAGE',
        description: 'Top Class',
        price: 25000,
        link: 'https://freshteacher.software/TOP CLASS HOLIDAY PACKAGE.pdf',
      },
      {
        title: 'TOP CLASS Mathematics REVISION WORK ACTIVITY TWO',
        description: 'Top Class',
        price: 55000,
        link: 'https://freshteacher.software/TOP CLASS Mathematics REVISION WORK ACTIVITY TWO.PDF',
      },
      {
        title: 'TOP CLASS REVISION WORK ACTIVITY',
        description: 'Top Class',
        price: 2000,
        link: 'https://freshteacher.software/TOP CLASS REVISION WORK ACTIVITY.pdf',
      },{
        title: 'TOP CLASS REVISION WORK',
        description: 'Top Class',
        price: 10000,
        link: 'https://freshteacher.software/TOP CLASS REVISION WORK.pdf',
      },
      {
        title: 'TOP CLASS REVISION',
        description: 'Top Class',
        price: 15000,
        link: 'https://freshteacher.software/TOP CLASS REVISION.pdf',
      },
      {
        title: 'TOP CLASS TERM III HOLIDAY PACKAGE',
        description: 'Top Class',
        price: 25000,
        link: 'https://freshteacher.software/TOP CLASS TERM III HOLIDAY PACKAGE.pdf',
      },
      {
        title: 'Top class weekly activities',
        description: 'Top Class',
        price: 55000,
        link: 'https://freshteacher.software/Top class weekly activities.pdf',
      },
      {
        title: 'TOP CLASS',
        description: 'Top Class',
        price: 2500,
        link: 'https://freshteacher.software/TOP CLASS.pdf',
      },
      {
        title: 'TOP_MIDDLE_AND_BABY_CLASS_ENGLISH_MATHEMATICAL_CONCEPTS_AND_GENERAL',
        description: 'Top Class',
        price: 37000,
        link: 'https://freshteacher.software/TOP_MIDDLE_AND_BABY_CLASS_ENGLISH_MATHEMATICAL_CONCEPTS_AND_GENERAL.pdf',
      },
      {
        title: 'TOP-CLASS-SET I',
        description: 'Top Class',
        price: 13000,
        link: 'https://freshteacher.software/TOP-CLASS-SET I.pdf',
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
      <h1>Top Class Past Papers</h1>
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

export default TopClassPastPapers;
