import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, styled, useTheme, useMediaQuery } from '@mui/material';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';
import { getStorage, ref as storageRef, getDownloadURL } from 'firebase/storage';
import { Link } from 'react-router-dom';
import config from '../Config';

async function getImageURL(gsURL) {
    const storage = getStorage(app);
    const imageRef = storageRef(storage, gsURL);
    const downloadURL = await getDownloadURL(imageRef);
    return downloadURL;
}

const app = initializeApp(config);
const database = getDatabase(app);

function Art() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    //const isLarge = useMediaQuery(theme.breakpoints.down('lg'));

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

    const ArtCard = styled(Card)({
        width: isMobile ? '100%' : '80%',
        marginBottom: '16px',
        backgroundColor: theme.palette.background.default,
    });
    
    const ArtCardContent = styled(CardContent)({
        display: 'flex',
        flex: 1,
        flexDirection: isMobile ? 'column' : 'row',
    });
    
    const InfoDiv = styled('div')({
        display: 'flex',
        flex: isMobile ? 1 : 1,
        flexDirection: 'column',
        marginTop: isMobile ? '0px' : '20%',
    });
    
    const ImgDiv = styled('div')({
        display: 'flex',
        flex: isMobile ? 3 : 1,
        alignContent: 'center',
    });
    
    const Img = styled('img')({
        maxWidth: '100%',
        height: 'auto',
    });

    const [artData, setArtData] = useState(null);

    useEffect(() => {
        const artRef = ref(database, 'art');
        onValue(artRef, async (snapshot) => {
            const data = snapshot.val();
            const artworksWithHTTPSURLs = await Promise.all(Object.keys(data).map(async (artId) => {
                const imageUrl = data[artId].imgURL;
                const httpsURL = imageUrl.startsWith('gs://') ? await getImageURL(imageUrl) : imageUrl;
                return { ...data[artId], imgURL: httpsURL };
            }));

            setArtData(artworksWithHTTPSURLs);
        });
    }, []);

    const sortedArtData = artData ? [...artData].sort((a, b) => new Date(b.date) - new Date(a.date)) : [];

    return (
        <Box>
            <LogoBox>
                {isMobile && (
                    <LogoLink to="/Home">
                        <img src="../assets/ogol.svg" alt="Logo" />
                    </LogoLink>
                )}
            </LogoBox>
            <Box display="flex" flexDirection="column" alignItems="center" sx={{ paddingTop: '60px', marginBottom: '100px' }}>
                {sortedArtData.map((artwork) => (
                    <ArtCard key={artwork.id} elevation={0}>
                        <ArtCardContent>
                            <InfoDiv>
                                <Typography variant="h6">{artwork.name}</Typography>
                                <Typography variant="body1">{artwork.date.slice(0, 4)}</Typography>
                                <Typography variant="body1">{artwork.medium}</Typography>
                            </InfoDiv>
                            <ImgDiv>
                                <Img src={artwork.imgURL} alt={artwork.name} />
                            </ImgDiv>
                        </ArtCardContent>
                    </ArtCard>
                ))}
            </Box>
        </Box>
    );
}

export default Art;
