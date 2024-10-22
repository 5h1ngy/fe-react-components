import { ReactElement } from 'react';

export interface Props {
    onClose: () => void,
    isOpen: boolean,
    children: ReactElement,
}