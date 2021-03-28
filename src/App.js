import "./App.css";
import { useState } from "react";
import AddStudent from "./components/AddStudent";
import Students from "./components/Students";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <>
      <Header show={show} toggle={toggle} />
      <div className="container">
        {show && <AddStudent />}
        <Students />
      </div>
      <Footer />
    </>
  );
}

export default App;
