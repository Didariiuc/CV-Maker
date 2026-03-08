import { useContext } from "react";
import { CVContext } from "../context/CVContext";

export default function Preview() {
  const { cvData } = useContext(CVContext);

  return (
    <div className="p-6 max-w-lg mx-auto border rounded shadow">
      <h1 className="text-2xl font-bold">{cvData.name}</h1>
      <p>{cvData.email} | {cvData.phone}</p>
      <h2 className="mt-4 font-semibold">Education</h2>
      <p>{cvData.education}</p>
      <h2 className="mt-4 font-semibold">Experience</h2>
      <p>{cvData.experience}</p>
      <h2 className="mt-4 font-semibold">Skills</h2>
      <p>{cvData.skills}</p>
    </div>
  );
}