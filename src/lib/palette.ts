// from https://www.canva.com/colors/color-palettes/

export type PaletteType = {
  [key: string]: {
    light: string;
    dark: string;
    altLight: string;
    altDark: string;
  };
};

export const palette: PaletteType = {
  'Lake-View': {
    light: '#FFFFFF',
    dark: '#54627B',
    altLight: '#ECD5BB',
    altDark: '#710117',
  },
  'Coffee-Run': {
    light: '#D0B49F',
    dark: '#2F435A',
    altLight: '#AB6B51',
    altDark: '#39918C',
  },
  'Autumn-Crush': {
    light: '#EFCFA0',
    dark: '#532200',
    altLight: '#E1A140',
    altDark: '#914110',
  },
  'Vintage-Village': {
    light: '#FEECC3',
    dark: '#333A44',
    altLight: '#E8CBB1',
    altDark: '#7C9CAB',
  },
  'Rustic-Project': {
    light: '#F3EDE0',
    dark: '#745D20',
    altLight: '#CEA660',
    altDark: '#6B7A40',
  },
  /*
  '': {
    light: '',
    dark: '',
    altLight: '',
    altDark: '',
  },
  */
};

export const paletteNames = Object.keys(palette);
