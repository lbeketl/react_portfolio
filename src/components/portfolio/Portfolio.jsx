import React from "react";
import "./portfolio.scss";

const Portfolio = ({ projects }) => {
    return (
        <section id="portfolio" className="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {projects.map(({ id, title, img, github, demo }) => {
                    return (
                        <article key={id} className="portfolio__item">
                            <div className="portfolio__item-image">
                                <img src={img} alt="project shot" />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <a
                                    href={github}
                                    target="_blank"
                                    className="btn"
                                >
                                    Github
                                </a>
                                <a
                                    href={demo}
                                    target="_blank"
                                    className="btn btn-primary"
                                >
                                    Live Demo
                                </a>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Portfolio;
