import {
  Header,
  LandingSection,
  Projects,
  About,
  Services,
  Contact,
} from "./components";
import "./App.css";

const App = ({ Component, pageProps }) => {
  return (
    <div className="dark:bg-gray-700 flex flex-col items-center overflow-hidden">
      <Header />
      <LandingSection />
      <Projects />
      <About />
      <Services />
      <Contact />
    </div>
  );
};

export default App;
