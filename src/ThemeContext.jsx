/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext)
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
        console.log('Toggling theme...');
    }

    useEffect(() => {
        document.body.className = theme;
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}