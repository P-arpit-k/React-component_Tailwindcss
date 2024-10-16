import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Expert from './components/Expert';
import News from './components/News';
import Carts from './components/Carts';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import Services from './components/Services';

function App() {
  return (
    <>
     <Header/> 
     <Banner/>
     <Expert/>
     <News/>
     <About/>
     <Services/>
     <Carts/>
     <Contact/>
     <Footer/>
    
    </>
  );
}

export default App;
