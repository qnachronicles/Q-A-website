
import React from 'react';

const Footer = ({ footerText }) => {
  return (
    <footer className="bg-indigo-800 text-white text-center py-4 mt-12">
      <p>{footerText}</p>
    </footer>
  );
};

export default Footer;
