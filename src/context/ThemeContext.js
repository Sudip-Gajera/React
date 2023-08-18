import { useReducer } from "react";
import { createContext } from "react";
import { ThemeReducer } from "./reducer/theme.reducer";
import { TOGGLE_THEME } from "./ActionType";

export const ThemeContext = createContext();

const initState = {
    theme: 'light'
}

export const ThemeProvider = ({children}) => {
    const [state, dispatch] = useReducer(ThemeReducer,initState);

    const themeToggle = (theme) => {
        const newTheme = theme === 'light' ? 'dark' : 'light';

        dispatch({type: TOGGLE_THEME, payload: newTheme})
    }

    return(
        <ThemeContext.Provider
            value={{
                ...state,
                themeToggle
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}