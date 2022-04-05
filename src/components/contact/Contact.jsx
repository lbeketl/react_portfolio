import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.scss";

import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_lkyti2k",
            "template_60fcq1q",
            form.current,
            "AcKiw1QiS0mGsNRdn"
        );
        
        e.target.reset();
    };

    return (
        <section id="contact" className="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineMail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>lbeketl@mail.com</h5>
                        <a href="mailto:lbeketl@mail.com"> Send a message</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className="contact__option-icon" />
                        <h4>Messenger</h4>
                        <h5>My Profile</h5>
                        <a
                            href="https://www.facebook.com/profile.php?id=100017126328389"
                            target="_blank"
                        >
                            Send a message
                        </a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon" />
                        <h4>Whatsapp</h4>
                        <h5>+123456789</h5>
                        <a
                            href="https://api.whatsapp.com/send?phone+123456789"
                            target="_blank"
                        >
                            {" "}
                            Send a message
                        </a>
                    </article>
                </div>
                <form action="" ref={form} onSubmit={sendEmail}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Full Name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        id=""
                        placeholder="Your Email"
                        required
                    />
                    <textarea
                        name="message"
                        id=""
                        rows="7"
                        placeholder="Your Message"
                        required
                    ></textarea>
                    <button type="submit" className="btn btn-primary">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
