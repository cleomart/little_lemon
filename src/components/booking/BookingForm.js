import React, {useState} from "react"

function BookingForm(props) {
    const [numGuests, setNumGuests] = useState(1)
    const [bookDate, setBookDate] = useState("")
    const [booktime, setBookTime] = useState("")
    const [occasion, setOccasion] = useState("Birthday")

    function dateHandler(e) {
        console.log("Bookdate ", bookDate)
        console.log(e.target.value)
        setBookDate(e.target.value)
        console.log("Bookdate ", bookDate)
    }

    function timeHandler(e) {
        setBookTime(e.target.value)
        props.dispatchAvailableTimes()
    }

    function occasionHandler(e) {
        setOccasion(e.target.value)
    }

    function guestHandler(e) {
        setNumGuests(e.target.value)
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
            <div><label htmlFor="first-name">First Name:   </label><input id="first-name" type="text"></input></div>
            <div><label htmlFor="last-name">Last Name:   </label><input id="last-name" type="text"></input></div>
            <div><label htmlFor="email">Email:   </label><input id="email" type="email"></input></div>
            <div><label htmlFor="comments">Comments:   </label><textarea id="comments"></textarea></div>

            <button className="booking-form-submit" type="submit" value="Book">Submit</button>
        </form>
    )
}

export default BookingForm;