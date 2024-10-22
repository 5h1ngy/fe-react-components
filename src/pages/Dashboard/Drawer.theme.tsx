import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

export default {
    parts: ['container', 'content'],
    baseStyle: (props: StyleFunctionProps) => ({
        container: {
            size: 'xs',
            placement: "left",
        },
        content: {
            backgroundColor: mode('secondary', 'secondaryDark')(props),
        },
    }),
    defaultProps: {},
};
