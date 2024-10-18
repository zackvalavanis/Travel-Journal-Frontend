import './Header.css';
import { Link } from 'react-router-dom';
import React, { useContext, useState, useRef, useEffect } from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { LogoutLink } from './LogoutLink'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

export function Header() {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const navigate = useNavigate();
  const { currentUser, isLoggedIn, logout} = useContext(AuthContext);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleListKeyDown = (event) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  };

  const aboutMe = isLoggedIn ? (
      <MenuItem onClick={ () => {handleClose; navigate('/AboutMe');}}>About Me</MenuItem>
  ) : null;

  const logoutPage = isLoggedIn ? (
    <div>
      <LogoutLink>Logout</LogoutLink>
    </div>
  ) : null;

  // Return focus to the button when transitioning from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  return (
    <header>
      <div className='header-left'>
        {isLoggedIn ? <>Welcome, {currentUser.name}</> : <>Please Log In </>}
      </div>
      <div className='header-center'>
        <div className='link-container'>
          <Link to='/'>Home</Link>
        </div>
        <div className='link-container'>
          <Link to='/create'>Post</Link>
        </div>
      </div>
      <div>
      <Button
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? 'composition-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            Dashboard
          </Button>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-start"
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom',
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      onKeyDown={handleListKeyDown}
                    >
                      <div>
                      {aboutMe}
                      </div>
                      <MenuItem onClick={ () => {handleClose; navigate('/SignupPage');}}>Sign Up
                      </MenuItem>
                      <MenuItem onClick={ () => {handleClose; navigate('/LoginPage');}}>Login
                      </MenuItem>
                      <MenuItem onClick={ () => {handleClose}}>
                      {logoutPage}
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
      </div>
    </header>
  )
}

