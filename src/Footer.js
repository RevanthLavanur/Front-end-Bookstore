import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#f4f4f4', padding: '20px', textAlign: 'center' }}>
      <p>&copy; {new Date().getFullYear()} Bookstore. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
