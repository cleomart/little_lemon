import Card from "./Card";
import { useNavigate } from "react-router-dom";

const specialItems = [
    {
        name: "Jake",
        review: "The grilled fish and lemon dessert tasted great. Highly recommend!",
        starRating: 4,
        getImageSrc: () => require("../../images/chance.jpeg"),
    },
    {
        name: "Raymond",
        review: "It was very easy to make a reservation. The food and the ambiance were incredible. Will definitely go back again.",
        starRating: 5,
        getImageSrc: () => require("../../images/jake.jpeg"),
    },
    {
        name: "Rosa",
        review: "It was so easy to book a table online amd their customer service was great!",
        starRating: 5,
        getImageSrc: () => require("../../images/kathryn.jpeg"),
    },
    {
        name: "Gina",
        review: "Little Lemon is my go to restaurant with my family during important occassions although it can get pretty busy",
        starRating: 4,
        getImageSrc: () => require("../../images/comment5.jpg"),
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