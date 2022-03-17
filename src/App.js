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
        <Route path="/dashboard1" element={<Dashboard1 />} />
        <Route path="/dashboard2" element={<Dashboard2 />} />
        <Route path="/edit/:id" element={<Dashboard1/>}/>
        <Route path="/ban/:id" element={<Dashboard1/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
