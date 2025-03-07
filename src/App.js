
import './App.css';
import About from './component/about';
import Contact from './component/contact';
import Footer from './component/footer';
import Headers from './component/header';
import Home from './component/home';
import {Routes,Route} from "react-router-dom";
import Package from './component/packages';
import NewForm from './component/newform';
import Login from './component/login';

function App() {
  return (
    <div className="App bg-[#f3f388]">
    <Headers/>
    
    <Routes>
    
    <Route path='/' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/Packages' element={<Package/>}/>
    <Route path='/Packages/NewForm' element={<NewForm/>}/>
    <Route path='/Login' element={<Login/>}/>
    </Routes>
    <Footer/>
    
    </div>
    
  );
}

export default App;
