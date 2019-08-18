import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#FFDE03',
            100: '#FEFAC0',
            600: '#FFDE03',
            50: '#FFFEE6'
        },
        secondary: {
            main: '#0336ff',
            100: '#CDC4FE',
        },
    },
    typography: {
        fontFamily: ['Raleway']
    }
});
