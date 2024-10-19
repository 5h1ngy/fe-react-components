import PropTypes from 'prop-types';

/**
 * @typedef {Object} Action
 * @property {import('react').ReactElement} icon - Icona del pulsante nell'ActionBar.
 */

/**
 * @typedef {Object} NavigationItem
 * @property {string} label - Etichetta di navigazione visualizzata nel breadcrumb.
 * @property {string} href - Collegamento del breadcrumb.
 */

/**
 * @typedef {Object} Position
 * @property {string} top - La posizione `top` per l'ActionBar.
 */

/**
 * @typedef {Object} ThemeConfig
 * @property {string} primaryColor - Colore primario per l'ActionBar.
 * @property {string} secondaryColor - Colore secondario per l'ActionBar.
 */

/**
 * @typedef {Object} Config
 * @property {ThemeConfig} theme - Configurazione del tema per l'ActionBar.
 */

/**
 * @typedef {Object} ActionBarProps
 * @property {Config} config - Configurazione del tema.
 * @property {Action[]} actions - Array di azioni con pulsanti.
 * @property {NavigationItem[]} navigation - Elementi di navigazione da visualizzare nel breadcrumb.
 * @property {Position} position - Posizione del componente.
 */

export default {
    config: PropTypes.shape({
        theme: PropTypes.shape({
            primaryColor: PropTypes.string.isRequired,
            secondaryColor: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
    actions: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.element.isRequired,
        })
    ).isRequired,
    navigation: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
        })
    ).isRequired,
    position: PropTypes.shape({
        top: PropTypes.string.isRequired,
    }).isRequired,
};
