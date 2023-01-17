
import './App.css';
import ComponentWithDimensions from './components/ComponentWithDimensions';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Features from './pages/features/Features';
import Footer from './pages/footer/Footer';
import Header from './pages/header/Header';
import Resources from './pages/resources/Resources';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Features></Features>
      <ComponentWithDimensions></ComponentWithDimensions>
      <About></About>
      <Resources></Resources>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
