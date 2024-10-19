import PropTypes from 'prop-types';

/**
 * @typedef {Object} Option
 * @property {string} key - Unique key for the option.
 * @property {ReactElement} icon - Icon to display for the option.
 * @property {boolean} enable - Initial enabled state of the option.
 */

/**
 * @typedef {Object} SliderOption
 * @property {string} key - Unique key for the slider option.
 * @property {ReactElement} icon - Icon to display for the slider option.
 * @property {boolean} enable - Initial enabled state of the slider option.
 */

/**
 * @typedef {Object} MultipleSwitchProps
 * @property {Option[]} options - Array of option objects for the switch.
 * @property {SliderOption[]} sliderOptions - Array of slider option objects for the switch.
 * @property {Function} onClickOption - Handler function called when an option is clicked.
 * @property {Function} onClickSliderOption - Handler function called when a slider option is clicked.
 */

export default {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string.isRequired,
            icon: PropTypes.element.isRequired,
            enable: PropTypes.bool.isRequired,
        })
    ).isRequired,
    sliderOptions: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string.isRequired,
            icon: PropTypes.element.isRequired,
            enable: PropTypes.bool.isRequired,
        })
    ).isRequired,
    onClickOption: PropTypes.func.isRequired,
    onClickSliderOption: PropTypes.func.isRequired,
};
