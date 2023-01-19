import 'styled-componets';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      GENERAL: {
        PRIMARY: string;
        SECONDARY: string;
        TERTIARY: string;
      };
      BACKGROUND: {
        DEFAULT: string;
        LIGHT: string;
        WHITE: string;
        HINT: string;
        SHADOW: string;
        LABEL: string;
        LOADING: string;
        FAVORITE: string;
      };
      TEXT: {
        PRIMARY: string;
        SECONDARY: string;
        CONTRAST_ONE: string;
        CONTRAST_TWO: string;
      };
      SHADES_OF_GREY: {
        DEFAULT: string;
        CLEAR: string;
        HOVER: string;
        DARK: string;
        POLISHED: string;
        SHADOW: string;
      };
      TYPES: {
        BUG: string;
        ELECTRIC: string;
        FIRE: string;
        GRASS: string;
        NORMAL: string;
        ROCK: string;
        DARK: string;
        FAIRY: string;
        FLYING: string;
        GROUND: string;
        POISON: string;
        STEEL: string;
        DRAGON: string;
        FIGHTING: string;
        GHOST: string;
        ICE: string;
        PSYCHIC: string;
        WATER: string;
      };
    };
  }
}
