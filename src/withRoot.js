import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import getPageContext from './getPageContext';

function withRoot(Component) {
    class WithRoot extends React.Component {
        constructor(props) {
            super(props);
            this.muiPageContext = getPageContext();
        }

        componentDidMount() {
            // Remove the server-side injected CSS.
            const jssStyles = document.querySelector('#jss-server-side');
            if (jssStyles && jssStyles.parentNode) {
                jssStyles.parentNode.removeChild(jssStyles);
            }
        }

        render() {
            return (
              <MuiThemeProvider
                theme={this.muiPageContext.theme}
                sheetsManager={this.muiPageContext.sheetsManager}
              >
                  {/* Kickstart a simple baseline to build upon. */}
                  <CssBaseline />
                  <Component {...this.props} />
              </MuiThemeProvider>
            );
        }
    }

    return WithRoot;
}

export default withRoot;
