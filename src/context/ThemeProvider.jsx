// eslint-disable-next-line no-unused-vars
import React from "react";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { ThemeContext } from "./ThemeContext";


const getInitialTheme = () => localStorage.getItem("theme") || "light";

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        document.body.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
        }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

ThemeProvider.propTypes = {
        children: PropTypes.node.isRequired
      };
