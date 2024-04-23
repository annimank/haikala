import React from 'react';
import { Box, styled, useTheme, useMediaQuery } from '@mui/material';
import { Link } from "react-router-dom";

function Home() {
    const theme = useTheme(); 
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const MainBox = styled(Box)({
        display: "flex",
        flexDirection: "column",
        marginBottom: '2.5rem',
    });

    const LogoBox = styled(Box) ({
        marginBottom: '1.25rem',
    });

    const LogoLink = styled(Link)({
        display: 'block',
        margin: '0 auto',
        width: '80%',
        textAlign: 'center',
        height: 'auto',
    });

    const HomeImagesBox = styled(Box) ({
        padding: '0px',
        display: "flex", 
        flexDirection: isMobile ? 'column' : 'row',
    });

    const HomeImgBox = styled(Box)({
        padding: '0px',
    });

    const HomeImg = styled('img')({
        maxWidth: '100%',
        height: 'auto',
        padding: isMobile ? '0px' : '0.9375rem', 
    });

    return (
        <MainBox display="flex" flexDirection="column">
            <LogoBox>
                {isMobile && (
                    <LogoLink to="/Home">
                        <img src="../assets/ogol.svg" alt="Logo" />
                    </LogoLink>
                )}
            </LogoBox>
            <HomeImagesBox>
                <HomeImgBox flex="1">
                    <HomeImg src="../assets/tree.png" alt="Croaking Tree" />
                </HomeImgBox>
                <HomeImgBox flex="1">
                    <HomeImg src="../assets/isbar.png" alt="Ice Bear" />
                </HomeImgBox>
            </HomeImagesBox>
        </MainBox>
    );
}

export default Home;

