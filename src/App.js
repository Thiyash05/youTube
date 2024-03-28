import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Video from './pages/Video';
import Navsection from './components/Navbar';
import Library from "./components/Library";

function App() {
  return (
    <div className="App">
         
         <Navsection/>
         <BrowserRouter>
             <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/video/:id" element={<Video/>} />
                  <Route path="library" element={<Library/>} />
      
             </Routes>
         </BrowserRouter>
    </div>
  );
}

export default App;
