import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Facilities from './Components/Facilites/Facilities';
import RequiredAuth from './Components/Auth/Required';
import AuthProvider from './Components/Auth/AuthProvi';
import Star1 from './Components/Facilites/Star1';
import Star2 from './Components/Facilites/Start2';
import Star3 from './Components/Facilites/Start3';
import Admin from './Components/Admin/Admin';
import AdLogin from './Components/Admin/AdLogin';
import { Footer } from './Components/Footer/Footer';
import Book from './Components/Book/Book';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/facilites' element={<RequiredAuth> <Facilities/> </RequiredAuth>}>
            <Route path='star1' element={<Star1 />}>
              <Route path='book' element={<Book />}/>
            </Route>
            <Route path='star2' element={<Star2 />}>
            <Route path='book' element={<Book />}/>
            </Route>
            <Route path='star3' element={<Star3 />}>
            <Route path='book' element={<Book />}/>
            </Route>
          </Route>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/adminlogin' element={<AdLogin />}/>
            <Route path='admin' element={<Admin />}/>
        </Routes>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
