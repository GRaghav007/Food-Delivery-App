import './App.css';
import Footer from './components/Footer';
import Home from './screens/Home';
import Login from './screens/Login';

import{
  BrowserRouter as Router,
  Routes, 
  Route,
  Link
} from "react-router-dom"
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Signup from './screens/Signup';

function App() {
  return (
    <div>
      <Router>
        <div></div>
        <Routes>
            <Route exact path="/" element={<Home></Home>}></Route>
            <Route exact path="/login" element={<Login></Login>}></Route>
            <Route exact path="/createuser" element={<Signup/>}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
