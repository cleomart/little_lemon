import logo from "../../images/Logo.svg"
import { Link } from "react-router-dom";
function HomeIcon() {
    return (
        <Link to="/"  className="home-icon-box">
            <img className="home-icon" src={logo} alt="Little Lemon Logo"></img>
        </Link>
    )
}

export default HomeIcon;