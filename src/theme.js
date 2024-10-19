import { extendTheme } from '@chakra-ui/react';
import MultipleSwitch from './components/MultipleSwitch/component.theme';
import ActionBar from './components/ActionBar/component.theme';
import Navbar from './components/Navbar/component.theme';

const colors = {
    primary: '#3182CE',
    secondary: '#EBF8FF',
    tertiary: '#BEE3F8',
    primaryDark: '#2B6CB0',
    secondaryDark: '#2A4365',
    tertiaryDark: '#2C5282',
};

const theme = extendTheme({
    colors,
    components: {
        MultipleSwitch,
        ActionBar,
        Navbar,
    },
});

export default theme;
