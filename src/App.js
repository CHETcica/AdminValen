import './App.css';
import Header from './Header';
import Menu from './Menu';
import Dashboard1 from './Dashboard1';
import Dashboard2 from './Dashboard2';
import Footer from './Footer';

function App() {
  return (
    <div class="wrapper">
      
      <Header/>
      <Menu/>
        <Dashboard1/>
        <Dashboard2/>
      <Footer/>
    </div>
  );
}

export default App;
