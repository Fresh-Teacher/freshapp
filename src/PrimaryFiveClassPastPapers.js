import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FiDownload, FiEye } from 'react-icons/fi';
import PDFViewer from './PDFViewer';

const PrimaryFiveClassPastPapers = () => {
  const [lessonNotes, setLessonNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNote, setSelectedNote] = useState(null);
  const [scrollToPdf, setScrollToPdf] = useState(false);

  useEffect(() => {
    const sampleData = [
      {
        title: 'English P_ 5 End of Term I Examination 2018',
        description: 'Primary Five',
        price: 10000,
        link: 'https://freshteacher.software/English P_ 5 End of Term I Examination 2018.pdf',
      },
      {
        title: 'ENGLISH PAMPHLET FOR P.4 -P.7 - Copy (3)',
        description: 'Primary Five',
        price: 15000,
        link: 'https://freshteacher.software/ENGLISH PAMPHLET FOR P.4 -P.7 - Copy (3).pdf',
      },
      {
        title: 'ENGLISH PAMPHLET FOR P.4 -P.7 - Copy (3)',
        description: 'Primary Five',
        price: 25000,
        link: 'https://freshteacher.software/ENGLISH PAMPHLET FOR P.4 -P.7 - Copy (3).pdf',
      },
      {
        title: 'MATHEMATICS PAMPHLET P.4-P.7 - Copy (3)',
        description: 'Primary Five',
        price: 55000,
        link: 'https://freshteacher.software/MATHEMATICS PAMPHLET P.4-P.7 - Copy (3).pdf',
      },
      {
        title: 'NJS P.5 MATH SET 6',
        description: 'Primary Five',
        price: 2000,
        link: 'https://freshteacher.software/NJS P.5 MATH SET 6.pdf',
      },{
        title: 'NJS P.5 MTC',
        description: 'Primary Five',
        price: 10000,
        link: 'https://freshteacher.software/NJS P.5 MTC.pdf.pdf',
      },
      {
        title: 'P 5 Science part 1',
        description: 'Primary Five',
        price: 15000,
        link: 'https://freshteacher.software/P 5 Science part 1.pdf',
      },
      {
        title: 'P 5 Science part 2',
        description: 'Primary Five',
        price: 25000,
        link: 'https://freshteacher.software/P 5 Science part 2.pdf',
      },
      {
        title: 'P. 5 package 4',
        description: 'Primary Five',
        price: 55000,
        link: 'https://freshteacher.software/P. 5 package 4.pdf',
      },
      {
        title: 'P. 5 TERM 1 MATHS WORKBOOK',
        description: 'Primary Five',
        price: 2000,
        link: 'https://freshteacher.software/P. 5 TERM 1 MATHS WORKBOOK.pdf',
      },{
        title: 'P.-5-SCIENCE-SET-1',
        description: 'Primary Five',
        price: 10000,
        link: 'https://freshteacher.software/P.-5-SCIENCE-SET-1.pdf',
      },
      {
        title: 'P.-5-SCIENCE-SET-2',
        description: 'Primary Five',
        price: 15000,
        link: 'https://freshteacher.software/P.-5-SCIENCE-SET-2.pdf',
      },
      {
        title: 'P.5 _ P.6 Revision Book',
        description: 'Primary Five',
        price: 25000,
        link: 'https://freshteacher.software/P.5 _ P.6 Revision Book.pdf',
      },
      {
        title: 'P.5 - THEOLOGY ',
        description: 'Primary Five',
        price: 55000,
        link: 'https://freshteacher.software/P.5 - THEOLOGY .pdf',
      },
      {
        title: 'p.5 All',
        description: 'Primary Five',
        price: 2500,
        link: 'https://freshteacher.software/p.5 All.pdf',
      },{
        title: 'P.5 DAILY WORK',
        description: 'Primary Five',
        price: 37000,
        link: 'https://freshteacher.software/P.5 DAILY WORK.pdf',
      },
      {
        title: 'P.5 Eng Lockdown activity',
        description: 'Primary Five',
        price: 13000,
        link: 'https://freshteacher.software/P.5 Eng Lockdown activity.pdf',
      },
      {
        title: 'P.5 ENG',
        description: 'Primary Five',
        price: 45000,
        link: 'https://freshteacher.software/P.5 ENG.pdf',
      },
      {
        title: 'P.5 English Corona Virus Holiday Package',
        description: 'Primary Five',
        price: 57500,
        link: 'https://freshteacher.software/P.5 English Corona Virus Holiday Package.pdf',
      },
      {
        title: 'P.5 ENGLISH HOMEWORK',
        description: 'Primary Five',
        price: 24800,
        link: 'https://freshteacher.software/P.5 ENGLISH HOMEWORK.pdf',
      },{
        title: 'P.5 English Lock down activity',
        description: 'Primary Five',
        price: 86000,
        link: 'https://freshteacher.software/P.5 English Lock down activity.pdf',
      },
      {
        title: 'P.5 ENGLISH REVISION',
        description: 'Primary Five',
        price: 11000,
        link: 'https://freshteacher.software/P.5 ENGLISH REVISION.pdf',
      },
      {
        title: 'P.5 ENGLISH SET 3',
        description: 'Primary Five',
        price: 29000,
        link: 'https://freshteacher.software/P.5 ENGLISH SET 3.pdf',
      },
      {
        title: 'P.5 ENGLISH TERM II EXAM',
        description: 'Primary Five',
        price: 95000,
        link: 'https://freshteacher.software/P.5 ENGLISH TERM II EXAM.pdf',
      },
      {
        title: 'P.5 ENGLISH WORK HOME',
        description: 'Primary Five',
        price: 29000,
        link: 'https://freshteacher.software/P.5 ENGLISH WORK HOME.pdf',
      },{
        title: 'P.5 EXAM ENGLISH  REVISION',
        description: 'Primary Five',
        price: 12400,
        link: 'https://freshteacher.software/P.5 EXAM ENGLISH  REVISION.pdf',
      },
      {
        title: 'P.5 LEGIT ENGLISH ISSUE 1',
        description: 'Primary Five',
        price: 15800,
        link: 'https://freshteacher.software/P.5 LEGIT ENGLISH ISSUE 1.pdf',
      },
      {
        title: 'P.5 math int end',
        description: 'Primary Five',
        price: 82000,
        link: 'https://freshteacher.software/P.5 math int end.pdf',
      },
      {
        title: 'P.5 MATH LOCK DOWN EXERCISE ONE.pdf',      
        description: 'Primary Five',
        price: 53000,
        link: 'https://freshteacher.software/P.5 MATH LOCK DOWN EXERCISE ONE.pdf',      
      },
      {
        title: 'P.5 Maths Revision booklet',
        description: 'Primary Five',
        price: 13000,
        link: 'https://freshteacher.software/P.5 Maths Revision booklet.pdf',
      },
      {
        title: 'P.5 MATHS WORK 2020 SET1',
        description: 'Primary Five',
        price: 10000,
        link: 'https://freshteacher.software/P.5 MATHS WORK 2020 SET1.pdf',
      },
      {
        title: 'p.5 mid term sipro',
        description: 'Primary Five',
        price: 15000,
        link: 'https://freshteacher.software/p.5 mid term sipro.pdf',
      },
      {
        title: 'P.5 MTC',
        description: 'Primary Five',
        price: 25000,
        link: 'https://freshteacher.software/P.5 MTC.pdf',
      },
      {
        title: 'P.5 R.E Int 2',
        description: 'Primary Five',
        price: 55000,
        link: 'https://freshteacher.software/P.5 R.E Int 2.pdf',
      },
      {
        title: 'P.5 S.S.T  TERM TWO 2020',
        description: 'Primary Five',
        price: 2000,
        link: 'https://freshteacher.software/P.5 S.S.T  TERM TWO 2020.pdf',
      },{
        title: 'P.5 SCI  END OF TERM II  2022(0)',
        description: 'Primary Five',
        price: 10000,
        link: 'https://freshteacher.software/P.5 SCI  END OF TERM II  2022(0).pdf',
      },
      {
        title: 'P.5 SCI  END OF TERM II  2022(0)',
        description: 'Primary Five',
        price: 15000,
        link: 'https://freshteacher.software/P.5 SCI  END OF TERM II  2022(0).pdf',
      },
      {
        title: 'p.5 SCIENCE WORKBOOK',
        description: 'Primary Five',
        price: 25000,
        link: 'https://freshteacher.software/p.5 SCIENCE WORKBOOK.pdf',
      },
      {
        title: 'p.5 SCIENCE WORKBOOK',
        description: 'Primary Five',
        price: 55000,
        link: 'https://freshteacher.software/p.5 SCIENCE WORKBOOK.pdf',
      },
      {
        title: 'P.5 SET 1 pdf',
        description: 'Primary Five',
        price: 2000,
        link: 'https://freshteacher.software/P.5 SET 1 pdf.pdf',
      },{
        title: 'P.5 SET 2 pdf',
        description: 'Primary Five',
        price: 10000,
        link: 'https://freshteacher.software/P.5 SET 2 pdf.pdf',
      },
      {
        title: 'P.5 SET 3 pdf',
        description: 'Primary Five',
        price: 15000,
        link: 'https://freshteacher.software/P.5 SET 3 pdf.pdf',
      },
      {
        title: 'P.5 SET 4 pdf',
        description: 'Primary Five',
        price: 25000,
        link: 'https://freshteacher.software/P.5 SET 4 pdf.pdf',
      },
      {
        title: 'P.5 SST EOT III',
        description: 'Primary Five',
        price: 55000,
        link: 'https://freshteacher.software/P.5 SST EOT III.pdf',
      },
      {
        title: 'P.5 SST LOCK DOWN EXERCISE (2)',
        description: 'Primary Five',
        price: 2500,
        link: 'https://freshteacher.software/P.5 SST LOCK DOWN EXERCISE (2).pdf',
      },{
        title: 'P.5 SST LOCK DOWN EXERCISE',
        description: 'Primary Five',
        price: 37000,
        link: 'https://freshteacher.software/P.5 SST LOCK DOWN EXERCISE.pdf',
      },
      {
        title: 'P.5 TERM I CHALLENGING COMPETENCES',
        description: 'Primary Five',
        price: 13000,
        link: 'https://freshteacher.software/P.5 TERM I CHALLENGING COMPETENCES.pdf',
      },
      {
        title: 'P.5 TERM III WORKBOOK',
        description: 'Primary Five',
        price: 45000,
        link: 'https://freshteacher.software/P.5 TERM III WORKBOOK.pdf',
      },
      {
        title: 'P.5 Week  2',
        description: 'Primary Five',
        price: 57500,
        link: 'https://freshteacher.software/P.5 Week  2.pdf',
      },
      {
        title: 'P.5 Week 3',
        description: 'Primary Five',
        price: 24800,
        link: 'https://freshteacher.software/P.5 Week 3.pdf',
      },{
        title: 'p.5 week 4',
        description: 'Primary Five',
        price: 86000,
        link: 'https://freshteacher.software/p.5 week 4.pdf',
      },
      {
        title: 'P.5_ENGLISH_WEEK_2 GREEN HILL',
        description: 'Primary Five',
        price: 11000,
        link: 'https://freshteacher.software/P.5_ENGLISH_WEEK_2 GREEN HILL.pdf',
      },
      {
        title: 'P.5_math_end-T1',
        description: 'Primary Five',
        price: 29000,
        link: 'https://freshteacher.software/P.5_math_end-T1.pdf',
      },
      {
        title: 'P.5_MATH_WEEK_2 GREEN HILL',
        description: 'Primary Five',
        price: 95000,
        link: 'https://freshteacher.software/P.5_MATH_WEEK_2 GREEN HILL.pdf',
      },
      {
        title: 'P.5_SST_WEEK_2 GREEN HILL',
        description: 'Primary Five',
        price: 29000,
        link: 'https://freshteacher.software/P.5_SST_WEEK_2 GREEN HILL.pdf',
      },{
        title: 'P.5-ENG-SET-5',
        description: 'Primary Five',
        price: 12400,
        link: 'https://freshteacher.software/P.5-ENG-SET-5.pdf',
      },
      {
        title: 'P.5-ENG-SET-II',
        description: 'Primary Five',
        price: 15800,
        link: 'https://freshteacher.software/P.5-ENG-SET-II.pdf',
      },
      {
        title: 'p.5-english-recess',
        description: 'Primary Five',
        price: 82000,
        link: 'https://freshteacher.software/p.5-english-recess.pdf',
      },
      {
        title: 'P.5-ENGLISH-REVISION-APRIL-2020 (2).pdf',      
        description: 'Primary Five',
        price: 53000,
        link: 'https://freshteacher.software/P.5-ENGLISH-REVISION-APRIL-2020 (2).pdf',      
      },
      {
        title: 'P.5-ENGLISH-REVISION-JUNE-2020',
        description: 'Primary Five',
        price: 10000,
        link: 'https://freshteacher.software/P.5-ENGLISH-REVISION-JUNE-2020.pdf',
      },
      {
        title: 'P.5-ENGLISH-REVISION-SET-2-NAMAGUNGA-PRIMARY-BOARDING-SCHOOL',
        description: 'Primary Five',
        price: 15000,
        link: 'https://freshteacher.software/P.5-ENGLISH-REVISION-SET-2-NAMAGUNGA-PRIMARY-BOARDING-SCHOOL.pdf',
      },
      {
        title: 'P.5-ENGLISH-TEST-ONE',
        description: 'Primary Five',
        price: 25000,
        link: 'https://freshteacher.software/P.5-ENGLISH-TEST-ONE.pdf',
      },
      {
        title: 'P.5-ENGLISH-TEST-THREE',
        description: 'Primary Five',
        price: 55000,
        link: 'https://freshteacher.software/P.5-ENGLISH-TEST-THREE.pdf',
      },
      {
        title: 'P.5-ENGLISH-TEST-TWO',
        description: 'Primary Five',
        price: 2000,
        link: 'https://freshteacher.software/P.5-ENGLISH-TEST-TWO.pdf',
      },{
        title: 'P.5-ENGLISH-WORKBOOK-TERM-ONE',
        description: 'Primary Five',
        price: 10000,
        link: 'https://freshteacher.software/P.5-ENGLISH-WORKBOOK-TERM-ONE.pdf',
      },
      {
        title: 'P.5-MATHEMATICS-SET-ONE',
        description: 'Primary Five',
        price: 15000,
        link: 'https://freshteacher.software/P.5-MATHEMATICS-SET-ONE.pdf',
      },
      {
        title: 'P.5-MATHS-WORK-BOOK-TERM-ONE',
        description: 'Primary Five',
        price: 25000,
        link: 'https://freshteacher.software/P.5-MATHS-WORK-BOOK-TERM-ONE.pdf',
      },
      {
        title: 'P.5-MCT-set-two.....',
        description: 'Primary Five',
        price: 55000,
        link: 'https://freshteacher.software/P.5-MCT-set-two......pdf',
      },
      {
        title: 'P.5-MTC-REVISION-APRIL-2020',
        description: 'Primary Five',
        price: 2000,
        link: 'https://freshteacher.software/P.5-MTC-REVISION-APRIL-2020.pdf',
      },{
        title: 'P.5-SCIENCE-WORK-BOOK-TERM-ONE-',
        description: 'Primary Five',
        price: 10000,
        link: 'https://freshteacher.software/P.5-SCIENCE-WORK-BOOK-TERM-ONE-.pdf',
      },
      {
        title: 'P.5-SST-HOLIDAY-PACKAGE-TM-1-2020',
        description: 'Primary Five',
        price: 15000,
        link: 'https://freshteacher.software/P.5-SST-HOLIDAY-PACKAGE-TM-1-2020.pdf',
      },
      {
        title: 'P.5-SST-SET-5',
        description: 'Primary Five',
        price: 25000,
        link: 'https://freshteacher.software/P.5-SST-SET-5.pdf',
      },
      {
        title: 'P.5-SST-SET-II',
        description: 'Primary Five',
        price: 55000,
        link: 'https://freshteacher.software/P.5-SST-SET-II.pdf',
      },
      {
        title: 'P.5-SST-WORK-BOOK-TERM-ONE-',
        description: 'Primary Five',
        price: 2500,
        link: 'https://freshteacher.software/P.5-SST-WORK-BOOK-TERM-ONE-.pdf',
      },{
        title: 'P.5-SST',
        description: 'Primary Five',
        price: 37000,
        link: 'https://freshteacher.software/P.5-SST.pdf',
      },
      {
        title: 'P.5-Week-1-pdf',
        description: 'Primary Five',
        price: 13000,
        link: 'https://freshteacher.software/P.5-Week-1-pdf.pdf',
      },
      {
        title: 'P5 _ P6 SCIENCE REVISION BOOK',
        description: 'Primary Five',
        price: 45000,
        link: 'https://freshteacher.software/P5 _ P6 SCIENCE REVISION BOOK.pdf',
      },
      {
        title: 'P5 ASSESSMENT WORK TERM II',
        description: 'Primary Five',
        price: 57500,
        link: 'https://freshteacher.software/P5 ASSESSMENT WORK TERM II.pdf',
      },
      {
        title: 'P5 ENGLISH (2)',
        description: 'Primary Five',
        price: 24800,
        link: 'https://freshteacher.software/P5 ENGLISH (2).pdf',
      },{
        title: 'P5 ENGLISH RECESS WORK',
        description: 'Primary Five',
        price: 86000,
        link: 'https://freshteacher.software/P5 ENGLISH RECESS WORK.pdf',
      },
      {
        title: 'P5 ENGLISH YET HAPPY KIDZ SCHOOL HOLIDAY WORK',
        description: 'Primary Five',
        price: 11000,
        link: 'https://freshteacher.software/P5 ENGLISH YET HAPPY KIDZ SCHOOL HOLIDAY WORK.pdf',
      },
      {
        title: 'P5 Materials',
        description: 'Primary Five',
        price: 29000,
        link: 'https://freshteacher.software/P5 Materials.pdf',
      },
      {
        title: 'P5 MATH',
        description: 'Primary Five',
        price: 95000,
        link: 'https://freshteacher.software/P5 MATH.pdf',
      },
      {
        title: 'P5 Mathematics',
        description: 'Primary Five',
        price: 29000,
        link: 'https://freshteacher.software/P5 Mathematics.pdf',
      },
      {
        title: 'P5 mid term III discussion exercise',
        description: 'Primary Five',
        price: 12400,
        link: 'https://freshteacher.software/P5 mid term III discussion exercise.pdf',
      },
      {
        title: 'P5 MID TERM III MATHS',
        description: 'Primary Five',
        price: 15800,
        link: 'https://freshteacher.software/P5 MID TERM III MATHS.pdf',
      },
      {
        title: 'P5 Mid term III MTC Final set',
        description: 'Primary Five',
        price: 82000,
        link: 'https://freshteacher.software/P5 Mid term III MTC Final set.pdf',
      },
      {
        title: 'P5 MID TERM III SCIENCE.pdf',      
        description: 'Primary Five',
        price: 53000,
        link: 'https://freshteacher.software/P5 MID TERM III SCIENCE.pdf',      
      },
      {
        title: 'P5 Mid Term III trial test 2022',
        description: 'Primary Five',
        price: 13000,
        link: 'https://freshteacher.software/P5 Mid Term III trial test 2022.pdf',
      },
      {
        title: 'P5 SCIENCE (2)',
        description: 'Primary Five',
        price: 10000,
        link: 'https://freshteacher.software/P5 SCIENCE (2).pdf',
      },
      {
        title: 'P5 SCIENCE EXAM _ MG',
        description: 'Primary Five',
        price: 15000,
        link: 'https://freshteacher.software/P5 SCIENCE EXAM _ MG.pdf',
      },
      {
        title: 'P5 SCIENCE YET HAPPY KIDZ SCHOOL HOLIDAY WORK',
        description: 'Primary Five',
        price: 25000,
        link: 'https://freshteacher.software/P5 SCIENCE YET HAPPY KIDZ SCHOOL HOLIDAY WORK.pdf',
      },
      {
        title: 'P5 SCIENCE',
        description: 'Primary Five',
        price: 55000,
        link: 'https://freshteacher.software/P5 SCIENCE.pdf',
      },
      {
        title: 'P5 Social Studies',
        description: 'Primary Five',
        price: 2000,
        link: 'https://freshteacher.software/P5 Social Studies.pdf',
      },{
        title: 'P5 SST',
        description: 'Primary Five',
        price: 10000,
        link: 'https://freshteacher.software/P5 SST.pdf',
      },
      {
        title: 'P5_MATHEMATICS_SET_1_REVISION_WORK_NAMAGUNGA_PRIMARY_BOARDING_SCHOOL',
        description: 'Primary Five',
        price: 15000,
        link: 'https://freshteacher.software/P5_MATHEMATICS_SET_1_REVISION_WORK_NAMAGUNGA_PRIMARY_BOARDING_SCHOOL.pdf',
      },
      {
        title: 'P5_SOCIAL_STUDIES_HALF_TERM_WORK_SET_5_2020_HILLSIDE_PRIMARY_SCHOOL',
        description: 'Primary Five',
        price: 25000,
        link: 'https://freshteacher.software/P5_SOCIAL_STUDIES_HALF_TERM_WORK_SET_5_2020_HILLSIDE_PRIMARY_SCHOOL.pdf',
      },
      {
        title: 'PRIMARY 5 SET II 2020',
        description: 'Primary Five',
        price: 55000,
        link: 'https://freshteacher.software/PRIMARY 5 SET II 2020.pdf',
      },
      {
        title: 'PRIMARY 5 SET III 2020',
        description: 'Primary Five',
        price: 2000,
        link: 'https://freshteacher.software/PRIMARY 5 SET III 2020.pdf',
      },{
        title: 'primary Five English',
        description: 'Primary Five',
        price: 10000,
        link: 'https://freshteacher.software/primary Five English.pdf',
      },
      {
        title: 'primary Five Intergrated Science-COVID doc',
        description: 'Primary Five',
        price: 15000,
        link: 'https://freshteacher.software/primary Five Intergrated Science-COVID doc.pdf',
      },
      {
        title: 'primary Five Mathematics COVID-19 Holiday package',
        description: 'Primary Five',
        price: 25000,
        link: 'https://freshteacher.software/primary Five Mathematics COVID-19 Holiday package.pdf',
      },
      {
        title: 'PRIMARY FIVE MONDAY',
        description: 'Primary Five',
        price: 55000,
        link: 'https://freshteacher.software/PRIMARY FIVE MONDAY.pdf',
      },
      {
        title: 'PRIMARY FIVE SCIENCE TOPICAL WORK',
        description: 'Primary Five',
        price: 2500,
        link: 'https://freshteacher.software/PRIMARY FIVE SCIENCE TOPICAL WORK.pdf',
      },{
        title: 'primary five social studies COVID-19 doc',
        description: 'Primary Five',
        price: 37000,
        link: 'https://freshteacher.software/primary five social studies COVID-19 doc.pdf',
      },
      {
        title: 'PRIMARY_FIVE_ENGLISH_WORK_TERM_1,_2020_GREENHILL_PRIMARY_SCHOOL',
        description: 'Primary Five',
        price: 13000,
        link: 'https://freshteacher.software/PRIMARY_FIVE_ENGLISH_WORK_TERM_1,_2020_GREENHILL_PRIMARY_SCHOOL.pdf',
      },
      {
        title: 'PRIMARY_FIVE_MATHEMATICS_WORK_TERM_1,_2020_GREENHILL_PRIMARY_SCHOOL',
        description: 'Primary Five',
        price: 45000,
        link: 'https://freshteacher.software/PRIMARY_FIVE_MATHEMATICS_WORK_TERM_1,_2020_GREENHILL_PRIMARY_SCHOOL.pdf',
      },
      {
        title: 'PRIMARY_FIVE_SST_WORK_TERM_1,_2020_GREENHILL_PRIMARY_SCHOOL_BUWAATE',
        description: 'Primary Five',
        price: 57500,
        link: 'https://freshteacher.software/PRIMARY_FIVE_SST_WORK_TERM_1,_2020_GREENHILL_PRIMARY_SCHOOL_BUWAATE.pdf',
      },
      {
        title: 'YET p.5_science-1-',
        description: 'Primary Five',
        price: 24800,
        link: 'https://freshteacher.software/YET p.5_science-1-.pdf',
      },{
        title: 'YETp.5_english-1-',
        description: 'Primary Five',
        price: 86000,
        link: 'https://freshteacher.software/YETp.5_english-1-.pdf',
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
      <h1>Primary Five Class Past Papers</h1>
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

export default PrimaryFiveClassPastPapers;
