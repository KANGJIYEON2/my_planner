import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import GlobalStyle from './assets/styles/global-styles.ts';
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/styles/theme.ts';

createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={theme}>
        <StrictMode>
            <GlobalStyle />
            <App />
        </StrictMode>
    </ThemeProvider>
);
