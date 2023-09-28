import Card from "./Card";
import { useNavigate } from "react-router-dom";

const specialItems = [
    {
        name: "Leo",
        review: "The food was amazing. Highly recommend!",
        starRating: 5,
        getImageSrc: () => require("../../images/leo.JPG"),
    },
    {
        name: "Leo",
        review: "The food was amazing. Highly recommend!",
        starRating: 5,
        getImageSrc: () => require("../../images/leo.JPG"),
    },
    {
        name: "Leo",
        review: "The food was amazing. Highly recommend!",
        starRating: 5,
        getImageSrc: () => require("../../images/leo.JPG"),
    }
]

function Testimonials() {

    return (
        <section className="testimonials-container">
            <section className="testimonials">
                <h3 className="testimonials-heading">
                Testimonials
                </h3>
                <section className="testimonials-cards-container">
                    {specialItems.map( (item) => (
                        <Card
                        name={item.name}
                        review={item.review}
                        starRating={item.starRating}
                        description={item.description}
                        photo={item.getImageSrc()}
                        ></Card>
                ))}</section>
            </section>
        </section>
    )
}

export default Testimonials;