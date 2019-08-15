import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#FFDE03',
            100: '#FEFAC0',
            50: '#FFFEE6'
        },
        secondary: {
            main: '#0336ff',
        },
    },
    typography: {
        fontFamily: ['Raleway']
    }
});
