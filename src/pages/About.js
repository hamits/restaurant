
import BannerImage from '../assets/1beef.jpg'

function About() {
    return (
        <div className='aboutContainer' >
            <div className="aboutTop" style={{ backgroundImage: `url(${BannerImage})` }}></div>
            <div className="aboutText">
                <h3>About Us</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Expedita laudantium tempora, sapiente explicabo vel quos
                    in magnam architecto possimus nemo nulla culpa dolorem est dolore delectus
                    perspiciatis quisquam nam? Possimus?
                </p>
            </div>

        </div>
    )
}

export default About