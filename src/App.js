import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
// import Button from './components/Button';
// import About from './components/About';
import React,{useState} from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  
  

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
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
         <Navbar title="Textutils" toggleMode={toggleMode} mode={mode}/>
        <Alert alert={alert}/>
        <TextForm showAlert={showAlert} heading="Give text to analyze" mode={mode}/>
      {/* <Router>
            <div className="container">
              <Routes>
                <Route exact path="/about" element={<About />}/>
              </Routes>
            </div>
      </Router> */}
    </>
  );
  
}

export default App;