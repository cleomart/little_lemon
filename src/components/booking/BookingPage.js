import BookingForm from "./BookingForm";
import { ChakraProvider } from '@chakra-ui/react'
function BookingPage(props) {
    return (
        <section className="booking-page">
            <ChakraProvider>
                    <BookingForm {...props}></BookingForm>
            </ChakraProvider>
        </section>
    )

}

export default BookingPage;