import logo from "../images/Logo.svg"
import DoormatNav from "./DoormatNav";
//import DoormatNav from "./DoormatNav"

function Nav() {
    const navStyle = {
        display: "grid",
        gridTemplateColumns: "1fr 2fr",
        gridTemplateRows: "80px",
        justifyItems: "center",
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
        gridTemplateColumns: "repeat(6, 10fr)",
        justifyItems: "center",
        listStyleType: "none",
        gridColumnGap: "10px",
    }


    return (
        <nav style={navStyle} className="navbar">
            <img height="60px" width="180px" src={logo} alt="Little Lemon Logo"></img>
            <DoormatNav style={ulStyle}></DoormatNav>
        </nav>
    )
}

export default Nav;