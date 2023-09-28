import React, {useState} from "react"
import { useFormik } from "formik";
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Select,
    Textarea,
    VStack,
  } from "@chakra-ui/react";
  import * as Yup from 'yup';


function BookingForm(props) {
 
    const formik = useFormik({
        initialValues: {
          time: props.availableTimes[0],
          date: "",
          guest: 1,
          occasion: "birthday",
          firstName: "",
          lastName: "",
          email: "",
          comment: ""
        },
        onSubmit: (values) => {
            props.onSubmitBookingForm(values)
        },
        validationSchema: Yup.object().shape( {
          time: Yup.string().required('Required'),
          date: Yup.string().required('Required'),
          guest: Yup.number().min(1).max(15).required('Required'),
          occasion: Yup.string().required('Required'),
          firstName: Yup.string().required('Required'),
          lastName: Yup.string().required('Required'),
          email: Yup.string().email('Invalid email').required('Required'),
          comment: Yup.string()
          .min(25, 'Must be at least 25 characters!')
          .required('Required'),
        })
      });


    return (
        <form className="booking-form" onSubmit={formik.handleSubmit} >
            <h1>Reserve a Table</h1>
            <FormControl isInvalid={formik.touched.date && formik.errors.date}>
                <FormLabel htmlFor="res-date">Choose date:   </FormLabel>
                <Input {...formik.getFieldProps('date')} type="date" id="res-date" style={{colorScheme: "dark"}}/>
                <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.touched.time && formik.errors.time}>
                <FormLabel htmlFor="res-time">Choose time:   </FormLabel>
                <Select {...formik.getFieldProps('time')} id="res-time">
                    {props.availableTimes.map((item) => (
                        <option key={item} id={item} value={item}>{item}</option>
                    ))}
                </Select>
                <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.touched.guest && formik.errors.guest}>
                <FormLabel htmlFor="guests">Number of guests:   </FormLabel>
                <Input {...formik.getFieldProps('guest')} id="guests"/>
                <FormErrorMessage>{formik.errors.guest}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.touched.occasion && formik.errors.occasion}>
                <FormLabel htmlFor="occasion">Occasion:   </FormLabel>
                <Select {...formik.getFieldProps('occasion')}>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="others">Others</option>
                </Select>
                <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                <FormLabel  htmlFor="first-name">First Name:   </FormLabel>
                <Input {...formik.getFieldProps('firstName')} id="first-name" type="text"></Input>
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.touched.lastName && formik.errors.lastName}>
                <FormLabel  htmlFor="last-name">Last Name:   </FormLabel>
                <Input {...formik.getFieldProps('lastName')} id="last-name" type="text"></Input>
                <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel  htmlFor="email">Email:   </FormLabel>
                <Input {...formik.getFieldProps('email')} id="email" type="email"></Input>
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                <FormLabel htmlFor="comments">Comments:   </FormLabel>
                <Textarea {...formik.getFieldProps('comment')}  id="comments"></Textarea>
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
            </FormControl>
            <button className="booking-form-submit" type="submit" value="Book">Book</button>
        </form>
    )
}

export default BookingForm;