import HomeIcon from "./main/HomeIcon";
import DoormatNav from "./DoormatNav";


function Nav() {
    const ulStyle = {
        display: "flex",
        flexWrap: "flex",
        listStyleType: "none",
        gap: "1em",
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