import { createMuiTheme } from '@material-ui/core/styles';
import { fontSize } from '../typography';
import { primary, common, textColor } from '../palette';

const baseButtonStyles = {
  fontFamily: 'Roboto',
  fontSize: fontSize.md,
  textTransform: 'capitalize',
  borderRadius: 4,
  padding: '0.25em 2.5em',
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
          background: primary.dark,
        },
        '&:disabled': {
          background: common.disabled,
          cursor: 'not-allowed',
          pointerEvents: 'auto',
          '&:hover': {
            background: common.disabled,
          },
        },
      },
      textSecondary: {
        ...baseButtonStyles,
        color: textColor.main,
        background: 'transparent',
        border: `1px solid ${primary.main}`,
        '&:hover': {
          background: 'transparent',
          border: `1px solid ${primary.dark}`,
        },
        '&:disabled': {
          border: `1px solid ${common.disabled}`,
          cursor: 'not-allowed',
          pointerEvents: 'auto',
          '&:hover': {
            border: `1px solid ${common.disabled}`,
          },
        },
      },
    },
    MuiTextField: {
      root: {
        minWidth: '240px',
        maxWidth: '240px',
        '& label.Mui-focused': {
          color: primary.main,
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: primary.main,
        },
        '& .MuiInput-underline.Mui-error:after': {
          borderBottomColor: common.error,
        },
        '& .MuiFormHelperText-root': {
          color: common.error,
        },
      },
    },
    MuiTypography: {
      h1: {
        fontSize: '40px',
      },
      h2: {
        fontSize: '28px',
      },
      h3: {
        fontSize: '24px',
      },
      h4: {
        fontSize: '20px',
      },
      h5: {
        fontSize: '16px',
      },
      h6: {
        fontSize: '14px',
      },
      body1: {
        fontSize: '16px',
      },
      body2: {
        fontSize: '14px',
      },
      subtitle1: {
        fontSize: '16px',
        fontWeight: 'bold',
      },
      subtitle2: {
        fontSize: '14px',
        fontWeight: 'bold',
      },
    },
  },
  /** You can change the default props of all the Material-UI components. A props key is exposed in the theme for this use case. */
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiInputLabel: {
      shrink: true,
    },
  },
});

export default theme;
