import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Signup from './components/auth/SignUp/SignUp';
import Login from './components/auth/Login/Login';
import Otp from './components/auth/OTP/Otp';
function App() {
  return ( <>
       <Routes>
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/otp" element={<Otp />} />
      </Routes>
    </>
  );
}

export default App;
