import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const WhatsApp = () => {
  const accountName = "Starworld";

  return (
    // <div
    //   style={{
    //     position: "sticky",
    //     bottom: 40,
    //     left: 10,
    //     zIndex: 100,
    //   }}
    // >
    //   WhatsApp
    // </div>
    <>
      <FloatingWhatsApp
        accountName={accountName}
        avatar="/assets/Brand.jpeg"
        darkMode={false}
        allowClickAway = {true}
        allowEsc = {true}
        statusMessage = {"Active"}
        notification = {true}
      />
    </>
  );
};

export default WhatsApp;
