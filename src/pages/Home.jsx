import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      {/* Header */}
      <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
        CV Builder Pro
      </h1>
      <p className="text-lg mb-8 max-w-md text-center opacity-90">
        Build a professional CV in minutes. Choose a template, customize your
        details, and download instantly.
      </p>

      {/* CTA Button */}
      <Link
        to="/editor"
        className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
      >
        🚀 Start Building
      </Link>

      {/* Footer */}
      <footer className="absolute bottom-6 text-sm opacity-70">
        © {new Date().getFullYear()} CV Builder Pro. All rights reserved.
      </footer>
    </div>
  );
}