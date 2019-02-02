import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import RootContainer from './Layout/RootContainer';
import { theme } from './style';
import { TabContainer } from './TabContainer/TabContainer';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <RootContainer>
          <TabContainer />
        </RootContainer>
      </ThemeProvider>
    );
  }
}

export default App;
