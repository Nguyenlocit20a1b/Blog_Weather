
import './App.css';
import {BrowserRouter as Router , Route , Routes , Link} from "react-router-dom"
import Home from './Components/HomeBlog/homeBlog';
import Login from './Components/Login/login';
import CreateBlog from './Components/createBlog/createBlog'
import { useState } from 'react';
import {signOut} from 'firebase/auth'
import {auth} from './Components/firebase-config'

function App() {
  const [isAuth , setIsAuth] = useState(false);
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname="/login";
     })
  }
  return (
    <Router>
         <nav>
        <Link to="/"> Home </Link>

        {!isAuth ? (
          <Link to="/login"> Login </Link>
        ) : (
          <>
            <Link to="/createblog"> Create Blog </Link>
            <button onClick={signUserOut}> Log Out</button>
          </>
        )}
      </nav>
      <Routes>
        <Route path='/' element={<Home isAuth={isAuth}/>} />
        <Route path='/login' element={<Login setIsAuth={setIsAuth}/>} /> 
        <Route path='/createblog' element={<CreateBlog isAuth={isAuth}/>} />
      </Routes>
    </Router>
  );
}


export default App;
