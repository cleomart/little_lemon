import Card from "./Card";

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
    return (
        <section className="specials">
            <h2>This Week's Specials!</h2>
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