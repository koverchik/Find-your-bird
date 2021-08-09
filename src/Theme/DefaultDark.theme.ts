import { ColorTheme, SpacingTheme, Theme } from './Theme.interface';

const DEFAULT_DARK_COLOR_THEME: ColorTheme = {
    primary: '#000',
    onPrimary: '#fff',
    surface: '#393939',
    onSurface: '#dadada',
    background: '#d9aebd',
    bright: '#602a3d'
};

const DEFAULT_DARK_SPACING_THEME: SpacingTheme = {
    base: 8,
    double: 16
};
export const DEFAULT_DARK_THEME_ID = 'default-dark';
export const DEFAULT_DARK_THEME: Theme = {
    id: DEFAULT_DARK_THEME_ID,
    color: DEFAULT_DARK_COLOR_THEME
};
