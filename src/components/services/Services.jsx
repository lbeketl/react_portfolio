import React from "react";
import "./services.scss";

import { BiCheck } from "react-icons/bi";

const Services = ({ services }) => {
    return (
        <section id="services" className="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>
            <div className="container services__container">
                    {services.map((service) => {
                        return (
                            <article key={service.id} className="service">
                                <div className="service__head">
                                    <h3>{service.name}</h3>
                                </div>
                                <ul className="service__list">
                                    {service.subServices.map((sub, i) => {
                                        return (
                                            <li key={i}>
                                                <BiCheck className="service__list-icon" />
                                                <p>{sub}</p>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </article>
                        );
                    })}
            </div>
        </section>
    );
};

export default Services;
