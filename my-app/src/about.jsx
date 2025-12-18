import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./styles/about.scss";

const About = () => {
    return (
        <div className="about">
            <Link to="appInformation" className="about-link">O aplikaciji</Link>
            <Link to="author" className="about-link">O autoru aplikacije</Link>
            <div className="about-content">
                <Outlet />
            </div>
        </div>
    )
}

export const AppInformation = () =>
(<div>
    <h3>O aplikaciji</h3>
    <p>Ova aplikacija je napravljena kako bi prikazala raspored filmova u bioskopu i omogućila korisnicima da brzo vide šta je trenutno u repertoaru.</p>
    <p>Korisnici mogu da:</p>
    <ul>
        <li>Vide listu svih filmova za određeni dan</li>
        <li>Daju "Like" ili "Dislike" filmu</li>
        <li>Pregledaju osnovne informacije o filmu i hali</li>
    </ul>
</div>
);

export const Author = () => (<div>
    <h3>O autoru</h3>
    <p>Ovu aplikaciju je napravila Jelena.</p>
    <p>Cilj ove aplikacije je bio da se vežba rad sa React komponentama i routama</p>
</div>
)

export default About;