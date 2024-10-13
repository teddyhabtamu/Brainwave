import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefit from "./components/Benefit";
import Collaboration from "./components/Collaboration";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import RoadMap from "./components/RoadMap";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      </div>
      <ButtonGradient />
      <Hero />
      <Benefit />
      <Collaboration />
      <Services />
      <Pricing />
      <RoadMap />
      <Footer />  
    </>
  );
};

export default App
