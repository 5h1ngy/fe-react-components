import { SettingsIcon, AddIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';
import MultipleSwitch from './component';

export default {
  title: 'Components/MultipleSwitch',
  component: MultipleSwitch,
};

const options = [
  { key: 'github', icon: <SettingsIcon />, enable: true },
  { key: 'host', icon: <AddIcon />, enable: false },
]

const sliderOptions = [
  { key: 'slider1', icon: <SunIcon />, enable: false },
  { key: 'slider2', icon: <MoonIcon />, enable: true },
]

const onClickOption = (key: string, state: boolean) => {
  console.log(`Option ${key} is now ${state}`)
}

const onClickSliderOption = (key: string, state: boolean) => {
  console.log(`Slider option ${key} is now ${state}`)
}

export const Default = () => (
  <MultipleSwitch
    options={options}
    sliderOptions={sliderOptions}
    onClickOption={onClickOption}
    onClickSliderOption={onClickSliderOption}
  />
)
