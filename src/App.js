import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Signup from './components/auth/SignUp/SignUp';
function App() {
  return ( <>
       <Routes>
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
