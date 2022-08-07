import FirstPage from '../FirstPage/FirstPage';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SecondPage from '../SecondPage/SecondPage';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<FirstPage />}></Route>
          <Route path='/SecondPage' element={<SecondPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
