import Card from "./Card";
import { useNavigate } from "react-router-dom";

const specialItems = [
    {
        title: "Greek Salad",
        description: "The famous greek salad of crispy lettuce, peppers, \
        olives, and our Chicago style fetta cheese garnished with crunchy \
        garlic and rosemary croutons",
        price: "$12.99",
        getImageSrc: () => require("../../images/greek salad.jpg"),
    },
    {
        title: "Lemon Dessert",
        description: "This comes straight from grandmas recipe book, \
        every last ingredient has been sourced and is as authentic \
        as can be imagined",
        price: "$5.00",
        getImageSrc: () => require("../../images/lemon dessert.jpg"),
    },
    {
        title: "Bruschetta",
        description: "Our bruschetta is made from grilled bread, \
        that has been smeared with garlic and seasoned with salt \
        and olive oil",
        price: "$5.99",
        getImageSrc: () => require("../../images/bruschetta.jpg"),
    }
]

function Specials() {
    let navigate = useNavigate();
    const routeChange = () =>{
        let path = `/menu`;
        navigate(path);
    }

    return (
        <section className="specials">
            <h3 className="specials-heading">
                <span>This Week's Specials!</span>
                <button aria-label="On Click" onClick={routeChange} class="specials-menu-bttn">Menu</button>
            </h3>
            <section className="specials-cards-container">
                {specialItems.map( (item) => (
                    <Card
                    key={item.title}
                    title={item.title}
                    price={item.price}
                    description={item.description}
                    image={item.getImageSrc()}
                    ></Card>
            ))}</section>
        </section>
    )
}

export default Specials;