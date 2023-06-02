import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FiDownload, FiEye } from 'react-icons/fi';
import PDFViewer from './PDFViewer';

const SeniorThreeClassPastPapers = () => {
  const [lessonNotes, setLessonNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNote, setSelectedNote] = useState(null);
  const [scrollToPdf, setScrollToPdf] = useState(false);

  useEffect(() => {
    const sampleData = [
      {
        title: 'ASC BIO S.3',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/ASC BIO S.3.pdf',
      },
      {
        title: 'ASC CHEM S.3',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/ASC CHEM S.3.pdf',
      },
      {
        title: 'CHEMISTRY S.3 P.1 END OF TERM 2 2019',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/CHEMISTRY S.3 P.1 END OF TERM 2 2019.pdf',
      },
      {
        title: 'F3 END TERM 2 EXAMS',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/F3 END TERM 2 EXAMS.pdf',
      },
      {
        title: 'F3 END-TERM 3 EXAMS',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/F3 END-TERM 3 EXAMS.pdf',
      },
      {
        title: 'F3 MID TERM 3 EXAMS',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/F3 MID TERM 3 EXAMS.pdf',
      },
      {
        title: 'F3 SET 2 ALL SUBJECTS.',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/F3 SET 2 ALL SUBJECTS..pdf',
      },
      {
        title: 'ICT PRACTICAL-WORKBOOK',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/ICT PRACTICAL-WORKBOOK.pdf',
      },
      {
        title: 'Kitende S.3 Biology Holiday package',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/Kitende S.3 Biology Holiday package.pdf',
      },
      {
        title: 'Kitende S3 History EA',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/Kitende S3 History EA.pdf',
      },
      {
        title: 'Kitende S3 Lit in English HW',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/Kitende S3 Lit in English HW.pdf',
      },
      {
        title: 'Kitende S3 Physics Covid-19',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/Kitende S3 Physics Covid-19.pdf',
      },
      {
        title: 'S 3 TD PAPER ONE',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S 3 TD PAPER ONE.pdf',
      },
      {
        title: 'S. 3 COMPUTER STUDIES PAPER TWO',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S. 3 COMPUTER STUDIES PAPER TWO.pdf',
      },
      {
        title: 'S. 3 ENGLISH P.1 REVISION HOLIDAY',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S. 3 ENGLISH P.1 REVISION HOLIDAY.pdf',
      },
      {
        title: 'S.3  LUGANDA PAPER TWO',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3  LUGANDA PAPER TWO.pdf',
      },
      {
        title: 'S.3 ACCOUNTS',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 ACCOUNTS.pdf',
      },
      {
        title: 'S.3 AGRIC 1',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 AGRIC 1.pdf',
      },
      {
        title: 'S.3 BEGINING TERM III ENG P.1',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 BEGINING TERM III ENG P.1.pdf',
      },
      {
        title: 'S.3 BIO COORDINATION IN PLANTS ASSESSMENT TEST 4 2021 PDF',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 BIO COORDINATION IN PLANTS ASSESSMENT TEST 4 2021 PDF.pdf',
      },
      {
        title: 'S.3 BIOLOGY  EXCRETION ASSESSMENT TEST 3 2021 PDF',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 BIOLOGY  EXCRETION ASSESSMENT TEST 3 2021 PDF.pdf',
      },
      {
        title: 'S.3 BIOLOGY - HOME ASSIGNMENT 2020',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 BIOLOGY - HOME ASSIGNMENT 2020.pdf',
      },
      {
        title: 'S.3 BIOLOGY',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 BIOLOGY.pdf',
      },
      {
        title: 'S.3 BUILDING DRAWING PAPER 3',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 BUILDING DRAWING PAPER 3.pdf',
      },
      {
        title: 'S.3 BUILDING DRAWING PAPER 3',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 BUILDING DRAWING PAPER 3.pdf',
      },
      {
        title: 'S.3 C.R.E 223 - Copy',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 C.R.E 223 - Copy.pdf',
      },
      {
        title: 'S.3 CHEMISTRY PAPER 1_2',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 CHEMISTRY PAPER 1_2.pdf',
      },
      {
        title: 'S.3 COMMERCE HOLIDAY WORK 2',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 COMMERCE HOLIDAY WORK 2.pdf',
      },
      {
        title: 'S.3 COMMERCE',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 COMMERCE.pdf',
      },
      {
        title: 'S.3 Computer Revision Qns',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 Computer Revision Qns.pdf',
      },
      {
        title: 'S.3 CRE 224 - Copy',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 CRE 224 - Copy.pdf',
      },
      {
        title: 'S.3 END TERM II ENGLISH',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 END TERM II ENGLISH.pdf',
      },
      {
        title: 'S.3 END TERM III ENG P.2',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 END TERM III ENG P.2.pdf',
      },
      {
        title: 'S.3 ENG END TERM 1',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 ENG END TERM 1.pdf',
      },
      {
        title: 'S.3 ENG great drought _ urbanisation',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 ENG great drought _ urbanisation.pdf',
      },
      {
        title: 'S.3 ENG P.1',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 ENG P.1.pdf',
      },
      {
        title: 'S.3 ENG P.2',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 ENG P.2.pdf',
      },
      {
        title: 'S.3 ENG',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 ENG.pdf',
      },
      {
        title: 'S.3 ENGL P.1',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 ENGL P.1.pdf',
      },
      {
        title: 'S.3 ENGL P.2 Self reliance worker _ Martin speech',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 ENGL P.2 Self reliance worker _ Martin speech.pdf',
      },
      {
        title: 'S.3 ENGL P.2',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 ENGL P.2.pdf',
      },
      {
        title: 'S.3 ENGLI P.1',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 ENGLI P.1.pdf',
      },
      {
        title: 'S.3 ENGLISH CLASS WORK',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 ENGLISH CLASS WORK.pdf',
      },
      {
        title: 'S.3 ENGLISH END OF TERM 1',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 ENGLISH END OF TERM 1.pdf',
      },
      {
        title: 'S.3 ENGLISH HOLIDAY WORK TERM 1 LETTER WRITING',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 ENGLISH HOLIDAY WORK TERM 1 LETTER WRITING.pdf',
      },
      {
        title: 'S.3 ENGLISH MID TERM',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 ENGLISH MID TERM.pdf',
      },
      {
        title: 'S.3 English Passage',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 English Passage.pdf',
      },
      {
        title: 'S.3 ENGLISH',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 ENGLISH.pdf',
      },
      {
        title: 'S.3 ENGLL',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 ENGLL.pdf',
      },
      {
        title: 'S.3 ENGS P.2',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 ENGS P.2.pdf',
      },
      {
        title: 'S.3 FN',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 FN.pdf',
      },
      {
        title: 'S.3 GEOGRAPHY PAPER 1 PHOTO DEMO',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 GEOGRAPHY PAPER 1 PHOTO DEMO.pdf',
      },
      {
        title: 'S.3 GEOGRAPHY',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 GEOGRAPHY.pdf',
      },
      {
        title: 'S.3 HISTORY',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 HISTORY.pdf',
      },
      {
        title: 'S.3 ICT HOLIDAY WORK',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 ICT HOLIDAY WORK.pdf',
      },
      {
        title: 'S.3 IRE PP.1',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 IRE PP.1.pdf',
      },
      {
        title: 'S.3 IRE PPP1',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 IRE PPP1.pdf',
      },
      {
        title: 'S.3 LIT',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 LIT.pdf',
      },
      {
        title: 'S.3 LUGANDA',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 LUGANDA.pdf',
      },
      {
        title: 'S.3 MATH',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 MATH.pdf',
      },
      {
        title: 'S.3 MILLENIUM  BIO TEST 2021 PDF',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 MILLENIUM  BIO TEST 2021 PDF.pdf',
      },
      {
        title: 'S.3 Physics Paper I Eot I 2019',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 Physics Paper I Eot I 2019.pdf',
      },
      {
        title: 'S.3 Respiration _ gaseous exchange',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 Respiration _ gaseous exchange.pdf',
      },
      {
        title: 'S.3 SELF RELIANCE  WORKER',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 SELF RELIANCE  WORKER.pdf',
      },
      {
        title: 'S.3 TD HOLIDAY WORK',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 TD HOLIDAY WORK.pdf',
      },
      {
        title: 'S.3 Term 2 Holiday Package 2019 - Copy',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 Term 2 Holiday Package 2019 - Copy.pdf',
      },
      {
        title: 'S.3 Term 2 Holiday Package 2019',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 Term 2 Holiday Package 2019.pdf',
      },
      {
        title: 'S.3 THE WEDDING',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3 THE WEDDING.pdf',
      },
      {
        title: 'S.3-and-S.4-Commerce-Questions-Answers',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3-and-S.4-Commerce-Questions-Answers.pdf',
      },
      {
        title: 'S.3-BIOLOGY-Holiday-work',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3-BIOLOGY-Holiday-work.pdf',
      },
      {
        title: 'S.3-English-@STAHIZA',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3-English-@STAHIZA.pdf',
      },
      {
        title: 'S.3-ENGLISH-1-SET-2',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3-ENGLISH-1-SET-2.pdf',
      },
      {
        title: 'S.3-ENGLISH-2-SET-2',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3-ENGLISH-2-SET-2.pdf',
      },
      {
        title: 'S.3-GEOGRAPHY-1-SET-2',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3-GEOGRAPHY-1-SET-2.pdf',
      },
      {
        title: 'S.3-GEOGRAPHY-2-SET-2',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3-GEOGRAPHY-2-SET-2.pdf',
      },
      {
        title: 'S.3-HISTORY-1-SET-2',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3-HISTORY-1-SET-2.pdf',
      },
      {
        title: 'S.3-HISTORY-2-SET-2',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3-HISTORY-2-SET-2.pdf',
      },
      {
        title: 'S.3-IRE-SET-2',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3-IRE-SET-2.pdf',
      },
      {
        title: 'S.3-KISWAHILI-SET-2',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3-KISWAHILI-SET-2.pdf',
      },
      {
        title: 'S.3-LITERATURE-EXERCISE-1',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3-LITERATURE-EXERCISE-1.pdf',
      },
      {
        title: 'S.3-LITERATURE-SET-2',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3-LITERATURE-SET-2.pdf',
      },
      {
        title: 'S.3-LUGANDA-SET-2',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3-LUGANDA-SET-2.pdf',
      },
      {
        title: 'S.3-MATHEMATICS',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3-MATHEMATICS.pdf',
      },
      {
        title: 'S.3-MOT-TWO-2020-CHEM-2',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3-MOT-TWO-2020-CHEM-2.pdf',
      },
      {
        title: 'S.3-PHYSICS-1-SET-2',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S.3-PHYSICS-1-SET-2.pdf',
      },
      {
        title: 'S3 CRE-TRIAL-OUT-QUIZES - Copy',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S3 CRE-TRIAL-OUT-QUIZES - Copy.pdf',
      },
      {
        title: 'S3 Difference of two squares',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S3 Difference of two squares.pdf',
      },
      {
        title: 'S3 ENGLISH LANGUAGE',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S3 ENGLISH LANGUAGE.pdf',
      },
      {
        title: 's3 fractions',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/s3 fractions.pdf',
      },
      {
        title: 'S3 History East Africa',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S3 History East Africa.pdf',
      },
      {
        title: 'S3 ICT PAPER ONE',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S3 ICT PAPER ONE.pdf',
      },
      {
        title: 'S3 Lit',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S3 Lit.pdf',
      },
      {
        title: 'S3 Literature (2)',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S3 Literature (2).pdf',
      },
      {
        title: 'S3 Literature',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S3 Literature.pdf',
      },
      {
        title: 'S3 Math Holiday work',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S3 Math Holiday work.pdf',
      },
      {
        title: 'S3 MATH TEST3-S.3-2020-1',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S3 MATH TEST3-S.3-2020-1.pdf',
      },
      {
        title: 'S3 Maths',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S3 Maths.pdf',
      },
      {
        title: 'S3 MATRICES',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S3 MATRICES.pdf',
      },
      {
        title: 'S3 Physics P1 with Guide',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S3 Physics P1 with Guide.pdf',
      },
      {
        title: 'S3 Physics set 1',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S3 Physics set 1.pdf',
      },
      {
        title: 'S3 Physics set 2',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S3 Physics set 2.pdf',
      },
      {
        title: 'S3 Physics set 3',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S3 Physics set 3.pdf',
      },
      {
        title: 's3 sets part 1',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/s3 sets part 1.pdf',
      },
      {
        title: 's3 sets part 2',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/s3 sets part 2.pdf',
      },
      {
        title: 'S3 TD3  Assignment',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S3 TD3  Assignment.pdf',
      },
      {
        title: 'S3-ENT1-TEST',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S3-ENT1-TEST.pdf',
      },
      {
        title: 'S3-MOT-ONE-2020-CHEM-1',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S3-MOT-ONE-2020-CHEM-1.pdf',
      },
      {
        title: 's3-physics-exam-1',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/s3-physics-exam-1.pdf',
      },
      {
        title: 'STAHIZA-S3-MATHEMTICS-RECESS-WORK-2020',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/STAHIZA-S3-MATHEMTICS-RECESS-WORK-2020.pdf',
      },
      {
        title: 'S_3 MATHEMATICS  paper 2 END OF YEAR EXAMINATIONS 2',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S_3 MATHEMATICS  paper 2 END OF YEAR EXAMINATIONS 2.PDF',
      },
      {
        title: 'S_3 MATHEMATICS 1 MID TERM III EXAMINATIONS',
        description: 'Senior Three',
        price: 15000,
        link: 'https://freshteacher.software/S_3 MATHEMATICS 1 MID TERM III EXAMINATIONS.PDF',
      },
      {
        title: 'S.3-MATHEMATICS',
        description: 'Senior Three',
        price: 25000,
        link: 'https://freshteacher.software/S.3-MATHEMATICS.pdf',
      },
      {
        title: 'S3 MATH TEST3-S.3-2020-1',
        description: 'Senior Three',
        price: 55000,
        link: 'https://freshteacher.software/S3 MATH TEST3-S.3-2020-1.pdf',
      },
      {
        title: 'S3 Maths',
        description: 'Senior Three',
        price: 10000,
        link: 'https://freshteacher.software/S3 Maths.pdf',
      },
      {
        title: 'S3-Physics',
        description: 'Senior Three',
        price: 15000,
        link: 'https://freshteacher.software/S3-Physics.pdf',
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
      <h1>Senior Three Class Past Papers</h1>
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

export default SeniorThreeClassPastPapers;
