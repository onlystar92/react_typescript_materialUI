import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// material ui core components
import { Box, Grid, IconButton, Tab, Tabs, Typography, Divider, Hidden } from '@material-ui/core';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
// customized icons
import GroupIcon from 'assets/images/group.svg';
import RegDropMenu from 'components/Menu/RegDropMenu';
import NavbarMenu from 'components/Menu/NavbarMenu';
import InvertModeOutline from 'assets/images/invertModeOutline';
import Vector from 'assets/images/vector';
import selectedBoardItems from 'assets/data/SelectedBoardItemsData.json';
import selectedMenuItems from 'assets/data/SelectedMenubarData.json';

// styles
import { makeStyles } from '@material-ui/core/styles';

// import context variables
import { useColorMode } from 'hook/context/ColorModeContext';

type TabPanelProps = {
  children: string;
  value: number;
  index: number;
};

const useStyles = makeStyles(() => ({
  root: {
    position: 'fixed',
    height: '60px',
    right: '0px',
    background: '#ffff09',
    boxShadow: '0 4px 4px 0 rgb(0 0 0 / 25%)',
    zIndex: 1220,
  },
  logo: {
    margin: '10px 10px 10px 10px',
    height: '45px',
    width: '50px',
  },
  tabRoot: {
    height: '50px',
    // width: '823px',
    '& .MuiButtonBase-root': {
      height: '50px',
    },
    '& .MuiTab-textColorPrimary': {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '15px',
      lineHeight: '26px',
      letterSpacing: '0.46px',
      textTransform: 'uppercase',
      color: 'rgb(0 0 0 / 54%)',
    },
    '& .MuiTab-textColorPrimary.Mui-selected': {
      color: '#000',
    },
    '& .MuiTabs-indicator': {
      backgroundColor: '#000',
    },
    '& .MuiTab-root': {
      // maxWidth: 100,
      minWidth: 100,
    },
  },
  iconContent: {
    paddingRight: '25px',
  },
  btnAvatar: {
    background: 'transparent',
    height: '48px',
    width: '48px',
  },
  userContent: {
    display: 'flex',
    alignItems: 'center',
  },
  divider: {
    height: 40,
    margin: 10,
    marginBottom: 10,
    marginRight: 15,
  },
}));

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <Grid
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Grid>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const a11yProps = (index: number) => {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
};

const StyledMenu = withStyles({
  paper: {
    border: '2px solid #353535',
    borderRadius: 12,
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    {...props}
  />
));

const StyledMenuDark = withStyles({
  paper: {
    border: '2px solid #353535',
    borderRadius: 12,
    backgroundColor: '#000',
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(() => ({
  root: {
    '&:focus': {
      backgroundColor: '#353535',
      '& .MuiListItemIcon-root': {
        color: '#ffff09',
      },
      '& .MuiListItemText-primary': {
        color: '#fff',
      },
    },
  },
}))(MenuItem);

const StyledMenuDarkItem = withStyles(() => ({
  root: {
    '&:focus': {
      backgroundColor: '#fff',
      '& .MuiListItemIcon-root': {
        color: '#ffff09',
      },
      '& .MuiListItemText-primary': {
        color: '#000',
      },
    },
  },
}))(MenuItem);

const Header = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const { colorMode, setColorMode } = useColorMode();

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeColorMode = () => {
    if (colorMode === 'dark') {
      if (setColorMode !== undefined) setColorMode('light');
    } else {
      if (setColorMode !== undefined) setColorMode('dark');
    }
  };

  return (
    <Grid className={classes.root} justify="space-between" id="header" container>
      <Box display="flex">
        <img src={GroupIcon} className={classes.logo} />
        <Divider orientation="vertical" flexItem className={classes.divider} />
        <RegDropMenu selectedItems={selectedBoardItems} />
      </Box>
      <Box display="flex" alignItems="center">
        <Hidden smDown>
          <Tabs
            value={value}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
            className={classes.tabRoot}
          >
            <Tab label="HOME" {...a11yProps(0)} />
            <Tab label="DISCOVER" {...a11yProps(1)} />
            <Tab label="LIVE" {...a11yProps(2)} />
            <Tab label="PROFILES" {...a11yProps(3)} />
            <Tab label="INSIGHTS" {...a11yProps(4)} />
          </Tabs>
        </Hidden>
        <Hidden mdUp>
          <NavbarMenu selectedItems={selectedMenuItems} />
        </Hidden>
        <Divider orientation="vertical" flexItem className={classes.divider} />
        <Grid onClick={handleClick} className={classes.userContent}>
          <IconButton className={classes.btnAvatar}>
            <PersonOutlineIcon />
          </IconButton>
          <Typography component="div"> Name ... </Typography>
        </Grid>
        {colorMode === 'light' ? (
          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <StyledMenuItem onClick={handleChangeColorMode}>
              <ListItemIcon>
                <InvertModeOutline />
              </ListItemIcon>
              <ListItemText primary="Dark mode" />
            </StyledMenuItem>
            <StyledMenuItem onClick={handleClose}>
              <ListItemIcon>
                <Vector />
              </ListItemIcon>
              <ListItemText primary="Log out" />
            </StyledMenuItem>
          </StyledMenu>
        ) : (
          <StyledMenuDark
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <StyledMenuDarkItem onClick={handleChangeColorMode}>
              <ListItemIcon>
                <InvertModeOutline />
              </ListItemIcon>
              <ListItemText primary="Dark mode" />
            </StyledMenuDarkItem>
            <StyledMenuDarkItem onClick={handleClose}>
              <ListItemIcon>
                <Vector />
              </ListItemIcon>
              <ListItemText primary="Log out" />
            </StyledMenuDarkItem>
          </StyledMenuDark>
        )}
      </Box>
    </Grid>
  );
};

export default Header;
