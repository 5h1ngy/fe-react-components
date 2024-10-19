import { mode } from '@chakra-ui/theme-tools';
import { StyleFunctionProps } from '@chakra-ui/react';

const ActionBar = {
    parts: ['container', 'button', 'breadcrumbLink', 'separator'],
    baseStyle: (props: StyleFunctionProps) => ({
        container: {
            bg: mode('primary', 'primaryDark')(props), // Colore di base
        },
        button: {
            borderRadius: '25px', // Imposta il borderRadius per la variante "rounded" o di default
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
                borderRadius: '25px',  // Bordi arrotondati per la variante "rounded"
            },
        },
        shadow: {
            container: {
                boxShadow: '0px 0px 5px 3px rgba(0, 0, 0, 0.1)',  // Ombra per la variante "shadow"
                borderRadius: '0',  // Rimuovi il bordo arrotondato nella variante "shadow"
            },
        },
    },
    defaultProps: {
        variant: 'rounded', // Variante predefinita "rounded"
    },
};

export default ActionBar;
