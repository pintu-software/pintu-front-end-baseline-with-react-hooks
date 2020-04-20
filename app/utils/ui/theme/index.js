import { createMuiTheme } from '@material-ui/core/styles';
import { fontSize } from '../typography';
import { primary, textColor } from '../palette';

const baseButtonStyles = {
  fontFamily: 'Lato',
  fontSize: fontSize.md,
  textTransform: 'capitalize',
  borderRadius: 4,
  padding: '0.5em 2em',
};

const theme = createMuiTheme({
  /** When the configuration variables aren't powerful enough, you can take advantage of the overrides key of the theme to potentially change every single style injected by Material-UI into the DOM.  */
  overrides: {
    MuiButton: {
      text: {
        ...baseButtonStyles,
        color: textColor.inverse,
        background: primary.main,
        '&:hover': {
          background: primary.darker,
        },
      },
      textSecondary: {
        ...baseButtonStyles,
        color: textColor.main,
        background: 'transparent',
        border: `1px solid ${primary.main}`,
        borderColor: primary.main,
        '&:hover': {
          background: 'transparent',
          borderColor: primary.darker,
          border: `1px solid ${primary.darker}`,
        },
      },
    },
    MuiTextField: {
      root: {
        fontSize: fontSize.md,
      },
    },
  },
  /** You can change the default props of all the Material-UI components. A props key is exposed in the theme for this use case. */
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
});

export default theme;
