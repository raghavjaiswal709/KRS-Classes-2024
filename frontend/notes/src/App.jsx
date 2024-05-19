import {BrowserRouter as Router , Routes, Route} from "react-router-dom";
import Home from './pages/Home/Home'
import SignIn from "./pages/SignIn/SignIn"
import SignUp from './pages/SignUp/SignUp';

const routes = (
    <Router>
      <Routes>
        <Route path='/dashboard' exact element={<Home />} />
        <Route path='/Signin' exact element={<SignIn />} />
        <Route path='/signup' exact element={<SignUp />} />
        
      </Routes>
    </Router>
);

const App = () => {
  return (
    <div>{routes}</div>
    
    )
}

export default App