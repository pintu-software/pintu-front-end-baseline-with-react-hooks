import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { FormattedMessage } from 'react-intl';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExpandMore from '@material-ui/icons/ExpandMore';
// import messages from './messages';
import Logo from './assets/logo.png';

const Wrapper = styled.div`
  display: block;
  width: 100%;
  height: 60px;
  position: sticky;
`;

const StyledHeader = styled.header`
  display: flex;
  height: inherit;
  width: 100%;
  margin: 0;
  padding: 0;
  background: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(48, 82, 120, 0.03);
  padding-left: 16px;
  padding-right: 16px;

  @media (min-width: 960px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = evt => {
    setAnchorEl(evt.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Wrapper>
      <StyledHeader>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/">
            <img
              src={Logo}
              alt="Pintu - Doorway to solution"
              width="36"
              height="36"
            />
          </Link>
        </div>
        <div
          style={{
            display: 'flex',
            flex: 1,
            alignItems: 'center',
          }}
        >
          {/* <p>Dashboard</p>
          <p>Budgets</p> */}
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            style={{ backgroundColor: 'transparent', color: 'black' }}
          >
            <AccountCircle fontSize="large" />
            <p style={{ margin: '0 7px' }}>Test User</p>
            <ExpandMore />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            elevation={0}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <MenuItem style={{ width: '222px' }} onClick={handleClose}>
              Logout
            </MenuItem>
          </Menu>
        </div>
      </StyledHeader>
    </Wrapper>
  );
}

export default Header;
