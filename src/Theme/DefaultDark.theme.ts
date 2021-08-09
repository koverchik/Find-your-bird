import { ColorTheme, SpacingTheme, Theme } from './Theme.interface';
// Define our dark theme colors
const DEFAULT_DARK_COLOR_THEME: ColorTheme = {
    primary: '#ff80ac',
    onPrimary: '#fff',
    surface: '#545454',
    onSurface: '#fff',
    background: '#3f3f3f',
    primaryDark: ''
};
const DEFAULT_DARK_SPACING_THEME: SpacingTheme = {
    base: 8,
    double: 16
};
export const DEFAULT_DARK_THEME_ID = 'default-dark';
export const DEFAULT_DARK_THEME: Theme = {
    id: DEFAULT_DARK_THEME_ID,
    color: DEFAULT_DARK_COLOR_THEME,
    spacing: DEFAULT_DARK_SPACING_THEME
};
