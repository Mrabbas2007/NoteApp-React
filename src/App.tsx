import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages';

function App() {
  return (
    <div className='w-full h-screen'>
      <Routes>
        <Route path={'/'} element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
