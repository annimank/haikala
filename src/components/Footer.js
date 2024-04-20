import React from 'react';
import { Grid, Typography, styled, useTheme, useMediaQuery } from '@mui/material';

function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const ContainerStyle = styled('div')({
    minHeight: '20vh',
    display: 'flex',
    flexDirection: 'column',
  });

  const ContentStyle = styled('div')({
    flex: '1',
  });

  const FooterStyle = styled('footer') ({
    backgroundColor: theme.palette.secondary.contrastText,
    color: theme.palette.background.secondary,
    textAlign: 'center',
    padding: '10px',
    width: '100%',
  });

  const FooterText = styled('p')({
    color: 'inherit',
    fontSize: isMobile ? '8px' : '10px', // Adjust font size for mobile
  });

  const LinkStyle = styled('a')({
    textDecoration: 'none',
    color: 'inherit',
    transition: 'color 0.3s',
  });

  const handleLinkClick = (e) => {
    e.target.style.color = theme.palette.background.default;
    setTimeout(() => {
      e.target.style.color = 'inherit';
    }, 300);
  };

  return (
    <ContainerStyle>
      <ContentStyle />
      <FooterStyle>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={15} sm={6}>
            <p>unsettlingcompany@gmail.com</p>
          </Grid>
          <Grid item xs={3} sm={2}>
            <Typography>
              <LinkStyle
                href="https://www.instagram.com/unsettlingcompany/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
              >
                INSTAGRAM
              </LinkStyle>
            </Typography>
          </Grid>
          <Grid item xs={3} sm={2}>
            <Typography>
              <LinkStyle
                href="https://www.tiktok.com/@unsettlingcompany"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
              >
                TIKTOK
              </LinkStyle>
            </Typography>
          </Grid>
          <Grid item xs={3} sm={2}>
            <Typography>
              <LinkStyle
                href="https://www.linkedin.com/company/unsettling-company/about/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
              >
                LINKEDIN
              </LinkStyle>
            </Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent="left" alignItems="left">
          <Grid item xs={15} sm={6}>
            <FooterText>© UNSETTLING COMPANY 2024</FooterText>
          </Grid>
        </Grid>
      </FooterStyle>
    </ContainerStyle>
  );
}

export default Footer;
