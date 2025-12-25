import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./styles/header.scss"
import Movies from "./movies";

const Header = () => {
    return (
        <div>
            <header>
                <h1>Bioskop</h1>
                <nav>
                    <Link to="/" className="link">Home</Link>
                    <Link to="about" className="link">O nama</Link>
                    <Link to="/movies" className="link">Filmovi</Link>
                </nav>
            </header>
        </div>
    )
}

export default Header;