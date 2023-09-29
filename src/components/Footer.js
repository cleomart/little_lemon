import HomeIcon from "./main/HomeIcon";
import DoormatNav from "./DoormatNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";


function Footer() {
    const doormatNavStyle ={
        listStyleType: "none",
        textDecoration: "none",
        paddingTop: "1em"
    }

    const ulStyle = {
        listStyleType: "none",
    }


    return (
        <footer className="footer">
            <HomeIcon/>
            <DoormatNav style={doormatNavStyle}></DoormatNav>
            <ul style={ulStyle}>
                <p>Contact</p>
                <li>1234 Reed Ave Chicago, IL</li>
                <li>(408) 858 - 1234</li>
                <li><a href="mailto: leomartcrisostomo@gmail.com">leomartcrisostomo@gmail.com</a></li>
            </ul>
            <ul style={ulStyle}>
                <p>Social Media Links</p>
                <li><a href="https://facebook.com"><FontAwesomeIcon icon={faFacebook} size="2x"></FontAwesomeIcon></a></li>
                <li><a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} size="2x"></FontAwesomeIcon></a></li>
            </ul>
        </footer>
    )
}

export default Footer;