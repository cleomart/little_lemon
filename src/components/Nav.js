import HomeIcon from "./main/HomeIcon";
import DoormatNav from "./DoormatNav";
//import DoormatNav from "./DoormatNav"

function Nav() {
    const ulStyle = {
        display: "flex",
       // gridTemplateColumns: "repeat(6, 10fr)",
        flexWrap: "flex",
        justifyItems: "center",
        listStyleType: "none",
        gap: "3em",
        padding: "0 1em"
    }


    return (
        <nav className="navbar">
            <HomeIcon></HomeIcon>
            <DoormatNav style={ulStyle}></DoormatNav>
        </nav>
    )
}

export default Nav;