import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import Companies from './components/Companies';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <div className="hero-header py-4">
        <Header />
        <Hero />
      </div>
      <div className="com my-5">
        <Companies />
      </div>
      <div className="services py-5">
        <Services />
      </div>
      <div className="about-news my-5">
        <About />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  )
}

export default App
