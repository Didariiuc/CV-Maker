export default function MinimalTemplate({ cvData }) {
  return (
    <div className="p-6 font-serif text-gray-800">
      <h1 className="text-2xl font-bold">{cvData.name}</h1>
      <p className="italic">{cvData.email} | {cvData.phone}</p>

      <div className="mt-4">
        <strong>Education:</strong> {cvData.education}
      </div>
      <div className="mt-2">
        <strong>Experience:</strong> {cvData.experience}
      </div>
      <div className="mt-2">
        <strong>Skills:</strong> {cvData.skills}
      </div>
    </div>
  );
}