export interface ColorTheme {
  primary: string;
  onPrimary: string;
  bright: string;
  surface: string;
  onSurface: string;
  background: string;
}

export interface SpacingTheme {
  base: number;
  double: number;
}

export interface Theme {
  id: string;
  color: ColorTheme;
}
