import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#3640FF',
        },
        secondary: {
            main: '#FFFFFF',
            light: '#F8F9FA'
        },
        text: {
            primary: 'rgba(0,0,0,1)',
            secondary: 'rgba(0,0,0,0.6)',
        }
    },
    typography: {
        useNextVariants: true,
        h5: {
            fontWeight: 500,
        }
    }
});
