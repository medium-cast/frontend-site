/* eslint-disable no-underscore-dangle...*/
import {
    createMuiTheme,
} from '@material-ui/core/styles';

// Create a theme with Gatsby brand colors. You can choose your own
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ffa326'
        },
        secondary: {
            main: '#E95E58'
        }
    }
});

function createPageContext() {
    return {
        theme
    };
}

export default function getPageContext() {
    // Make sure to create a new context for every server-side request so that data
    // isn't shared between connections (which would be bad).
    if (!process.browser) {
        return createPageContext();
    }

    // Reuse context on the client-side.
    if (!global.__INIT_MATERIAL_UI__) {
        global.__INIT_MATERIAL_UI__ = createPageContext();
    }

    return global.__INIT_MATERIAL_UI__;
}
