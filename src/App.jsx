import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefit from "./components/Benefit";
import Collaboration from "./components/Collaboration";
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
    </>
  );
};

export default App
