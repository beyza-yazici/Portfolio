// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useTheme } from "../hooks/hooks/useTheme";


function Header() {
    const { theme, toggleTheme } = useTheme();  

    return (
        <button
            onClick={toggleTheme}
            style={{
                backgroundColor: theme === "light" ? "#fff" : "#333",
                color: theme === "light" ? "#000" : "#fff",
                padding: "10px 20px",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease", 
            }}
        >
         {theme === "light" ? "Dark" : "Light"}
        </button>
    );
}

export default Header;