import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main.jsx/Main";
import Navbar from "./Components/Navbar/Navbar";
import Portoflio from "./Components/Portoflio/Portoflio";

export default function App() {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Portoflio />
      <Contact />
      <Footer />
    </>
  );
}
