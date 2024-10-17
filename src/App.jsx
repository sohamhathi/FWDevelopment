import Footer from "./components/Footer";
import FreeBooks from "./components/FreeBooks";
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import { Routes, Route } from 'react-router-dom';
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { ThemeProvider } from "./ThemeContext";
import OneBook from "./components/OneBook";

function App() {

  return (

    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/books" element={<FreeBooks />} />
        <Route path="/shop/:id" element={<OneBook />} />
      </Routes>
      <Footer />
    </ThemeProvider>

  )
}

export default App
