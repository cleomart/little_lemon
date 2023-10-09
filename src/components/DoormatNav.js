import { Link, Route, Routes } from "react-router-dom";
import Main from "./main/Main.js"
import About from "./about/About";


function DoormatNav(props) {
    return (
        <div style={props.style}>
                <Link to="/#" className="nav-item">Home</Link>
                <Link className="nav-item" to="/about">About</Link>
                <Link className="nav-item" to="/menu">Menu</Link>
                <Link className="nav-item" to="/booking">Reservations</Link>
        </div>
    )

}

export default DoormatNav;