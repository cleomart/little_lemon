import logo from "../images/Logo.svg"

function Footer() {
    return (
        <footer>
            <img src={logo}></img>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about"></a>About</li>
                <li><a href="#menu"></a>Menu</li>
                <li><a href="#reservation"></a>Reservation</li>
                <li><a href="#order-online"></a>Order Online</li>
                <li><a href="#login"></a>Login</li>
            </ul>
            <ul>
                Contact
                <li>Address</li>
                <li>Phone Number</li>
                <li>email</li>
            </ul>
            <ul>
                Social Media Links
                <li>facebook</li>
                <li>Instagrem</li>
            </ul>
        </footer>
    )
}

export default Footer;