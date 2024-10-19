import { SettingsIcon, AddIcon } from '@chakra-ui/icons';
import ActionBar from './component';

// Configurazione delle storie
export default {
  title: 'Components/ActionBar',
  component: ActionBar,
};

// Esempio di azioni per l'ActionBar
const actions = [
  { icon: <SettingsIcon /> },
  { icon: <AddIcon /> },
];

// Esempio di navigazione per l'ActionBar
const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Dashboard', href: '/dashboard' },
];

// Esempio di posizione
const position = { top: '0' };

// Definizione della storia principale
export const Default = () => (
  <div style={{ minWidth: '50vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <ActionBar actions={actions} navigation={navigation} position={position} />
  </div>
);

// Variante con tema shadow
export const Shadow = () => (
  <div style={{ minWidth: '50vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <ActionBar actions={actions} navigation={navigation} position={position} variant="shadow" />
  </div>
);
