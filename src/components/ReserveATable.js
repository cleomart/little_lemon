
function ReserveATable() {
    const mainStyle = {
        display: "grid",
        gridTemplateRows: "0.3fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr ",
        gridTemplateColumns: "1fr",
        backgroundColor: "#495E57",
        textAlign: "center",
        justifyContent: "center",
        // margin: "0 auto",
        // width: "600px"

    }

    const headingStyle = {
        color: "#F4CE14",
        fontFamily: "Markazi Text",
        fontSize: "40px",
        //marginBottom: "-100px"
    }

    const guestButton = {
        "width": "250px",
        "height": "30px",
        color: "#EDEFEE"
    }

    const dateTimeStyle = {
        display: "grid",
        gridTemplateRows: "1fr",
        gridTemplateColumns: "1fr 1fr",
        justifyContent: "center",
        justifyItems: "center",
        margin: "0 auto",
        width: "600px",
        textAlign: "left",
    }
    return (
        <main style={mainStyle}>
            <h1 style={headingStyle}>Reserve A Table</h1>
            <div>
                <h2>Number of Guests</h2>
                <button style={guestButton}></button>
            </div>
            <div style={dateTimeStyle}>
                <div>
                    <h2>Date</h2>
                    <button style={guestButton}></button>
                </div>
                <div>
                    <h2>Time</h2>
                    <button style={guestButton}></button>
                </div>
            </div>
            <div className="seating">
                <h2>Seating</h2>
                <input type="radio"></input><a>Indoor</a>
                <input type="radio"></input><a>Outdoor</a>
            </div>
            <div>
                <h2>Occasion</h2>
                <button style={guestButton}></button>
            </div>
            <div>
                <h2>Comments</h2>
                <textarea className="comments"></textarea>
            </div>
            <div>
                <button className="nextButton">Next</button>
            </div>
        </main>
    )
}

export default ReserveATable;