import './App.css';
import Header from '../src/Component/Header.js';
import NavBar from '../src/Component/NavBar.js';
import Projects from '../src/Component/Projects.js';
import Skills from './Component/Skills.js';
import Footer from '../src/Component/Footer.js';
import About from '../src/Component/About.js';
import Contact from '../src/Component/Contact.js';
import Hamburger from './hamburgerMenu';
import MobileMenu from './MobileMenu';

function App() {

function getClicks() {
  const mobileMenu = document.getElementById("mobileMenuContainer");

  const line1 = document.getElementById('line1');
  const line2 = document.getElementById('line2');
  const line3 = document.getElementById('line3');

  line1.classList.toggle('active');
  line2.classList.toggle('active');
  line3.classList.toggle('active');
  mobileMenu.classList.toggle("active");





}

  return (
    <div id='appBody' className="App container-fluid">
      <div className='top-section container-fluid'>
        <Hamburger userClick={getClicks} />
        <MobileMenu />
        <NavBar />
        <Header />
      </div>
      <About />
      <Skills />
      <div className='middleSection container'>
        <Projects />
        <Contact />
      </div>

      <Footer />

    </div>
  );
}

export default App;
