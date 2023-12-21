import React, { useState } from 'react';
import Photos from './Photos/Photos';
import styled from 'styled-components';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import './galleryStyle.css';

const ImageGalleryRes = () => {
  const [index, setIndex] = useState(-1);
  return (
    <Section>
      <PhotoAlbum
        photos={Photos}
        layout='columns'
        targetRowHeight={150}
        onClick={({ index }) => setIndex(index)}
        spacing={15}
        columns={containerWidth => {
          if (containerWidth < 400) return 1;
          if (containerWidth < 800) return 2;
          if (containerWidth < 1000) return 3;
          return 4;
        }}
      />

      <Lightbox
        slides={Photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Thumbnails]}
      />
    </Section>
  );
};

export default ImageGalleryRes;

const Section = styled.section`
  padding: 2rem 0;

  .gallery_container {
    padding-top: 3rem;
    padding-right: 0;
    overflow: hidden;
  }
`;
