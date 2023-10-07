import image1 from "../../images/Mario and Adrian A.jpg"
import image2 from "../../images/Mario and Adrian b.jpg"

function About() {
    const description = "A charming neighborhood bistro that serves simple food classic cocktails \
    in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials"
    return (
        <section  className="about-section-container">
            <section className="hero-section about-section">
                <div className="hero-desc-section">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p className="hero-description">{description}</p>
                    <p>We have been in business since 2013</p>
                    <p>Owned by Leo and Marty</p>
                    <p>Located at 1234 Reed Ave, Chicago IL</p>
                </div>
                <div className="about-images-section">
                    <img className="about-image about-image-1" src={image1} alt="Mario and Adrian cooking photo"></img>
                    <img className="about-image about-image-2" src={image2} alt="Mario and Adrian cooking photo"></img>
                </div>

            </section>
        </section>
    )

}

export default About;