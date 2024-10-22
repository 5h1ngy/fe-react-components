import React, { useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";

import { useMultiStyleConfig } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react'
import { Spacer } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import { useMediaQuery, useDisclosure } from '@chakra-ui/react'

import { DragHandleIcon, HamburgerIcon, ViewIcon } from '@chakra-ui/icons'
import { HomeIcon, PhotoIcon, ArchiveBoxIcon, CircleStackIcon } from '@heroicons/react/24/outline'
import { CodeBracketIcon, CloudIcon } from '@heroicons/react/24/outline'


import MultipleSwitch from '@components/MultipleSwitch'
import Navbar from '@components/Navbar'
import ActionBar from '@components/ActionBar'
import Drawer from './Drawer'

import Props from "./component.types";
import styles from './component.module.scss';


const config = {
    navbar: {
        navigation: [
            { key: 'home', enable: true, icon: <HomeIcon />, label: "Home" },
            { key: 'documents', enable: true, icon: <PhotoIcon />, label: "Documents" },
            { key: 'images', enable: true, icon: <ArchiveBoxIcon />, label: "Images" },
            { key: 'music', enable: true, icon: <CircleStackIcon />, label: "Music" },
        ],
        onClick: (key: string, enable: boolean) => {
            console.log(key, enable)
        },
        inverted: false,
    },
    actionBar: {
        actions: [
            { icon: <CodeBracketIcon /> },
            { icon: <CloudIcon /> }
        ]
    },
    multipleSwitch: {
        options: [
            { key: "enableHiddenFiles", icon: <ViewIcon />, enable: true },
        ],
        sliderOptions: [
            { key: "enableViewModeGrid", icon: <DragHandleIcon />, enable: true },
            { key: "enableViewModeList", icon: <HamburgerIcon />, enable: true },
        ],
        onClickOption: (key: string, state: boolean) => {
            console.log(key, state)
        },
        onClickSliderOption: (key: string, state: boolean) => {
            console.log(key, state)
        }
    }
}

const Component: React.FC<Props> = (props) => {
    const { children } = props;
    const chakraStyles = useMultiStyleConfig('Page.Dashboard');

    const [isDrawer] = useMediaQuery('(min-width: 1022px)')
    const { isOpen: drawerIsOpen, onOpen: drawerOnOpen, onClose: drawerOnClose } = useDisclosure()

    const [positionContent, setPositionContent] = useState('inherit')
    const [navbarMode, setNavbarMode] = useState('FULL')

    const [navigation] = useState([
        { label: 'Home', href: '/' },
        { label: 'Dashboard', href: '/dashboard' },
    ])

    // Scrolling layer of body
    useEffect(() => {
        window.addEventListener('scroll', function scrollEventListener() {
            if (window.scrollY < 140) setPositionContent('inherit')
            else setPositionContent('0vh')
        })
    })

    // Switch viewmode
    useEffect(() => {
        if (isDrawer) setNavbarMode('FULL')
        else setNavbarMode('DRAWER')
    }, [isDrawer])

    return <Grid className={styles.main} sx={chakraStyles.main}>

        <GridItem className={styles.header} sx={chakraStyles.header}>
            {navbarMode === 'DRAWER'
                ? <IconButton className={styles.button}
                    icon={<HamburgerIcon />}
                    aria-label={'menu'}
                    onClick={() => drawerOnOpen()}
                />
                : undefined
            }

            <Spacer />

            <MultipleSwitch {...config.multipleSwitch} />
        </GridItem>

        {navbarMode === 'FULL'
            ? <GridItem className={styles.navbar} sx={chakraStyles.navbar}>
                <Navbar {...config.navbar} />
            </GridItem>
            : drawerIsOpen
                ? <Drawer isOpen={drawerIsOpen} onOpen={drawerOnOpen} onClose={drawerOnClose}>
                    <Navbar {...config.navbar} inverted />
                </Drawer>
                : undefined
        }

        <GridItem className={isDrawer ? styles["body--drawer"] : styles["body"]} sx={chakraStyles.body}>
            <ActionBar position={{ top: positionContent }} {...config.actionBar} navigation={navigation} />

            {!children ? <Outlet /> : children}

            <Spacer />

            <GridItem sx={chakraStyles.footer}>
                Footer
            </GridItem>
        </GridItem>

    </Grid>;
}

export default Component;