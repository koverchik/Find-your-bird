import React from 'react';

import { DEFAULT_DARK_THEME, DEFAULT_DARK_THEME_ID } from './DefaultDark.theme';
import {
    DEFAULT_LIGHT_THEME,
    DEFAULT_LIGHT_THEME_ID
} from './DefaultLight.theme';
import { Theme } from './Theme.interface';

interface ProvidedValue {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}

const Context = React.createContext<ProvidedValue>({
    theme: DEFAULT_LIGHT_THEME,
    setTheme: () => {},
    toggleTheme: () => {}
});

interface Props {
    initial: Theme;
    children?: React.ReactNode;
}

export const ThemeProvider = React.memo<Props>((props) => {
    const [theme, setTheme] = React.useState<Theme>(props.initial);

    const ToggleThemeCallback = React.useCallback(() => {
        setTheme((currentTheme) => {
            if (currentTheme.id === DEFAULT_LIGHT_THEME_ID) {
                return DEFAULT_DARK_THEME;
            }
            if (currentTheme.id === DEFAULT_DARK_THEME_ID) {
                return DEFAULT_LIGHT_THEME;
            }
            return currentTheme;
        });
    }, []);
    const SetThemeCallback = React.useCallback((newTheme: Theme) => {
        setTheme((currentTheme: Theme) => {
            if (currentTheme.id === newTheme.id) {
                return currentTheme;
            }

            return newTheme;
        });
    }, []);

    const MemoizedValue = React.useMemo(() => {
        const value: ProvidedValue = {
            theme,
            setTheme: SetThemeCallback,
            toggleTheme: ToggleThemeCallback
        };
        return value;
    }, [theme, SetThemeCallback, ToggleThemeCallback]);

    return (
        <Context.Provider value={MemoizedValue}>
            {props.children}
        </Context.Provider>
    );
});

export const useTheme = () => React.useContext(Context);
