import React from 'react';
import ActionBar from './component';

// Configurazione delle storie
export default {
  title: 'Components/ActionBar',
  component: ActionBar,
};

// Esempio di azioni per l'ActionBar
const actions = [
  { icon: <i className="fas fa-cog" /> },
  { icon: <i className="fas fa-bell" /> },
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
  <ActionBar actions={actions} navigation={navigation} position={position} />
);

// Variante con tema minimal
export const Minimal = () => (
  <ActionBar actions={actions} navigation={navigation} position={position} variant="minimal" />
);

// Variante con tema shadow
export const Shadow = () => (
  <ActionBar actions={actions} navigation={navigation} position={position} variant="shadow" />
);

// Variante con posizione "inherit"
export const RoundedPosition = () => (
  <ActionBar actions={actions} navigation={navigation} position={{ top: 'inherit' }} variant="rounded" />
);
