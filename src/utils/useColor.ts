import { useTheme } from 'styled-components';
// creation of a hook that allows changing the color according to the type of pokémon
export const useColor = (type: string) => {
  const theme = useTheme();

  switch (type) {
    case 'bug':
      return theme.palette.TYPES.BUG;
    case 'electric':
      return theme.palette.TYPES.ELECTRIC;
    case 'fire':
      return theme.palette.TYPES.FIRE;
    case 'grass':
      return theme.palette.TYPES.GRASS;
    case 'normal':
      return theme.palette.TYPES.NORMAL;
    case 'rock':
      return theme.palette.TYPES.ROCK;
    case 'dark':
      return theme.palette.TYPES.DARK;
    case 'fairy':
      return theme.palette.TYPES.FAIRY;
    case 'flying':
      return theme.palette.TYPES.FLYING;
    case 'ground':
      return theme.palette.TYPES.GROUND;
    case 'poison':
      return theme.palette.TYPES.POISON;
    case 'steel':
      return theme.palette.TYPES.STEEL;
    case 'dragon':
      return theme.palette.TYPES.DRAGON;
    case 'fighting':
      return theme.palette.TYPES.FIGHTING;
    case 'ghost':
      return theme.palette.TYPES.GHOST;
    case 'ice':
      return theme.palette.TYPES.ICE;
    case 'psychic':
      return theme.palette.TYPES.PSYCHIC;
    case 'water':
      return theme.palette.TYPES.WATER;
    default:
      return theme.palette.TYPES.NORMAL;
  }
};
