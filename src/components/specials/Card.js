function Card( {title, price, description, image}) {
    return (
        <div className="specials-card">
            <img src={image} alt={title} className="special-card-img"></img>
            <h4 className="special-card-title">
                <span>{title}</span>
                <span>{price}</span>
            </h4>
            <p className="specials-card-desc">{description}</p>
        </div>
    )

}

export default Card;