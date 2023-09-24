import logo from "../images/Logo.svg"

export default function Head() {
    return (
        <head>
            <meta name="description" content="Mediterrenan Restaurant"/>
            <meta name="og:title" content="Little Lemon Restaurant"/>
            <meta name="og:description" content="Mediterrenan Restaurant"/>
            <meta name="og:image" content={logo}/>
        </head>
    )
}