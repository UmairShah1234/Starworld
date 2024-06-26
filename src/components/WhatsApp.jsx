import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const WhatsApp = () => {
  const accountName = "Starworld";

  return (
    <>
      <FloatingWhatsApp
        accountName={accountName}
        avatar="/assets/Brand.jpeg"
        darkMode={false}
        allowClickAway = {true}
        allowEsc = {true}
        statusMessage = {"Active"}
        notification = {true}
        phoneNumber="9890150932"
      />
    </>
  );
};

export default WhatsApp;
