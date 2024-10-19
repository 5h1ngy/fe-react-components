import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

const Navbar = {
    parts: ['button', 'text'],
    baseStyle: (props: StyleFunctionProps) => ({
        button: {
            variant: 'ghost',
            size: 'lg',
            _hover: {
                bg: mode('secondary', 'secondaryDark')(props),
            },
        },
        text: {
            color: mode('secondary', 'secondaryDark')(props),
        },
    }),
    variants: {
        inverted: (props: StyleFunctionProps) => ({
            button: {
                color: mode('secondary', 'secondaryDark')(props),
            },
            text: {
                color: mode('secondary', 'secondaryDark')(props),
            },
        }),
    },
    defaultProps: {
        variant: 'default',
    },
};

export default Navbar;
