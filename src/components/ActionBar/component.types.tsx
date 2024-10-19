import { ReactElement } from 'react';

export interface Action {
  icon: ReactElement;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface Position {
  top: string;
}

export interface ActionBarProps {
  actions: Action[];
  navigation: NavigationItem[];
  position: Position;
  variant?: 'rounded' | 'shadow' | 'minimal';
}
