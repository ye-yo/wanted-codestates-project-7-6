import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import theme from './styles/theme';
import AddressProvider from './context/AddressContext';
import StepProvider from './context/StepContext';
import FooterProvider from './context/FooterContext';
import Router from './Router';

const AppProvider = ({ contexts, children }) =>
  contexts.reduce(
    (prev, context) =>
      React.createElement(context, {
        children: prev,
      }),
    children
  );
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider contexts={[StepProvider, FooterProvider, AddressProvider]}>
        <Router />
        <GlobalStyle />
      </AppProvider>
    </ThemeProvider>
  );
}
