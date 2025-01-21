import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Question from "./Components/Question/Question";
import Footer from "./Components/Footer/Footer";
import ThankYou from "./Components/ThankYou/ThankYou";
import About from "./Components/Data/About/About";
import Manga from "./Components/Data/Manga/Manga";
import Award from "./Components/Data/Policies/Award";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Question />}></Route>
          <Route path="/thankyou" element={<ThankYou />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/manga" element={<Manga />}></Route>
          <Route path="/award" element={<Award />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
