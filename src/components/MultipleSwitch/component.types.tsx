import { ReactElement } from 'react';

export interface Option {
    key: string;
    icon: ReactElement;
    enable: boolean;
}

export interface SliderOption {
    key: string;
    icon: ReactElement;
    enable: boolean;
}

export interface MultipleSwitchProps {
    options: Option[];
    sliderOptions: SliderOption[];
    onClickOption: (key: string, state: boolean) => void;
    onClickSliderOption: (key: string, state: boolean) => void;
}
