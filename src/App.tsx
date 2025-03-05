import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './pages/Home';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#E8DCC4',
      dark: '#D4B996',
    },
    secondary: {
      main: '#C4A484',
    },
    background: {
      default: '#1A1A1A',
      paper: '#2A2A2A',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#E8DCC4',
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    h1: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      color: '#FFFFFF',
      textShadow: '0 0 20px rgba(232, 220, 196, 0.3)',
      '@media (max-width:900px)': {
        fontSize: '2.5rem',
      },
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h2: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
      color: '#FFFFFF',
      textShadow: '0 0 15px rgba(232, 220, 196, 0.3)',
      '@media (max-width:900px)': {
        fontSize: '2rem',
      },
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h3: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
      fontSize: '2rem',
      color: '#FFFFFF',
      textShadow: '0 0 10px rgba(232, 220, 196, 0.3)',
    },
    h4: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
      color: '#E8DCC4',
    },
    body1: {
      fontSize: '1.125rem',
      lineHeight: 1.6,
      color: '#E8DCC4',
      '@media (max-width:600px)': {
        fontSize: '1rem',
      },
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
      fontSize: '1rem',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          minHeight: '100vh',
          width: '100%',
          backgroundColor: '#1A1A1A',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '12px 24px',
          fontSize: '1rem',
          fontWeight: 600,
        },
        contained: {
          backgroundColor: '#E8DCC4',
          color: '#1A1A1A',
          '&:hover': {
            backgroundColor: '#D4B996',
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (min-width: 1200px)': {
            maxWidth: '1200px',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#2A2A2A',
          boxShadow: '0 0 20px rgba(232, 220, 196, 0.1)',
          borderRadius: 12,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
