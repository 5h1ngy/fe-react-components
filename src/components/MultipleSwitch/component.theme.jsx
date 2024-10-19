import { mode } from '@chakra-ui/theme-tools';

const MultipleSwitch = {
  parts: ['slider', 'button'],
  baseStyle: (props) => ({
    slider: {
      boxShadow: '0px 0px 5px 3px rgba(0, 0, 0, 0.1)', // Include colore, quindi lo lasciamo qui
      bg: mode('tertiary', 'tertiaryDark')(props),
    },
    button: {
      bg: mode('secondary', 'secondaryDark')(props),
      color: mode('primary', 'primaryDark')(props),
      _hover: {
        bg: mode('primary', 'primaryDark')(props),
        color: mode('secondary', 'secondaryDark')(props),
      },
      _active: {
        bg: mode('primary', 'primaryDark')(props),
        color: mode('secondary', 'secondaryDark')(props),
      },
    },
  }),
  defaultProps: {},
};

export default MultipleSwitch;
