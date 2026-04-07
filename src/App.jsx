import "./styles/theme.css";
import "./styles/components.css";
import "./styles/utilities.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cover from "./components/Cover";
import DetailUndangan from "./components/DetailUndangan";
import React, { useRef } from "react";

function App() {
  const audioRef = useRef(null);
  return (
    <>
      <audio ref={audioRef} src="/musicwedding.mp3" loop />
      <Router>
        <Routes>
          <Route path="/" element={<Cover audioRef={audioRef} />} />
          <Route
            path="/detailundangan"
            element={<DetailUndangan audioRef={audioRef} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
