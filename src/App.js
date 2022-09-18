import './App.css';
import GlobalStyle from './components/GlobalStyle';
import Heading from './components/Heading';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <GlobalStyle>
      <div className="main">
        <Heading />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </GlobalStyle>
  );
}

export default App;
