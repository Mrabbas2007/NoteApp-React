import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path={'/'} element={"Hi"} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
