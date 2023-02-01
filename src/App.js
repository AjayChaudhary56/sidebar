
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Sidebar from  './Component/Sidebar';
import Main from './pages/Main';
import Dashboard from './pages/Dashboard';
import Ownland from './pages/Ownland';
import Reqland from './pages/Reqland';
import Notification from './pages/Notification';
import Addland from './pages/Addland';

function App() {
  return (
    <>
    <Router>
    <Navbar />
    
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/ownland' element={<Ownland/>}></Route>
        <Route path='/addland' element={<Addland/>}></Route>
        <Route path='/reqland' element={<Reqland/>}></Route>
        <Route path='/notification' element={<Notification/>}></Route>
      
       

      </Routes>
    </Router>
    </>
  );
}

export default App;
