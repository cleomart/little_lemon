import BookingForm from "./BookingForm";
import { ChakraProvider } from '@chakra-ui/react'
function BookingPage(props) {
    return (
        <ChakraProvider>
            <section className="booking-page">
                <BookingForm {...props}></BookingForm>
            </section>
        </ChakraProvider>
    )

}

export default BookingPage;