import './App.css';
import Header from './components/NavBar/Header'
import Home from './components/Home/Home';
import {Routes,Route} from 'react-router-dom'
import AboutUs from './components/About/AboutUs';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
       <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='about-us' element={<AboutUs/>} ></Route>
       </Routes>
    </>
  );
}

export default App;
