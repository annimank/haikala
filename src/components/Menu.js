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
    fontSize: '24px',
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
            <StyledTab sx={{ flexGrow: 5 }} component={Link} to='/Home' icon={<img src="../assets/ogol.svg" alt="Logo" style={{ maxWidth: isMobile ? '60%' : '80%', height: 'auto' }} />} />
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
