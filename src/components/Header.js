import React from "react";

function Header({ onDarkModeClick }) {
    const handleDarkModeClick = () => {
        onDarkModeClick();
    };

    return (
        <header>
            <h2>Shopster</h2>
            <button onClick={handleDarkModeClick}>Dark Mode</button>
        </header>
    );
}

export default Header;