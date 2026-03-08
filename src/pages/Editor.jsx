import { useContext } from "react";
import { CVContext } from "../context/CVContext";
import InputField from "../components/InputField";
import { Link } from "react-router-dom";

export default function Editor() {
  const { cvData, setCvData } = useContext(CVContext);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-2xl p-8">
        <h2 className="text-2xl font-extrabold text-blue-600 mb-6 text-center">
          ✍️ Fill Your CV Details
        </h2>

        {/* Personal Info */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Personal Info</h3>
          <InputField label="Name" value={cvData.name} onChange={(e) => setCvData({ ...cvData, name: e.target.value })} />
          <InputField label="Email" value={cvData.email} onChange={(e) => setCvData({ ...cvData, email: e.target.value })} />
          <InputField label="Phone" value={cvData.phone} onChange={(e) => setCvData({ ...cvData, phone: e.target.value })} />
        </section>

        {/* Education */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Education</h3>
          <InputField label="Education" value={cvData.education} onChange={(e) => setCvData({ ...cvData, education: e.target.value })} />
        </section>

        {/* Experience */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Experience</h3>
          <InputField label="Experience" value={cvData.experience} onChange={(e) => setCvData({ ...cvData, experience: e.target.value })} />
        </section>

        {/* Skills */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Skills</h3>
          <InputField label="Skills" value={cvData.skills} onChange={(e) => setCvData({ ...cvData, skills: e.target.value })} />
        </section>

        {/* Template Selector */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Choose Template</h3>
          <select
            value={cvData.template || "modern"}
            onChange={(e) => setCvData({ ...cvData, template: e.target.value })}
            className="border px-3 py-2 rounded w-full"
          >
            <option value="modern">Modern</option>
            <option value="minimal">Minimal</option>
            <option value="professional">Professional</option>
          </select>
        </section>

        {/* Preview Button */}
        <div className="text-center">
          <Link
            to="/preview"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
          >
            👀 Preview CV
          </Link>
        </div>
      </div>
    </div>
  );
}