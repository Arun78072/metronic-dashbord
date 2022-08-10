import React, { useState, useEffect } from 'react'

import { MetronTestTheme } from './metronTest';
import { metronTheme } from './metron';
import { ThemeProvider } from 'styled-components';
export default function CustomeThemeProvider(p: any) {
    const [themeType, setThemeType] = useState("metronTheme");
    useEffect(() => {
        setThemeType('theme');
    }, []);

    useEffect(() => {
        setThemeType(
            themeType === "metronTheme"
                ? "metronTheme"
                : themeType === "MetronTestTheme"
                    ? "MetronTestTheme"
                    : "metronTheme"
        );
    }, [themeType]);

    const activeTheme =
        themeType === "metronTheme"
            ? metronTheme
            : themeType === "MetronTestTheme"
                ? MetronTestTheme
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
