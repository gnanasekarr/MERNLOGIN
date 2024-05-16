import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';
import About from './pages/About.jsx';
import SignUp from './pages/SignUp.jsx';
import SignIn from './pages/SignIn.jsx';
import Header from './components/Header.jsx'

export default function App() {
  return <BrowserRouter>
  {/*header */}
  <Header />
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/profile" element={<Profile/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/sign-up" element={<SignUp/>}/>
    <Route path="/sign-in" element={<SignIn/>}/>
  </Routes>
  </BrowserRouter>
}

