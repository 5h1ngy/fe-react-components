import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { SettingsIcon, AddIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';
import { action } from '@storybook/addon-actions';

import Component from './component';
import theme from '../../theme';

export default {
  title: 'Components/MultipleSwitch',
  component: Component,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'light', value: '#fff' },
        { name: 'dark', value: '#333' },
      ],
    },
    docs: {
      description: {
        component: `
### MultipleSwitch Component

Il componente \`MultipleSwitch\` visualizza un gruppo di pulsanti opzione e pulsanti slider. È utile per consentire agli utenti di effettuare selezioni multiple o alternare tra diverse opzioni.

#### Proprietà

- \`options\`: Array di oggetti opzione per il gruppo di pulsanti.
- \`sliderOptions\`: Array di oggetti opzione per il gruppo slider.
- \`onClickOption\`: Funzione callback chiamata quando viene cliccato un pulsante opzione.
- \`onClickSliderOption\`: Funzione callback chiamata quando viene cliccato un pulsante slider.

#### Esempio di utilizzo

\`\`\`jsx
<MultipleSwitch
  options={[
    { key: 'option1', icon: <SettingsIcon />, enable: true },
    { key: 'option2', icon: <AddIcon />, enable: false },
  ]}
  sliderOptions={[
    { key: 'slider1', icon: <SunIcon />, enable: false },
    { key: 'slider2', icon: <MoonIcon />, enable: true },
  ]}
  onClickOption={(key, state) => console.log(\`Option \${key} is now \${state}\`)}
  onClickSliderOption={(key, state) => console.log(\`Slider option \${key} is now \${state}\`)}
/>
\`\`\`
`,
      },
    },
  },
  argTypes: {
    options: {
      control: 'object',
      description: 'Array di opzioni per lo switch',
      table: {
        type: { summary: 'Array<{ key: string; icon: ReactElement; enable: boolean }>' },
      },
    },
    sliderOptions: {
      control: 'object',
      description: 'Array di opzioni slider per lo switch',
      table: {
        type: { summary: 'Array<{ key: string; icon: ReactElement; enable: boolean }>' },
      },
    },
    onClickOption: {
      action: 'clickedOption',
      description: 'Gestore per i click sulle opzioni',
      table: {
        type: { summary: '(key: string, state: boolean) => void' },
      },
    },
    onClickSliderOption: {
      action: 'clickedSliderOption',
      description: 'Gestore per i click sulle opzioni slider',
      table: {
        type: { summary: '(key: string, state: boolean) => void' },
      },
    },
  },
};

const Template = (args) => <Component {...args} />;

export const Example = Template.bind({});
Example.args = {
  options: [
    { key: 'github', icon: <SettingsIcon />, enable: true },
    { key: 'host', icon: <AddIcon />, enable: false },
  ],
  sliderOptions: [
    { key: 'slider1', icon: <SunIcon />, enable: false },
    { key: 'slider2', icon: <MoonIcon />, enable: true },
  ],
  onClickOption: action('Option clicked'),
  onClickSliderOption: action('Slider option clicked'),
};

Example.storyName = 'Esempio';
