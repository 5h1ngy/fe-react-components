import React from 'react';

import { chakra, useMultiStyleConfig } from '@chakra-ui/react';
import { Drawer, DrawerBody } from '@chakra-ui/react'
import { DrawerOverlay, DrawerContent, DrawerCloseButton } from '@chakra-ui/react'

import { Props } from './Drawer.types';
import styles from './component.module.scss';

const Component: React.FC<Props> = (props) => {
    const { isOpen, onClose, children } = props;
    const chakraStyles = useMultiStyleConfig('Page.Dashboard.Drawer');

    return <Drawer className={styles.container} sx={chakraStyles.content} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent className={styles.content} sx={chakraStyles.content}>
            <DrawerCloseButton />
            <DrawerBody className={styles.body}>
                {children}
            </DrawerBody>
        </DrawerContent>
    </Drawer>
}

export default Component;