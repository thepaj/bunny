// import { Routes, Route } from "react-router-dom";

// import Navigation from './components/Navigation';
import Heading from './components/Heading';
import Starter from './components/Starter';
import Feeding from './components/Feeding';
import Housing from './components/Housing';
import Footer from './components/Footer';
import Care from './components/Care';

function App() {
  return (
    <div className="container">
      <Heading />
      <Starter />
      <Housing />
      <Feeding />
      <Care />
      <Footer />
    </div>
  );
}

export default App;
