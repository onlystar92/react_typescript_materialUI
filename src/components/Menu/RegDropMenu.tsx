import React from 'react';

// material ui core components
import { Box, Button, MenuItem, Menu } from '@material-ui/core';

// material ui core icons
// import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDown from 'assets/images/arrowDown';

// styles
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(() => ({
  Button: {
    minWidth: '85px',
    height: '32px',
    marginTop: '16px',
    paddingLeft: '0px',
    justifyContent: 'space-between',
    textTransform: 'none',
    color: 'rgba(0,0,0,0.54)',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '19px',
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '0.15px',
    textShadow: '0px 4px 4px #999',
    '& .MuiSvgIcon-root': {
      filter: 'drop-shadow(0px 4px 2px #999)',
    },
  },
  paper: {
    display: 'flex',
    borderRadius: 4,
    marginTop: 0,
    minWidth: '92px !important',
    boxShadow: '0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
  },
  list: {
    '& li': {
      fontFamily: 'Roboto',
      fontWeight: 400,
      fontStyle: 'normal',
      fontSize: '16px',
      lineHeight: '24px',
      letterSpacing: '0.15px',
    },
    '& li:hover li.Mui-selected li.Mui-selected:hover': {
      background: '#F2F7FB',
    },
  },
}));

type SelectedItemsProps = {
  id: number;
  value: string;
};
type RegDropMenuProps = {
  selectedItems: SelectedItemsProps[];
};
const RegDropMenu = (props: RegDropMenuProps) => {
  const classes = useStyles();
  const { selectedItems } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selected, setSelected] = React.useState(selectedItems[0]);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (item: SelectedItemsProps) => {
    if (item.id !== -1) {
      setSelected(selected => ({ ...selected, id: Number(item.id) }));
      setSelected(selected => ({ ...selected, value: item.value }));
    }
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button
        aria-label="more"
        aria-controls="drop-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.Button}
      >
        <ArrowDown />
        {selected.value}
      </Button>
      <Menu
        id="drop-menu"
        keepMounted
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={() => handleClose({ id: -1, value: '' })}
        anchorEl={anchorEl}
      >
        {selectedItems.map((item, index) => (
          <MenuItem key={index} selected={item === selectedItems[0]} onClick={() => handleClose(item)}>
            {item.value}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default RegDropMenu;
