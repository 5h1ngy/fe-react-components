import { SettingsIcon, AddIcon } from '@chakra-ui/icons';
import Navbar from './component';

export default {
    title: 'Components/Navbar',
    component: Navbar,
}

// Esempio di azioni per l'ActionBar
const props = {
    navigation: [
        { key: 'home', label: 'Home', icon: <SettingsIcon />, enable: true },
        { key: 'settings', label: 'Settings', icon: <AddIcon />, enable: false },
    ],
    onClick: (key: string, enable: boolean) => console.log(`Clicked ${key}, enabled: ${enable}`),
}

// Definizione della storia principale
export const Default = () => (
    // <div style={{ minWidth: '50vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Navbar {...props} inverted={false} />
    //</div>
);

export const Inverted = () => (
    // <div style={{ minWidth: '50vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Navbar {...props} inverted={true} />
    //</div>
);