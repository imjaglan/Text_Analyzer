
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Alert from "./components/Alert";
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = ("#4a6fa6");
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = ("white");
      showAlert("Dark mode has been disabled", "success");
    }
  }

  return (
    <>
      <Navbar title="Text Analyzer" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Form mode={mode} showAlert={showAlert} />
    </>
  );
}

export default App;
