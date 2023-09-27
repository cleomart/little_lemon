import React, {useState} from "react"

function BookingForm() {
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
    }

    function occasionHandler(e) {
        setOccasion(e.target.value)
    }

    function guestHandler(e) {
        setNumGuests(e.target.value)
    }



    return (
        <form className="booking-form">
            <div>
                <label for="res-date">Choose date   </label>
                <input onChange={dateHandler} value={bookDate} type="date" id="res-date"/>
            </div>

            <div>
                <label for="res-time">Choose time   </label>
                <select onChange={timeHandler} value={booktime} id="res-time ">
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                    <option value="22:00">22:00</option>
                </select>
            </div>
            <div>
                <label for="guests">Number of guests   </label>
                <input onChange={guestHandler} value={numGuests}
                type="number" placeholder={numGuests} min="1" max="10" id="guests"/>
            </div>
            <div>
                <label for="occasion">Occasion   </label>
                <select onChange={occasionHandler} id="occasion" value={occasion}>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="others">Others</option>
                </select>
            </div>

            <input type="submit" value="Make Your reservation"></input>
        </form>
    )
}

export default BookingForm;