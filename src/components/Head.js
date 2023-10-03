import logo from "../images/Logo.svg"
import { Helmet } from "react-helmet"

export default function Head() {
    const description =  "A charming neighborhood bistro that serves simple food classic cocktails \
     in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials"
    const title = "Little Lemon Restaurant LC"
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description}/>
            <meta name="og:title" content={title}/>
            <meta name="og:description" content={description}/>
            <meta name="og:image" content={logo}/>
        </Helmet>
    )
}