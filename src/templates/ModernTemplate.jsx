export default function ModernTemplate({ cvData }) {
  return (
    <div className="p-6 font-sans">
      <h1 className="text-3xl font-bold text-blue-700">{cvData.name}</h1>
      <p className="text-gray-600">{cvData.email} | {cvData.phone}</p>

      <section className="mt-4">
        <h2 className="text-xl font-semibold">Education</h2>
        <p>{cvData.education}</p>
      </section>

      <section className="mt-4">
        <h2 className="text-xl font-semibold">Experience</h2>
        <p>{cvData.experience}</p>
      </section>

      <section className="mt-4">
        <h2 className="text-xl font-semibold">Skills</h2>
        <p>{cvData.skills}</p>
      </section>
    </div>
  );
}