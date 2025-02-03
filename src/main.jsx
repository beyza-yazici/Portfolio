// eslint-disable-next-line no-unused-vars
import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LanguageProvider } from './context/LanguageProvider.jsx'
import { ThemeProvider } from './context/themeProvider.jsx'


createRoot(document.getElementById('root')).render(
  <LanguageProvider>
  <ThemeProvider>
    <App />
    </ThemeProvider>
  </LanguageProvider>
)
