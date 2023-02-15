import './App.css'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from './components/home';
import Shop from './components/shop';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
