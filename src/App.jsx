import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/hero/Hero';
import './App.css';
import Companies from './components/Companies/Companies';
import Residencies from './components/Companies/Residencies/Residencies';
import Value from './components/Value/Value';
import Contact from './components/Contact/Contact';
import GetStarted from './components/GetStarted/GetStarted';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <div className="white-gradient" />
          <Header />
        </div>
        {/* <Switch> */}
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/"
            element={
              <div>
                {' '}
                <Hero />
                <Companies />
                <Residencies />
                <Value />
                <Contact />
                <GetStarted />
                <Footer />
              </div>
            }
          ></Route>
        </Routes>
        {/* </Switch> */}
      </div>
    </Router>
  );
}

export default App;
