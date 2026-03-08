export default function InputField({ label, value, onChange }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="w-full border rounded px-3 py-2"
      />
    </div>
  );
}