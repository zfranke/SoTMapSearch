import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#1e1e1e', // Sea of Thieves theme color
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    fontFamily: 'Sea of Thieves', // You can specify a custom font here
    fontSize: '24px',
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Sea of Thieves - Map Search
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
