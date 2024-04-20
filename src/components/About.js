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

    const LogoBox = styled(Box) ({
        marginBottom: '50px',
    });

    const LogoLink = styled(Link)({
        display: 'block',
        margin: '0 auto',
        width: '90%',
        textAlign: 'center',
        height: 'auto',
    });

    const ContentBox = styled(Box)({
        marginBottom: '50px',
        display: "flex", 
        flexDirection: isMobile ? 'column' : 'row',
    });

    const Content = styled(Box) ({
        flex: 1,
        maxWidth: '100%',
        height: 'auto',
        padding: '0px',
    });

    const TextBox = styled(Box)({
        padding: '15px',
    });

    const Text = styled(Typography)({
        fontFamily: 'Roboto Condensed, sans-serif',
        fontSize: '18px',
        fontOpticalSizing: 'auto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        color: theme.palette.secondary.contrastText,
    });

    const Img = styled('img')({
        maxWidth: '100%', 
        height: 'auto', 
        padding: isMobile ? '0px' : '15px',
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
                            Unsettling Company was founded in the summer of 2023 by Nelli Pöyry and Anni Mankki in Helsinki.
                        </Text>
                    </TextBox>
                    <TextBox>
                        <Text>
                            At Unsettling Company, we celebrate the avant-garde, the unconventional, and the thought-provoking. As a contemporary art company, we thrive on pushing boundaries and challenging the status quo. Our mission is to redefine the notion of art, igniting conversations, and evoking emotions that linger long after the encounter.
                        </Text>
                    </TextBox>
                    <TextBox>
                        <Text>
                            Founded on the belief that art should unsettle, inspire, and captivate, we curate a diverse collection that reflects the dynamism of today's artistic landscape. From abstract expressionism to digital innovation, our repertoire spans across mediums, inviting viewers to immerse themselves in a realm of boundless creativity.
                        </Text>
                    </TextBox>
                    <TextBox>
                        <Text>
                            At the heart of Unsettling Company lies a commitment to fostering emerging talents and amplifying underrepresented voices. We serve as a platform for artists who dare to defy convention, providing them with the visibility and support needed to share their distinct perspectives with the world.
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
