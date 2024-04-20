
import React, { useState } from 'react';
import { AppBar, Tabs, Tab, Box } from "@mui/material";
import { Outlet, Link } from 'react-router-dom';

function Menu() {
    //const theme = useTheme(); // Access the theme object

    const [value, setValue] = useState(0);

    const handleChange = (e, val) => {
        setValue(val);
    }

    return (
        <Box>
            <AppBar position='static' elevation={0}>
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
                            backgroundColor: 'transparent', // Indicator color
                        },
                    }}
                    textColor='inherit'
                >

                    <Tab sx={{ flexGrow: 5 }} component={Link} to='/Home' icon={<img src="../assets/ogol.svg" alt="Logo" style={{ maxWidth: '40%', height: 'auto' }} />} />
                    <Tab sx={{ flexGrow: 1 }} label='About' component={Link} to='/About' />
                    <Tab sx={{ flexGrow: 1 }} label='Art' component={Link} to='/Art' />
                    <Tab sx={{ flexGrow: 1 }} label='Contact' component={Link} to='/Contact' />
                </Tabs>
            </AppBar>
            <Outlet />
        </Box>
    )
}

export default Menu;
