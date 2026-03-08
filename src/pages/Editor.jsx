import { useContext } from "react";
import { CVContext } from "../context/CVContext";
import InputField from "../components/InputField";
import { Link } from "react-router-dom";

export default function Editor() {
  const { cvData, setCvData } = useContext(CVContext);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Fill Your CV Details</h2>
      <InputField label="Name" value={cvData.name} onChange={(e) => setCvData({ ...cvData, name: e.target.value })} />
      <InputField label="Email" value={cvData.email} onChange={(e) => setCvData({ ...cvData, email: e.target.value })} />
      <InputField label="Phone" value={cvData.phone} onChange={(e) => setCvData({ ...cvData, phone: e.target.value })} />
      <InputField label="Education" value={cvData.education} onChange={(e) => setCvData({ ...cvData, education: e.target.value })} />
      <InputField label="Experience" value={cvData.experience} onChange={(e) => setCvData({ ...cvData, experience: e.target.value })} />
      <InputField label="Skills" value={cvData.skills} onChange={(e) => setCvData({ ...cvData, skills: e.target.value })} />

      <Link to="/preview" className="bg-green-500 text-white px-4 py-2 rounded mt-4 inline-block">
        Preview CV
      </Link>
    </div>
  );
}