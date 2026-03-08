import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">CV Builder</h1>
      <Link to="/editor" className="bg-blue-500 text-white px-4 py-2 rounded">
        Start Building
      </Link>
    </div>
  );
}