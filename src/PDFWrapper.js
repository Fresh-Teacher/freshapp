import React from 'react';
import PDFViewer from 'tailwind-pdf-viewer';

const PDFWrapper = ({ pdfURL, onClose }) => {
  const wrapperStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 9999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '20px',
  };

  const pdfContainerStyle = {
    maxWidth: '90%',
    maxHeight: '90%',
    border: '1px solid #fff',
    borderRadius: '4px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  };

  return (
    <div style={wrapperStyle}>
      <div style={pdfContainerStyle}>
        <PDFViewer pdfURL={pdfURL} onClose={onClose} />
      </div>
    </div>
  );
};

export default PDFWrapper;
