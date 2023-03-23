import './App.css';
import Header from './components/NavBar/Header'
import Home from './components/Home/Home';


function App() {
  return (
    <>
      <header>
        <Header title="Sadaqah Box "/>
      </header>
      <main>
        <Home />
      </main>
    </>
  );
}

export default App;
