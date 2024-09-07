import { Element } from "react-scroll";
import { Contact, Hero, Navbar, Projets } from "./component";
const App = () => {
  return (
    <>
      <Navbar />
      <Element name="about">
        <Hero />
      </Element>
      <Element name="projects">
        <Projets />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </>
  );
};

export default App;
