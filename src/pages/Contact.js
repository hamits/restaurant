
import BannerImage from '../assets/2blackbean.jpg'

function Contact() {
    return (
        <div className="contactContainer">
            <div className="contactLeftSide" style={{ backgroundImage: `url(${BannerImage})` }}></div>
            <div className="contactRightSide">
                <h1>Contact Us</h1>
                <form id='contactForm'>
                    <label htmlFor="name">Full Name</label>
                    <input name="name" placeholder='Enter full name' type="text" />
                    <label htmlFor="email">Email</label>
                    <input name="email" placeholder='Enter full email' type="email" />
                    <label htmlFor="message">Message</label>
                    <textarea name="message" required rows="6" placeholder='Enter message'></textarea>
                    <button type='submit'>Send Message</button>
                </form>

            </div>


        </div>
    )
}

export default Contact