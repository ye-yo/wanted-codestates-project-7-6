import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        Hello World
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
