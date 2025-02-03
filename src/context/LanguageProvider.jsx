// eslint-disable-next-line no-unused-vars
import React from "react"
import { useState} from "react";
import data from "../data.json";
import PropTypes from 'prop-types'; 
import { LanguageContext } from "./languageContext";



export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('tr');

    const changeLanguage = (lang) =>{
        setLanguage(lang)
    };

    const contextValue = {
        language, 
        changeLanguage, 
        content: data[language],
    };

    return (
        <LanguageContext.Provider value={contextValue}>
            {children}
        </LanguageContext.Provider>
    );
    };

    LanguageProvider.propTypes = {
        children: PropTypes.node.isRequired
      };

