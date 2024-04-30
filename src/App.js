import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Projects from './Components/Projects';
import MyNavbarPage from './Components/MyNavbarPage';
import About from './Components/About';
import Error from './Components/Error';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <MyNavbarPage />
    <Routes>
      <Route exact path="/" element={<Home />}>
      </Route>
      <Route exact path="/About" element={<About />}>
      </Route>
      <Route exact path="/Projects" element={<Projects />}>
      </Route>
      <Route exact path="/Contact" element={<Contact />}>
      </Route>
      <Route exact path="*" element={<Error />}>
      </Route>
    </Routes>
  <Footer/>
  </BrowserRouter>
    </div>
  );
}

export default App;
