import React, { useState } from 'react';
import { AppBar, Tabs, Tab, Box, styled, useTheme, useMediaQuery } from "@mui/material";
import { Outlet, Link } from 'react-router-dom';

function Menu() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const StyledTab = styled(Tab)({
    textTransform: 'none',
    fontWeight: 'bold',
    color: theme.palette.secondary.main,
    fontSize: isMobile ? '1.25rem' : '1.625rem',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
    '&.Mui-selected': {
      color: theme.palette.secondary.main,
    },
  });

  const StyledAppBar = styled(AppBar)({
    backgroundColor: theme.palette.background.default,
  });

  const [value, setValue] = useState(0);

  const handleChange = (e, val) => {
    setValue(val);
  }

  return (
    <Box>
      <StyledAppBar position='static' elevation={0}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant='fullWidth'
          indicatorColor="transparent"
          TabIndicatorProps={{ hidden: true }}
          sx={{
            flexGrow: 1,
            textAlign: 'center',
            '& .MuiTabs-indicator': {
              backgroundColor: 'transparent',
            },
          }}
          textColor='inherit'
        >
          {!isMobile && (
            <StyledTab sx={{ flexGrow: 3 }} component={Link} to='/Home' icon={<img src="../assets/ogol.svg" alt="Logo" style={{ maxWidth: '60%', height: 'auto' }} />} />
          )}
          <StyledTab sx={{ flexGrow: 1 }} label='About' component={Link} to='/About' />
          <StyledTab sx={{ flexGrow: 1 }} label='Art' component={Link} to='/Art' />
          <StyledTab sx={{ flexGrow: 1 }} label='Contact' component={Link} to='/Contact' />
        </Tabs>
      </StyledAppBar>
      <Outlet />
    </Box>
  )
}

export default Menu;
