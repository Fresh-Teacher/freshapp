import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FiDownload, FiEye } from 'react-icons/fi';
import PDFViewer from './PDFViewer';

const BabyClassPastPapers = () => {
  const [lessonNotes, setLessonNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNote, setSelectedNote] = useState(null);
  const [scrollToPdf, setScrollToPdf] = useState(false);

  useEffect(() => {
    const sampleData = [
      {
        title: '2016_1-Baby-Class',
        description: 'Baby Class',
        price: 5000,
        link: 'https://freshteacher.software/2016_1-Baby-Class.pdf',
      },
      {
        title: 'BABY CLASS  RECESS PACKAGE, 2020 HORMISDALLEN SCHOOLS',
        description: 'Baby Class',
        price: 5000,
        link: 'https://freshteacher.software/BABY CLASS  RECESS PACKAGE, 2020 HORMISDALLEN SCHOOLS pdf.pdf',
      },
      {
        title: 'BABY CLASS - ENGLISH .1',
        description: 'Baby Class',
        price: 5000,
        link: 'https://freshteacher.software/BABY CLASS - ENGLISH .1.pdf',
      },
      {
        title: 'BABY CLASS - ENGLISH HOLIDAY WORK KINGS SCHOOL KABOWA',
        description: 'Baby Class',
        price: 5000,
        link: 'https://freshteacher.software/BABY CLASS - ENGLISH HOLIDAY WORK KINGS SCHOOL KABOWA.pdf',
      },
      {
        title: 'BABY CLASS - SET THREE',
        description: 'Baby Class',
        price: 5000,
        link: 'https://freshteacher.software/BABY CLASS - SET THREE.pdf',
      },
      {
        title: 'BABY CLASS APTITUDE PRE-JAB EXAM TERM 3 2018',
        description: 'Baby Class',
        price: 5000,
        link: 'https://freshteacher.software/BABY CLASS APTITUDE PRE-JAB EXAM TERM 3 2018.pdf',
      },
      {
        title: 'Baby Class EXERCISES',
        description: 'Baby Class',
        price: 5000,
        link: 'https://freshteacher.software/Baby Class EXERCISES.pdf',
      },
      {
        title: 'BABY CLASS LEARNING AREA 4',
        description: 'Baby Class',
        price: 5000,
        link: 'https://freshteacher.software/BABY CLASS LEARNING AREA 4.pdf',
      },
      {
        title: 'Baby class weekly activity',
        description: 'Baby Class',
        price: 5000,
        link: 'https://freshteacher.software/Baby class weekly activity.pdf',
      },
      {
        title: 'Baby Class WORK 19TH MAY',
        description: 'Baby Class',
        price: 5000,
        link: 'https://freshteacher.software/Baby Class WORK 19TH MAY.pdf',
      },
      {
        title: 'BABY CLASS-LITERACY',
        description: 'Baby Class',
        price: 5000,
        link: 'https://freshteacher.software/BABY CLASS-LITERACY.pdf',
      },
      {
        title: 'BABY CLASS-NUMBERS',
        description: 'Baby Class',
        price: 5000,
        link: 'https://freshteacher.software/BABY CLASS-NUMBERS.pdf',
      },
      {
        title: 'BABY CLASS-READING',
        description: 'Baby Class',
        price: 5000,
        link: 'https://freshteacher.software/BABY CLASS-READING.pdf',
      },
      {
        title: 'BABY CLASS-WRITING HOLIDAY WORK KINGS SCHOOL KABOWA',
        description: 'Baby Class',
        price: 5000,
        link: 'https://freshteacher.software/BABY CLASS-WRITING HOLIDAY WORK KINGS SCHOOL KABOWA.pdf',
      },
      {
        title: 'BABY CLASS-WRITING',
        description: 'Baby Class',
        price: 5000,
        link: 'https://freshteacher.software/BABY CLASS-WRITING.pdf',
      },
      {
        title: 'BABY END OF MARCH EXAMS',
        description: 'Baby Class',
        price: 5000,
        link: 'https://freshteacher.software/BABY END OF MARCH EXAMS.pdf',
      },
      {
        title: 'BABY MID OF TERM III EXAMINATION',
        description: 'Baby Class',
        price: 5000,
        link: 'https://freshteacher.software/BABY MID OF TERM III EXAMINATION.pdf',
      },
      {
        title: 'BABY_CLASS_SET_EIGHT_ENGLISH_WORK_KAMPALA_PARENTS__SCHOOL_2004',
        description: 'Baby Class',
        price: 5000,
        link: 'https://freshteacher.software/BABY_CLASS_SET_EIGHT_ENGLISH_WORK_KAMPALA_PARENTS__SCHOOL_2004.pdf',
      },
      {
        title: 'BABY_CLASS_SET_ELEVEN_ENGLISH_WORK_KAMPALA_PARENTS__SCHOOL_2004',    
        description: 'Baby Class',
        price: 5000,
        link: 'https://freshteacher.software/BABY_CLASS_SET_ELEVEN_ENGLISH_WORK_KAMPALA_PARENTS__SCHOOL_2004.pdf',
      },
      {
        title: 'BABY_CLASS_SET_NINE_ENGLISH_WORK_KAMPALA_PARENTS__SCHOOL_2004',
        description: 'Baby Class',
        price: 5000,
        link: 'https://freshteacher.software/BABY_CLASS_SET_NINE_ENGLISH_WORK_KAMPALA_PARENTS__SCHOOL_2004.pdf',
      },
      {
        title: 'BABY_CLASS_SET_SEVEN_ENGLISH_WORK_KAMPALA_PARENTS__SCHOOL_2004',
        description: 'Baby Class',
        price: 5000,
        link: 'https://freshteacher.software/BABY_CLASS_SET_SEVEN_ENGLISH_WORK_KAMPALA_PARENTS__SCHOOL_2004.pdf',
      },
      {
        title: 'BABY_CLASS_SET_TEN_NUMBER_WORK_KAMPALA_PARENTS__SCHOOL_2004',
        description: 'Baby Class',
        price: 5000,
        link: 'https://freshteacher.software/BABY_CLASS_SET_TEN_NUMBER_WORK_KAMPALA_PARENTS__SCHOOL_2004.pdf',
      },
      {
        title: 'BABY_CLASS_SET_TWELVE_ENGLISH_WORK_KAMPALA_PARENTS__SCHOOL_2004',
        description: 'Baby Class',
        price: 5000,
        link: 'https://freshteacher.software/BABY_CLASS_SET_TWELVE_ENGLISH_WORK_KAMPALA_PARENTS__SCHOOL_2004.pdf',
      },
      {
        title: 'BABY-CLASS WRITING EXAM',
        description: 'Baby Class',
        price: 5000,
        link: 'https://freshteacher.software/BABY-CLASS WRITING EXAM.pdf',
      },
      {
        title: 'End_of_August_English_3_4_years_Exam',
        description: 'Baby Class',
        price: 5000,
        link: 'https://freshteacher.software/End_of_August_English_3_4_years_Exam.pdf',
      },
      {
        title: 'END_OF_AUGUST_HOLIDAY_WORK_literacy_3_4_years_Success_Integrated',
        description: 'Baby Class',
        price: 5000,
        link: 'https://freshteacher.software/END_OF_AUGUST_HOLIDAY_WORK_literacy_3_4_years_Success_Integrated.pdf',
      },
      {
        title: 'END_OF_AUGUST_HOLIDAY_WORK_numbers_3_4_years_Success_Integrated',
        description: 'Baby Class',
        price: 5000,
        link: 'https://freshteacher.software/END_OF_AUGUST_HOLIDAY_WORK_numbers_3_4_years_Success_Integrated.pdf',
      },
      {
        title: 'End-of-August-English-3-4-years-Exam-Success-Integrated-Nursery-School',
        description: 'Baby Class',
        price: 5000,
        link: 'https://freshteacher.software/End-of-August-English-3-4-years-Exam-Success-Integrated-Nursery-School.pdf',
      },
      {
        title: 'END-OF-AUGUST-HOLIDAY-WORK-numbers-3-4-years-Success-Integrated-Nursery-School',
        description: 'Baby Class',
        price: 5000,
        link: 'https://freshteacher.software/END-OF-AUGUST-HOLIDAY-WORK-numbers-3-4-years-Success-Integrated-Nursery-School.pdf',
      },
      {
        title: 'ENG I  BABY  CLASS EOT 1_out',
        description: 'Baby Class',
        price: 5000,
        link: 'https://freshteacher.software/ENG I  BABY  CLASS EOT 1_out.pdf',
      },
      {
        title: 'HOLIDAY PACKAGE FOR BABY CLASS',
        description: 'Baby Class',
        price: 5000,
        link: 'https://freshteacher.software/HOLIDAY PACKAGE FOR BABY CLASS.pdf',
      },
      {
        title: 'REVISION WORK ACTIVITIES FOR BABY',
        description: 'Baby Class',
        price: 5000,
        link: 'https://freshteacher.software/REVISION WORK ACTIVITIES FOR BABY.pdf',
      },
      {
        title: 'REVISION WORK FOR BABY CLASS',
        description: 'Baby Class',
        price: 5000,
        link: 'https://freshteacher.software/REVISION WORK FOR BABY CLASS.pdf',
      },
      {
        title: 'REVISION WORK FOR BABY',
        description: 'Baby Class',
        price: 5000,
        link: 'https://freshteacher.software/REVISION WORK FOR BABY.pdf',
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
      <h1>Baby Class Past Papers</h1>
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

export default BabyClassPastPapers;
