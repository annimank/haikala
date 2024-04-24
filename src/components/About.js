import React from "react";
import { Box, Typography, styled, useTheme, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

function About() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const MainBox = styled(Box)({
        display: "flex",
        flexDirection: "column",
    });

    const LogoBox = styled(Box)({
        marginBottom: '3.125rem',
    });

    const LogoLink = styled(Link)({
        display: 'block',
        margin: '0 auto',
        width: '80%',
        textAlign: 'center',
        height: 'auto',
    });

    const ContentBox = styled(Box)({
        marginBottom: '3.125rem',
        display: "flex",
        flexDirection: isMobile ? 'column' : 'row',
    });

    const Content = styled(Box)({
        flex: 1,
        maxWidth: '100%',
        height: 'auto',
        padding: '0px',
    });

    const TextBox = styled(Box)({
        padding: '1.25rem',
    });

    const Text = styled(Typography)({
        fontFamily: 'Roboto Condensed, sans-serif',
        fontSize: '1.125rem',
        fontOpticalSizing: 'auto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        color: theme.palette.secondary.contrastText,
    });

    const Img = styled('img')({
        maxWidth: '100%',
        height: 'auto',
        padding: isMobile ? '0px' : '0.9375rem',
    });

    return (
        <MainBox>
            <LogoBox>
                {isMobile && (
                    <LogoLink to="/Home">
                        <img src="../assets/ogol.svg" alt="Logo" />
                    </LogoLink>
                )}
            </LogoBox>
            <ContentBox>
                <Content>
                    <TextBox>
                        <Text>
                            Unsettling Company was founded in Helsinki in the summer of 2023. We create art and content in multiple formats and styles. 
                        </Text>
                    </TextBox>
                    <TextBox>
                        <Text>
                            Unsettling Company makes art that's just a little unsettling. We want to awaken emotions by creating exciting content and unique experiences.
                        </Text>
                    </TextBox>
                    <TextBox>
                        <Text>
                            Founded on the belief that art should unsettle, inspire and captivate, we invite the viewer to celebrate the unconventional and the thought-provoking.
                        </Text>
                    </TextBox>
                    <TextBox>
                        <Text>
                            We are here to make an impact. Do you dare join us?
                        </Text>
                    </TextBox>
                </Content>
                <Content>
                    <Img src="../assets/bee.png" alt="Bee" />
                </Content>
            </ContentBox>
        </MainBox>
    )
}

export default About;
