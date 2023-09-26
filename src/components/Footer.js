import HomeIcon from "./main/HomeIcon";
import DoormatNav from "./DoormatNav";




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
                <li><a href="#home">Address</a></li>
                <li><a href="#home">Phone Number</a></li>
                <li><a href="#home">Email</a></li>
            </ul>
            <ul style={ulStyle}>
                <p>Social Media Links</p>
                <li><a href="#home">Facebook</a></li>
                <li><a href="#home">Instagram</a></li>
            </ul>
        </footer>
    )
}

export default Footer;