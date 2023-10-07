import logo from "../../images/Logo.svg"
import { Link } from "react-router-dom";
function HomeIcon(props) {
    return (
        <Link to="/"  className="home-icon-box" {...props}>
            <img className="home-icon" src={logo} alt="Little Lemon Logo"></img>
        </Link>
    )
}

export default HomeIcon;