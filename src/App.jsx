import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import History from './pages/History';
import Home from './pages/Home';
import Lineup from './pages/Lineup';

function App() {
  return (
    <div className='min-h-screen  text-white'>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/lineup' element={<Lineup />} />
          <Route path='/about' element={<About />} />
          <Route path='/history' element={<History />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
