import React, { useState, useEffect } from 'react'

import { TokyoTheme } from './tokyo';
import { metronTheme } from './metron';
import { ThemeProvider } from 'styled-components';
import { curTheme } from '../App';
export default function CustomeThemeProvider(p: any) {

    const [themeType, setThemeType] = useState(curTheme);
    useEffect(() => {
        setThemeType('theme');
    }, []);

    useEffect(() => {
        setThemeType(
            themeType === "metronTheme"
                ? "metronTheme"
                : themeType === "tokyo"
                    ? "tokyo"
                    : "metronTheme"
        );
    }, [themeType]);

    const activeTheme =
        themeType === "metronTheme"
            ? metronTheme
            : themeType === "tokyo"
                ? TokyoTheme
                : metronTheme;

    return (
        <div>
            <CustomThemeContext.Provider
                value={{ themeType, setThemeType }}>
                <ThemeProvider theme={activeTheme}>
                    {p.children}
                </ThemeProvider>
            </CustomThemeContext.Provider>
        </div>
    )
}
const CustomThemeContext = React.createContext<AuthContextInterface>({
    themeType: "",
    setThemeType: () => { },
});
export function useCustomTheme() {
    const context = React.useContext(CustomThemeContext);
    if (context === undefined) {
        throw new Error("useCustomTheme must be used within a CustomThemeProvider");
    }
    return context;
}
interface AuthContextInterface {
    themeType: string;
    setThemeType: React.Dispatch<React.SetStateAction<string>>;
}
