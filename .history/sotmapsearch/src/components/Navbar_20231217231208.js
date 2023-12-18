import React from 'react';
import { AppBar, Toolbar, Typography, CssBaseline, createTheme, ThemeProvider, Container } from '@mui/material';

const seaOfThievesTheme = createTheme({
  palette: {
    primary: {
      main: '#1e1e1e', // Background color
    },
  },
  typography: {
    fontFamily: 'Sea of Thieves', // Specify your custom font here
    h6: {
      fontSize: '24px', // Adjust font size as needed
    },
  },
});

const navbarStyle = {
  flexGrow: 1,
  textAlign: 'center',
};

function SeaOfThievesNavbar() {
  return (
    <ThemeProvider theme={seaOfThievesTheme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Container>
            <Typography variant="h6" component="div" style={navbarStyle}>
              Sea of Thieves- Island Search
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default SeaOfThievesNavbar;

