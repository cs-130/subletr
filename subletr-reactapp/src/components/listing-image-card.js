import React from 'react';
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

/**
 * The ImageQuoteCarousel component.
 * @function
 * @name ImageQuoteCarousel
 * @description The component that displays the image quote carousel for the listing page.
 * @param {object} props - The component props.
 * @param {Array<string>} props.images - The array of image URLs.
 * @returns {JSX.Element} The JSX element representing the ImageQuoteCarousel component.
 */
const ImageQuoteCarousel = ({ images }) => {
  return (
    <Container>
      <MainImageSection>
        <MainImage src={images[0]} alt="Main" />
      </MainImageSection>
      <RightSection>
        <Column>
          {/* First column for two images */}
          {images.length > 1 ? (
            <SmallImage src={images[1]} alt="Secondary" />
          ) : null}
          {images.length > 2 ? (
            <SmallImage src={images[2]} alt="Tertiary" />
          ) : null}
        </Column>
        <Column>
          {images.length > 3 ? (
            <SmallImage src={images[3]} alt="Quaternary" />
          ) : null}
        </Column>
      </RightSection>
    </Container>
  );
};

export default ImageQuoteCarousel;
