import { ReactElement } from 'react';

export interface NavigationItem {
    key: string;
    label: string;
    icon: ReactElement;
    enable: boolean;
}

export interface Props {
    inverted: boolean;
    navigation: Array<NavigationItem>;
    onClick: (key: string, enable: boolean) => void;
}
