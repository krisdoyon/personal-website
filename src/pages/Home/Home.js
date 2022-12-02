import Header from "../../components/Header";
import Background from "./Background";
import Navigation from "./Navigation";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <Background />
      <Header sticky="scroll">
        <Navigation />
      </Header>
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Footer />
    </>
  );
};

export default Home;
