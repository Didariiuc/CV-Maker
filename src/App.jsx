import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Editor from "./pages/Editor";
import Preview from "./pages/Preview";
import { CVProvider } from "./context/CVContext";

function App() {
  return (
    <CVProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/preview" element={<Preview />} />
        </Routes>
      </Router>
    </CVProvider>
  );
}

export default App;