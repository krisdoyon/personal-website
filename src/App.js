import { useGlobalContext } from "./context/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllProjects from "./pages/AllProjects";
import Error from "./pages/Error";

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
