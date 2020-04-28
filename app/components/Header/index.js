import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
// import { FormattedMessage } from 'react-intl';
import { requestLogout } from 'containers/LoginPage/actions';
import { makeSelectIsAuthUser } from 'containers/LoginPage/selectors';
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

function Header({ isAuthUser, onRequestLogout }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = evt => {
    setAnchorEl(evt.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    onRequestLogout();
  };

  const history = useHistory();
  const location = useLocation();
  const isInLoginPage = location.pathname === '/login';

  const authUserSection = (
    <>
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
        <MenuItem style={{ width: '222px' }} onClick={handleLogout}>
          Logout
        </MenuItem>
      </Menu>
    </>
  );

  const guestSection = isInLoginPage ? null : (
    <>
      <Button
        color="secondary"
        onClick={() => history.push('/register')}
        style={{ marginRight: '8px' }}
      >
        Register
      </Button>
      <Button onClick={() => history.push('/login')}>Login</Button>
    </>
  );

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
          {isAuthUser ? authUserSection : guestSection}
        </div>
      </StyledHeader>
    </Wrapper>
  );
}

Header.propTypes = {
  isAuthUser: PropTypes.bool,
  onRequestLogout: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isAuthUser: makeSelectIsAuthUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    onRequestLogout: () => dispatch(requestLogout()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
