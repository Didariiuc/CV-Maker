import { useContext, useRef } from "react";
import { CVContext } from "../context/CVContext";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

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
      <div className="bg-white shadow-lg rounded-lg w-full max-w-2xl p-8">
        {/* CV Content */}
        <div ref={componentRef} className="bg-white">
          <h1 className="text-3xl font-extrabold text-blue-700">{cvData.name}</h1>
          <p className="text-gray-600">{cvData.email} | {cvData.phone}</p>

          <section className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800">🎓 Education</h2>
            <p className="text-gray-700">{cvData.education}</p>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800">💼 Experience</h2>
            <p className="text-gray-700">{cvData.experience}</p>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800">🛠 Skills</h2>
            <p className="text-gray-700">{cvData.skills}</p>
          </section>
        </div>

        {/* Download Button */}
        <div className="text-center mt-8">
          <button
            onClick={handleDownloadPDF}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
          >
            📥 Download as PDF
          </button>
        </div>
      </div>
    </div>
  );
}