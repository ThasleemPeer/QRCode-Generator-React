import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import './QRCode.css';

const QRCodeGenerator = () => {
  const [url, setUrl] = useState('');
  const [generate, setGenerate] = useState(false);
  const [generated, setGenerated] = useState(false);

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleGenerate = () => {
    setGenerate(true);
    setTimeout(() => {
      setGenerated(true);
    }, 1000);
  };

  return (
    <div className="qr-code-generator">
      <div className="qrcodeip">
        <input
          type="url"
          name="url"
          value={url}
          onChange={handleUrlChange}
          placeholder="Enter URL"
          required
        />
        <button disabled={url === ''} onClick={handleGenerate}>
          {generate && !generated ? 'Generating...' : 'Generate'}
        </button>
      </div>
      
      {generated && (
  <div className="qr-code-placeholder">
    <QRCodeSVG
      className='qrcodeimg'
      value={url}
      fgColor="green"
      bgColor="black"
      size={250}
    />
  </div>
)}
    </div>
  );
};

export default QRCodeGenerator;