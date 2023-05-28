import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFViewer = ({ fileUrl, scrollToPdf, onClose }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    if (scrollToPdf) {
      const pdfContainer = document.getElementById('pdf-container');
      if (pdfContainer) {
        pdfContainer.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [scrollToPdf]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const goToNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <div id="pdf-container" style={{ width: '100%', height: '100vh', overflow: 'auto' }}>
      <div>
        <button onClick={goToPrevPage} disabled={pageNumber === 1}>
          Prev
        </button>
        <span>
          Page {pageNumber} of {numPages}
        </span>
        <button onClick={goToNextPage} disabled={pageNumber === numPages}>
          Next
        </button>
        <button onClick={onClose}>Close</button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <Document
          file={fileUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          options={{ workerSrc: '//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.8.335/pdf.worker.js' }}
        >
          <Page pageNumber={pageNumber} width={window.innerWidth} />
        </Document>
      </div>
    </div>
  );
};

export default PDFViewer;
