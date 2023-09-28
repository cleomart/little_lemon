import HeroSection from "./HeroSection"
import Specials from "../specials/Specials";

import { useState } from "react";

import Aboutfr from "../about/About";
import About from "../about/About";
import Testimonials from "../testimonials/Testimonials";

function Main() {
   
    return (
        <>
        <HeroSection></HeroSection>
        <Specials></Specials>
        <Testimonials></Testimonials>
        {/* <About></About> */}
        </>
    )
}

export default Main;