import { useGlobalContext } from "./context/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import AllProjects from "./components/AllProjects";
import Error from "./components/pages/Error";

import Modal from "./components/Modal";

function App() {
  const { isModalOpen } = useGlobalContext();
  return (
    <Router>
      {isModalOpen && <Modal />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="all-projects" element={<AllProjects />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
