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
        title: 'EOT II P.3 MATH 2020',
        description: 'Primary Three',
        price: 10000,
        link: 'https://freshteacher.software/EOT II P.3 MATH 2020.pdf',
      },
      {
        title: 'HOLI PACK P.3 SET-2',
        description: 'Primary Three',
        price: 15000,
        link: 'https://freshteacher.software/HOLI PACK P.3 SET-2.pdf',
      },
      {
        title: 'KAWAALA P3 MATH',
        description: 'Primary Three',
        price: 25000,
        link: 'https://freshteacher.software/KAWAALA P3 MATH.pdf',
      },
      {
        title: 'KAWAALA P3 RE',
        description: 'Primary Three',
        price: 55000,
        link: 'https://freshteacher.software/KAWAALA P3 RE.pdf',
      },
      {
        title: 'NJS P.3 MATHS',
        description: 'Primary Three',
        price: 2000,
        link: 'https://freshteacher.software/NJS P.3 MATHS.pdf',
      },{
        title: 'NJS P.3 R.E',
        description: 'Primary Three',
        price: 10000,
        link: 'https://freshteacher.software/NJS P.3 R.E.pdf',
      },
      {
        title: 'P_3 Luganda Ekigezo Ekitandika Olusoma Olusooka',
        description: 'Primary Three',
        price: 15000,
        link: 'https://freshteacher.software/P_3 Luganda Ekigezo Ekitandika Olusoma Olusooka.PDF',
      },
      {
        title: 'P_3_LITERACY_SCIENCE_REVISION_SET_I_2021_MOTHERCARE_PREPARATORY',
        description: 'Primary Three',
        price: 25000,
        link: 'https://freshteacher.software/P_3_LITERACY_SCIENCE_REVISION_SET_I_2021_MOTHERCARE_PREPARATORY.pdf',
      },
      {
        title: 'P_3_LITERACY_SST_REVISION_SET_I_2021_MOTHERCARE_PREPARATORY_SCHOOLS',
        description: 'Primary Three',
        price: 55000,
        link: 'https://freshteacher.software/P_3_LITERACY_SST_REVISION_SET_I_2021_MOTHERCARE_PREPARATORY_SCHOOLS.pdf',
      },
      {
        title: 'P. 3 LIT B WEEK TWO',
        description: 'Primary Three',
        price: 2000,
        link: 'https://freshteacher.software/P. 3 LIT B WEEK TWO.pdf',
      },{
        title: 'P. 3 MTC SET I',
        description: 'Primary Three',
        price: 10000,
        link: 'https://freshteacher.software/P. 3 MTC SET I.pdf',
      },
      {
        title: 'P. 3 Package 4',
        description: 'Primary Three',
        price: 15000,
        link: 'https://freshteacher.software/P. 3 Package 4.pdf',
      },
      {
        title: 'P.3 ENG',
        description: 'Primary Three',
        price: 25000,
        link: 'https://freshteacher.software/P.3 ENG.pdf',
      },
      {
        title: 'P.3 ENGLISH WK TWO',
        description: 'Primary Three',
        price: 55000,
        link: 'https://freshteacher.software/P.3 ENGLISH WK TWO.pdf',
      },
      {
        title: 'P.3 ENTRY EXAM',
        description: 'Primary Three',
        price: 2500,
        link: 'https://freshteacher.software/P.3 ENTRY EXAM.pdf',
      },{
        title: 'P.3 Lit 1A Lockdown activity',
        description: 'Primary Three',
        price: 37000,
        link: 'https://freshteacher.software/P.3 Lit 1A Lockdown activity.pdf',
      },
      {
        title: 'P.3 LIT-1',
        description: 'Primary Three',
        price: 13000,
        link: 'https://freshteacher.software/P.3 LIT-1.pdf',
      },
      {
        title: 'P.3 LIT',
        description: 'Primary Three',
        price: 45000,
        link: 'https://freshteacher.software/P.3 LIT.pdf',
      },
      {
        title: 'P.3 Literacy 1A Lockdown activiTY (2)',
        description: 'Primary Three',
        price: 57500,
        link: 'https://freshteacher.software/P.3 Literacy 1A Lockdown activiTY (2).pdf',
      },
      {
        title: 'P.3 Literacy 1A Lockdown activity',
        description: 'Primary Three',
        price: 24800,
        link: 'https://freshteacher.software/P.3 Literacy 1A Lockdown activity.pdf',
      },{
        title: 'P.3 Literacy 1B Lock down activity',
        description: 'Primary Three',
        price: 86000,
        link: 'https://freshteacher.software/P.3 Literacy 1B Lock down activity.pdf',
      },
      {
        title: 'P.3 Literacy 1B Lockdown activity',
        description: 'Primary Three',
        price: 11000,
        link: 'https://freshteacher.software/P.3 Literacy 1B Lockdown activity.pdf',
      },
      {
        title: 'P.3 LITERACY A WEEK TWO',
        description: 'Primary Three',
        price: 29000,
        link: 'https://freshteacher.software/P.3 LITERACY A WEEK TWO.pdf',
      },
      {
        title: 'P.3 Literacy1A Lockdown activity',
        description: 'Primary Three',
        price: 95000,
        link: 'https://freshteacher.software/P.3 Literacy1A Lockdown activity.pdf',
      },
      {
        title: 'P.3 Math Lock down activity',
        description: 'Primary Three',
        price: 29000,
        link: 'https://freshteacher.software/P.3 Math Lock down activity.pdf',
      },{
        title: 'P.3 Math Lockdown activity',
        description: 'Primary Three',
        price: 12400,
        link: 'https://freshteacher.software/P.3 Math Lockdown activity.pdf',
      },
      {
        title: 'P.3 MTC (2)',
        description: 'Primary Three',
        price: 15800,
        link: 'https://freshteacher.software/P.3 MTC (2).pdf',
      },
      {
        title: 'P.3 MTC WEEK 2',
        description: 'Primary Three',
        price: 82000,
        link: 'https://freshteacher.software/P.3 MTC WEEK 2.pdf',
      },
      {
        title: 'P.3 MTC-1',     
        description: 'Primary Three',
        price: 53000,
        link: 'https://freshteacher.software/P.3 MTC-1.pdf',     
       },
       {
        title: 'P.3 MTC',
        description: 'Primary Three',
        price: 13000,
        link: 'https://freshteacher.software/P.3 MTC.pdf',
      },{
        title: 'P.3 R.E',
        description: 'Primary Three',
        price: 13000,
        link: 'https://freshteacher.software/P.3 R.E.pdf',
      },{
        title: 'P.3 SST Lockdown activity (2)',
        description: 'Primary Three',
        price: 13000,
        link: 'https://freshteacher.software/P.3 SST Lockdown activity (2).pdf',
      },{
        title: 'P.3 SST Lockdown activity 2',
        description: 'Primary Three',
        price: 13000,
        link: 'https://freshteacher.software/P.3 SST Lockdown activity 2.pdf',
      },
      {
        title: 'P.3 SST Lockdown activity',
        description: 'Primary Three',
        price: 13000,
        link: 'https://freshteacher.software/P.3 SST Lockdown activity.pdf',
      },{
        title: 'P.3 WORK GAYAZA JR',
        description: 'Primary Three',
        price: 13000,
        link: 'https://freshteacher.software/P.3 WORK GAYAZA JR.pdf',
      },{
        title: 'P.3_CRE_WEEK_2 GREEN HILL',
        description: 'Primary Three',
        price: 13000,
        link: 'https://freshteacher.software/P.3_CRE_WEEK_2 GREEN HILL.pdf',
      },{
        title: 'P.3-ENG-SET-5',
        description: 'Primary Three',
        price: 13000,
        link: 'https://freshteacher.software/P.3-ENG-SET-5.pdf',
      },{
        title: 'P.3-ENG-SET-II',
        description: 'Primary Three',
        price: 13000,
        link: 'https://freshteacher.software/P.3-ENG-SET-II.pdf',
      },{
        title: 'P.3-English-Term-One',
        description: 'Primary Three',
        price: 13000,
        link: 'https://freshteacher.software/P.3-English-Term-One.pdf',
      },{
        title: 'P.3-ENGLISH-WORKBOOK-TERM-ONE',
        description: 'Primary Three',
        price: 13000,
        link: 'https://freshteacher.software/P.3-ENGLISH-WORKBOOK-TERM-ONE.pdf',
      },{
        title: 'P.3-LIT-1-A-SET-5',
        description: 'Primary Three',
        price: 13000,
        link: 'https://freshteacher.software/P.3-LIT-1-A-SET-5.pdf',
      },{
        title: 'P.3-LIT-1-A-SET-II',
        description: 'Primary Three',
        price: 13000,
        link: 'https://freshteacher.software/P.3-LIT-1-A-SET-II.pdf',
      },{
        title: 'P.3-LIT-1-B-SET5',
        description: 'Primary Three',
        price: 13000,
        link: 'https://freshteacher.software/P.3-LIT-1-B-SET5.pdf',
      },{
        title: 'P.3-LITERACY-WORKBOOK-TERM-ONE',
        description: 'Primary Three',
        price: 13000,
        link: 'https://freshteacher.software/P.3-LITERACY-WORKBOOK-TERM-ONE.pdf',
      },{
        title: 'P.3-LUGANDA-EXAM-NAMAGUNGA-PRIMARY-BOARDING-SCHOOL',
        description: 'Primary Three',
        price: 13000,
        link: 'https://freshteacher.software/P.3-LUGANDA-EXAM-NAMAGUNGA-PRIMARY-BOARDING-SCHOOL.pdf',
      },{
        title: 'P.3-MATHEMATICS-WORK-BOOK-TERM-ONE',
        description: 'Primary Three',
        price: 13000,
        link: 'https://freshteacher.software/P.3-MATHEMATICS-WORK-BOOK-TERM-ONE.pdf',
      },{
        title: 'P.3-MTC-SET-5',
        description: 'Primary Three',
        price: 13000,
        link: 'https://freshteacher.software/P.3-MTC-SET-5.pdf',
      },
      {
        title: 'P.3-MTC-SET-II',
        description: 'Primary Three',
        price: 13000,
        link: 'https://freshteacher.software/P.3-MTC-SET-II.pdf',
      },
      {
        title: 'P3 ENGLISH KAWAALA',
        description: 'Primary Three',
        price: 13000,
        link: 'https://freshteacher.software/P3 ENGLISH KAWAALA.pdf',
      },
      {
        title: 'P3 ENGLISH',
        description: 'Primary Three',
        price: 13000,
        link: 'https://freshteacher.software/P3 ENGLISH.pdf',
      },
      {
        title: 'P3 LITERACY 11 REVISION WORK',
        description: 'Primary Three',
        price: 13000,
        link: 'https://freshteacher.software/P3 LITERACY 11 REVISION WORK.pdf',
      },
      {
        title: 'P3 LITERACY I',
        description: 'Primary Three',
        price: 13000,
        link: 'https://freshteacher.software/P3 LITERACY I.pdf',
      },
      {
        title: 'P3 LITERACY II',
        description: 'Primary Three',
        price: 13000,
        link: 'https://freshteacher.software/P3 LITERACY II.pdf',
      },
      {
        title: 'P3 LITRACY 2',
        description: 'Primary Three',
        price: 13000,
        link: 'https://freshteacher.software/P3 LITRACY 2.pdf',
      },
      {
        title: 'P3 LITRACY B',
        description: 'Primary Three',
        price: 13000,
        link: 'https://freshteacher.software/P3 LITRACY B.pdf',
      },
      {
        title: 'P3 LUGANDA',
        description: 'Primary Three',
        price: 13000,
        link: 'https://freshteacher.software/P3 LUGANDA.pdf',
      },
      {
        title: 'P3 Material_A3 1',
        description: 'Primary Three',
        price: 13000,
        link: 'https://freshteacher.software/P3 Material_A3 1.pdf',
      },
      {
        title: 'P3 Material',
        description: 'Primary Three',
        price: 13000,
        link: 'https://freshteacher.software/P3 Material.pdf',
      },
      {
        title: 'P3 MATH',
        description: 'Primary Three',
        price: 13000,
        link: 'https://freshteacher.software/P3 MATH.pdf',
      },
      {
        title: 'P3 MID TERM III',
        description: 'Primary Three',
        price: 13000,
        link: 'https://freshteacher.software/P3 MID TERM III.pdf',
      },
      {
        title: 'P3 QUESTIONS ALL SUBJECTS',
        description: 'Primary Three',
        price: 13000,
        link: 'https://freshteacher.software/P3 QUESTIONS ALL SUBJECTS.pdf',
      },
      {
        title: 'P3 RE',
        description: 'Primary Three',
        price: 13000,
        link: 'https://freshteacher.software/P3 RE.pdf',
      },
      {
        title: 'P3 READING',
        description: 'Primary Three',
        price: 13000,
        link: 'https://freshteacher.software/P3 READING.pdf',
      },
      {
        title: 'P3 WORK ALL SUBJECTS',
        description: 'Primary Three',
        price: 13000,
        link: 'https://freshteacher.software/P3 WORK ALL SUBJECTS.PDF',
      },
      {
        title: 'P3_LITERACY_1A_REVISION_WORK_NAMAGUNGA_PRIMARY_BOARDING_SCHOOL (2)',
        description: 'Primary Three',
        price: 13000,
        link: 'https://freshteacher.software/P3_LITERACY_1A_REVISION_WORK_NAMAGUNGA_PRIMARY_BOARDING_SCHOOL (2).pdf',
      },
      {
        title: 'P3_LITERACY_1B_REVISION_WORK_NAMAGUNGA_PRIMARY_BOARDING_SCHOOL',
        description: 'Primary Three',
        price: 13000,
        link: 'https://freshteacher.software/P3_LITERACY_1B_REVISION_WORK_NAMAGUNGA_PRIMARY_BOARDING_SCHOOL.pdf',
      },
      {
        title: 'P3_LITERACY_1B_SET_1_REVISION_WORK_NAMAGUNGA_PRIMARY_BOARDING_SCHOOL',
        description: 'Primary Three',
        price: 13000,
        link: 'https://freshteacher.software/P3_LITERACY_1B_SET_1_REVISION_WORK_NAMAGUNGA_PRIMARY_BOARDING_SCHOOL.pdf',
      },
      {
        title: 'P3-MATHEMATICS-REVISION-WORK-MIREMBE-JUNIOR-SCHOOL',
        description: 'Primary Three',
        price: 13000,
        link: 'https://freshteacher.software/P3-MATHEMATICS-REVISION-WORK-MIREMBE-JUNIOR-SCHOOL.pdf',
      },
      {
        title: 'PRIMARY 3 SET III 2020',
        description: 'Primary Three',
        price: 13000,
        link: 'https://freshteacher.software/PRIMARY 3 SET III 2020.pdf',
      },
      {
        title: 'primary three English COVID-19 DOC-1',
        description: 'Primary Three',
        price: 13000,
        link: 'https://freshteacher.software/primary three English COVID-19 DOC-1.pdf',
      },
      {
        title: 'PRIMARY THREE INTAKE',
        description: 'Primary Three',
        price: 13000,
        link: 'https://freshteacher.software/PRIMARY THREE INTAKE.PDF',
      },
      {
        title: 'PRIMARY THREE MONDAY',
        description: 'Primary Three',
        price: 13000,
        link: 'https://freshteacher.software/PRIMARY THREE MONDAY.pdf',
      },
      {
        title: 'PRIMARY-THREE-REVISION-ACTIVITIES-WEEK-FOUR 2022',
        description: 'Primary Three',
        price: 13000,
        link: 'https://freshteacher.software/PRIMARY-THREE-REVISION-ACTIVITIES-WEEK-FOUR 2022.pdf',
      },
      {
        title: 'term one p.3 holiday package 2020',
        description: 'Primary Three',
        price: 13000,
        link: 'https://freshteacher.software/term one p.3 holiday package 2020.pdf',
      },
      {
        title: 'YET p.3-english-1- (1)',
        description: 'Primary Three',
        price: 13000,
        link: 'https://freshteacher.software/YET p.3-english-1- (1).pdf',
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
