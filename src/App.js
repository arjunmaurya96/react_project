import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
// import Team from './components/Team/Team';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import ServiceSecond from './components/ServiceSecond/ServiceSecond';
import Team1 from './components/Team1/Team1';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <About />
        <Gallery />
        <ServiceSecond />
        <Team1 />

{/* <Team/> */}

        <Routes>

        </Routes>
        <Contact/>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
