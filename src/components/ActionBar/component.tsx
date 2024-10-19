import React from 'react';
import { Flex, IconButton, Breadcrumb, BreadcrumbItem, BreadcrumbLink, useMultiStyleConfig } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { ActionBarProps } from './component.types';
import styles from './component.module.scss';

const ActionBar: React.FC<ActionBarProps> = ({
    actions,
    navigation,
    position,
    variant = 'rounded',
}) => {
    const chakraStyles = useMultiStyleConfig('ActionBar', { variant });

    return (
        <Flex
            className={`${styles.container} ${position.top === 'inherit' ? styles['container--rounded'] : styles['container--shadow']}`}
            style={{ top: position.top }}
            sx={chakraStyles.container}
        >
            {/* Breadcrumb Navigation */}
            <Breadcrumb
                className={styles.navigation}
                separator={<ChevronRightIcon className={styles.separator} sx={chakraStyles.separator} />}
            >
                {navigation.map((item, index) => (
                    <BreadcrumbItem key={index} isCurrentPage={index === navigation.length - 1}>
                        <BreadcrumbLink
                            href={item.href}
                            sx={chakraStyles.breadcrumbLink}
                        >
                            {item.label}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                ))}
            </Breadcrumb>

            {/* Action Buttons */}
            <Flex className={styles.action}>
                {actions.map((item, index) => (
                    <IconButton
                        key={index}
                        className={styles.button}
                        sx={chakraStyles.button}
                        icon={item.icon}
                        aria-label={`Action ${index}`}
                    />
                ))}
            </Flex>
        </Flex>
    );
};

export default ActionBar;
