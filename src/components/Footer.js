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



    return (
        <footer className="footer">
            <HomeIcon/>
            <DoormatNav style={doormatNavStyle}></DoormatNav>
            <div>
                <h4>Contact</h4>
                <p>1234 Reed Ave Chicago, IL</p>
                <p>(408) 858 - 1234</p>
                <p><a href="mailto: leomartcrisostomo@gmail.com">leomartcrisostomo@gmail.com</a></p>
            </div>
            <div >
                <h4>Social Media Links</h4>
               <p><a href="https://facebook.com"><FontAwesomeIcon icon={faFacebook} size="2x"></FontAwesomeIcon></a></p>
               <p> <a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} size="2x"></FontAwesomeIcon></a></p>
            </div>
        </footer>
    )
}

export default Footer;