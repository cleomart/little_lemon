import restauranfood from "./../../images/restauranfood.jpg"

function HeroSection() {
    const description = "We are family owned Mediterranean restaurant \
    , focused on traditional recipes served with a modern twist!"
    return (
        <section style={{backgroundColor: "#495E57"}}>
            <div className="hero-section">
                <div>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p className="hero-description">{description}</p>
                    <button className="hero-reserve-table-button">
                        Reserve a Table
                    </button>
                </div>
                <img className="hero-image" src={restauranfood} alt="Restaurant Food bruschetta"></img>
               
            </div>
        </section>
    )
    
}

export default HeroSection;