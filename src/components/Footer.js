import logo from "../images/Logo.svg"
import DoormatNav from "./DoormatNav";




function Footer() {
    const footerStyle = {
        display: "grid",
        gridTemplateColumns: "1fr 2fr 2fr 2fr",
        gridTemplateRows: "80px",
        justifyItems: "center",
        justifyContent: "center",
        alignItems: "center",
        padding: "15px",
        fontSize: "16px",
        fontFace: "Karla",
        fontWeight: "bold",
        color: "#495E57",
        textDecoration: "none"

    }

    const doormatNavStyle ={
        justifyItems: "center",
        listStyleType: "none",
        textDecoration: "none"
    }

    const ulStyle = {
        listStyleType: "none",
    }


    return (
        <footer style={footerStyle} className="footer">
            <img src={logo}></img>
            <DoormatNav style={doormatNavStyle}></DoormatNav>
            <ul style={ulStyle}>
                <p>Contact</p>
                <li><a href="#home">Address</a></li>
                <li><a href="#home">Phone Number</a></li>
                <li><a href="#home">Email</a></li>
            </ul>
            <ul style={ulStyle}>
                <p fontWeight="bolder">Social Media Links</p>
                <li><a href="#home">Facebook</a></li>
                <li><a href="#home">Instagram</a></li>
            </ul>
        </footer>
    )
}

export default Footer;