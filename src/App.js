import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import Button from './components/Button';
import About from './components/About';
import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  
  

  const toggleMode = () => {
    const checkbox = document.getElementById('darkmode-toggle');
    if(checkbox.checked){
      setMode('dark')
      document.body.style.backgroundColor = 'rgb(37 127 145)';
      showAlert('Dark mode has enabled','success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has enabled','success')
    }
  }
  const showAlert = (messege,type) => {
    setAlert({
      messege: messege,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }
  
  return (
    <>
      <Router>
        <Navbar title="textutils" mode={mode}/>
            <Button mode={mode} toggleMode={toggleMode} />
            <Alert alert={alert}/>
            <div className="container">
              <Routes>
                <Route exact path="/about" element={<About />}/>
                <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Give text to analyze" mode={mode}/> }/>

              </Routes>
            </div>
      </Router>
    </>
  );
  
}

export default App;
