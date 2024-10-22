import { SettingsIcon, AddIcon } from '@chakra-ui/icons';
import Component from './component';

export default {
    title: 'Pages/Dashboard',
    component: Component,
}

// Esempio di azioni per l'ActionBar
const props = {
    
}

// Definizione della storia principale
export const Default = () => (
    <div style={{ minWidth: '50vw', minHeight: '50vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Component {...props} >
            <h1> Hello World </h1>
        </Component>
    </div>
);