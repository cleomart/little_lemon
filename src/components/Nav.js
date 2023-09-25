import logo from "../images/Logo.svg"

function Nav() {
    const navStyle = {
        display: "grid",
        gridTemplateColumns: "1fr 2fr",
        gridTemplateRows: "80px",
        justifyItems: "center",
        justifyContent: "center",
        alignItems: "center",
        padding: "15px",
        fontSize: "18px",
        fontFace: "Karla",
        fontWeight: "bold",
        color: "#495E57",
        textDecoration: "none"

    }

    const ulStyle = {
        display: "inline-grid",
        gridTemplateColumns: "repeat(auto-fill, 10fr)",
        //gridTemplateRows: "2fr",
        justifyItems: "center",
        listStyleType: "none",
        gridColumnGap: "10px",
    }


    return (
        <nav style={navStyle} className="navbar">
            <img height="60px" width="180px" src={logo} alt="Little Lemon Logo"></img>
            <ul style={ulStyle}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#reservation">Reservations</a></li>
                <li><a href="#order-online">Order Online</a></li>
                <li><a href="#login">Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav;