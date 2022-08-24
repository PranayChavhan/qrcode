import "./App.css";
import React, { useState } from "react";
import LiveQrCode from "./components/live-qr-code";
var QRCode = require("qrcode");
function App() {
  const [qrText, setQrText] = useState("");
  const [qrCode, setQrCode] = useState("");
  const generateQrCode = () => {
    QRCode.toDataURL(
      qrText,
      {
        width: 900,
        margin: 3,
      },
      (err, url) => {
        if (err) {
          return console.log(err);
        }
        setQrCode(url);
      }
    );
  };
  const handleQrCode = (e) => {
    setQrText(e.target.value);
    generateQrCode();
  };
  return (
    <div className="App">
      <header className="App-header">
        <LiveQrCode value={qrText} />
        <label style={{ marginTop: 20 }}>Qr Code Text</label>
        <br />
        <input type="text" value={qrText} onChange={handleQrCode} />
        <br />
        <a
          style={{
            backgroundColor: "lightblue",
            textDecoration: "none",
            color: "black",
            padding: 5,
            borderRadius: "5px",
            marginTop: 10,
          }}
          href={qrCode}
          download={`${qrText}.png`}
        >
          Download
        </a>
      </header>
    </div>
  );
}

export default App;
