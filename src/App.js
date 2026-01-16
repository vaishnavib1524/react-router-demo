import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Blogs from './pages/Blogs';
import NotFound from './pages/NotFound';
import StudentDelete from './pages/StudentDelete';
import StudentDetails from './pages/StudentDetails';
import StudentRegister from './pages/StudentRegister';
import StudentUpdate from './pages/StudentUpdate';
import StudentView from './pages/StudentView';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LocationDisplay from './pages/LocationDispaly';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />    {/*Static Routing home is absolute path*/}
        <Route path="/about" element={<About/>} />{/*Static Routing about is is relative path */}
        <Route path="/contact" element={<Contact/>} />{/*Static Routing */}
        <Route path="/login" element={<Login/>} />{/*Static Routing */}
        <Route path="/blogs" element={<Blogs/>} />{/*Static Routing */}
        <Route path="/student/view" element={<StudentView/>} />{/*Static Routing */}
        <Route path="/student/register" element={<StudentRegister/>} />{/*Static Routing */}
        <Route path="/student/update" element={<StudentUpdate/>} />{/*Static Routing */}
        <Route path="/student/delete" element={<StudentDelete/>} />{/*Static Routing */}
        <Route path="/student/view/:id" element={<StudentDetails/>} /> {/* Dynamic Routing */}
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <LocationDisplay/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
