import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import LanndingPage from './pages/landingpage';
import Recipe from './pages/recipe';

const NotFound = ()=>{
  return (
    <div> 
      <p>404</p>
      <h3>The page you are looking for could not be found.</h3>
    </div>
  )
}


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
    <Route path="/" element={<LanndingPage />} />
    <Route path="/recipe/:id" element={< Recipe/>} />
    <Route path="*" element={<NotFound />} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
