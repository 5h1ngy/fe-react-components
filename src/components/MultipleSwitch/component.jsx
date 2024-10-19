import React, { useState } from 'react';
import { IconButton, HStack, useMultiStyleConfig } from '@chakra-ui/react';

import propTypes from './component.propTypes'
import style from './component.module.scss';

/**
 * MultipleSwitch component displays a group of option buttons and slider option buttons.
 *
 * @component
 * @param {import('./component.propTypes').MultipleSwitchProps} props - The props for the component.
 */
function Component({ options, sliderOptions, onClickOption, onClickSliderOption }) {
    const styles = useMultiStyleConfig('MultipleSwitch', {});
    const [buttons, setButtons] = useState(options.map((button) => button.enable));
    const [sliderButtons, setSliderButtons] = useState(sliderOptions.map((sliderButton) => sliderButton.enable));

    return (
        <HStack className={style.container}>
            {/* Option Buttons */}
            <HStack className={style.options}>
                {options.map((option, optIndex) => (
                    <IconButton
                        key={option.key}
                        icon={option.icon}
                        isActive={buttons[optIndex]}
                        variant="unstyled"
                        className={style.button}
                        sx={styles.button}
                        onClick={() => {
                            const updatedButtons = buttons.map((value, index) => (index === optIndex ? !value : value));
                            setButtons(updatedButtons);
                            onClickOption(option.key, updatedButtons[optIndex]);
                        }}
                    />
                ))}
            </HStack>

            {/* Slider */}
            <HStack className={style.slider} sx={styles.slider}>
                {sliderOptions.map((option, optIndex) => (
                    <IconButton
                        key={option.key}
                        icon={option.icon}
                        isActive={sliderButtons[optIndex]}
                        variant="unstyled"
                        className={style.button}
                        sx={styles.button}
                        onClick={() => {
                            const updatedSliderButtons = sliderButtons.map(value => !value);
                            setSliderButtons(updatedSliderButtons);
                            onClickSliderOption(option.key, updatedSliderButtons[optIndex]);
                        }}
                    />
                ))}
            </HStack>
        </HStack>
    );
}

Component.propTypes = propTypes;

export default Component;
