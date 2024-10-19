import React, { useState } from 'react';
import { IconButton, HStack, useMultiStyleConfig } from '@chakra-ui/react';
import { MultipleSwitchProps, Option, SliderOption } from './component.types';
import style from './component.module.scss';

const MultipleSwitch: React.FC<MultipleSwitchProps> = ({
  options,
  sliderOptions,
  onClickOption,
  onClickSliderOption,
}) => {
  const styles = useMultiStyleConfig('MultipleSwitch', {});

  const [buttons, setButtons] = useState<boolean[]>(
    options.map((button) => button.enable)
  );
  
  const [sliderButtons, setSliderButtons] = useState<boolean[]>(
    sliderOptions.map((sliderButton) => sliderButton.enable)
  );

  return (
    <HStack className={style.container}>
      <HStack className={style.options}>
        {options.map((option: Option, optIndex: number) => (
          <IconButton
            key={option.key}
            className={style.button}
            sx={styles.button}
            icon={option.icon}
            isActive={buttons[optIndex]}
            variant="unstyled"
            aria-label={`Switch option ${option.key}`}  // Aggiungi aria-label qui
            onClick={() => {
              const updatedButtons = buttons.map((value, index) =>
                index === optIndex ? !value : value
              );
              setButtons(updatedButtons);
              onClickOption(option.key, updatedButtons[optIndex]);
            }}
          />
        ))}
      </HStack>

      <HStack className={style.slider} sx={styles.slider}>
        {sliderOptions.map((option: SliderOption, optIndex: number) => (
          <IconButton
            key={option.key}
            icon={option.icon}
            isActive={sliderButtons[optIndex]}
            variant="unstyled"
            className={style.button}
            sx={styles.button}
            aria-label={`Switch option ${option.key}`}  // Aggiungi aria-label qui
            onClick={() => {
              const updatedSliderButtons = sliderButtons.map((value) => !value);
              setSliderButtons(updatedSliderButtons);
              onClickSliderOption(option.key, updatedSliderButtons[optIndex]);
            }}
          />
        ))}
      </HStack>
    </HStack>
  );
};

export default MultipleSwitch;
