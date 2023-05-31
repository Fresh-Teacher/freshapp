import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FiDownload, FiEye } from 'react-icons/fi';
import PDFViewer from './PDFViewer';

const PrimaryFourClassPastPapers = () => {
  const [lessonNotes, setLessonNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNote, setSelectedNote] = useState(null);
  const [scrollToPdf, setScrollToPdf] = useState(false);

  useEffect(() => {
    const sampleData = [
      {
        title: 'B.O.T III P.4 SCIENCE, 2019',
        description: 'Primary Four',
        price: 10000,
        link: 'https://freshteacher.software/B.O.T III P.4 SCIENCE, 2019.pdf',
      },
      {
        title: 'ENGLISH PAMPHLET FOR P.4 -P.7 - Copy (2)',
        description: 'Primary Four',
        price: 15000,
        link: 'https://freshteacher.software/ENGLISH PAMPHLET FOR P.4 -P.7 - Copy (2).pdf',
      },
      {
        title: 'MATHEMATICS PAMPHLET P.4-P.7 - Copy (2)',
        description: 'Primary Four',
        price: 25000,
        link: 'https://freshteacher.software/MATHEMATICS PAMPHLET P.4-P.7 - Copy (2).pdf',
      },
      {
        title: 'MATHS P.4',
        description: 'Primary Four',
        price: 55000,
        link: 'https://freshteacher.software/MATHS P.4.pdf',
      },
      {
        title: 'P. 4 MTC SET I',
        description: 'Primary Four',
        price: 2000,
        link: 'https://freshteacher.software/P. 4 MTC SET I.pdf',
      },{
        title: 'P. 4 Package  4',
        description: 'Primary Four',
        price: 10000,
        link: 'https://freshteacher.software/P. 4 Package  4.pdf',
      },
      {
        title: 'P.4 - THEOLOGY',
        description: 'Primary Four',
        price: 15000,
        link: 'https://freshteacher.software/P.4 - THEOLOGY.pdf',
      },
      {
        title: 'P.4 ENG home work 2020 (2)',
        description: 'Primary Four',
        price: 25000,
        link: 'https://freshteacher.software/P.4 ENG home work 2020 (2).pdf',
      },
      {
        title: 'P.4 ENG home work 2020',
        description: 'Primary Four',
        price: 55000,
        link: 'https://freshteacher.software/P.4 ENG home work 2020.pdf',
      },
      {
        title: 'P.4 Eng Revision booklet',
        description: 'Primary Four',
        price: 2000,
        link: 'https://freshteacher.software/P.4 Eng Revision booklet.pdf',
      },{
        title: 'P.4 ENGLISH HOMEWORK',
        description: 'Primary Four',
        price: 10000,
        link: 'https://freshteacher.software/P.4 ENGLISH HOMEWORK.pdf',
      },
      {
        title: 'P.4 English Lock down activity (2)',
        description: 'Primary Four',
        price: 15000,
        link: 'https://freshteacher.software/P.4 English Lock down activity (2).pdf',
      },
      {
        title: 'P.4 English Lock down activity',
        description: 'Primary Four',
        price: 25000,
        link: 'https://freshteacher.software/P.4 English Lock down activity.pdf',
      },
      {
        title: 'P.4 ENGLISH-Wk.4',
        description: 'Primary Four',
        price: 55000,
        link: 'https://freshteacher.software/P.4 ENGLISH-Wk.4.pdf',
      },
      {
        title: 'P.4 HOME WORK EXERCISES TERM I',
        description: 'Primary Four',
        price: 2500,
        link: 'https://freshteacher.software/P.4 HOME WORK EXERCISES TERM I.pdf',
      },{
        title: 'P.4 LEGIT MTC ISSUE 1 _ 2',
        description: 'Primary Four',
        price: 37000,
        link: 'https://freshteacher.software/P.4 LEGIT MTC ISSUE 1 _ 2.pdf',
      },
      {
        title: 'P.4 Mathematics Lock down activity',
        description: 'Primary Four',
        price: 13000,
        link: 'https://freshteacher.software/P.4 Mathematics Lock down activity.pdf',
      },
      {
        title: 'P.4 MATHEMATICS WORKBOOK',
        description: 'Primary Four',
        price: 45000,
        link: 'https://freshteacher.software/P.4 MATHEMATICS WORKBOOK.pdf',
      },
      {
        title: 'P.4 MTC EOT EXAM',
        description: 'Primary Four',
        price: 57500,
        link: 'https://freshteacher.software/P.4 MTC EOT EXAM.pdf',
      },
      {
        title: 'P.4 Revision book',
        description: 'Primary Four',
        price: 24800,
        link: 'https://freshteacher.software/P.4 Revision book.pdf',
      },{
        title: 'P.4 Science Lock down activity (2)',
        description: 'Primary Four',
        price: 86000,
        link: 'https://freshteacher.software/P.4 Science Lock down activity (2).pdf',
      },
      {
        title: 'P.4 Science Lock down activity (3)',
        description: 'Primary Four',
        price: 11000,
        link: 'https://freshteacher.software/P.4 Science Lock down activity (3).pdf',
      },
      {
        title: 'P.4 Science Lock down activity',
        description: 'Primary Four',
        price: 29000,
        link: 'https://freshteacher.software/P.4 Science Lock down activity.pdf',
      },
      {
        title: 'p.4 SCIENCE WORKBOOK (1)',
        description: 'Primary Four',
        price: 95000,
        link: 'https://freshteacher.software/p.4 SCIENCE WORKBOOK (1).pdf',
      },
      {
        title: 'P.4 SCIENCE',
        description: 'Primary Four',
        price: 29000,
        link: 'https://freshteacher.software/P.4 SCIENCE.pdf',
      },{
        title: 'P.4 SST Lock down activity (2)',
        description: 'Primary Four',
        price: 12400,
        link: 'https://freshteacher.software/P.4 SST Lock down activity (2).pdf',
      },
      {
        title: 'P.4 SST Lock down activity (3)',
        description: 'Primary Four',
        price: 15800,
        link: 'https://freshteacher.software/P.4 SST Lock down activity (3).pdf',
      },
      {
        title: 'P.4 SST Lock down activity',
        description: 'Primary Four',
        price: 82000,
        link: 'https://freshteacher.software/P.4 SST Lock down activity.pdf',
      },
      {
        title: 'P.4 SST Lockdown activitY', 
        description: 'Primary Four',
        price: 53000,
        link: 'https://freshteacher.software/P.4 SST Lockdown activitY.pdf', 
           },
      {
        title: 'P.4 SST Revision booklet',
        description: 'Primary Four',
        price: 13000,
        link: 'https://freshteacher.software/P.4 SST Revision booklet.pdf',
      },
      {
        title: 'P.4 term 2 holiday package',
        description: 'Primary Four',
        price: 10000,
        link: 'https://freshteacher.software/P.4 term 2 holiday package.pdf',
      },
      {
        title: 'p.4-eng-set-5',
        description: 'Primary Four',
        price: 15000,
        link: 'https://freshteacher.software/p.4-eng-set-5.pdf',
      },
      {
        title: 'P.4-ENG-SET-II',
        description: 'Primary Four',
        price: 25000,
        link: 'https://freshteacher.software/P.4-ENG-SET-II.pdf',
      },
      {
        title: 'P.4-ENGLISH-REVISION-SET-1-NAMAGUNGA-PRIMARY-BOARDING-SCHOOL',
        description: 'Primary Four',
        price: 55000,
        link: 'https://freshteacher.software/P.4-ENGLISH-REVISION-SET-1-NAMAGUNGA-PRIMARY-BOARDING-SCHOOL.pdf',
      },
      {
        title: 'P.4-ENGLISH-WORK-BOOK-TERM-ONE',
        description: 'Primary Four',
        price: 2000,
        link: 'https://freshteacher.software/P.4-ENGLISH-WORK-BOOK-TERM-ONE.pdf',
      },{
        title: 'P.4-LEGIT-ENGLISH-ZOOM-CLASS-NOTES-',
        description: 'Primary Four',
        price: 10000,
        link: 'https://freshteacher.software/P.4-LEGIT-ENGLISH-ZOOM-CLASS-NOTES-.pdf',
      },
      {
        title: 'P.4-MATHEMATICS-WORK-BOOK-TERM-ONE',
        description: 'Primary Four',
        price: 15000,
        link: 'https://freshteacher.software/P.4-MATHEMATICS-WORK-BOOK-TERM-ONE.pdf',
      },
      {
        title: 'P.4-MTC-SET-5',
        description: 'Primary Four',
        price: 25000,
        link: 'https://freshteacher.software/P.4-MTC-SET-5.pdf',
      },
      {
        title: 'P.4-Lesson-Notes-Mathematics_Term1-2019-2',
        description: 'Primary Four',
        price: 55000,
        link: 'https://freshteacher.software/P.4-Lesson-Notes-Mathematics_Term1-2019-2.pdf',
      },
      {
        title: 'P.4-MTC-SET-5',
        description: 'Primary Four',
        price: 2000,
        link: 'https://freshteacher.software/P.4-MTC-SET-5.pdf',
      },{
        title: 'P.4-MTC-SET-II',
        description: 'Primary Four',
        price: 10000,
        link: 'https://freshteacher.software/P.4-MTC-SET-II.pdf',
      },
      {
        title: 'P.4-SCI-SET-5',
        description: 'Primary Four',
        price: 15000,
        link: 'https://freshteacher.software/P.4-SCI-SET-5.pdf',
      },
      {
        title: 'P.4-SCI-SET-II',
        description: 'Primary Four',
        price: 25000,
        link: 'https://freshteacher.software/P.4-SCI-SET-II.pdf',
      },
      {
        title: 'P.4-SCIENCE-WORK-BOOK-TERM-ONE.',
        description: 'Primary Four',
        price: 55000,
        link: 'https://freshteacher.software/P.4-SCIENCE-WORK-BOOK-TERM-ONE..pdf',
      },
      {
        title: 'P.4-SOCIAL-STUDIES-WORK-BOOK-TERM-ONE',
        description: 'Primary Four',
        price: 2500,
        link: 'https://freshteacher.software/P.4-SOCIAL-STUDIES-WORK-BOOK-TERM-ONE.pdf',
      },{
        title: 'P.4-Sst-Lesson-Notes-For-P.4-2019',
        description: 'Primary Four',
        price: 37000,
        link: 'https://freshteacher.software/P.4-Sst-Lesson-Notes-For-P.4-2019.pdf',
      },
      {
        title: 'P.4-SST-SET-5.',
        description: 'Primary Four',
        price: 13000,
        link: 'https://freshteacher.software/P.4-SST-SET-5..pdf',
      },
      {
        title: 'P.4-SST-SET-II (2)',
        description: 'Primary Four',
        price: 45000,
        link: 'https://freshteacher.software/P.4-SST-SET-II (2).pdf',
      },
      {
        title: 'P.4-SST-SET-II',
        description: 'Primary Four',
        price: 57500,
        link: 'https://freshteacher.software/P.4-SST-SET-II.pdf',
      },
      {
        title: 'P.4-Week-1-pdf',
        description: 'Primary Four',
        price: 24800,
        link: 'https://freshteacher.software/P.4-Week-1-pdf.pdf',
      },{
        title: 'P.4-Week-2-pdf',
        description: 'Primary Four',
        price: 86000,
        link: 'https://freshteacher.software/P.4-Week-2-pdf.pdf',
      },
      {
        title: 'P.4-Week-3-pdf',
        description: 'Primary Four',
        price: 11000,
        link: 'https://freshteacher.software/P.4-Week-3-pdf.pdf',
      },
      {
        title: 'P4 CRE',
        description: 'Primary Four',
        price: 29000,
        link: 'https://freshteacher.software/P4 CRE.pdf',
      },
      {
        title: 'P4 ENGLISH (2)',
        description: 'Primary Four',
        price: 95000,
        link: 'https://freshteacher.software/P4 ENGLISH (2).pdf',
      },
      {
        title: 'P4 ENGLISH YET HAPPY KIDZ SCHOOL HOLIDAY WORK',
        description: 'Primary Four',
        price: 29000,
        link: 'https://freshteacher.software/P4 ENGLISH YET HAPPY KIDZ SCHOOL HOLIDAY WORK.pdf',
      },{
        title: 'P4 English',
        description: 'Primary Four',
        price: 12400,
        link: 'https://freshteacher.software/P4 English.pdf',
      },
      {
        title: 'P4 IRE',
        description: 'Primary Four',
        price: 15800,
        link: 'https://freshteacher.software/P4 IRE.pdf',
      },
      {
        title: 'P4 Materials',
        description: 'Primary Four',
        price: 82000,
        link: 'https://freshteacher.software/P4 Materials.pdf',
      },
      {
        title: 'P4 Mathematics',      
        description: 'Primary Four',
        price: 53000,
        link: 'https://freshteacher.software/P4 Mathematics.pdf',      
      },
      {
        title: 'P4 MID TERM III EXAM',
        description: 'Primary Four',
        price: 13000,
        link: 'https://freshteacher.software/P4 MID TERM III EXAM.pdf',
      },
      {
        title: 'P4 RE',
        description: 'Primary Four',
        price: 10000,
        link: 'https://freshteacher.software/P4 RE.pdf',
      },
      {
        title: 'P4 RELIGIOUS EDUCATION HOLIDAY WORK YET HAPPY KIDZ SCHOOL',
        description: 'Primary Four',
        price: 15000,
        link: 'https://freshteacher.software/P4 RELIGIOUS EDUCATION HOLIDAY WORK YET HAPPY KIDZ SCHOOL.pdf',
      },
      {
        title: 'P4 SCIENCE',
        description: 'Primary Four',
        price: 25000,
        link: 'https://freshteacher.software/P4 SCIENCE.pdf',
      },
      {
        title: 'P4 SST HOLIDAY WORK YET HAPPY KIDZ',
        description: 'Primary Four',
        price: 55000,
        link: 'https://freshteacher.software/P4 SST HOLIDAY WORK YET HAPPY KIDZ.pdf',
      },
      {
        title: 'P4_Holiday_Work_',
        description: 'Primary Four',
        price: 2000,
        link: 'https://freshteacher.software/P4_Holiday_Work_.pdf',
      },{
        title: 'P4 SOCIAL STUDIES',
        description: 'Primary Four',
        price: 10000,
        link: 'https://freshteacher.software/P4 SOCIAL STUDIES.pdf',
      },
      {
        title: 'PRIMARY 4 SET II 2020',
        description: 'Primary Four',
        price: 15000,
        link: 'https://freshteacher.software/PRIMARY 4 SET II 2020.pdf',
      },
      {
        title: 'PRIMARY 4 SET III 2020',
        description: 'Primary Four',
        price: 25000,
        link: 'https://freshteacher.software/PRIMARY 4 SET III 2020.pdf',
      },
      {
        title: 'Primary Four English',
        description: 'Primary Four',
        price: 55000,
        link: 'https://freshteacher.software/Primary Four English.pdf',
      },
      {
        title: 'primary four integrated science COVID-19 doc',
        description: 'Primary Four',
        price: 2000,
        link: 'https://freshteacher.software/primary four integrated science COVID-19 doc.pdf',
      },{
        title: 'PRIMARY FOUR R.E NOTES .2020',
        description: 'Primary Four',
        price: 10000,
        link: 'https://freshteacher.software/PRIMARY FOUR R.E NOTES .2020.pdf',
      },
      {
        title: 'PRIMARY FOUR REVISION WORK SET 14 KAMPALA PARENTS SCHOOL',
        description: 'Primary Four',
        price: 15000,
        link: 'https://freshteacher.software/PRIMARY FOUR REVISION WORK SET 14 KAMPALA PARENTS SCHOOL.pdf',
      },
      {
        title: 'PRIMARY FOUR REVISION WORK SET 15 KAMPALA PARENTS SCHOOL',
        description: 'Primary Four',
        price: 25000,
        link: 'https://freshteacher.software/PRIMARY FOUR REVISION WORK SET 15 KAMPALA PARENTS SCHOOL.pdf',
      },
      {
        title: 'PRIMARY FOUR REVISION WORK SET 16 KAMPALA PARENTS SCHOOL',
        description: 'Primary Four',
        price: 55000,
        link: 'https://freshteacher.software/PRIMARY FOUR REVISION WORK SET 16 KAMPALA PARENTS SCHOOL.pdf',
      },
      {
        title: 'PRIMARY FOUR REVISION WORK SET 17 KAMPALA PARENTS SCHOOL',
        description: 'Primary Four',
        price: 2500,
        link: 'https://freshteacher.software/PRIMARY FOUR REVISION WORK SET 17 KAMPALA PARENTS SCHOOL.pdf',
      },{
        title: 'PRIMARY FOUR REVISION WORK SET 19 KAMPALA PARENTS SCHOOL',
        description: 'Primary Four',
        price: 37000,
        link: 'https://freshteacher.software/PRIMARY FOUR REVISION WORK SET 19 KAMPALA PARENTS SCHOOL.pdf',
      },
      {
        title: 'PRIMARY FOUR REVISION WORK SET 18 KAMPALA PARENTS SCHOOL',
        description: 'Primary Four',
        price: 13000,
        link: 'https://freshteacher.software/PRIMARY FOUR REVISION WORK SET 18 KAMPALA PARENTS SCHOOL.pdf',
      },
      {
        title: 'PRIMARY FOUR REVISION WORK SET 20 KAMPALA PARENTS SCHOOL',
        description: 'Primary Four',
        price: 45000,
        link: 'https://freshteacher.software/PRIMARY FOUR REVISION WORK SET 20 KAMPALA PARENTS SCHOOL.pdf',
      },
      {
        title: 'primary Four social studies',
        description: 'Primary Four',
        price: 57500,
        link: 'https://freshteacher.software/primary Four social studies.pdf',
      },
      {
        title: 'PRIMARY FOUR WHOLE Monday SOLUTIONS',
        description: 'Primary Four',
        price: 24800,
        link: 'https://freshteacher.software/PRIMARY FOUR WHOLE Monday SOLUTIONS.pdf',
      },{
        title: 'YET p.4_english-1-',
        description: 'Primary Four',
        price: 86000,
        link: 'https://freshteacher.software/YET p.4_english-1-.pdf',
      },
      {
        title: 'YET P.4_R.E_int_1-1-',
        description: 'Primary Four',
        price: 11000,
        link: 'https://freshteacher.software/YET P.4_R.E_int_1-1-.pdf',
      },
      {
        title: 'YET P.4_sst_Int__ens_1-1--1',
        description: 'Primary Four',
        price: 29000,
        link: 'https://freshteacher.software/YET P.4_sst_Int__ens_1-1--1.pdf',
      },
      {
        title: 'YET P.4_sst_Int__ens_1-1-',
        description: 'Primary Four',
        price: 95000,
        link: 'https://freshteacher.software/YET P.4_sst_Int__ens_1-1-.pdf',
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
      <h1>Primary Four Class Past Papers</h1>
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

export default PrimaryFourClassPastPapers;
