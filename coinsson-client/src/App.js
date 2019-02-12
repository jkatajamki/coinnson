import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import RootContainer from './Layout/RootContainer';
import { theme } from './style';
import { TabContainer } from './TabContainer/TabContainer';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Montserrat|Staatliches');
    font-family: 'Montserrat', sans-serif;
  }
  h1, h2, h3, h4, h5, button {
    font-family: 'Staatliches', sans-serif;
    letter-spacing: 0.1em;
  }
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <RootContainer>
          <GlobalStyles />
          <TabContainer />
        </RootContainer>
      </ThemeProvider>
    );
  }
}

export default App;
