import { mode } from '@chakra-ui/theme-tools';
import { StyleFunctionProps } from '@chakra-ui/react';

const ActionBar = {
    parts: ['container', 'button', 'navigation', 'action', 'breadcrumbLink', 'separator'],
    baseStyle: (props: StyleFunctionProps) => ({
        container: {
            bg: mode('primary', 'primaryDark')(props), // Colore di base
            width: '100%', // Adattabile al contenitore
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingX: '20px',
            height: '80px',
        },
        button: {
            borderRadius: '25px',
            color: mode('secondary', 'secondaryDark')(props),
            _hover: {
                color: mode('primary', 'primaryDark')(props),
                bg: mode('secondary', 'secondaryDark')(props),
            },
        },
        separator: {
            color: mode('secondary', 'secondaryDark')(props),
        },
        breadcrumbLink: {
            color: mode('secondary', 'secondaryDark')(props),
            fontWeight: '600',
            fontSize: '25px',
        },
    }),
    variants: {
        rounded: {
            container: {
                borderRadius: '25px',
            },
        },
        shadow: {
            container: {
                boxShadow: '0px 0px 5px 3px rgba(0, 0, 0, 0.1)',
            },
        },
    },
    defaultProps: {
        variant: 'rounded', // Imposta un variant di default
    },
};

export default ActionBar;
