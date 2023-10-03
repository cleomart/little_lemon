import './App.css';
import Footer from "./components/Footer"
import Head from './components/Head';
import Header from "./components/Header"
import Nav from "./components/Nav"
import Main from "./components/main/Main"
import About from "./components/about/About";
import BookingPage from './components/booking/BookingPage';
import ConfirmedBooking from './components/booking/ConfirmedBooking';
import MenuPage from "./components/menu/MenuPage";

import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useReducer, useState } from 'react';
import { fetchAPI, submitAPI } from './mockAPI';


// import { fet} from "./"

function App() {
  const [initialTimes, setInitialTimes] = useState([]);

  function updateTimes(state, times) {
    return times;
  }

  const date = new Date();
  let currentDay= String(date.getDate()).padStart(2, "0");
  let currentMonth = String(date.getMonth()+1).padStart(2,"0");
  let currentYear = date.getFullYear();
  let currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

  useEffect(() => {
    // Define the function that fetches the data
    const fetchData = async () => {
      try {
        // Make the API request and await the Promise
        const response = await fetchAPI(currentDate);
        console.log("RESPONSE", response)
        dispatchAvailableTimes(response);
        console.log("INITIAL TIMES", initialTimes)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  function initializeTimes() {
    return ["16:00", "17:00", "18:00", "19:00", "20:00"]
  }
  const [availableTimes, dispatchAvailableTimes] = useReducer(updateTimes, initializeTimes())


  let navigate = useNavigate();
  function onSubmitBookingForm(data) {
      if (submitAPI(data)) {
        let path = "/confirmed-booking";
        navigate(path, {state: data});
      }
  }

  return (
    <>
      <Head></Head>
      <Header></Header>
      <Nav></Nav>
      <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/menu" element={<MenuPage/>}></Route>
          <Route path="/booking"
            element={<BookingPage availableTimes={availableTimes} 
            dispatchAvailableTimes={dispatchAvailableTimes}
            onSubmitBookingForm={onSubmitBookingForm}
            />}
            >
          </Route>
          <Route path="/confirmed-booking" element={<ConfirmedBooking/>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
