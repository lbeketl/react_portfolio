import React from "react";
import "./experience.scss";

import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
    const frontendSkils = [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "Tailwind",
        "React",
    ];
    const backandSkils = ["NodeJS", "Ruby", "MongoDB", "MySQL", "PHP"];

    return (
        <section id="experience" className="experience">
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            {frontendSkils.map((skil, i) => {
                                return (
                                    <div key={i} className="details-item">
                                        <BsPatchCheckFill className="details-icon" />
                                        <div>
                                            <h4>{skil}</h4>
                                            <small className="text-light">
                                                Experienced
                                            </small>
                                        </div>
                                    </div>
                                );
                            })}
                        </article>
                    </div>
                </div>
                <div className="experience__backand">
                    <h3>Backand Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            {backandSkils.map((skil, i) => {
                                return (
                                    <div key={i} className="details-item">
                                        <BsPatchCheckFill className="details-icon" />
                                        <div>
                                            <h4>{skil}</h4>
                                            <small className="text-light">
                                                Experienced
                                            </small>
                                        </div>
                                    </div>
                                );
                            })}
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
