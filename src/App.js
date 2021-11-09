
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Shared/Navbar/Navbar';
import Follow from './Components/Follow/Follow';
import Footer from './Components/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Follow />
      <Footer />
    </div>
  );
}

export default App;
