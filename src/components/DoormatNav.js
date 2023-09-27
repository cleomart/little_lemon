import { Link, Route, Routes } from "react-router-dom";
import Main from "./main/Main.js"
import About from "./about/About";


function DoormatNav(props) {
    console.log(props.style)
    return (
        <ul style={props.style}>
                <li><Link to="/#">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/booking">Reservations</Link></li>
        </ul>
    )

}

export default DoormatNav;