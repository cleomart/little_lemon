

function DoormatNav(props) {
    console.log(props.style)
    return (
        <ul style={props.style}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#reservation">Reservations</a></li>
        </ul>
    )

}

export default DoormatNav;