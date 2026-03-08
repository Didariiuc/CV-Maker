import { useContext, useRef } from "react";
import { CVContext } from "../context/CVContext";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function Preview() {
  const { cvData } = useContext(CVContext);
  const componentRef = useRef();

  const handleDownloadPDF = () => {
    const input = componentRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("MyCV.pdf");
    });
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      {/* CV Content */}
      <div ref={componentRef} className="border rounded shadow p-6 bg-white">
        <h1 className="text-2xl font-bold">{cvData.name}</h1>
        <p>{cvData.email} | {cvData.phone}</p>
        <h2 className="mt-4 font-semibold">Education</h2>
        <p>{cvData.education}</p>
        <h2 className="mt-4 font-semibold">Experience</h2>
        <p>{cvData.experience}</p>
        <h2 className="mt-4 font-semibold">Skills</h2>
        <p>{cvData.skills}</p>
      </div>

      {/* Download Button */}
      <button
        onClick={handleDownloadPDF}
        className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
      >
        Download as PDF
      </button>
    </div>
  );
}