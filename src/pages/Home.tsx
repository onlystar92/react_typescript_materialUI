import React from 'react';

// material ui core components
import { Grid } from '@material-ui/core';

// styles
import { makeStyles } from '@material-ui/core/styles';

// import context variables
import { useColorMode } from 'hook/context/ColorModeContext';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    width: '100%',
    height: 'calc(100vh - 60px)',
    padding: '32px',
    backgroundColor: '#fff',
    color: '#000',
  },
  rootDark: {
    position: 'relative',
    width: '100%',
    height: 'calc(100vh - 60px)',
    padding: '32px',
    backgroundColor: '#000',
    color: '#fff',
  },
}));

const Home = () => {
  const classes = useStyles();

  const { colorMode } = useColorMode();
  return (
    <Grid className={colorMode === 'light' ? classes.root : classes.rootDark} id="home" container>
      Page items part
    </Grid>
  );
};

export default Home;
