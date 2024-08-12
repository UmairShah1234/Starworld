import { saveAs } from "file-saver";
import React from "react";
import machinePdf from "../assets/machine-pdf.pdf";

const FileSaver = () => {
  const downloadFile = () => {
    saveAs(machinePdf, machinePdf.split("/").pop());
  };
  return (
    <button className="btn mx-1  btn-outline-dark p-1" onClick={downloadFile}>
      Download Our Machines Memo
    </button>
  );
};

export default FileSaver;
