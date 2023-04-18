import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <div className="container">
        <Navbar title="textutils" />
        <TextForm heading="Give text to analyze" />
      </div>
    </>
  );
  
}

export default App;
