import chroma from 'chroma-js';

export const colorVariants = Object.fromEntries(
    Object.entries({
      black: '#191716', // Eerie black
      white: '#F9F9F9', // Seasalt
      red: '#89043D', // Claret
      orange: '#FF571F', // Coquelicot
      gold: '#F7B538', // Xanthous
      yellow: '#FFFD77', // Icterine
      green: '#20FC8F', // Spring green
      emerald: '#1FAD9D', // Keppel
      lightBlue: '#51E5FF', // Electric blue
      darkBlue: '#235789', // Lapis lazuli
      purple: '#9F6AA0', // Pomp and Power
      pink: '#F2B5D4', // Lavender pink
      lightGray: '#DBDFE6', // Platinum
      gray: '#95B2B8', // Cadet gray
      darkGray: '#4F5D75', // Payne's grey
      trueBlack: '#000000', // True black
      trueWhite: '#FFFFFF', // True white
    }).map(([key, value]) => [
      key,
      {
        primary: value,
        shades: chroma
          .scale([chroma(value).brighten(2), chroma(value), chroma(value).darken(2)])
          .mode('lab')
          .colors(5), // Generate 5 shades (lightest to darkest)
      },
    ])
  );
  
  // console.log(colorVariants.red); // Primary color object { primary: "#89043D", shades: Array(5) }  
  // console.log(colorVariants.red.shades); // Array of 5 shades ["#E2A6BB", "#C46993", "#89043D", "#5E032A", "#390118"]
