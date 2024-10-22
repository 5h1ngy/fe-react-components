import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

export default {
    parts: ['main', 'header', 'navbar', 'body', 'footer'],
    baseStyle: (props: StyleFunctionProps) => ({
        main: {
            backgroundColor: mode('primary', 'primaryDark')(props),
        },
        header: {
            backgroundColor: mode('primary', 'primaryDark')(props),
        },
        navbar: {
            backgroundColor: mode('primary', 'primaryDark')(props),
        },
        body: {
            backgroundColor: mode('primary', 'primaryDark')(props),
        },
        footer: {
            backgroundColor: mode('primary', 'primaryDark')(props),
        },
    }),
    defaultProps: {
        variant: 'default',
    },
};
