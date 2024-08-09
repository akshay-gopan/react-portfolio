// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/header";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route>
            <Route path="/react-portfolio" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
