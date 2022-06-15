import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Button from '@mui/material/Button';

import { Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

import Home from './pages/Home';
import Login from './components/Login';
// import Logout from './components/Logout';
import Evento from './pages/Evento';


import { useAuth } from './context/Auth.Context';


// import PrimarySearchAppBar from './components/AppBar/AppBar';
// import TemporaryDrawer from './components/Drawer/Drawer';


function AuthRoute({ children }) {
  const { state } = useAuth()
  return state.isAuthenticated ? children : <Navigate to="/login" />
}

function AuthDiv({ children }) {
  const { state } = useAuth()
  return state.isAuthenticated ? children : null
}


function App(props) {
  const auth = useAuth()

  let navigate = useNavigate();

  useEffect(() => {
    if (auth.state.isAuthenticated) {
      navigate('/')
    }
    else {
      navigate('/login')
    }
    // eslint-disable-next-line
  }, [auth.state])

  useEffect(() => {
    if (localStorage.getItem('token') && localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem('user'))
      auth.dispatch({ type: 'LOGIN', payload: user })
    }
    // eslint-disable-next-line
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <AuthDiv>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Button variant="outlined" onClick={auth.logout}>Salir</Button>
              </li>
            </ul>
          </nav>
        </AuthDiv>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<AuthRoute><Home /></AuthRoute>} />
          <Route path="/evento/:id" element={<AuthRoute><Evento /></AuthRoute>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
