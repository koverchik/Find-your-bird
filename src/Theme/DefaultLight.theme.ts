import { ColorTheme, Theme } from './Theme.interface';

const DEFAULT_LIGHT_COLOR_THEME: ColorTheme = {
  primary: '#fff',
  onPrimary: '#000',
  surface: '#dadada',
  onSurface: '#393939',
  background: '#ff80ac',
  bright: '#f84281',
};

export const DEFAULT_LIGHT_THEME_ID = 'default-light';
export const DEFAULT_LIGHT_THEME: Theme = {
  id: DEFAULT_LIGHT_THEME_ID,
  color: DEFAULT_LIGHT_COLOR_THEME,
};
