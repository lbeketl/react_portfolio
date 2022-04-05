import React from "react";
import "./App.css";

import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Experience from "components/experience/Experience";
import Portfolio from "components/portfolio/Portfolio";
import Services from "components/services/Services";
import Testimonials from "components/testimonials/Testimonials";
import Contact from "components/contact/Contact";
import Footer from "components/footer/Footer";
import About from "components/about/About";

import ScrollUpBtn from "components/scroll-top-btn/ScrollUpBtn";

import { services, projects, clients } from "./store/db";

function App() {
    return (
        <>
        <ScrollUpBtn/>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Services services={services} />
            <Portfolio projects={projects}/>
            <Testimonials clients={clients}/>
            <Contact />
            <Footer />
        </>
    );
}

export default App;
