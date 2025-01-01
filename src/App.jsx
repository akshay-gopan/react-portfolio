import { Routes, Route, HashRouter } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";


function App() {
  return (
    <>
    
      <HashRouter
      future={{
        v7_startTransition: true, // Opt-in for startTransition
        v7_relativeSplatPath: true, // Opt-in for relative splat paths
      }}
    >        
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
