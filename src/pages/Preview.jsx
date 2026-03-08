import { useContext, useRef } from "react";
import { CVContext } from "../context/CVContext";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import ModernTemplate from "../templates/ModernTemplate";
import MinimalTemplate from "../templates/MinimalTemplate";
import ProfessionalTemplate from "../templates/ProfessionalTemplate";

export default function Preview() {
  const { cvData } = useContext(CVContext);
  const componentRef = useRef();

  const handleDownloadPDF = () => {
    const input = componentRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div ref={componentRef} className="bg-white shadow-lg rounded-lg w-full max-w-2xl p-8">
        {cvData.template === "modern" && <ModernTemplate cvData={cvData} />}
        {cvData.template === "minimal" && <MinimalTemplate cvData={cvData} />}
        {cvData.template === "professional" && <ProfessionalTemplate cvData={cvData} />}
      </div>

      <button
        onClick={handleDownloadPDF}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition mt-6"
      >
        📥 Download as PDF
      </button>
    </div>
  );
}