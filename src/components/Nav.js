import logo from "../images/Logo.svg"

function Nav() {
    return (
        <nav>
            <img src={logo}></img>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about"></a>About</li>
                <li><a href="#menu"></a>Menu</li>
                <li><a href="#reservation"></a>Reservation</li>
                <li><a href="#order-online"></a>Order Online</li>
                <li><a href="#login"></a>Login</li>
            </ul>
        </nav>
    )
}

export default Nav;