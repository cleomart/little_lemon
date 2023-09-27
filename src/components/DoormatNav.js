import { Link, Route, Routes } from "react-router-dom";
import Main from "./main/Main.js"
import About from "./about/About";


function DoormatNav(props) {
    console.log(props.style)
    return (
        <ul style={props.style}>
                <li><Link to="/#" className="nav-item">Home</Link></li>
                <li><Link className="nav-item" to="/about">About</Link></li>
                <li><Link className="nav-item" to="/menu">Menu</Link></li>
                <li><Link className="nav-item" to="/booking">Reservations</Link></li>
        </ul>
    )

}

export default DoormatNav;