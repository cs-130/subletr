import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const Container = styled('div')({
  display: 'flex',
  width: '100%',
  flexDirection: 'row', // main row
});

const MainImageSection = styled('div')({
  width: '50%',
  marginRight: '.45rem'
});

const RightSection = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  width: '50%',
  gap: '.45rem', 
});

const Column = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
  gap: '.45rem', 
});

const MainImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '15px',
});

const SmallImage = styled('img')({
  width: '100%', // full width of parent
  height: '50%',
  objectFit: 'cover',
  borderRadius: '15px',


});

const SmallImage2 = styled('img')({
  width: '100%', // full width of parent
  height: '60%',
  objectFit: 'cover',
  borderRadius: '15px',


});

const Quote = styled(Paper)({
  padding: '1rem',
  height: '33%', // height to fit content
  borderRadius: '15px',

});

const ImageQuoteCarousel = ({ quotes, images }) => {
  return (
    <Container>
      <MainImageSection>
        <MainImage src={images[0]} alt="Main" />
      </MainImageSection>
      <RightSection>
        <Column>
          {/* First column for two images */}
          <SmallImage src={images[1]} alt="Secondary" />
          <SmallImage src={images[2]} alt="Tertiary" />
        </Column>
        <Column>
          {/* Second column for quotes and one image */}
          {/* <Quote elevation={3}>
            <Typography variant="body1">{quotes[0].text}</Typography>
            <Typography variant="caption">{quotes[0].author}</Typography>
          </Quote>
          <Quote elevation={3}>
            <Typography variant="body1">{quotes[1].text}</Typography>
            <Typography variant="caption">{quotes[1].author}</Typography>
          </Quote> */}
          <SmallImage src={images[3]} alt="Quaternary" />

        </Column>
      </RightSection>
    </Container>
  );
};

export default ImageQuoteCarousel;
