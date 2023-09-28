import { useLocation } from "react-router-dom";

function ConfirmedBooking() {
    const { state } = useLocation()
    return (
        <section className="confirmed-booking-page">
            <div className="confirmed-booking-header">
                <p>Thank you {state.firstName}!</p>
            </div>

            <section className="confirmed-booking-details">
                <p>Your booking has been confirmed. We cannot wait to welcome you!</p>
                <p><b>Date: </b> {state.date}</p>
                <p><b>Time: </b> {state.time}</p>
                <p><b>Date: </b> {state.guest}</p>
                <p><b>Location: </b> 1234 Reed Ave, Chicago IL</p>
            </section>

        </section>
    )


}

export default ConfirmedBooking;