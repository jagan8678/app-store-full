import { Route, Routes, Navigate} from 'react-router-dom';
import MyNavbar from './components/Menu';
import Home from './components/Home';
import { useContext } from 'react';
import { AuthContext, AuthProvider} from './components/Context/AuthContext';
import Add from './components/Add';
import Update from './components/Update';
import FooterPage from "./components/Footer";
import About from './components/About';
import List from './components/List';
import Login from './components/Login';
import Register from './components/Register';


const ProtectedRoute = ({ element, ...rest }) => {
  const { user } = useContext(AuthContext);

  return user ? element : <Navigate to="/login" />;

};



function App() {
  return (
    <div className="App">
      <AuthProvider>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/list" element={<List />} />
        <Route path="/add" element={<Add />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      <FooterPage />
      </AuthProvider>
    </div>
  );
}

export default App;