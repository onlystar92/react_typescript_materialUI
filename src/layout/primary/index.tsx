import React from 'react';
import PropTypes from 'prop-types';

// material ui core components
import { Box, Grid } from '@material-ui/core';

// customized components
// import Navbar from 'components/Navbar/Navbar';
import Header from 'components/Header/Header';
import Footer from 'assets/images/footerImg';

// styles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  contentWrap: {
    height: 'auto',
    minHeight: '100%',
  },
  container: {
    height: '100%',
    paddingTop: '60px',
    // paddingLeft: '60px',
    background: '#F5F5F5',
  },
  footer: {
    position: 'fixed',
    width: '100%',
    bottom: 0,
    height: '60px',
  },
}));

type PrimaryLayoutProps = {
  children: React.ReactNode;
};

const PrimaryLayout = ({ children }: PrimaryLayoutProps) => {
  const classes = useStyles();

  return (
    <Grid className={classes.contentWrap}>
      <Header />
      <Grid className={classes.container}>{children}</Grid>
      <Box className={classes.footer}>
        <Footer />
      </Box>
    </Grid>
  );
};

PrimaryLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PrimaryLayout;
