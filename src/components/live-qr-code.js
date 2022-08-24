import QRCode from "react-qr-code";
import React from "react";

const LiveQrCode = ({ value }) => {
  return <QRCode value={value} />;
};

export default LiveQrCode;
