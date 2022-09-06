import FirstSection from "./sections/FirstSection";
import Technologies from "./sections/Technologies";
import Projects from "./sections/Projects";
import Algorithms from "./sections/Algorithms";
import Contact from "./sections/Contact";
import Nav from "./components/Nav";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-stone-800">
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <Nav setShowModal={setShowModal} />
      <FirstSection />
      <Technologies />
      <Projects />
      <Algorithms />
      <Contact />
    </div>
  );
}

export default App;
