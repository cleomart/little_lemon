import HomeIcon from "./main/HomeIcon";
import DoormatNav from "./DoormatNav";


function Nav() {
    const ulStyle = {
        display: "flex",
        flex: 1,
        listStyleType: "none",
        gap: "1.2em",
        padding: "0 1em",
        justifyContent: "center"
    }


    return (
            <nav className="navbar">
                <HomeIcon></HomeIcon>
                <DoormatNav style={ulStyle}></DoormatNav>
            </nav>
    )
}


export default Nav;