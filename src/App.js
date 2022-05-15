import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Signup from './components/auth/SignUp/SignUp';
import Login from './components/auth/Login/Login';
function App() {
  return ( <>
       <Routes>
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
