export default function ProfessionalTemplate({ cvData }) {
  return (
    <div className="p-8 bg-gray-50 border-l-4 border-blue-600">
      <h1 className="text-4xl font-extrabold text-blue-900">{cvData.name}</h1>
      <p className="text-gray-700">{cvData.email} | {cvData.phone}</p>

      <div className="mt-6">
        <h2 className="text-lg font-semibold text-blue-700">Education</h2>
        <p>{cvData.education}</p>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold text-blue-700">Experience</h2>
        <p>{cvData.experience}</p>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold text-blue-700">Skills</h2>
        <p>{cvData.skills}</p>
      </div>
    </div>
  );
}