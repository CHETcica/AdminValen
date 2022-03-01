import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import Menu from './Menu';
import Dashboard1 from './Dashboard1';
import Dashboard2 from './Dashboard2';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Menu/>
      <Routes>
        <Route path="/" element={<Dashboard1 />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
