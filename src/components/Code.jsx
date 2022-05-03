import React from 'react';
import './Code.css';
import qrcode from '../images/qrcode.png';
const Code = () => {
  return (
    <div className="container">
      <img src={qrcode} alt="qr code" />
      <h2>Improve your front-end skills by building projects</h2>
      <p>
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
};

export default Code;
