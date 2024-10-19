import React from 'react';
import { Flex, IconButton, Breadcrumb, BreadcrumbItem, BreadcrumbLink, useMultiStyleConfig } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import propTypes from './component.propTypes';
import styles from './component.module.scss';

/**
 * ActionBar component displays a responsive action bar with breadcrumb navigation and action buttons.
 *
 * @component
 * @param {import('./component.propTypes').ActionBarProps} props - The props for the component.
 * @param {string} props.variant - The variant for the component styling (e.g., 'rounded', 'shadow', 'minimal').
 */
function ActionBar({ actions, navigation, position, variant = 'rounded' }) {
    // Chakra UI styles configuration based on the variant
    const chakraStyles = useMultiStyleConfig('ActionBar', { variant });

    return (
        <Flex
            className={`${styles.container} ${position.top === 'inherit' ? styles['container--rounded'] : styles['container--shadow']}`}
            style={{ top: position.top }}
            {...chakraStyles.container} // Applica gli stili definiti da Chakra UI in base al variant
        >
            {/* Breadcrumb Navigation */}
            <Breadcrumb className={styles.navigation} separator={<ChevronRightIcon className={styles.separator} {...chakraStyles.separator} />}>
                {navigation.map((item, index) => (
                    <BreadcrumbItem key={crypto.randomUUID()} isCurrentPage={index === navigation.length - 1}>
                        <BreadcrumbLink className={styles['breadcrumb-link']} {...chakraStyles.breadcrumbLink} href={item.href}>
                            {item.label}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                ))}
            </Breadcrumb>

            {/* Action Buttons */}
            <Flex className={styles.action}>
                {actions.map((item) => (
                    <IconButton key={crypto.randomUUID()} icon={item.icon} {...chakraStyles.button} className={styles.button} />
                ))}
            </Flex>
        </Flex>
    );
}

ActionBar.propTypes = propTypes;

export default ActionBar;
