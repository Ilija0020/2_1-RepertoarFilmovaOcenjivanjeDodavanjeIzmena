import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/">Pocetna</Link>
                <Link to="/movies">Filmovi</Link>
                <Link to="/about">O nama</Link>
            </nav>
        </header>
    )
}

export default Header;