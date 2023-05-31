import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FiDownload, FiEye } from 'react-icons/fi';
import PDFViewer from './PDFViewer';

const PrimarySixClassPastPapers = () => {
  const [lessonNotes, setLessonNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNote, setSelectedNote] = useState(null);
  const [scrollToPdf, setScrollToPdf] = useState(false);

  useEffect(() => {
    const sampleData = [
      {
        title: 'BOT III P6 ENG',
        description: 'Primary Six',
        price: 10000,
        link: 'https://freshteacher.software/BOT III P6 ENG.pdf',
      },
      {
        title: 'BOT III P6 SCIENCE',
        description: 'Primary Six',
        price: 15000,
        link: 'https://freshteacher.software/BOT III P6 SCIENCE.pdf',
      },
      {
        title: 'BOT III P6 SST',
        description: 'Primary Six',
        price: 25000,
        link: 'https://freshteacher.software/BOT III P6 SST.pdf',
      },
      {
        title: 'ENGLISH PAMPHLET FOR P.4 -P.7 - Copy',
        description: 'Primary Six',
        price: 55000,
        link: 'https://freshteacher.software/ENGLISH PAMPHLET FOR P.4 -P.7 - Copy.pdf',
      },
      {
        title: 'HOMEWORK FOR P.6 TERM I',
        description: 'Primary Six',
        price: 2000,
        link: 'https://freshteacher.software/HOMEWORK FOR P.6 TERM I.pdf',
      },{
        title: 'MATHEMATICS PAMPHLET P.4-P.7 - Copy',
        description: 'Primary Six',
        price: 10000,
        link: 'https://freshteacher.software/MATHEMATICS PAMPHLET P.4-P.7 - Copy.pdf',
      },
      {
        title: 'Mid-Term Exam P.6 SST',
        description: 'Primary Six',
        price: 15000,
        link: 'https://freshteacher.software/Mid-Term Exam P.6 SST.pdf',
      },
      {
        title: 'MTC P.6 MID TERM ONE 2020',
        description: 'Primary Six',
        price: 25000,
        link: 'https://freshteacher.software/MTC P.6 MID TERM ONE 2020.pdf',
      },
      {
        title: 'mtc p6 sipro',
        description: 'Primary Six',
        price: 55000,
        link: 'https://freshteacher.software/mtc p6 sipro.pdf',
      },
      {
        title: 'P. 6 MTC SET I',
        description: 'Primary Six',
        price: 2000,
        link: 'https://freshteacher.software/P. 6 MTC SET I.pdf',
      },{
        title: 'P. 6 package 4',
        description: 'Primary Six',
        price: 10000,
        link: 'https://freshteacher.software/P. 6 package 4.pdf',
      },
      {
        title: 'P.6 - THEOLOGY',
        description: 'Primary Six',
        price: 15000,
        link: 'https://freshteacher.software/P.6 - THEOLOGY.pdf',
      },
      {
        title: 'P.6 .MTC',
        description: 'Primary Six',
        price: 25000,
        link: 'https://freshteacher.software/P.6 .MTC.pdf',
      },
      {
        title: 'P.6 ALL SUBJECTS (2 SETS)',
        description: 'Primary Six',
        price: 55000,
        link: 'https://freshteacher.software/P.6 ALL SUBJECTS (2 SETS).pdf',
      },
      {
        title: 'P.6 END OF FEBRUARY EXAMINATION TERM I',
        description: 'Primary Six',
        price: 2500,
        link: 'https://freshteacher.software/P.6 END OF FEBRUARY EXAMINATION TERM I.pdf',
      },{
        title: 'P.6 ENG END OF SEPT 2020',
        description: 'Primary Six',
        price: 37000,
        link: 'https://freshteacher.software/P.6 ENG END OF SEPT 2020.pdf',
      },
      {
        title: 'P.6 ENGLISH HOMEWORK',
        description: 'Primary Six',
        price: 13000,
        link: 'https://freshteacher.software/P.6 ENGLISH HOMEWORK.pdf',
      },
      {
        title: 'P.6 English Lockdown activitY',
        description: 'Primary Six',
        price: 45000,
        link: 'https://freshteacher.software/P.6 English Lockdown activitY.pdf',
      },
      {
        title: 'P.6 English Revision booklet',
        description: 'Primary Six',
        price: 57500,
        link: 'https://freshteacher.software/P.6 English Revision booklet.pdf',
      },
      {
        title: 'P.6 HOLID PACKAGE TERM ONE  2020',
        description: 'Primary Six',
        price: 24800,
        link: 'https://freshteacher.software/P.6 HOLID PACKAGE TERM ONE  2020.pdf',
      },{
        title: 'P.6 LEGIT MTC3 ISSUE 1',
        description: 'Primary Six',
        price: 86000,
        link: 'https://freshteacher.software/P.6 LEGIT MTC3 ISSUE 1.pdf',
      },
      {
        title: 'p.6 maths lesson notes term II 2020',
        description: 'Primary Six',
        price: 11000,
        link: 'https://freshteacher.software/p.6 maths lesson notes term II 2020.pdf',
      },
      {
        title: 'P.6 MTC END OF TERM II  2022 (2) (1)',
        description: 'Primary Six',
        price: 29000,
        link: 'https://freshteacher.software/P.6 MTC END OF TERM II  2022 (2) (1).pdf',
      },
      {
        title: 'P.6 MTC term 3',
        description: 'Primary Six',
        price: 95000,
        link: 'https://freshteacher.software/P.6 MTC term 3.pdf',
      },
      {
        title: 'P.6 Revision test',
        description: 'Primary Six',
        price: 29000,
        link: 'https://freshteacher.software/P.6 Revision test.pdf',
      },{
        title: 'P.6 REVISION WORKBOOK',
        description: 'Primary Six',
        price: 12400,
        link: 'https://freshteacher.software/P.6 REVISION WORKBOOK.pdf',
      },
      {
        title: 'P.6 SCI SET III FINAL SIR APOLLO KAGWA (2)',
        description: 'Primary Six',
        price: 15800,
        link: 'https://freshteacher.software/P.6 SCI SET III FINAL SIR APOLLO KAGWA (2).pdf',
      },
      {
        title: 'P.6 SCI SET III FINAL SIR APOLLO KAGWA-1',
        description: 'Primary Six',
        price: 82000,
        link: 'https://freshteacher.software/P.6 SCI SET III FINAL SIR APOLLO KAGWA-1.pdf',
      },
      {
        title: 'P.6 SCI SET III FINAL SIR APOLLO KAGWA.pdf', 
        description: 'Primary Six',
        price: 53000,
        link: 'https://freshteacher.software/P.6 SCI SET III FINAL SIR APOLLO KAGWA.pdf', 
           },
      {
        title: 'P.6 SET 21',
        description: 'Primary Six',
        price: 13000,
        link: 'https://freshteacher.software/P.6 SET 21.pdf',
      },
      {
        title: 'P.6_CRE_WEEK_2 GREEN HILL PS',
        description: 'Primary Six',
        price: 10000,
        link: 'https://freshteacher.software/P.6_CRE_WEEK_2 GREEN HILL PS.pdf',
      },
      {
        title: 'P.6_ENGLISH_WEEK_2 GREENHILL PS',
        description: 'Primary Six',
        price: 15000,
        link: 'https://freshteacher.software/P.6_ENGLISH_WEEK_2 GREENHILL PS.pdf',
      },
      {
        title: 'P.6_MATH_WEEK_2 GREENHILL PS',
        description: 'Primary Six',
        price: 25000,
        link: 'https://freshteacher.software/P.6_MATH_WEEK_2 GREENHILL PS.pdf',
      },
      {
        title: 'P.6_SCIENCE_WEEK_2',
        description: 'Primary Six',
        price: 55000,
        link: 'https://freshteacher.software/P.6_SCIENCE_WEEK_2.pdf',
      },
      {
        title: 'P.6-.SST-II',
        description: 'Primary Six',
        price: 2000,
        link: 'https://freshteacher.software/P.6-.SST-II.pdf',
      },{
        title: 'P.6-7-ENGLISH-LANGUAGE',
        description: 'Primary Six',
        price: 10000,
        link: 'https://freshteacher.software/P.6-7-ENGLISH-LANGUAGE.pdf',
      },
      {
        title: 'P.6-ENG-SET-5',
        description: 'Primary Six',
        price: 15000,
        link: 'https://freshteacher.software/P.6-ENG-SET-5.pdf',
      },
      {
        title: 'P.6-ENG-SET-II',
        description: 'Primary Six',
        price: 25000,
        link: 'https://freshteacher.software/P.6-ENG-SET-II.pdf',
      },
      {
        title: 'P.6-ENGLISH-REVISION-WORK-001',
        description: 'Primary Six',
        price: 55000,
        link: 'https://freshteacher.software/P.6-ENGLISH-REVISION-WORK-001.pdf',
      },
      {
        title: 'P.6-ENGLISH-WORK-BOOK-TERM-ONE.',
        description: 'Primary Six',
        price: 2000,
        link: 'https://freshteacher.software/P.6-ENGLISH-WORK-BOOK-TERM-ONE..pdf',
      },{
        title: 'P.6-MATHEMATICS-WORKBOOK-TERM-ONE',
        description: 'Primary Six',
        price: 10000,
        link: 'https://freshteacher.software/P.6-MATHEMATICS-WORKBOOK-TERM-ONE.pdf',
      },
      {
        title: 'P.6-MTC-set-5',
        description: 'Primary Six',
        price: 15000,
        link: 'https://freshteacher.software/P.6-MTC-set-5.pdf',
      },
      {
        title: 'P.6-MTC-SET-II',
        description: 'Primary Six',
        price: 25000,
        link: 'https://freshteacher.software/P.6-MTC-SET-II.pdf',
      },
      {
        title: 'P.6-SCI-SET-II',
        description: 'Primary Six',
        price: 55000,
        link: 'https://freshteacher.software/P.6-SCI-SET-II.pdf',
      },
      {
        title: 'P.6-SCIENCE-WORK-BOOK-TERM-ONE.',
        description: 'Primary Six',
        price: 2500,
        link: 'https://freshteacher.software/P.6-SCIENCE-WORK-BOOK-TERM-ONE..pdf',
      },{
        title: 'P.6-SST-SET-5',
        description: 'Primary Six',
        price: 37000,
        link: 'https://freshteacher.software/P.6-SST-SET-5.pdf',
      },
      {
        title: 'P.6-SST-WORK-BOOK-TERM-ONE-',
        description: 'Primary Six',
        price: 13000,
        link: 'https://freshteacher.software/P.6-SST-WORK-BOOK-TERM-ONE-.pdf',
      },
      {
        title: 'P5 _ P6 SCIENCE REVISION BOOK - Copy',
        description: 'Primary Six',
        price: 45000,
        link: 'https://freshteacher.software/P5 _ P6 SCIENCE REVISION BOOK - Copy.pdf',
      },
      {
        title: 'P6 _ P7 WORKBOOK',
        description: 'Primary Six',
        price: 57500,
        link: 'https://freshteacher.software/P6 _ P7 WORKBOOK.pdf',
      },
      {
        title: 'P6 BOT III MATHS',
        description: 'Primary Six',
        price: 24800,
        link: 'https://freshteacher.software/P6 BOT III MATHS.pdf',
      },{
        title: 'P6 BUKEDDE REVISION',
        description: 'Primary Six',
        price: 86000,
        link: 'https://freshteacher.software/P6 BUKEDDE REVISION.pdf',
      },
      {
        title: 'P6 ENGLISH (2)',
        description: 'Primary Six',
        price: 11000,
        link: 'https://freshteacher.software/P6 ENGLISH (2).pdf',
      },
      {
        title: 'P6 INTEGRATED SCIENCE',
        description: 'Primary Six',
        price: 29000,
        link: 'https://freshteacher.software/P6 INTEGRATED SCIENCE.pdf',
      },
      {
        title: 'P6 Materials',
        description: 'Primary Six',
        price: 95000,
        link: 'https://freshteacher.software/P6 Materials.pdf',
      },
      {
        title: 'P6 MATHEMATICS (2)',
        description: 'Primary Six',
        price: 29000,
        link: 'https://freshteacher.software/P6 MATHEMATICS (2).pdf',
      },{
        title: 'P6 MATHEMATICS HOLIDAY WORK YET HAPPY KIDZ',
        description: 'Primary Six',
        price: 12400,
        link: 'https://freshteacher.software/P6 MATHEMATICS HOLIDAY WORK YET HAPPY KIDZ.pdf',
      },
      {
        title: 'P6 MID TERM III ENGLISH',
        description: 'Primary Six',
        price: 15800,
        link: 'https://freshteacher.software/P6 MID TERM III ENGLISH.pdf',
      },
      {
        title: 'P6 MID TERM III EXAM',
        description: 'Primary Six',
        price: 82000,
        link: 'https://freshteacher.software/P6 MID TERM III EXAM.pdf',
      },
      {
        title: 'P6 MID TERM III SCIENCE',     
        description: 'Primary Six',
        price: 53000,
        link: 'https://freshteacher.software/P6 MID TERM III SCIENCE.pdf',     
       },
      {
        title: 'P6 MID TERM III',
        description: 'Primary Six',
        price: 13000,
        link: 'https://freshteacher.software/P6 MID TERM III.pdf',
      },
      {
        title: 'P6 MID-TERM I EXAMINATION',
        description: 'Primary Six',
        price: 10000,
        link: 'https://freshteacher.software/P6 MID-TERM I EXAMINATION.pdf',
      },
      {
        title: 'P6 SCIENCE (2)',
        description: 'Primary Six',
        price: 15000,
        link: 'https://freshteacher.software/P6 SCIENCE (2).pdf',
      },
      {
        title: 'P6 SCIENCE EXAM _ MARKING GUIDE',
        description: 'Primary Six',
        price: 25000,
        link: 'https://freshteacher.software/P6 SCIENCE EXAM _ MARKING GUIDE.pdf',
      },
      {
        title: 'P6 SCIENCE YET HAPPY KIDZ HOLIDAY WORK',
        description: 'Primary Six',
        price: 55000,
        link: 'https://freshteacher.software/P6 SCIENCE YET HAPPY KIDZ HOLIDAY WORK.pdf',
      },
      {
        title: 'P6 SST HOLIDAY WORK YET HAPPY KIDZ SCHOOL',
        description: 'Primary Six',
        price: 2000,
        link: 'https://freshteacher.software/P6 SST HOLIDAY WORK YET HAPPY KIDZ SCHOOL.pdf',
      },{
        title: 'P6 SST SCHEME TERM II',
        description: 'Primary Six',
        price: 10000,
        link: 'https://freshteacher.software/P6 SST SCHEME TERM II.pdf',
      },
      {
        title: 'P6 SST',
        description: 'Primary Six',
        price: 15000,
        link: 'https://freshteacher.software/P6 SST.pdf',
      },
      {
        title: 'P6 WORK TERM 1',
        description: 'Primary Six',
        price: 25000,
        link: 'https://freshteacher.software/P6 WORK TERM 1.pdf',
      },
      {
        title: 'P6_RELIGIOUS_EDUCATION_RE_HOLIDAY_WORK_YET_HAPPY_KIDZ_SCHOOL',
        description: 'Primary Six',
        price: 55000,
        link: 'https://freshteacher.software/P6_RELIGIOUS_EDUCATION_RE_HOLIDAY_WORK_YET_HAPPY_KIDZ_SCHOOL.pdf',
      },
      {
        title: 'P6-MATHEMATICS-SET-2-EXAM-NAMAGUNGA-PRIMARY-BOARDING-SCHOOL',
        description: 'Primary Six',
        price: 2000,
        link: 'https://freshteacher.software/P6-MATHEMATICS-SET-2-EXAM-NAMAGUNGA-PRIMARY-BOARDING-SCHOOL.pdf',
      },{
        title: 'PRIMARY 6 SET III 2020',
        description: 'Primary Six',
        price: 10000,
        link: 'https://freshteacher.software/PRIMARY 6 SET III 2020.pdf',
      },
      {
        title: 'Primary six  INTEGRATED SCIENCE COVID-19-1',
        description: 'Primary Six',
        price: 15000,
        link: 'https://freshteacher.software/Primary six  INTEGRATED SCIENCE COVID-19-1.pdf',
      },
      {
        title: 'Primary six English COVID-19 package',
        description: 'Primary Six',
        price: 25000,
        link: 'https://freshteacher.software/Primary six English COVID-19 package.pdf',
      },
      {
        title: 'primary six English COVID-19',
        description: 'Primary Six',
        price: 55000,
        link: 'https://freshteacher.software/primary six English COVID-19.pdf',
      },
      {
        title: 'PRIMARY SIX MONDAY SOLUTIONS',
        description: 'Primary Six',
        price: 2500,
        link: 'https://freshteacher.software/PRIMARY SIX MONDAY SOLUTIONS.pdf',
      },{
        title: 'PRIMARY SIX MONDAY',
        description: 'Primary Six',
        price: 37000,
        link: 'https://freshteacher.software/PRIMARY SIX MONDAY.pdf',
      },
      {
        title: 'primary six Social studies',
        description: 'Primary Six',
        price: 13000,
        link: 'https://freshteacher.software/primary six Social studies.pdf',
      },
      {
        title: 'sipro scie mid p6',
        description: 'Primary Six',
        price: 45000,
        link: 'https://freshteacher.software/sipro scie mid p6.pdf',
      },
      {
        title: 'YET P.6_MATH_INT_END_SET_',
        description: 'Primary Six',
        price: 57500,
        link: 'https://freshteacher.software/YET P.6_MATH_INT_END_SET_.pdf',
      },
      {
        title: 'YET P.6_R.E_Int_1-1-',
        description: 'Primary Six',
        price: 24800,
        link: 'https://freshteacher.software/YET P.6_R.E_Int_1-1-.pdf',
      },{
        title: 'YET p.6_science-1-',
        description: 'Primary Six',
        price: 86000,
        link: 'https://freshteacher.software/YET p.6_science-1-.pdf',
      },
      {
        title: 'YET P.6_sst_Int_end_',
        description: 'Primary Six',
        price: 11000,
        link: 'https://freshteacher.software/YET P.6_sst_Int_end_.pdf',
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
      <h1>Primary Six Class Past Papers</h1>
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

export default PrimarySixClassPastPapers;
