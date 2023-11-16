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
  'Water-Foam': {
    light: '#DDFFE7',
    dark: '#167D7F',
    altLight: '#98D7C2',
    altDark: '#167D7F',
  },
  'Coffee-Run': {
    light: '#D0B49F',
    dark: '#2F435A',
    altLight: '#AB6B51',
    altDark: '#39918C',
  },
  'Mountain-Haze': {
    light: '#C3CEDA',
    dark: '#071330',
    altLight: '#738FA7',
    altDark: '#0C4160',
  },
  'Autumn-Crush': {
    light: '#EFCFA0',
    dark: '#532200',
    altLight: '#E1A140',
    altDark: '#914110',
  },
  'Dark-Road-Curve': {
    light: '#B1B1B1',
    dark: '#0A0708',
    altLight: '#747474',
    altDark: '#444444',
  },
  'Vintage-Village': {
    light: '#FEECC3',
    dark: '#333A44',
    altLight: '#E8CBB1',
    altDark: '#7C9CAB',
  },
  'Heart-of-Coral': {
    light: '#F0CCB0',
    dark: '#F54D3D',
    altLight: '#F0A160',
    altDark: '#B97D60',
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
