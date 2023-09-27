import './App.css';
import Footer from "./components/Footer"
import Head from './components/Head';
import Header from "./components/Header"
import Nav from "./components/Nav"
import Main from "./components/main/Main"
import { Link, Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import BookingPage from './components/booking/BookingPage';

function App() {
  return (
    <>
      <Head></Head>
      <Header></Header>
      <Nav></Nav>
      <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/menu" element={<About/>}></Route>
          <Route path="/booking" element={<BookingPage/>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
