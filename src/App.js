import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import Services from "./Component/Services/Services";
import Partner from "./Component/Partners/Partner";
import Singlepage from "./Component/Services/Singlepage";
import Updates from "./Component/Updates/Updates";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path={`/Singlepage/:title`} element={<Singlepage />} />
        <Route path="/Partner" element={<Partner />} />
        <Route path="/Updates" element={<Updates />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
