import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
// import About from './components/About';
import React,{useState} from 'react';
function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (messege,type) => {
    setAlert({
      messege: messege,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const toggleMode = () => {
    if(mode === 'light'){
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
  return (
    <>
        <Navbar title="textutils" mode={mode} toggleMode={toggleMode}/>
          <div className="container">
            <Alert alert={alert}/>
            <TextForm showAlert={showAlert} heading="Give text to analyze" mode={mode}/> 
            {/* <About/> */}
          </div>
    </>
  );
  
}

export default App;
