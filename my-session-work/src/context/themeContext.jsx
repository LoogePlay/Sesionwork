import React from "react";

export const themes = {
    light: {
        background: '#c0c0c0',
        textColor: '#000000',
        outline:'#000000'
    },
    dark: {
        background:'#000000',
        textColor:'#c0c0c0',
        outline:'#c0c0c0'
    }
}

export const ThemeContext = React.createContext(themes.light)