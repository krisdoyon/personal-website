import { useGlobalContext } from "./context/context";
import { Routes, Route } from "react-router-dom";
// PAGES
import Home from "./pages/Home";
import AllProjects from "./pages/AllProjects";
import Error from "./pages/Error";
import Modal from "./components/Modal";
import Overlay from "./components/Overlay";
// SASS
// import "./sass/main.scss";

function App() {
  const { isModalOpen } = useGlobalContext();
  return (
    <>
      {isModalOpen && (
        <>
          <Modal />
          <Overlay />
        </>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-projects" element={<AllProjects />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
