import {FaStar} from "react-icons/fa"
import { BiSolidQuoteSingleLeft, BiSolidQuoteSingleRight } from "react-icons/bi"

function Card( {starRating, photo, name, review}) {
    var starNum = []
    
    return (
        <div className="testimonials-card">
            <p>{[...Array(starRating)].map((e, i) =>  <FaStar color="#F4CE14" key={i}></FaStar>)}</p>
            <img src={photo} alt="user profile photo" className="special-card-img"></img>
            <p>{name}</p>
            <p><BiSolidQuoteSingleLeft></BiSolidQuoteSingleLeft>{review}<BiSolidQuoteSingleRight></BiSolidQuoteSingleRight></p>
        </div>
    )

}

export default Card;