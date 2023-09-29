import { Link, Route, Routes } from "react-router-dom";
import Main from "./main/Main.js"
import About from "./about/About";


function DoormatNav(props) {
    console.log(props.style)
    return (
        <div style={props.style}>
                <p><Link to="/#" className="nav-item">Home</Link></p>
                <p><Link className="nav-item" to="/about">About</Link></p>
                <p><Link className="nav-item" to="/menu">Menu</Link></p>
                <p><Link className="nav-item" to="/booking">Reservations</Link></p>
        </div>
    )

}

export default DoormatNav;