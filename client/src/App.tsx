import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/dashboard";
import Auth from "./pages/auth";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<DashBoard />}></Route>
        <Route path='/auth' element={<Auth/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
