import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import ViewBooksPage from './components/ViewBooksPage';
import UpdateBookPage from './components/UpdateBookPage';
import DeleteBookPage from './components/DeleteBookPage';
import LandingPage from './components/LandingPage';
import SaveBookPage from './components/SaveBookPage';
import AboutPage from './components/AboutPage';
import NavBar from './components/NavBar';
import Login from './components/Loginpage.js';

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  const location = useLocation();

  // Function to determine if the current route is the login page
  const isLoginPage = () => location.pathname === "/";

  return (
    <>
      {!isLoginPage() && <NavBar />} {/* Render NavBar for all pages except the login page */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/view-books" element={<ViewBooksPage />} />
        <Route path="/update-book" element={<UpdateBookPage />} />
        <Route path="/delete-book" element={<DeleteBookPage />} />
        <Route path="/save-book" element={<SaveBookPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
