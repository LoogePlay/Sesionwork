import React from "react";

export const themes = {
    light: {
        background: '#cfcfcf',
        textColor: '#000000',
        outline:'#000000'
    },
    dark: {
        background:'#242424',
        textColor:'#c0c0c0',
        outline:'#c0c0c0'
    }
}

export const ThemeContext = React.createContext(themes.light)