import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import Menu from './component/Menu/Menu';
import Dashboard1 from './pages/Dashboard1';
import Dashboard2 from './pages/User/Dashboard2';
import Dashboard3 from './pages/Sexul/Dashboard3';
import { EditUser } from './pages/User/EditUser';
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
        <Route path="/dashboard3" element={<Dashboard3 />} />
        <Route path="/edituser/:id" element={<EditUser/>}/>
        <Route path="/banuser/:id" element={<Dashboard2/>}/>
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
