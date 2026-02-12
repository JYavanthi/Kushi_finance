import "./contact_us.css";
import cu from "../assets/cu.jpeg";

const ContactUs = () => {
    return (
        <section className="contact-page">

            {/* TOP IMAGE */}
            <div className="contact-banner">
                <img src={cu} alt="Contact Us" />
            </div>

            {/* MAIN CONTENT */}
            <div className="contact-container">

                {/* LEFT FORM */}
                <div className="contact-form">

                    <div className="co-title">

                        <h2>Send us a message</h2>

                        <p className="subtitle">
                            Do you have a question? A complaint? Or need help to get the right
                            advice? Feel free to contact us
                        </p>

                    </div>

                    <div className="form-row">
                        <div className="field">
                            <label>First Name</label>
                            <input type="text" placeholder="Enter your first name" />
                        </div>

                        <div className="field">
                            <label>Last Name</label>
                            <input type="text" placeholder="Enter your last name" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="field">
                            <label>Email</label>
                            <input type="email" placeholder="Enter your email" />
                        </div>

                        <div className="field">
                            <label>Contact Details</label>
                            <div className="phone-input">
                                <span>+91</span>
                                <input type="text" placeholder="Enter your Phone No." />
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <label>Message</label>
                        <textarea placeholder="Message"></textarea>
                    </div>

                    <button className="send-btn">Send a Message</button>


                </div>

                {/* RIGHT INFO CARD */}
                <div className="contact-info">
                    <h3>Hi! We are always<br />here to help you</h3>

                    <div className="info-box">
                        <i className="fa-solid fa-headset"></i>
                        <div>
                            <span>Hotline No:</span>
                            <p>+91 9739871634</p>
                        </div>
                    </div>

                    <div className="info-box">
                        <i className="fa-brands fa-whatsapp"></i>
                        <div>
                            <span>SMS / Whatsapp:</span>
                            <p>+91 9739871634</p>
                        </div>
                    </div>

                    <div className="info-box">
                        <i className="fa-solid fa-envelope"></i>
                        <div>
                            <span>Email:</span>
                            <p>support@khushifinance.com</p>
                        </div>
                    </div>

                    <div className="a-social-section">
                        <p>Connect With Us:</p>
                        <div className="a-social-icons">
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-x-twitter"></i>
                        </div>
                    </div>
                </div>

            </div>

            <div className="map-section">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.82526838573!2d77.60025287330492!3d13.04679161322889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17834d8fb349%3A0x54cd1cf1124bdf24!2s5th%20Cross%2C%201st%20Main%2C%20Netajinagar%2C%20Bengaluru%2C%20Karnataka%20560024!5e0!3m2!1sen!2sin!4v1770122404233!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">

                </iframe>
            </div>


        </section>
    );
};

export default ContactUs;
