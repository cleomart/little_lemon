import HomeIcon from "./main/HomeIcon";
import DoormatNav from "./DoormatNav";


function Nav() {
    const ulStyle = {
        display: "flex",
        flex: 1,
        listStyleType: "none",
        justifyContent: "space-evenly",
        columnGap: "1em",
        padding: "0.2em 0.2em"
    }


    return (
            <nav className="navbar">
                <HomeIcon></HomeIcon>
                <DoormatNav style={ulStyle}></DoormatNav>
            </nav>
    )
}


export default Nav;