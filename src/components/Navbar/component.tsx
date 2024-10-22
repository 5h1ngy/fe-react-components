import React from 'react';
import { Flex, IconButton, Stack, Text, useMultiStyleConfig } from '@chakra-ui/react';
import { Props } from './component.types';
import styles from './component.module.scss';

const Navbar: React.FC<Props> = (props) => {
    const { inverted, navigation, onClick } = props
    const chakraStyles = useMultiStyleConfig('Component.Navbar', { variant: inverted ? 'inverted' : 'default' });

    return (
        <Flex className={styles.container}>
            {navigation.map(item => (
                <Stack key={item.key} className={styles.container}>
                    <IconButton className={styles.button} sx={chakraStyles.button}
                        variant={'ghost'}
                        icon={item.icon}
                        aria-label={item.label}
                        onClick={() => onClick(item.key, !item.enable)}
                    />
                    <Text fontSize="sm" className={styles.text} sx={chakraStyles.text}>
                        {item.label}
                    </Text>
                </Stack>
            ))}
        </Flex>
    );
};

export default Navbar;
