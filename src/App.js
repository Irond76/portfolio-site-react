import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SiteEnter from './pages/SiteEnter';
import Home from './pages/Home';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<SiteEnter />}></Route>
    <Route path='/home' element={<Home />}></Route>
   </Routes>
   </BrowserRouter>

    
      
     
  );
}

export default App;
