import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  return (
    <>
      <div className="container">
        <Navbar title="textutils" />
        <TextForm heading="Give text to analyze" /> 
        {/* <About/> */}
      </div>
    </>
  );
  
}

export default App;
