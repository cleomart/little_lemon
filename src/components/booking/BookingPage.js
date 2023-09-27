import BookingForm from "./BookingForm";

function BookingPage(props) {
    return (
        <section className="booking-page">
            <BookingForm {...props}></BookingForm>
        </section>
    )

}

export default BookingPage;