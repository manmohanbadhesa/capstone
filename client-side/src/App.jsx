import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import FivePayment from './pages/FivePayment/FivePayment';
import TenPayment from './pages/TenPayment/TenPayment';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/paymentFive" element={<FivePayment/>} />
          <Route path="/paymentTen" element={<TenPayment/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
