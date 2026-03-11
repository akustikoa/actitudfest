import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import History from './pages/History';
import Home from './pages/Home';
import Info from './pages/Info';
import Lineup from './pages/Lineup';

function App() {
  return (
    <div className='min-h-screen bg-neutral-950 text-white'>
      <Navbar />
      <main className='lg:pl-24'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/lineup' element={<Lineup />} />
          <Route path='/info' element={<Info />} />
          <Route path='/about' element={<About />} />
          <Route path='/history' element={<History />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
