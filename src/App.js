import Home from './components/Home';
import Art from './components/Art';
import Menu from './components/Menu';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import { Typography } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({

  palette: {
    primary: { main: '#DAD2BC', contrastText: '#252323' },
    secondary: { main: '#70798C', contrastText: '#252323' },
    text: { primary: '#252323', secondary: '#70798C', contrastText: '#70798C' },
    background: { default: '#DAD2BC', secondary: '#F5F1ED' }
  },

  typography: {
    fontFamily: "'Koulen', sans-serif",
    fontWeight: '400',
    fontStyle: 'regular',
  },
});


function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Menu />}>
            <Route index element={<Home />} />
            <Route path='Home' element={<Home />} />
            <Route path='Art' element={<Art />} />
            <Route path='Contact' element={<Contact />} />
            <Route path='About' element={<About/>} />
            <Route path='*' element={<Typography sx={{ margin: 3 }}>Page not found</Typography>} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
