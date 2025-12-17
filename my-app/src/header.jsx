import React from "react";

const Header = () => {
    const date = new Date();
    const today = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}.`
    return (
        <div className="header">
            <h1>Repertoar za danas({today})</h1>
        </div>
    )
}

export default Header;