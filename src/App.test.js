import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./components/booking/BookingForm";
import { useReducer } from "react";

describe("Feedback Form", () => {
  test("Test Guests and Occasion Input Values", () => {
    const guests = 3;
    const occasion = "anniversary";
    const atimes = ["16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]


    render(<BookingForm availableTimes={atimes} dispatchAvailableTimes={console.log} />);
    const guestsInput = screen.getByLabelText(/Number of guests:/)
    fireEvent.change(guestsInput, { target: {value: guests}})

    const occasionInput = screen.getByLabelText(/Occasion:/)
    fireEvent.change(occasionInput, { target: {value: occasion}})

    expect(guestsInput).toHaveValue(guests)
    expect(occasionInput).toHaveValue(occasion)

  });

  test("Test Time Input Value", () => {
    const time = "21:00"
    const atimes = ["16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]

    render(<BookingForm availableTimes={atimes} dispatchAvailableTimes={console.log} />);
    const guestsInput = screen.getByLabelText(/Choose time:/)
    fireEvent.change(guestsInput, { target: {value: time}})

    expect(guestsInput).toHaveValue(time)

  });

  test("Test Date Input Value", () => {
    const time = "1995-08-18"
    const atimes = ["16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]

    render(<BookingForm availableTimes={atimes} dispatchAvailableTimes={console.log} />);
    const guestsInput = screen.getByLabelText(/Choose date:/)
    fireEvent.change(guestsInput, { target: {value: time}})

    expect(guestsInput).toHaveValue(time)

  });

});
