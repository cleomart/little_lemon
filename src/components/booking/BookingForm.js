import React, {useState} from "react"
import { useFormik } from "formik";


function BookingForm(props) {
    const [numGuests, setNumGuests] = useState(1)
    const [bookDate, setBookDate] = useState("")
    const [booktime, setBookTime] = useState("")
    const [occasion, setOccasion] = useState("Birthday")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [comments, setComments] = useState("")

    function dateHandler(e) {
        console.log("Bookdate ", bookDate)
        console.log(e.target.value)
        setBookDate(e.target.value)
        console.log("Bookdate ", bookDate)
    }

    function timeHandler(e) {
        setBookTime(e.target.value)
        //props.dispatchAvailableTimes()
    }

    function occasionHandler(e) {
        setOccasion(e.target.value)
    }

    function guestHandler(e) {
        setNumGuests(e.target.value)
    }
    function firstNameHandler(e) {
        setFirstName(e.target.value)
    }
    function lastNameHandler(e) {
        setLastName(e.target.value)
    }
    function emailHandler(e) {
        setEmail(e.target.value)
    }
    function commentsHandler(e) {
        setComments(e.target.value)
    }

    function handleSubmitClick() {
        props.onSubmitBookingForm({
            date: bookDate,
            time: booktime,
            guest: numGuests,
            occasion: occasion,
            firstName: firstName,
            lastName: lastName,
            comments: comments,
            email: email
        })
    }


    return (
        <form className="booking-form">
            <h1>Reserve a Table</h1>
            <div>
                <label htmlFor="res-date">Choose date:   </label>
                <input onChange={dateHandler} value={bookDate} type="date" id="res-date"/>
            </div>

            <div>
                <label htmlFor="res-time">Choose time:   </label>
                <select onChange={timeHandler} value={booktime} id="res-time">
                    {props.availableTimes.map((item) => (
                        <option key={item} id={item} value={item}>{item}</option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="guests">Number of guests:   </label>
                <input onChange={guestHandler} value={numGuests}
                type="number" placeholder={numGuests} min="1" max="10" id="guests"/>
            </div>
            <div>
                <label htmlFor="occasion">Occasion:   </label>
                <select onChange={occasionHandler} id="occasion" value={occasion}>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="others">Others</option>
                </select>
            </div>
            <div>
                <label onChange={firstNameHandler} value={firstName} htmlFor="first-name">First Name:   </label>
                <input id="first-name" type="text"></input>
            </div>
            <div>
                <label onChange={lastNameHandler} value={lastName} htmlFor="last-name">Last Name:   </label>
                <input id="last-name" type="text"></input>
            </div>
            <div>
                <label onChange={emailHandler} value={email} htmlFor="email">Email:   </label>
                <input id="email" type="email"></input>
            </div>
            <div>
                <label onChange={commentsHandler} value={comments} htmlFor="comments">Comments:   </label>
                <textarea id="comments"></textarea>
            </div>

            <button onClick={handleSubmitClick} className="booking-form-submit" type="submit" value="Book">Book</button>
        </form>
    )
}

export default BookingForm;