import Header from "./components/NavBar/Header";
import NavBar from "./components/NavBar/NavBar";
import logo from './logo.svg';
import './App.css';
import DashBoard from './components/DashBoard/DashBoard';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <DashBoard/>
    </div>
  );
}

export default App;
