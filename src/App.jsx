import Header from "./components/Header";
import './style/App.css';
import './style/Header.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Contact'
import About from './components/About'

function App() {
  return <Router>
    <Header/>

    <Routes>
      <Route path="/Home" element={<Home />}/>
      <Route path="/Contact" element={<Contact />} />
      <Route path="/About" element={<About />} />
    </Routes>

 </Router>

}

export default App;