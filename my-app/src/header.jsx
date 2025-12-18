import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./styles/header.scss"
import Movie from "./movie";

const Header = () => {
    return (
        <div>
            <header>
                <h1>Bioskop</h1>
                <nav>
                    <Link to="/" className="link">Home</Link>
                    <Link to="about" className="link">O nama</Link>
                    <Link to="/movie" className="link">Filmovi</Link>
                </nav>
            </header>
        </div>
    )
}

export default Header;