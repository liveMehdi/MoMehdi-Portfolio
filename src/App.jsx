import { BrowserRouter as Router } from "react-router-dom";
import {
  About,
  Contact,
  Hero,
  Navbar,
  StarsCanvas,
  Works,
} from "./components";
import { RecoilRoot, useRecoilState } from "recoil";
import { contactModal } from "./atoms/modalAtom";
import ContactButton from "./components/ContactButton";
import Footer from "./components/Footer";

const App = () => {
  const [cModal, setCModal] = useRecoilState(contactModal);
  return (
    <Router>
      <div
        className={`relative z-0 ${!cModal ? "bg-gradient-to-r from-primary from-35% via-emerald-950 to-emerald-700 to-100%" : "bg-[#0e0a22]"}`}
      >
        <Navbar />
        {cModal && <Contact />}
        <div className="relative z-0">
          <Hero />
          <StarsCanvas top={true} />
        </div>
        <div className="bg-primary">
        <About />
        <Works />
        <ContactButton /></div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
