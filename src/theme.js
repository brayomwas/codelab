import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        h1: {
            fontFamily: 'Open Sans, sans-serif',
            fontSize: 40,
            fontWeight: 400,
        },
        h2: {
            fontFamily: 'Open Sans, sans-serif',
            fontSize: 30,
            fontWeight: 400,
        },
        h3: {
            fontFamily: 'Open Sans, sans-serif',
            fontSize: 25,
            fontWeight: 400,
        },
        h4: {
            fontFamily: 'Open Sans, sans-serif',
            fontSize: 22.5,
            fontWeight: 400,
        },
        h5: {
            fontFamily: 'Open Sans, sans-serif',
            fontSize: 20,
            fontWeight: 400,
        },
        h6: {
            fontFamily: 'Open Sans, sans-serif',
            fontSize: 18,
            fontWeight: 400,
        },
        p: {
            fontFamily: 'Roboto, sans-serif',
            fontSize: 16,
            fontWeight: 400, 
        }
    },
    palette: {
        primary: {
            main: '#011638'
        },
        secondary: {
            main: '#3366CC'
        }
    }
});

export default theme;